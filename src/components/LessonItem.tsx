import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Lesson } from '../types';

interface LessonItemProps {
  lesson: Lesson;
  index: number;
  chapterNumber: string;
  onSelect: (lessonId: string) => void;
}

export const LessonItem: React.FC<LessonItemProps> = ({
  lesson,
  index,
  chapterNumber,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(lesson.id)}
      className="group flex items-start sm:items-center justify-between gap-4 py-2.5 px-3 -mx-3 hover:bg-neutral-100/70 transition-colors cursor-pointer"
    >
      <div className="flex items-start sm:items-center gap-3 min-w-0">
        <div className="mt-0.5 sm:mt-0 shrink-0">
          <span className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center font-mono text-[10px] text-neutral-500 bg-neutral-100/70">
            {index + 1}
          </span>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-neutral-800 group-hover:text-red-600 transition-colors">
            {lesson.title}
          </p>
          <p className="text-xs text-neutral-500 line-clamp-1 sm:hidden mt-0.5">
            {lesson.summary}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-neutral-400">
        <span className="hidden sm:flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {lesson.estimatedMinutes}m
        </span>
        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 text-red-500" />
      </div>
    </div>
  );
};
