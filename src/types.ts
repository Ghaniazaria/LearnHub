export interface CalloutData {
  type: 'info' | 'warning' | 'tip' | 'note';
  title?: string;
  content: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading2' | 'heading3' | 'callout' | 'code' | 'table' | 'bullet_list' | 'numbered_list';
  text?: string;
  code?: string;
  language?: string;
  callout?: CalloutData;
  listItems?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  sections: ContentSection[];
  tags?: string[];
}

export interface Chapter {
  id: string;
  number: string; // e.g. "01", "02"
  title: string;
  summary: string;
  lessons: Lesson[];
}

export interface Module {
  id: string;
  badge: string; // e.g. "MODUL · 7 BAB · 11 MATERI"
  title: string;
  description: string;
  category: string;
  ctaText: string;
  chapters: Chapter[];
}

export interface ProgressData {
  completedLessonIds: string[];
  lastReadLessonId?: string;
}

export type ThemeMode = 'light' | 'dark';
