import React, { useState } from 'react';
import { Module } from '../types';
import { BookOpen, Network, Languages, Binary, ChevronRight, ArrowRight } from 'lucide-react';

interface HomePageProps {
  modules: Module[];
  onSelectModule: (moduleId: string) => void;
  onStartReadingModule: (moduleId: string) => void;
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  modules,
  onSelectModule,
  onStartReadingModule,
  onSelectLesson,
  onOpenSearch,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Calculate global statistics
  const totalAllChapters = modules.reduce((acc, m) => acc + m.chapters.length, 0);
  const totalAllLessons = modules.reduce(
    (acc, m) => acc + m.chapters.reduce((cAcc, c) => cAcc + c.lessons.length, 0),
    0
  );

  // Filter modules if a specific category/id is selected
  const filteredModules =
    activeFilter === 'all'
      ? modules
      : modules.filter((m) => m.id === activeFilter);

  // Subject icon helper
  const getSubjectIcon = (id: string) => {
    switch (id) {
      case 'jaringan-komputer':
        return <Network className="w-5 h-5 text-neutral-800" />;
      case 'bahasa-inggris':
        return <Languages className="w-5 h-5 text-neutral-800" />;
      case 'matematika':
        return <Binary className="w-5 h-5 text-neutral-800" />;
      default:
        return <BookOpen className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <div id="learnhub-homepage" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      {/* Editorial Header Section */}
      <section id="home-editorial-header" className="space-y-5 border-b border-neutral-200 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-medium">
            KATALOG PEMBELAJARAN · 3 SUBJEK UTAMA
          </span>
          <span className="font-mono text-xs text-neutral-400">
            TERAKHIR DIPERBARUI · 2026
          </span>
        </div>

        <div className="space-y-2">
          <div className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl text-neutral-400 uppercase tracking-wide leading-none">
            KURIKULUM & SILABUS
          </div>
          <h1 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-950 uppercase leading-[0.92]">
            MODUL PEMBELAJARAN
          </h1>
          <p className="pt-2 text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Kurikulum teknis dan akademis terstruktur yang disajikan dalam tata letak editorial minimalis.
            Pilih subjek pembelajaran di bawah ini untuk menelusuri silabus bab demi bab atau langsung membaca materi.
          </p>
        </div>

        {/* Global Info Strip */}
        <div
          id="global-info-strip"
          className="pt-4 border-t border-neutral-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-neutral-600">
            <span className="font-semibold text-neutral-900">{modules.length} Subjek Pembelajaran</span>
            <span>•</span>
            <span>{totalAllChapters} Bab</span>
            <span>•</span>
            <span>{totalAllLessons} Total Materi</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="btn-home-search-shortcut"
              onClick={onOpenSearch}
              className="font-mono text-xs text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Telusuri Semua Materi</span>
              <kbd className="bg-neutral-100 text-[10px] px-1 py-0.5 rounded-xs border border-neutral-300">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </section>

      {/* Filter / Section Navigation Tabs */}
      <section id="home-subject-filters" className="flex items-center justify-between gap-2 overflow-x-auto pb-2 border-b border-neutral-200">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            id="filter-tab-all"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-neutral-950 text-white font-semibold'
                : 'text-neutral-600 hover:text-neutral-950 bg-neutral-100'
            }`}
          >
            Semua Subjek ({modules.length})
          </button>
          {modules.map((m) => {
            const isActive = activeFilter === m.id;
            return (
              <button
                key={m.id}
                id={`filter-tab-${m.id}`}
                onClick={() => setActiveFilter(m.id)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-neutral-950 text-white font-semibold'
                    : 'text-neutral-600 hover:text-neutral-950 bg-neutral-100'
                }`}
              >
                {m.id === 'jaringan-komputer' && 'Jaringan Komputer'}
                {m.id === 'bahasa-inggris' && 'Bahasa Inggris'}
                {m.id === 'matematika' && 'Matematika'}
                {!['jaringan-komputer', 'bahasa-inggris', 'matematika'].includes(m.id) && m.title}
              </button>
            );
          })}
        </div>

        {activeFilter !== 'all' && (
          <button
            onClick={() => setActiveFilter('all')}
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900 cursor-pointer shrink-0"
          >
            Reset Filter
          </button>
        )}
      </section>

      {/* Divided Sections: Jaringan Komputer, Bahasa Inggris, Matematika */}
      <section id="home-modules-grid" className="space-y-12">
        {filteredModules.map((mod) => {
          const totalLessons = mod.chapters.reduce((acc, c) => acc + c.lessons.length, 0);

          return (
            <article
              key={mod.id}
              id={`section-module-${mod.id}`}
              className="border border-neutral-200 bg-white p-6 sm:p-8 space-y-6 transition-all hover:border-neutral-300 shadow-2xs"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-neutral-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-neutral-100 border border-neutral-200/60 rounded-xs">
                      {getSubjectIcon(mod.id)}
                    </div>
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">
                      {mod.category}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="font-mono text-xs text-neutral-500">
                      {mod.badge}
                    </span>
                  </div>

                  {/* Sub Judul & Judul with font-editorial-heading (Bebas Neue) */}
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="font-editorial-heading text-xl sm:text-2xl md:text-3xl text-neutral-400 uppercase tracking-wider leading-none">
                      MODUL PEMBELAJARAN
                    </div>
                    <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 uppercase leading-[0.92]">
                      {mod.title.replace(/^MODUL PEMBELAJARAN\s*/i, '') || mod.title}
                    </h2>
                  </div>
                </div>

                {/* Module Stats */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                  <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2.5 py-1 border border-neutral-200">
                    {mod.chapters.length} Bab · {totalLessons} Materi
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-4xl">
                {mod.description}
              </p>

              {/* Chapters Syllabus Preview */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                    DAFTAR BAB DALAM MODUL INI:
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    {mod.chapters.length} Bab
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {mod.chapters.map((ch) => (
                    <button
                      key={ch.id}
                      id={`btn-ch-preview-${mod.id}-${ch.number}`}
                      onClick={() => {
                        if (ch.lessons.length > 0) {
                          onSelectLesson(mod.id, ch.lessons[0].id);
                        } else {
                          onSelectModule(mod.id);
                        }
                      }}
                      className="text-left p-3.5 border border-neutral-200 hover:border-neutral-400 bg-neutral-50/40 hover:bg-white transition-all group cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="font-editorial-heading text-base sm:text-lg text-red-500 font-bold tracking-wide">
                          BAB {ch.number}
                        </span>
                        <span className="font-mono text-[10px] text-neutral-400 group-hover:text-neutral-600 transition-colors">
                          {ch.lessons.length} Materi
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-neutral-800 group-hover:text-red-600 transition-colors line-clamp-1">
                        {ch.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                <button
                  id={`btn-open-module-${mod.id}`}
                  onClick={() => onSelectModule(mod.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold border border-neutral-300 hover:border-neutral-900 text-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Buka Silabus Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>

                <button
                  id={`btn-start-reading-${mod.id}`}
                  onClick={() => onStartReadingModule(mod.id)}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-red-500 pb-1 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <span>{mod.ctaText || 'MULAI BACA'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {/* Editorial Footer Note */}
      <footer
        id="home-catalog-footer"
        className="pt-8 border-t border-neutral-200 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <span>LEARNHUB · PLATFORM MODUL PEMBELAJARAN TERPADU</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            id="btn-footer-browse-search"
            onClick={onOpenSearch}
            className="hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Pencarian Materi (⌘K)
          </button>
          <span>•</span>
          <span>{totalAllLessons} Materi Siap Dibaca</span>
        </div>
      </footer>
    </div>
  );
};
