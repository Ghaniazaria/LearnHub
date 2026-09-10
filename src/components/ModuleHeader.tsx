import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Module } from '../types';

interface ModuleHeaderProps {
  module: Module;
  onStartReading: () => void;
  totalCount: number;
}

export const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  module,
  onStartReading,
  totalCount,
}) => {
  return (
    <header className="pt-6 sm:pt-12 pb-10 sm:pb-16 border-b border-neutral-200">
      {/* Category & Stats Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-neutral-500 font-semibold">
          {module.badge}
        </span>
        <span className="text-xs font-mono text-neutral-500 border border-neutral-200 px-2.5 py-1 bg-neutral-100/60">
          {module.chapters.length} Bab · {totalCount} Materi
        </span>
      </div>

      {/* Main Large Editorial Title: Sub Judul + Judul matching reference image */}
      <div className="space-y-1 sm:space-y-1.5">
        <div className="font-editorial-heading text-2xl sm:text-4xl md:text-5xl text-neutral-400 uppercase tracking-wide leading-none">
          MODUL PEMBELAJARAN
        </div>
        <h1 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-neutral-900 leading-[0.92] max-w-4xl break-words">
          {module.title.replace(/^MODUL PEMBELAJARAN\s*/i, '') || module.title}
        </h1>
      </div>

      {/* Editorial Summary */}
      <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl leading-relaxed">
        {module.description}
      </p>

      {/* CTA Action matching PDF */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6">
        <button
          onClick={onStartReading}
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-red-500 pb-1 hover:text-red-500 transition-colors cursor-pointer"
        >
          <span>{module.ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-neutral-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {module.chapters.length} Bab Terstruktur
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            ~95 Menit Total Baca
          </span>
        </div>
      </div>
    </header>
  );
};
