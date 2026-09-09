import React from 'react';
import { Chapter } from '../types';
import { ChapterItem } from './ChapterItem';

interface ChapterListProps {
  chapters: Chapter[];
  completedLessonIds: string[];
  onSelectLesson: (lessonId: string) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({
  chapters,
  completedLessonIds,
  onSelectLesson,
}) => {
  return (
    <section className="pt-2">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 text-[11px] font-mono tracking-wider uppercase text-neutral-400">
        <span>DAFTAR BAB & MATERI</span>
        <span>{chapters.length} BAB TOTAL</span>
      </div>

      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {chapters.map((chapter) => (
          <ChapterItem
            key={chapter.id}
            chapter={chapter}
            completedLessonIds={completedLessonIds}
            onSelectLesson={onSelectLesson}
          />
        ))}
      </div>
    </section>
  );
};
