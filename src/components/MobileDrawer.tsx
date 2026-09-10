import React, { useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Module } from '../types';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  module: Module;
  activeLessonId: string | null;
  onSelectLesson: (lessonId: string) => void;
  onNavigateHome: () => void;
  onNavigateCatalog?: () => void;
  totalCount?: number;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  module,
  activeLessonId,
  onSelectLesson,
  onNavigateHome,
  onNavigateCatalog,
  totalCount,
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
      <div className="relative w-4/5 max-w-xs h-full bg-white shadow-2xl z-10 flex flex-col animate-in slide-in-from-left duration-200">
        <Sidebar
          module={module}
          activeLessonId={activeLessonId}
          onSelectLesson={onSelectLesson}
          onNavigateHome={onNavigateHome}
          onNavigateCatalog={onNavigateCatalog}
          onCloseMobile={onClose}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
};
