import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../types';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
  variant?: 'minimal' | 'icon';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle, variant = 'minimal' }) => {
  const isDark = theme === 'dark';

  if (variant === 'icon') {
    return (
      <button
        onClick={onToggle}
        className="p-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors rounded-sm cursor-pointer"
        aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
        title={isDark ? 'Mode Terang' : 'Mode Gelap'}
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors cursor-pointer py-1 px-2"
      aria-label={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      title={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
    >
      {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-neutral-600" />}
      <span>{isDark ? 'Terang' : 'Gelap'}</span>
    </button>
  );
};
