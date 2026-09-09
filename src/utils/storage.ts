import { Module, ProgressData, ThemeMode } from '../types';
import {
  DEFAULT_NETWORK_MODULE,
  DEFAULT_ENGLISH_MODULE,
  DEFAULT_MATH_MODULE,
  ALL_DEFAULT_MODULES,
  getDefaultModuleById,
} from '../data/defaultModules';

const STORAGE_KEYS = {
  MODULES_CATALOG: 'learnhub_modules_catalog_v2',
  MODULE_DATA_LEGACY: 'learnhub_module_data_v1',
  PROGRESS: 'learnhub_reading_progress_v1',
  THEME: 'learnhub_theme_v1',
};

export function getStoredModules(): Module[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.MODULES_CATALOG);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Ensure all default module IDs exist (in case user had old catalog)
        const moduleMap = new Map<string, Module>();
        ALL_DEFAULT_MODULES.forEach((def) => moduleMap.set(def.id, def));
        parsed.forEach((m: Module) => {
          if (m && m.id) {
            moduleMap.set(m.id, m);
          }
        });
        return Array.from(moduleMap.values());
      }
    }

    // Check legacy single-module storage
    const legacy = localStorage.getItem(STORAGE_KEYS.MODULE_DATA_LEGACY);
    if (legacy) {
      const parsedLegacy = JSON.parse(legacy);
      if (parsedLegacy && parsedLegacy.chapters && parsedLegacy.chapters.length > 0) {
        return [
          parsedLegacy,
          DEFAULT_ENGLISH_MODULE,
          DEFAULT_MATH_MODULE,
        ];
      }
    }
  } catch (err) {
    console.error('Failed to load saved modules from localStorage:', err);
  }
  return ALL_DEFAULT_MODULES;
}

export function getStoredModule(moduleId?: string): Module {
  const modules = getStoredModules();
  if (moduleId) {
    const match = modules.find((m) => m.id === moduleId);
    if (match) return match;
  }
  return modules[0] || DEFAULT_NETWORK_MODULE;
}

export function getStoredModuleById(moduleId: string): Module | undefined {
  const modules = getStoredModules();
  return modules.find((m) => m.id === moduleId);
}

export function saveStoredModules(modules: Module[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.MODULES_CATALOG, JSON.stringify(modules));
  } catch (err) {
    console.error('Failed to save modules to localStorage:', err);
  }
}


export function saveStoredModule(module: Module): void {
  try {
    const currentModules = getStoredModules();
    const index = currentModules.findIndex((m) => m.id === module.id);
    let updated: Module[];
    if (index >= 0) {
      updated = [...currentModules];
      updated[index] = module;
    } else {
      updated = [...currentModules, module];
    }
    localStorage.setItem(STORAGE_KEYS.MODULES_CATALOG, JSON.stringify(updated));
    // Also save to legacy key if it's the network module
    if (module.id === DEFAULT_NETWORK_MODULE.id) {
      localStorage.setItem(STORAGE_KEYS.MODULE_DATA_LEGACY, JSON.stringify(module));
    }
  } catch (err) {
    console.error('Failed to save module to localStorage:', err);
  }
}

export function resetStoredModule(moduleId?: string): Module {
  try {
    if (!moduleId || moduleId === DEFAULT_NETWORK_MODULE.id) {
      localStorage.removeItem(STORAGE_KEYS.MODULE_DATA_LEGACY);
    }
    const currentModules = getStoredModules();
    const defaultMod = getDefaultModuleById(moduleId || DEFAULT_NETWORK_MODULE.id);
    const updated = currentModules.map((m) => (m.id === defaultMod.id ? defaultMod : m));
    localStorage.setItem(STORAGE_KEYS.MODULES_CATALOG, JSON.stringify(updated));
    return defaultMod;
  } catch (err) {
    console.error('Failed to reset module:', err);
  }
  return getDefaultModuleById(moduleId || DEFAULT_NETWORK_MODULE.id);
}

export function resetAllStoredModules(): Module[] {
  try {
    localStorage.removeItem(STORAGE_KEYS.MODULES_CATALOG);
    localStorage.removeItem(STORAGE_KEYS.MODULE_DATA_LEGACY);
  } catch (err) {
    console.error('Failed to reset all modules:', err);
  }
  return ALL_DEFAULT_MODULES;
}


export function getStoredProgress(): ProgressData {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        completedLessonIds: Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : [],
        lastReadLessonId: parsed.lastReadLessonId,
      };
    }
  } catch (err) {
    console.error('Failed to load reading progress:', err);
  }
  return { completedLessonIds: [] };
}

export function saveStoredProgress(progress: ProgressData): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save reading progress:', err);
  }
}

export function getStoredTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) as ThemeMode | null;
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (err) {
    console.error('Failed to get theme preference:', err);
  }
  return 'light';
}

export function saveStoredTheme(theme: ThemeMode): void {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  } catch (err) {
    console.error('Failed to save theme preference:', err);
  }
}
