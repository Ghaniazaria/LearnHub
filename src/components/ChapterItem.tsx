import React from 'react';
import { Chapter } from '../types';
import { LessonItem } from './LessonItem';

interface ChapterItemProps {
  chapter: Chapter;
  onSelectLesson: (lessonId: string) => void;
}

export const ChapterItem: React.FC<ChapterItemProps> = ({
  chapter,
  onSelectLesson,
}) => {
  return (
    <article className="py-8 sm:py-10 border-b border-neutral-200 last:border-b-0">
      {/* Chapter header row */}
      <div className="mb-4">
        <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
          <span className="font-editorial-heading text-xl sm:text-2xl md:text-3xl text-red-500 tracking-wide">
            BAB {chapter.number}
          </span>
          <h2 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 uppercase leading-tight">
            {chapter.title}
          </h2>
          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
            ({chapter.lessons.length} Materi)
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
          {chapter.summary}
        </p>
      </div>

      {/* Sub-lessons list */}
      <div className="mt-4 pt-2 border-t border-neutral-100 divide-y divide-neutral-100">
        {chapter.lessons.map((lesson, index) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            index={index}
            chapterNumber={chapter.number}
            onSelect={onSelectLesson}
          />
        ))}
      </div>
    </article>
  );
};
