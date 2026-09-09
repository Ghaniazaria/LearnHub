import React, { useState } from 'react';
import { Module } from '../types';
import { calculateProgress } from '../utils/navigation';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, Layers, Sparkles, Network, Languages, Binary } from 'lucide-react';

interface HomePageProps {
  modules: Module[];
  completedLessonIds: string[];
  onSelectModule: (moduleId: string) => void;
  onStartReadingModule: (moduleId: string) => void;
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  modules,
  completedLessonIds,
  onSelectModule,
  onStartReadingModule,
  onSelectLesson,
  onOpenSearch,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Calculate global statistics
  const totalAllLessons = modules.reduce(
    (acc, m) => acc + m.chapters.reduce((cAcc, c) => cAcc + c.lessons.length, 0),
    0
  );
  const totalCompletedLessons = modules.reduce(
    (acc, m) => acc + calculateProgress(m, completedLessonIds).completed,
    0
  );
  const overallPercentage =
    totalAllLessons > 0 ? Math.round((totalCompletedLessons / totalAllLessons) * 100) : 0;

  // Filter modules if a specific category/id is selected
  const filteredModules =
    activeFilter === 'all'
      ? modules
      : modules.filter((m) => m.id === activeFilter);

  // Subject icon helper
  const getSubjectIcon = (id: string) => {
    switch (id) {
      case 'jaringan-komputer':
        return <Network className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
      case 'bahasa-inggris':
        return <Languages className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
      case 'matematika':
        return <Binary className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
      default:
        return <BookOpen className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />;
    }
  };

  return (
    <div id="learnhub-homepage" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      {/* Editorial Header Section */}
      <section id="home-editorial-header" className="space-y-5 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs tracking-widest text-neutral-500 dark:text-neutral-400 uppercase font-medium">
            KATALOG PEMBELAJARAN · 3 SUBJEK UTAMA
          </span>
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
            TERAKHIR DIPERBARUI · 2026
          </span>
        </div>

        <div className="space-y-2">
          <div className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl text-neutral-500 dark:text-neutral-400 uppercase tracking-wide leading-none">
            MODUL PEMBELAJARAN
          </div>
          <h1 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-[0.92]">
            JARINGAN KOMPUTER · BAHASA INGGRIS · MATEMATIKA
          </h1>
          <p className="pt-2 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            Kurikulum teknis dan akademis terstruktur yang disajikan dalam tata letak editorial minimalis.
            Pilih subjek pembelajaran di bawah ini untuk menelusuri silabus bab demi bab atau langsung membaca materi.
          </p>
        </div>

        {/* Global Progress Strip */}
        <div
          id="global-progress-strip"
          className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-36 h-2 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-neutral-900 dark:bg-white transition-all duration-300"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
            <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
              {totalCompletedLessons} dari {totalAllLessons} materi selesai ({overallPercentage}%)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="btn-home-search-shortcut"
              onClick={onOpenSearch}
              className="font-mono text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Telusuri Semua Materi</span>
              <kbd className="bg-neutral-100 dark:bg-neutral-800 text-[10px] px-1 py-0.5 rounded-xs border border-neutral-300 dark:border-neutral-700">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </section>

      {/* Filter / Section Navigation Tabs */}
      <section id="home-subject-filters" className="flex items-center justify-between gap-2 overflow-x-auto pb-2 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            id="filter-tab-all"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900'
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
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900'
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
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white cursor-pointer shrink-0"
          >
            Reset Filter
          </button>
        )}
      </section>

      {/* Divided Sections: Jaringan Komputer, Bahasa Inggris, Matematika */}
      <section id="home-modules-grid" className="space-y-12">
        {filteredModules.map((mod, index) => {
          const { total, completed, percentage } = calculateProgress(mod, completedLessonIds);
          const isFinished = total > 0 && completed === total;

          return (
            <article
              key={mod.id}
              id={`section-module-${mod.id}`}
              className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] p-6 sm:p-8 space-y-6 transition-all hover:border-neutral-400 dark:hover:border-neutral-600"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-neutral-100 dark:bg-neutral-800">
                      {getSubjectIcon(mod.id)}
                    </div>
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {mod.category}
                    </span>
                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                    <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                      {mod.badge}
                    </span>
                  </div>

                  {/* Sub Judul & Judul with font-editorial-heading (Bebas Neue) */}
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="font-editorial-heading text-xl sm:text-2xl md:text-3xl text-neutral-500 dark:text-neutral-400 uppercase tracking-wider leading-none">
                      MODUL PEMBELAJARAN
                    </div>
                    <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-[0.92]">
                      {mod.title.replace(/^MODUL PEMBELAJARAN\s*/i, '') || mod.title}
                    </h2>
                  </div>
                </div>

                {/* Progress Pill & Actions */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                  <div className="flex items-center gap-2">
                    {isFinished ? (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        SELESAI
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5">
                        {completed}/{total} Materi ({percentage}%)
                      </span>
                    )}
                  </div>
                  <div className="w-28 sm:w-32 h-1.5 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl">
                {mod.description}
              </p>

              {/* Chapters Syllabus Preview */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    DAFTAR BAB DALAM MODUL INI:
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    {mod.chapters.length} Bab
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {mod.chapters.map((ch) => {
                    const chCompleted = ch.lessons.filter((l) =>
                      completedLessonIds.includes(l.id)
                    ).length;
                    const chTotal = ch.lessons.length;
                    const isChDone = chTotal > 0 && chCompleted === chTotal;

                    return (
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
                        className="text-left p-3 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 bg-neutral-50/50 dark:bg-neutral-900/30 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 font-bold group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                            BAB {ch.number}
                          </span>
                          {isChDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <span className="font-mono text-[10px] text-neutral-400">
                              {chCompleted}/{chTotal}
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white line-clamp-1">
                          {ch.title}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <button
                  id={`btn-open-module-${mod.id}`}
                  onClick={() => onSelectModule(mod.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-neutral-900 dark:text-white transition-colors cursor-pointer"
                >
                  <span>Buka Silabus Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id={`btn-start-reading-${mod.id}`}
                  onClick={() => onStartReadingModule(mod.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 transition-colors cursor-pointer"
                >
                  <span>{mod.ctaText || 'MULAI BACA →'}</span>
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {/* Editorial Footer Note */}
      <footer
        id="home-catalog-footer"
        className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <span>LEARNHUB · PLATFORM MODUL PEMBELAJARAN TERPADU</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            id="btn-footer-browse-search"
            onClick={onOpenSearch}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Pencarian Materi (⌘K)
          </button>
          <span>•</span>
          <span>{totalCompletedLessons} dari {totalAllLessons} Selesai</span>
        </div>
      </footer>
    </div>
  );
};
