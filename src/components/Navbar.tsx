import React, { useState, useRef, useEffect } from 'react';
import { Search, PanelLeft, Settings2, Grid, ChevronDown, Check } from 'lucide-react';
import { Module } from '../types';

interface NavbarProps {
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
}

export const Navbar: React.FC<NavbarProps> = ({
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
      className="sticky top-0 z-40 h-14 bg-white/95 backdrop-blur-xs border-b border-neutral-200"
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Left Section: Logo & Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {currentView === 'reading' && (
            <button
              id="btn-navbar-toggle-sidebar"
              onClick={onOpenSidebar}
              className="p-1.5 -ml-1 text-neutral-600 hover:text-neutral-900 cursor-pointer"
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
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span>
            <span className="font-mono text-sm tracking-widest font-bold text-neutral-950 uppercase">
              LEARNHUB
            </span>
          </button>

          {/* Module Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="btn-navbar-module-dropdown"
              onClick={() => setIsModuleDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono tracking-wider uppercase border border-neutral-200 hover:border-neutral-400 text-neutral-800 transition-colors cursor-pointer"
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
                className="absolute left-0 mt-1 w-64 bg-white border border-neutral-200 shadow-xl z-50 py-1 font-sans animate-in fade-in zoom-in-95 duration-100"
              >
                <div className="px-3 py-1.5 border-b border-neutral-100 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
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
                      ? 'bg-neutral-100 font-bold text-neutral-900'
                      : 'hover:bg-neutral-50 text-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Grid className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Semua Modul (Halaman Utama)</span>
                  </div>
                  {currentView === 'catalog' && <Check className="w-3.5 h-3.5 text-neutral-900" />}
                </button>

                <div className="h-px bg-neutral-100 my-1" />

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
                          ? 'bg-neutral-100 font-bold text-neutral-900'
                          : 'hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-neutral-900">
                          {getModuleShortName(m.id, m.title)}
                        </div>
                        <div className="font-mono text-[10px] text-neutral-400">
                          {m.chapters.length} Bab · {m.chapters.reduce((acc, c) => acc + c.lessons.length, 0)} Materi
                        </div>
                      </div>
                      {isCurrent && <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Center Section: Wide, Centered, Rounded Search Bar */}
        <div className="flex-1 max-w-sm sm:max-w-md md:max-w-xl mx-2 sm:mx-4 flex justify-center">
          <button
            id="btn-navbar-search-center"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/60 border border-neutral-200 hover:border-neutral-300 rounded-full transition-all duration-150 cursor-pointer shadow-xs group"
            title="Cari materi, bab, topik pelajaran (Ctrl+K)"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-neutral-700 shrink-0 transition-colors" />
              <span className="truncate text-neutral-500 group-hover:text-neutral-800 font-sans text-xs sm:text-sm">
                <span className="hidden sm:inline">Cari materi, bab, atau topik pembelajaran...</span>
                <span className="sm:hidden">Cari materi...</span>
              </span>
            </div>
            <kbd className="hidden sm:inline-flex items-center font-mono text-[10px] text-neutral-500 bg-white px-2 py-0.5 rounded-md border border-neutral-200 shadow-2xs shrink-0">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Start Reading button on overview */}
          {currentView === 'module_overview' && (
            <button
              id="btn-navbar-start-reading"
              onClick={onStartReading}
              className="hidden sm:inline-block text-xs font-mono tracking-wider uppercase font-semibold text-neutral-900 px-2 py-1 transition-colors cursor-pointer hover:underline"
            >
              Mulai Baca →
            </button>
          )}

          {/* Manage / Admin tool button */}
          <button
            id="btn-navbar-manage"
            onClick={onOpenManage}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            title="Kelola Konten & Bab"
            aria-label="Kelola Konten"
          >
            <Settings2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

