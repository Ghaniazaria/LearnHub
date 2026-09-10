import React from 'react';
import { Clock, BookOpen, Share2, ArrowLeft, Check } from 'lucide-react';
import { Chapter, Lesson } from '../types';
import { Callout } from './Callout';
import { CodeBlock } from './CodeBlock';
import { PreviousNextNavigation } from './PreviousNextNavigation';
import { FlattenedLessonItem } from '../utils/navigation';

interface ReadingContentProps {
  chapter: Chapter;
  lesson: Lesson;
  prev: FlattenedLessonItem | null;
  next: FlattenedLessonItem | null;
  onNavigateLesson: (lessonId: string) => void;
  onBackToOverview: () => void;
}

export const ReadingContent: React.FC<ReadingContentProps> = ({
  chapter,
  lesson,
  prev,
  next,
  onNavigateLesson,
  onBackToOverview,
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Back button link */}
      <div className="mb-6">
        <button
          onClick={onBackToOverview}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda Modul</span>
        </button>
      </div>

      {/* Header section of reading page */}
      <header className="pb-8 border-b border-neutral-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-editorial-heading text-lg sm:text-2xl text-red-500 tracking-wide">
            BAB {chapter.number}
          </span>
          <span className="text-neutral-400">•</span>
          <span className="font-editorial-heading text-base sm:text-xl uppercase tracking-wider text-neutral-500">
            {chapter.title}
          </span>
        </div>

        <h1 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-[0.95] mb-4">
          {lesson.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
          {lesson.summary}
        </p>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {lesson.estimatedMinutes} menit membaca
            </span>
            {lesson.tags && lesson.tags.length > 0 && (
              <span className="hidden sm:inline-flex items-center gap-1.5">
                {lesson.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
              title="Salin tautan materi"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Tersalin' : 'Bagikan'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Render Content Sections */}
      <div className="py-8 space-y-6 text-neutral-800">
        {lesson.sections.map((section, idx) => {
          switch (section.type) {
            case 'heading2':
              return (
                <h2
                  key={idx}
                  className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-neutral-900 pt-6 first:pt-0 leading-tight"
                >
                  {section.text}
                </h2>
              );

            case 'heading3':
              return (
                <h3
                  key={idx}
                  className="font-editorial-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-neutral-800 pt-4 leading-tight"
                >
                  {section.text}
                </h3>
              );

            case 'paragraph':
              return (
                <p
                  key={idx}
                  className="text-base sm:text-lg leading-[1.8] text-neutral-700 font-sans"
                >
                  {section.text}
                </p>
              );

            case 'callout':
              return section.callout ? <Callout key={idx} data={section.callout} /> : null;

            case 'code':
              return (
                <CodeBlock
                  key={idx}
                  code={section.code || ''}
                  language={section.language || 'text'}
                />
              );

            case 'table':
              if (!section.tableData) return null;
              return (
                <div key={idx} className="my-6 overflow-x-auto border border-neutral-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-neutral-100/70 font-mono text-[11px] uppercase tracking-wider text-neutral-600">
                        {section.tableData.headers.map((h, hIdx) => (
                          <th key={hIdx} className="py-3 px-4 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 font-sans">
                      {section.tableData.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="hover:bg-neutral-50 transition-colors"
                        >
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-3 px-4 leading-relaxed text-neutral-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );

            case 'bullet_list':
              return (
                <ul key={idx} className="my-4 space-y-2 list-disc list-outside pl-5 text-base sm:text-lg leading-relaxed text-neutral-700">
                  {section.listItems?.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              );

            case 'numbered_list':
              return (
                <ol key={idx} className="my-4 space-y-2.5 list-decimal list-outside pl-5 text-base sm:text-lg leading-relaxed text-neutral-700">
                  {section.listItems?.map((item, lIdx) => (
                    <li key={lIdx} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ol>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Navigation to previous & next lesson */}
      <PreviousNextNavigation
        prev={prev}
        next={next}
        onNavigateLesson={onNavigateLesson}
        onBackToOverview={onBackToOverview}
      />
    </article>
  );
};
