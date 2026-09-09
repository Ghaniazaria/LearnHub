import { Module, Chapter, Lesson } from '../types';

export interface FlattenedLessonItem {
  chapter: Chapter;
  lesson: Lesson;
  flatIndex: number;
}

export function getAllFlattenedLessons(module: Module): FlattenedLessonItem[] {
  const result: FlattenedLessonItem[] = [];
  let index = 0;
  for (const chapter of module.chapters) {
    for (const lesson of chapter.lessons) {
      result.push({
        chapter,
        lesson,
        flatIndex: index++,
      });
    }
  }
  return result;
}

export function findLessonContext(module: Module, lessonId: string) {
  const flat = getAllFlattenedLessons(module);
  const currentIndex = flat.findIndex((item) => item.lesson.id === lessonId);
  if (currentIndex === -1) return null;

  return {
    current: flat[currentIndex],
    prev: currentIndex > 0 ? flat[currentIndex - 1] : null,
    next: currentIndex < flat.length - 1 ? flat[currentIndex + 1] : null,
    total: flat.length,
    position: currentIndex + 1,
  };
}

export function calculateProgress(module: Module, completedIds: string[]): {
  total: number;
  completed: number;
  percentage: number;
} {
  const flat = getAllFlattenedLessons(module);
  const total = flat.length;
  if (total === 0) return { total: 0, completed: 0, percentage: 0 };

  const validCompleted = completedIds.filter((id) =>
    flat.some((item) => item.lesson.id === id)
  );
  const completed = validCompleted.length;
  const percentage = Math.round((completed / total) * 100);

  return { total, completed, percentage };
}

export interface SearchMatch {
  lessonId: string;
  lessonTitle: string;
  chapterNumber: string;
  chapterTitle: string;
  matchSnippet: string;
  matchType: 'title' | 'summary' | 'tag' | 'content';
}

export interface GlobalSearchMatch extends SearchMatch {
  moduleId: string;
  moduleTitle: string;
}

export function searchLessons(module: Module, query: string): SearchMatch[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchMatch[] = [];

  for (const chapter of module.chapters) {
    for (const lesson of chapter.lessons) {
      if (lesson.title.toLowerCase().includes(q)) {
        results.push({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          matchSnippet: lesson.summary,
          matchType: 'title',
        });
        continue;
      }

      if (lesson.tags && lesson.tags.some((tag) => tag.toLowerCase().includes(q))) {
        results.push({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          matchSnippet: `Tag: ${lesson.tags.join(', ')}`,
          matchType: 'tag',
        });
        continue;
      }

      if (lesson.summary.toLowerCase().includes(q)) {
        results.push({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          matchSnippet: lesson.summary,
          matchType: 'summary',
        });
        continue;
      }

      // Deep search in content sections
      let foundSectionSnippet = '';
      for (const sec of lesson.sections) {
        if (sec.text && sec.text.toLowerCase().includes(q)) {
          const idx = sec.text.toLowerCase().indexOf(q);
          const start = Math.max(0, idx - 40);
          const end = Math.min(sec.text.length, idx + q.length + 60);
          foundSectionSnippet =
            (start > 0 ? '...' : '') +
            sec.text.substring(start, end) +
            (end < sec.text.length ? '...' : '');
          break;
        }
        if (sec.code && sec.code.toLowerCase().includes(q)) {
          const idx = sec.code.toLowerCase().indexOf(q);
          const start = Math.max(0, idx - 30);
          const end = Math.min(sec.code.length, idx + q.length + 40);
          foundSectionSnippet =
            (start > 0 ? '...' : '') +
            sec.code.substring(start, end) +
            (end < sec.code.length ? '...' : '');
          break;
        }
      }

      if (foundSectionSnippet) {
        results.push({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          matchSnippet: foundSectionSnippet,
          matchType: 'content',
        });
      }
    }
  }

  return results;
}

export function searchAllModules(modules: Module[], query: string): GlobalSearchMatch[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: GlobalSearchMatch[] = [];

  for (const mod of modules) {
    const matches = searchLessons(mod, q);
    for (const m of matches) {
      results.push({
        ...m,
        moduleId: mod.id,
        moduleTitle: mod.title,
      });
    }
  }

  return results;
}


