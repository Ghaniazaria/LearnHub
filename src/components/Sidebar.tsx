import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check, BookOpen, Layers, X, PanelLeftClose } from 'lucide-react';
import { Module } from '../types';
import { ProgressIndicator } from './ProgressIndicator';

interface SidebarProps {
  module: Module;
  activeLessonId: string | null;
  completedLessonIds: string[];
  onSelectLesson: (lessonId: string) => void;
  onNavigateHome: () => void;
  onNavigateCatalog?: () => void;
  onCloseMobile?: () => void;
  onCollapseToggle?: () => void;
  completedCount: number;
  totalCount: number;
  percentage: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  module,
  activeLessonId,
  completedLessonIds,
  onSelectLesson,
  onNavigateHome,
  onNavigateCatalog,
  onCloseMobile,
  onCollapseToggle,
  completedCount,
  totalCount,
  percentage,
}) => {
  // Keep chapters expanded by default
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    module.chapters.forEach((c) => {
      map[c.id] = true;
    });
    return map;
  });

  const toggleChapter = (id: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside className="h-full flex flex-col bg-white dark:bg-[#0c0c0e] border-r border-neutral-200 dark:border-neutral-800 select-none">
      {/* Sidebar Header */}
      <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between gap-2 mb-3">
          <button
            onClick={onNavigateCatalog || onNavigateHome}
            className="flex items-center gap-2 group cursor-pointer text-left"
            title="Kembali ke Katalog Semua Modul"
          >
            <span className="font-mono text-xs tracking-widest font-bold text-neutral-900 dark:text-white uppercase">
              LEARNHUB
            </span>
          </button>

          <div className="flex items-center gap-1">
            {onCollapseToggle && (
              <button
                onClick={onCollapseToggle}
                className="hidden md:flex p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer"
                title="Ciutkan Sidebar"
                aria-label="Ciutkan Sidebar"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            )}
            {onCloseMobile && (
              <button
                onClick={onCloseMobile}
                className="md:hidden p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer"
                title="Tutup Menu"
                aria-label="Tutup Menu"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Module Title Card inside sidebar */}
        <button
          onClick={onNavigateHome}
          className="w-full text-left group p-2.5 -mx-2 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer border-l-2 border-transparent hover:border-neutral-900 dark:hover:border-white space-y-0.5"
          title={`Lihat ringkasan silabus ${module.title}`}
        >
          <p className="font-editorial-heading text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 leading-none">
            MODUL PEMBELAJARAN
          </p>
          <p className="font-editorial-heading text-base sm:text-lg font-black tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors uppercase line-clamp-1 leading-tight">
            {module.title.replace(/^MODUL PEMBELAJARAN\s*/i, '') || module.title}
          </p>
        </button>

        {/* Progress bar inside sidebar */}
        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
          <ProgressIndicator
            completed={completedCount}
            total={totalCount}
            percentage={percentage}
            variant="compact"
          />
        </div>
      </div>


      {/* Chapters & Lessons Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-3 font-sans text-xs">
        <div className="px-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">
          Daftar Materi
        </div>

        {module.chapters.map((chapter) => {
          const isExpanded = !!expandedChapters[chapter.id];
          const hasActiveLesson = chapter.lessons.some((l) => l.id === activeLessonId);

          return (
            <div key={chapter.id} className="space-y-0.5">
              {/* Chapter Accordion Header */}
              <button
                onClick={() => toggleChapter(chapter.id)}
                className={`w-full flex items-center justify-between px-2 py-1.5 text-left transition-colors cursor-pointer rounded-xs ${
                  hasActiveLesson
                    ? 'text-neutral-900 dark:text-white font-semibold'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="font-editorial-heading text-sm font-bold text-red-500 dark:text-red-400 shrink-0">
                    {chapter.number}
                  </span>
                  <span className="truncate font-editorial-heading text-sm uppercase tracking-tight text-neutral-800 dark:text-neutral-200">
                    {chapter.title}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-1" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-1" />
                )}
              </button>

              {/* Sub-lessons */}
              {isExpanded && (
                <div className="pl-5 pr-1 space-y-0.5 border-l border-neutral-200 dark:border-neutral-800 ml-3 mt-1">
                  {chapter.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLessonId;
                    const isDone = completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          if (onCloseMobile) onCloseMobile();
                        }}
                        className={`w-full flex items-center justify-between text-left py-1.5 px-2.5 transition-colors cursor-pointer rounded-xs relative ${
                          isActive
                            ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium before:content-[""] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-red-500'
                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/30'
                        }`}
                      >
                        <span className="truncate pr-2">{lesson.title}</span>
                        {isDone && (
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          ← Ringkasan Modul
        </button>
        <span>v1.0.0</span>
      </div>
    </aside>
  );
};
