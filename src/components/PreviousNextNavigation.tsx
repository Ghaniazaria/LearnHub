import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { FlattenedLessonItem } from '../utils/navigation';

interface PreviousNextNavigationProps {
  prev: FlattenedLessonItem | null;
  next: FlattenedLessonItem | null;
  onNavigateLesson: (lessonId: string) => void;
  onBackToOverview: () => void;
}

export const PreviousNextNavigation: React.FC<PreviousNextNavigationProps> = ({
  prev,
  next,
  onNavigateLesson,
  onBackToOverview,
}) => {
  return (
    <div className="mt-16 pt-8 border-t border-neutral-200">
      {/* Prev / Next split links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prev ? (
          <button
            onClick={() => onNavigateLesson(prev.lesson.id)}
            className="group p-4 border border-neutral-200 hover:border-neutral-400 text-left transition-colors cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>MATERI SEBELUMNYA</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-red-500 mr-1.5">
                BAB {prev.chapter.number}
              </span>
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                {prev.lesson.title}
              </p>
            </div>
          </button>
        ) : (
          <button
            onClick={onBackToOverview}
            className="p-4 border border-dashed border-neutral-200 text-left opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BERANDA MODUL</span>
            </div>
            <p className="text-sm font-semibold text-neutral-700">
              Kembali ke Ringkasan Bab
            </p>
          </button>
        )}

        {next ? (
          <button
            onClick={() => onNavigateLesson(next.lesson.id)}
            className="group p-4 border border-neutral-200 hover:border-neutral-400 text-right transition-colors cursor-pointer flex flex-col justify-between items-end"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
              <span>MATERI BERIKUTNYA</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-red-500 mr-1.5">
                BAB {next.chapter.number}
              </span>
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                {next.lesson.title}
              </p>
            </div>
          </button>
        ) : (
          <button
            onClick={onBackToOverview}
            className="p-4 border border-neutral-200 bg-neutral-50 text-right transition-colors cursor-pointer flex flex-col justify-between items-end"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
              <span>AKHIR DARI MODUL</span>
              <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
            </div>
            <p className="text-sm font-semibold text-neutral-900">
              Kembali ke Ringkasan Modul →
            </p>
          </button>
        )}
      </div>
    </div>
  );
};
