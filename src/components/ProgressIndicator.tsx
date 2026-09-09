import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProgressIndicatorProps {
  completed: number;
  total: number;
  percentage: number;
  variant?: 'compact' | 'bar' | 'detailed';
  activeChapterTitle?: string;
  activeChapterNumber?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  completed,
  total,
  percentage,
  variant = 'bar',
  activeChapterTitle,
  activeChapterNumber,
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 font-mono text-xs">
        <span className="text-neutral-500 dark:text-neutral-400">
          {completed}/{total}
        </span>
        <div className="w-16 h-1.5 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full bg-red-500 dark:bg-red-400 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
          {percentage}%
        </span>
      </div>
    );
  }

  if (variant === 'detailed') {
    // Generate ASCII/block progress bar like the prompt requested: ████████░░ 80%
    const totalBlocks = 10;
    const filledBlocks = Math.round((percentage / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    const blockString = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);

    return (
      <div className="py-4 border-y border-neutral-200 dark:border-neutral-800 my-6 font-mono text-xs">
        {activeChapterTitle && (
          <div className="text-neutral-500 dark:text-neutral-400 mb-1 flex items-center justify-between">
            <span>
              BAB {activeChapterNumber} · {activeChapterTitle}
            </span>
            <span className="text-red-500 dark:text-red-400 font-bold">
              {completed} / {total} Materi
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-neutral-900 dark:text-neutral-100 font-medium">
          <span className="text-neutral-500 dark:text-neutral-400">Progress:</span>
          <span className="tracking-widest text-red-600 dark:text-red-400">
            {blockString} <span className="text-neutral-900 dark:text-neutral-100 font-bold ml-1">{percentage}%</span>
          </span>
        </div>
        <div className="mt-2 w-full h-1 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full bg-red-500 dark:bg-red-400 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-1.5 font-mono text-xs">
      <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
          <span>Kemajuan Belajar</span>
        </span>
        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
          {completed}/{total} ({percentage}%)
        </span>
      </div>
      <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <div
          className="h-full bg-red-500 dark:bg-red-400 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
