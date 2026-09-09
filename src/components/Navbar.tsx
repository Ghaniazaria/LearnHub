import React, { useState, useRef, useEffect } from 'react';
import { Search, PanelLeft, Settings2, Grid, ChevronDown, Check, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Breadcrumb } from './Breadcrumb';
import { ThemeMode, Module } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onOpenSidebar: () => void;
  onOpenManage: () => void;
  onStartReading: () => void;
  onNavigateCatalog: () => void;
  onNavigateModule: () => void;
  onSwitchModule: (moduleId: string) => void;
  modules: Module[];
  currentModule: Module;
  currentView: 'catalog' | 'module_overview' | 'reading';
  chapterNumber?: string;
  chapterTitle?: string;
  lessonTitle?: string;
  percentage: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenSearch,
  onOpenSidebar,
  onOpenManage,
  onStartReading,
  onNavigateCatalog,
  onNavigateModule,
  onSwitchModule,
  modules,
  currentModule,
  currentView,
  chapterNumber,
  chapterTitle,
  lessonTitle,
  percentage,
}) => {
  const [isModuleDropdownOpen, setIsModuleDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsModuleDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getModuleShortName = (id: string, fallback: string) => {
    switch (id) {
      case 'jaringan-komputer':
        return 'Jaringan Komputer';
      case 'bahasa-inggris':
        return 'Bahasa Inggris';
      case 'matematika':
        return 'Matematika';
      default:
        return fallback;
    }
  };

  return (
    <header
      id="learnhub-navbar"
      className="sticky top-0 z-40 h-14 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xs border-b border-neutral-200 dark:border-neutral-800 transition-colors"
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Left Section: Logo & Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {currentView === 'reading' && (
            <button
              id="btn-navbar-toggle-sidebar"
              onClick={onOpenSidebar}
              className="p-1.5 -ml-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white cursor-pointer"
              title="Buka / Tutup Navigasi Materi"
              aria-label="Toggle Sidebar"
            >
              <PanelLeft className="w-4 h-4" />
            </button>
          )}

          <button
            id="btn-navbar-logo"
            onClick={onNavigateCatalog}
            className="flex items-center gap-2 group cursor-pointer"
            title="Kembali ke Beranda Semua Modul"
          >
            <span className="font-mono text-sm tracking-widest font-bold text-neutral-950 dark:text-white uppercase">
              LEARNHUB
            </span>
          </button>

          {/* Module Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="btn-navbar-module-dropdown"
              onClick={() => setIsModuleDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono tracking-wider uppercase border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
              title="Ganti Subjek Pembelajaran"
            >
              <span className="max-w-[130px] sm:max-w-none truncate">
                {currentView === 'catalog'
                  ? 'Katalog Modul'
                  : getModuleShortName(currentModule.id, currentModule.title)}
              </span>
              <ChevronDown className="w-3 h-3 text-neutral-400 shrink-0" />
            </button>

            {isModuleDropdownOpen && (
              <div
                id="navbar-module-dropdown-menu"
                className="absolute left-0 mt-1 w-64 bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 shadow-xl z-50 py-1 font-sans animate-in fade-in zoom-in-95 duration-100"
              >
                <div className="px-3 py-1.5 border-b border-neutral-100 dark:border-neutral-800 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Pilih Subjek Pembelajaran
                </div>

                <button
                  id="dropdown-opt-catalog"
                  onClick={() => {
                    onNavigateCatalog();
                    setIsModuleDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    currentView === 'catalog'
                      ? 'bg-neutral-100 dark:bg-neutral-800/80 font-bold text-neutral-900 dark:text-white'
                      : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/40 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Grid className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Semua Modul (Halaman Utama)</span>
                  </div>
                  {currentView === 'catalog' && <Check className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />}
                </button>

                <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-1" />

                {modules.map((m) => {
                  const isCurrent = currentView !== 'catalog' && currentModule.id === m.id;
                  return (
                    <button
                      key={m.id}
                      id={`dropdown-opt-${m.id}`}
                      onClick={() => {
                        onSwitchModule(m.id);
                        setIsModuleDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        isCurrent
                          ? 'bg-neutral-100 dark:bg-neutral-800/80 font-bold text-neutral-900 dark:text-white'
                          : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/40 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-neutral-900 dark:text-white">
                          {getModuleShortName(m.id, m.title)}
                        </div>
                        <div className="font-mono text-[10px] text-neutral-400">
                          {m.chapters.length} Bab · {m.chapters.reduce((acc, c) => acc + c.lessons.length, 0)} Materi
                        </div>
                      </div>
                      {isCurrent && <Check className="w-3.5 h-3.5 text-neutral-900 dark:text-white shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Center Section: Breadcrumb */}
        <div className="hidden lg:flex flex-1 min-w-0 justify-center px-4">
          {currentView === 'reading' ? (
            <Breadcrumb
              moduleTitle={getModuleShortName(currentModule.id, currentModule.title)}
              chapterNumber={chapterNumber}
              chapterTitle={chapterTitle}
              lessonTitle={lessonTitle}
              onNavigateCatalog={onNavigateCatalog}
              onNavigateModule={onNavigateModule}
            />
          ) : currentView === 'module_overview' ? (
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <button
                onClick={onNavigateCatalog}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                KATALOG
              </button>
              <span>/</span>
              <span className="text-neutral-900 dark:text-white font-semibold uppercase truncate max-w-[260px]">
                {getModuleShortName(currentModule.id, currentModule.title)}
              </span>
            </div>
          ) : (
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 truncate">
              BAHASA INGGRIS · MATEMATIKA · JARINGAN KOMPUTER
            </span>
          )}
        </div>

        {/* Right Section: Actions matching PDF aesthetic */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Search Trigger */}
          <button
            id="btn-navbar-search"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2 py-1 text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer"
            title="Cari materi (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline font-sans">Cari...</span>
            <kbd className="hidden md:inline text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500 px-1 py-0.2 rounded-xs">
              ⌘K
            </kbd>
          </button>

          {/* Quick Start Reading button on overview */}
          {currentView === 'module_overview' && (
            <button
              id="btn-navbar-start-reading"
              onClick={onStartReading}
              className="hidden sm:inline-block text-xs font-mono tracking-wider uppercase font-semibold text-neutral-900 dark:text-white px-2 py-1 transition-colors cursor-pointer hover:underline"
            >
              Mulai Baca →
            </button>
          )}

          {/* Manage / Admin tool button */}
          <button
            id="btn-navbar-manage"
            onClick={onOpenManage}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
            title="Kelola Konten & Bab"
            aria-label="Kelola Konten"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="minimal" />
        </div>
      </div>
    </header>
  );
};

