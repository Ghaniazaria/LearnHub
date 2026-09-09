import React from 'react';
import { ArrowLeft, ArrowRight, CheckCheck } from 'lucide-react';
import { FlattenedLessonItem } from '../utils/navigation';

interface PreviousNextNavigationProps {
  prev: FlattenedLessonItem | null;
  next: FlattenedLessonItem | null;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNavigateLesson: (lessonId: string) => void;
  onBackToOverview: () => void;
}

export const PreviousNextNavigation: React.FC<PreviousNextNavigationProps> = ({
  prev,
  next,
  isCompleted,
  onToggleComplete,
  onNavigateLesson,
  onBackToOverview,
}) => {
  return (
    <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
      {/* Mark complete status row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Status Pembelajaran
          </p>
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {isCompleted ? 'Materi ini telah Anda selesaikan.' : 'Tandai selesai jika sudah memahami seluruh konsep di atas.'}
          </p>
        </div>
        <button
          onClick={onToggleComplete}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer border ${
            isCompleted
              ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100'
              : 'bg-transparent text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100'
          }`}
        >
          <CheckCheck className="w-4 h-4" />
          <span>{isCompleted ? 'Selesai Dibaca' : 'Tandai Selesai'}</span>
        </button>
      </div>

      {/* Prev / Next split links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prev ? (
          <button
            onClick={() => onNavigateLesson(prev.lesson.id)}
            className="group p-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-left transition-colors cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>MATERI SEBELUMNYA</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-red-500 dark:text-red-400 mr-1.5">
                BAB {prev.chapter.number}
              </span>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {prev.lesson.title}
              </p>
            </div>
          </button>
        ) : (
          <button
            onClick={onBackToOverview}
            className="p-4 border border-dashed border-neutral-200 dark:border-neutral-800 text-left opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BERANDA MODUL</span>
            </div>
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Kembali ke Ringkasan Bab
            </p>
          </button>
        )}

        {next ? (
          <button
            onClick={() => onNavigateLesson(next.lesson.id)}
            className="group p-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-right transition-colors cursor-pointer flex flex-col justify-between items-end"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
              <span>MATERI BERIKUTNYA</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-red-500 dark:text-red-400 mr-1.5">
                BAB {next.chapter.number}
              </span>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {next.lesson.title}
              </p>
            </div>
          </button>
        ) : (
          <button
            onClick={onBackToOverview}
            className="p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-right transition-colors cursor-pointer flex flex-col justify-between items-end"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 mb-1">
              <span>SELURUH MATERI SELESAI</span>
              <CheckCheck className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Tinjau Ringkasan & Bab Lainnya →
            </p>
          </button>
        )}
      </div>
    </div>
  );
};
