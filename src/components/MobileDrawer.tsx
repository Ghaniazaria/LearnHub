import React, { useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Module } from '../types';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  module: Module;
  activeLessonId: string | null;
  completedLessonIds: string[];
  onSelectLesson: (lessonId: string) => void;
  onNavigateHome: () => void;
  onNavigateCatalog?: () => void;
  completedCount: number;
  totalCount: number;
  percentage: number;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  module,
  activeLessonId,
  completedLessonIds,
  onSelectLesson,
  onNavigateHome,
  onNavigateCatalog,
  completedCount,
  totalCount,
  percentage,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="relative w-4/5 max-w-xs h-full bg-white dark:bg-[#0c0c0e] shadow-2xl z-10 flex flex-col animate-in slide-in-from-left duration-200">
        <Sidebar
          module={module}
          activeLessonId={activeLessonId}
          completedLessonIds={completedLessonIds}
          onSelectLesson={onSelectLesson}
          onNavigateHome={onNavigateHome}
          onNavigateCatalog={onNavigateCatalog}
          onCloseMobile={onClose}
          completedCount={completedCount}
          totalCount={totalCount}
          percentage={percentage}
        />
      </div>
    </div>
  );
};
