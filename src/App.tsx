import React, { useState, useEffect } from 'react';
import { Module, ThemeMode } from './types';
import {
  getStoredModules,
  saveStoredModules,
  resetAllStoredModules,
  getStoredModuleById,
  saveStoredModule,
  resetStoredModule,
  getStoredProgress,
  saveStoredProgress,
  getStoredTheme,
  saveStoredTheme,
} from './utils/storage';
import {
  calculateProgress,
  findLessonContext,
  getAllFlattenedLessons,
} from './utils/navigation';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MobileDrawer } from './components/MobileDrawer';
import { HomePage } from './components/HomePage';
import { ModuleHeader } from './components/ModuleHeader';
import { ChapterList } from './components/ChapterList';
import { ReadingContent } from './components/ReadingContent';
import { SearchDialog } from './components/SearchDialog';
import { ManageModuleModal } from './components/ManageModuleModal';

type ViewMode = 'catalog' | 'module_overview' | 'reading';

export default function App() {
  const [modules, setModules] = useState<Module[]>(() => getStoredModules());
  const [activeModuleId, setActiveModuleId] = useState<string>('jaringan-komputer');
  const [viewMode, setViewMode] = useState<ViewMode>('catalog');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(
    () => getStoredProgress().completedLessonIds
  );
  const [theme, setTheme] = useState<ThemeMode>(() => getStoredTheme());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);

  // Current active module fallback to first module if not found
  const currentModule =
    modules.find((m) => m.id === activeModuleId) || modules[0];

  // Initialize theme on mount
  useEffect(() => {
    saveStoredTheme(theme);
  }, [theme]);

  // Handle global keyboard shortcuts: Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    saveStoredTheme(nextTheme);
  };

  const handleSelectModuleFromCatalog = (moduleId: string) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(null);
    setViewMode('module_overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (moduleId: string, lessonId: string) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(lessonId);
    setViewMode('reading');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Save as last read
    saveStoredProgress({
      completedLessonIds,
      lastReadLessonId: lessonId,
    });
  };

  const handleLessonChangeInReader = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setViewMode('reading');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    saveStoredProgress({
      completedLessonIds,
      lastReadLessonId: lessonId,
    });
  };

  const handleToggleComplete = () => {
    if (!activeLessonId) return;

    let updated: string[];
    if (completedLessonIds.includes(activeLessonId)) {
      updated = completedLessonIds.filter((id) => id !== activeLessonId);
    } else {
      updated = [...completedLessonIds, activeLessonId];
    }

    setCompletedLessonIds(updated);
    saveStoredProgress({
      completedLessonIds: updated,
      lastReadLessonId: activeLessonId,
    });
  };

  const handleStartReadingModule = (moduleId?: string) => {
    const targetModule = moduleId
      ? modules.find((m) => m.id === moduleId) || currentModule
      : currentModule;

    const flat = getAllFlattenedLessons(targetModule);
    if (flat.length > 0) {
      const uncompleted = flat.find((item) => !completedLessonIds.includes(item.lesson.id));
      const target = uncompleted ? uncompleted.lesson.id : flat[0].lesson.id;
      handleSelectLesson(targetModule.id, target);
    }
  };

  const handleSaveModule = (newModule: Module) => {
    const updatedModules = modules.map((m) => (m.id === newModule.id ? newModule : m));
    setModules(updatedModules);
    saveStoredModule(newModule);
  };

  const handleResetCurrentModule = () => {
    const reset = resetStoredModule(currentModule.id);
    const updatedModules = modules.map((m) => (m.id === reset.id ? reset : m));
    setModules(updatedModules);
  };

  // Compute progress for current module
  const { total, completed, percentage } = calculateProgress(
    currentModule,
    completedLessonIds
  );

  // Lesson context if in reading view
  const lessonContext =
    activeLessonId && viewMode === 'reading'
      ? findLessonContext(currentModule, activeLessonId)
      : null;

  return (
    <div
      id="learnhub-root"
      className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-[#121214] dark:text-[#f4f4f5] flex flex-col font-sans transition-colors duration-200"
    >
      {/* Top Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSidebar={() => {
          if (window.innerWidth < 768) {
            setIsMobileDrawerOpen(true);
          } else {
            setIsSidebarOpen((prev) => !prev);
          }
        }}
        onOpenManage={() => setIsManageOpen(true)}
        onStartReading={() => handleStartReadingModule(currentModule.id)}
        onNavigateCatalog={() => {
          setViewMode('catalog');
          setActiveLessonId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateModule={() => {
          setViewMode('module_overview');
          setActiveLessonId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSwitchModule={(moduleId) => {
          setActiveModuleId(moduleId);
          setActiveLessonId(null);
          setViewMode('module_overview');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        modules={modules}
        currentModule={currentModule}
        currentView={viewMode}
        chapterNumber={lessonContext?.current.chapter.number}
        chapterTitle={lessonContext?.current.chapter.title}
        lessonTitle={lessonContext?.current.lesson.title}
        percentage={percentage}
      />

      {/* Main Container Area */}
      <div id="learnhub-layout" className="flex-1 flex w-full">
        {/* Mobile Drawer (Only active when in reading mode) */}
        {viewMode === 'reading' && (
          <MobileDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            module={currentModule}
            activeLessonId={activeLessonId}
            completedLessonIds={completedLessonIds}
            onSelectLesson={(lessonId) => handleLessonChangeInReader(lessonId)}
            onNavigateHome={() => {
              setViewMode('module_overview');
              setActiveLessonId(null);
              setIsMobileDrawerOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateCatalog={() => {
              setViewMode('catalog');
              setActiveLessonId(null);
              setIsMobileDrawerOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            completedCount={completed}
            totalCount={total}
            percentage={percentage}
          />
        )}

        {/* 1. HOME VIEW (Divided sections: Bahasa Inggris, Matematika, Jaringan Komputer) */}
        {viewMode === 'catalog' && (
          <main id="learnhub-home-container" className="flex-1 w-full">
            <HomePage
              modules={modules}
              completedLessonIds={completedLessonIds}
              onSelectModule={handleSelectModuleFromCatalog}
              onSelectLesson={handleSelectLesson}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          </main>
        )}

        {/* 2. MODULE OVERVIEW (Editorial Syllabus View mirroring PDF reference) */}
        {viewMode === 'module_overview' && (
          <main
            id="module-overview-page"
            className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 w-full animate-in fade-in duration-150"
          >
            {/* Quick back to catalog button */}
            <div className="mb-6 flex items-center justify-between">
              <button
                id="btn-back-to-catalog"
                onClick={() => {
                  setViewMode('catalog');
                  setActiveLessonId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-mono tracking-wider uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>←</span>
                <span>Kembali ke Katalog Semua Modul</span>
              </button>

              <span className="text-[11px] font-mono text-neutral-400 uppercase">
                {currentModule.chapters.length} Bab Terstruktur
              </span>
            </div>

            <ModuleHeader
              module={currentModule}
              onStartReading={() => handleStartReadingModule(currentModule.id)}
              completedCount={completed}
              totalCount={total}
              percentage={percentage}
            />

            <ChapterList
              chapters={currentModule.chapters}
              completedLessonIds={completedLessonIds}
              onSelectLesson={(lessonId) => handleSelectLesson(currentModule.id, lessonId)}
            />

            {/* Editorial Module Footer */}
            <footer
              id="editorial-footer"
              className="mt-16 pt-8 pb-12 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div>
                <span>LEARNHUB · MODUL {currentModule.title.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  id="btn-footer-search"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Cari Materi (⌘K)
                </button>
                <span>•</span>
                <button
                  id="btn-footer-manage"
                  onClick={() => setIsManageOpen(true)}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Kelola Bab
                </button>
                <span>•</span>
                <span>{percentage}% Selesai</span>
              </div>
            </footer>
          </main>
        )}

        {/* 3. READING PAGE (Left Sidebar + Focused Article Layout) */}
        {viewMode === 'reading' && activeLessonId && lessonContext && (
          <div
            id="reading-view-layout"
            className="flex-1 flex w-full min-h-[calc(100vh-3.5rem)] animate-in fade-in duration-150"
          >
            {/* Desktop Sticky Sidebar */}
            {isSidebarOpen && (
              <div
                id="desktop-sidebar-wrapper"
                className="hidden md:block w-72 lg:w-80 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)]"
              >
                <Sidebar
                  module={currentModule}
                  activeLessonId={activeLessonId}
                  completedLessonIds={completedLessonIds}
                  onSelectLesson={(lessonId) => handleLessonChangeInReader(lessonId)}
                  onNavigateHome={() => {
                    setViewMode('module_overview');
                    setActiveLessonId(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onNavigateCatalog={() => {
                    setViewMode('catalog');
                    setActiveLessonId(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onCollapseToggle={() => setIsSidebarOpen(false)}
                  completedCount={completed}
                  totalCount={total}
                  percentage={percentage}
                />
              </div>
            )}

            {/* Reading View Center */}
            <main
              id="reading-main-content"
              className="flex-1 min-w-0 bg-[#fafafa] dark:bg-[#09090b]"
            >
              <ReadingContent
                chapter={lessonContext.current.chapter}
                lesson={lessonContext.current.lesson}
                prev={lessonContext.prev}
                next={lessonContext.next}
                isCompleted={completedLessonIds.includes(lessonContext.current.lesson.id)}
                onToggleComplete={handleToggleComplete}
                onNavigateLesson={(lessonId) => handleLessonChangeInReader(lessonId)}
                onBackToOverview={() => {
                  setViewMode('module_overview');
                  setActiveLessonId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </main>
          </div>
        )}
      </div>

      {/* Global Search Dialog (Ctrl/Cmd + K) across all modules */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        modules={modules}
        onSelectLesson={handleSelectLesson}
      />

      {/* Admin / Manage Module Modal */}
      <ManageModuleModal
        isOpen={isManageOpen}
        onClose={() => setIsManageOpen(false)}
        module={currentModule}
        modules={modules}
        onSelectModuleToManage={(id) => setActiveModuleId(id)}
        onSaveModule={handleSaveModule}
        onResetToDefault={handleResetCurrentModule}
      />
    </div>
  );
}

