import React, { useEffect, useRef, useState } from 'react';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft, Filter } from 'lucide-react';
import { Module } from '../types';
import { searchAllModules, GlobalSearchMatch } from '../utils/navigation';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  modules: Module[];
  onSelectLesson: (moduleId: string, lessonId: string) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  isOpen,
  onClose,
  modules,
  onSelectLesson,
}) => {
  const [query, setQuery] = useState('');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const allMatches: GlobalSearchMatch[] = query.trim() ? searchAllModules(modules, query) : [];
  const results =
    selectedModuleFilter === 'all'
      ? allMatches
      : allMatches.filter((m) => m.moduleId === selectedModuleFilter);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedModuleFilter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        onSelectLesson(results[selectedIndex].moduleId, results[selectedIndex].lessonId);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onSelectLesson, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="search-dialog-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Cari materi pembelajaran"
    >
      <div
        id="search-dialog-card"
        className="w-full max-w-2xl bg-white border border-neutral-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 bg-neutral-50/50">
          <Search className="w-4 h-4 text-neutral-400 shrink-0 mr-3" />
          <input
            id="search-dialog-input"
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari konsep (contoh: tenses, aljabar, ip address, routing, limit)..."
            className="w-full bg-transparent text-sm text-neutral-900 placeholder-neutral-400 focus:outline-hidden font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-neutral-600 mr-2 cursor-pointer"
              title="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[11px] font-mono px-1.5 py-0.5 border border-neutral-300 text-neutral-500 rounded">
            ESC
          </span>
        </div>

        {/* Module Filter Chips */}
        <div className="px-4 py-2 border-b border-neutral-100 flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setSelectedModuleFilter('all')}
            className={`px-2 py-0.5 transition-colors cursor-pointer whitespace-nowrap ${
              selectedModuleFilter === 'all'
                ? 'bg-neutral-900 text-white font-bold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Semua Modul
          </button>
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModuleFilter(m.id)}
              className={`px-2 py-0.5 transition-colors cursor-pointer whitespace-nowrap ${
                selectedModuleFilter === m.id
                  ? 'bg-neutral-900 text-white font-bold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {m.id === 'jaringan-komputer' && 'Jaringan'}
              {m.id === 'bahasa-inggris' && 'B. Inggris'}
              {m.id === 'matematika' && 'Matematika'}
              {!['jaringan-komputer', 'bahasa-inggris', 'matematika'].includes(m.id) && m.title}
            </button>
          ))}
        </div>

        {/* Results list */}
        <div className="flex-1 overflow-y-auto divide-y divide-neutral-100 p-2">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-xs text-neutral-500 font-mono space-y-1">
              <p>Ketik kata kunci untuk mencari di seluruh materi Bahasa Inggris, Matematika, dan Jaringan Komputer.</p>
              <p className="text-[11px] text-neutral-400">Pencarian mencakup judul, tag, rangkuman, dan isi materi teknis.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-neutral-500">
              Tidak ada materi yang cocok dengan &quot;{query}&quot;
            </div>
          ) : (
            results.map((res, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={`${res.moduleId}-${res.lessonId}-${index}`}
                  onClick={() => {
                    onSelectLesson(res.moduleId, res.lessonId);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left p-3 transition-colors flex items-start justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-100 text-neutral-900'
                      : 'hover:bg-neutral-50 text-neutral-700'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-neutral-200 text-neutral-700">
                        {res.moduleId === 'jaringan-komputer' && 'Jaringan'}
                        {res.moduleId === 'bahasa-inggris' && 'B. Inggris'}
                        {res.moduleId === 'matematika' && 'Matematika'}
                        {!['jaringan-komputer', 'bahasa-inggris', 'matematika'].includes(res.moduleId) && res.moduleId}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-neutral-600">
                        BAB {res.chapterNumber}
                      </span>
                      <span className="text-[11px] text-neutral-400 truncate max-w-[150px]">
                        {res.chapterTitle}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-1 py-0.2 text-neutral-400 border border-neutral-200 rounded">
                        {res.matchType}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-neutral-900">
                      {res.lessonTitle}
                    </p>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5 font-sans">
                      {res.matchSnippet}
                    </p>
                  </div>
                  <div className="shrink-0 pt-1 text-neutral-400">
                    {isSelected ? (
                      <CornerDownLeft className="w-4 h-4 text-neutral-900" />
                    ) : (
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>Tekan ↑ ↓ navigasi · ↵ pilih</span>
          <span>{results.length} materi ditemukan</span>
        </div>
      </div>
    </div>
  );
};

