import React from 'react';
import { ChevronRight, Grid, BookOpen } from 'lucide-react';

interface BreadcrumbProps {
  moduleTitle: string;
  chapterNumber?: string;
  chapterTitle?: string;
  lessonTitle?: string;
  onNavigateCatalog: () => void;
  onNavigateModule: () => void;
  onNavigateChapter?: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  moduleTitle,
  chapterNumber,
  chapterTitle,
  lessonTitle,
  onNavigateCatalog,
  onNavigateModule,
  onNavigateChapter,
}) => {
  return (
    <nav
      id="app-breadcrumb-nav"
      aria-label="Breadcrumb"
      className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 overflow-x-auto whitespace-nowrap py-1"
    >
      {/* Root Catalog Button */}
      <button
        id="breadcrumb-btn-catalog"
        onClick={onNavigateCatalog}
        className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
        title="Kembali ke Beranda Semua Modul"
      >
        <Grid className="w-3.5 h-3.5" />
        <span className="font-mono uppercase tracking-wider hidden md:inline">
          Katalog
        </span>
      </button>

      {/* Module Title */}
      {moduleTitle && (
        <>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0 text-neutral-400 dark:text-neutral-600" />
          <button
            id="breadcrumb-btn-module"
            onClick={onNavigateModule}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer truncate max-w-[140px] sm:max-w-[180px] font-mono uppercase"
            title={`Silabus ${moduleTitle}`}
          >
            {moduleTitle}
          </button>
        </>
      )}

      {/* Chapter */}
      {chapterTitle && (
        <>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0 text-neutral-400 dark:text-neutral-600" />
          <button
            id="breadcrumb-btn-chapter"
            onClick={onNavigateChapter || onNavigateModule}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer truncate max-w-[120px] sm:max-w-[160px]"
          >
            <span className="font-mono text-neutral-900 dark:text-neutral-100 mr-1 font-semibold">
              Bab {chapterNumber}
            </span>
          </button>
        </>
      )}

      {/* Lesson Title */}
      {lessonTitle && (
        <>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 shrink-0 text-neutral-400 dark:text-neutral-600" />
          <span className="text-neutral-900 dark:text-neutral-100 font-medium truncate max-w-[140px] sm:max-w-[200px]">
            {lessonTitle}
          </span>
        </>
      )}
    </nav>
  );
};

