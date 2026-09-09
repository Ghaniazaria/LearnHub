import React from 'react';
import { Chapter } from '../types';
import { LessonItem } from './LessonItem';

interface ChapterItemProps {
  chapter: Chapter;
  completedLessonIds: string[];
  onSelectLesson: (lessonId: string) => void;
}

export const ChapterItem: React.FC<ChapterItemProps> = ({
  chapter,
  completedLessonIds,
  onSelectLesson,
}) => {
  const chapterCompletedCount = chapter.lessons.filter((l) =>
    completedLessonIds.includes(l.id)
  ).length;
  const isAllCompleted =
    chapter.lessons.length > 0 && chapterCompletedCount === chapter.lessons.length;

  return (
    <article className="py-8 sm:py-10 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0">
      {/* Chapter header row */}
      <div className="mb-4">
        <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
          <span className="font-editorial-heading text-xl sm:text-2xl md:text-3xl text-red-500 dark:text-red-400 tracking-wide">
            BAB {chapter.number}
          </span>
          <h2 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase leading-tight">
            {chapter.title}
          </h2>
          {isAllCompleted && (
            <span className="ml-2 font-mono text-[10px] uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 border border-emerald-500/30">
              Selesai
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          {chapter.summary}
        </p>
      </div>

      {/* Sub-lessons list */}
      <div className="mt-4 pt-2 border-t border-neutral-100 dark:border-neutral-800/60 divide-y divide-neutral-100 dark:divide-neutral-800/40">
        {chapter.lessons.map((lesson, index) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            index={index}
            chapterNumber={chapter.number}
            isCompleted={completedLessonIds.includes(lesson.id)}
            onSelect={onSelectLesson}
          />
        ))}
      </div>
    </article>
  );
};
