import React, { useState } from 'react';
import { X, Plus, Trash2, Edit3, ArrowUp, ArrowDown, RotateCcw, Check, Save } from 'lucide-react';
import { Module, Chapter, Lesson } from '../types';

interface ManageModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: Module;
  modules?: Module[];
  onSelectModuleToManage?: (moduleId: string) => void;
  onSaveModule: (module: Module) => void;
  onResetToDefault: () => void;
}

export const ManageModuleModal: React.FC<ManageModuleModalProps> = ({
  isOpen,
  onClose,
  module,
  modules,
  onSelectModuleToManage,
  onSaveModule,
  onResetToDefault,
}) => {
  const [currentModule, setCurrentModule] = useState<Module>(module);
  const [editingLesson, setEditingLesson] = useState<{ chapterId: string; lesson: Lesson } | null>(null);
  const [newChapterTitle, setNewChapterTitle] = useState('');
  const [newChapterSummary, setNewChapterSummary] = useState('');
  const [isAddingChapter, setIsAddingChapter] = useState(false);
  const [savedAlert, setSavedAlert] = useState(false);

  // Sync state if module prop changes
  React.useEffect(() => {
    setCurrentModule(module);
  }, [module]);


  if (!isOpen) return null;

  const handleSave = () => {
    onSaveModule(currentModule);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2000);
  };

  const handleMoveChapter = (index: number, direction: 'up' | 'down') => {
    const chapters = [...currentModule.chapters];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= chapters.length) return;

    const temp = chapters[index];
    chapters[index] = chapters[targetIndex];
    chapters[targetIndex] = temp;

    // Renumber
    const renumbered = chapters.map((chap, i) => ({
      ...chap,
      number: String(i + 1).padStart(2, '0'),
    }));

    setCurrentModule({ ...currentModule, chapters: renumbered });
  };

  const handleDeleteChapter = (chapterId: string) => {
    if (!confirm('Hapus bab ini beserta seluruh materinya?')) return;
    const chapters = currentModule.chapters.filter((c) => c.id !== chapterId);
    const renumbered = chapters.map((chap, i) => ({
      ...chap,
      number: String(i + 1).padStart(2, '0'),
    }));
    setCurrentModule({ ...currentModule, chapters: renumbered });
  };

  const handleAddChapter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChapterTitle.trim()) return;

    const newNum = String(currentModule.chapters.length + 1).padStart(2, '0');
    const newChap: Chapter = {
      id: `chapter-${Date.now()}`,
      number: newNum,
      title: newChapterTitle.trim(),
      summary: newChapterSummary.trim() || 'Ringkasan materi bab ini.',
      lessons: [
        {
          id: `lesson-${Date.now()}`,
          title: 'Pengantar ' + newChapterTitle.trim(),
          summary: 'Materi pendahuluan.',
          estimatedMinutes: 5,
          sections: [
            {
              type: 'heading2',
              text: 'Pendahuluan',
            },
            {
              type: 'paragraph',
              text: 'Isi materi awal untuk bab ini. Anda dapat mengeditnya kapan saja.',
            },
          ],
        },
      ],
    };

    setCurrentModule({
      ...currentModule,
      chapters: [...currentModule.chapters, newChap],
    });
    setNewChapterTitle('');
    setNewChapterSummary('');
    setIsAddingChapter(false);
  };

  const handleAddLesson = (chapterId: string) => {
    const lessonTitle = prompt('Masukkan Judul Materi Baru:');
    if (!lessonTitle || !lessonTitle.trim()) return;

    const chapters = currentModule.chapters.map((chap) => {
      if (chap.id !== chapterId) return chap;
      const newLesson: Lesson = {
        id: `lesson-${Date.now()}`,
        title: lessonTitle.trim(),
        summary: 'Deskripsi materi baru.',
        estimatedMinutes: 5,
        sections: [
          {
            type: 'heading2',
            text: lessonTitle.trim(),
          },
          {
            type: 'paragraph',
            text: 'Konten pembelajaran terstruktur untuk materi ini.',
          },
        ],
      };
      return {
        ...chap,
        lessons: [...chap.lessons, newLesson],
      };
    });

    setCurrentModule({ ...currentModule, chapters });
  };

  const handleDeleteLesson = (chapterId: string, lessonId: string) => {
    if (!confirm('Hapus materi ini?')) return;
    const chapters = currentModule.chapters.map((chap) => {
      if (chap.id !== chapterId) return chap;
      return {
        ...chap,
        lessons: chap.lessons.filter((l) => l.id !== lessonId),
      };
    });
    setCurrentModule({ ...currentModule, chapters });
  };

  const handleSaveLessonEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLesson) return;

    const chapters = currentModule.chapters.map((chap) => {
      if (chap.id !== editingLesson.chapterId) return chap;
      return {
        ...chap,
        lessons: chap.lessons.map((l) =>
          l.id === editingLesson.lesson.id ? editingLesson.lesson : l
        ),
      };
    });

    setCurrentModule({ ...currentModule, chapters });
    setEditingLesson(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-white border border-neutral-300 flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-red-500 uppercase tracking-wider">
                ADMIN MODUL
              </span>
              {savedAlert && (
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/30">
                  <Check className="w-3 h-3" /> Perubahan Tersimpan
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-neutral-900">
              Manajemen Struktur & Konten: {currentModule.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Simpan</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Module Switcher Tabs */}
        {modules && modules.length > 1 && (
          <div className="px-4 py-2 bg-neutral-100 border-b border-neutral-200 flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <span className="text-neutral-500 uppercase text-[10px] mr-1">Pilih Subjek:</span>
            {modules.map((m) => {
              const isSelected = m.id === currentModule.id;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    if (onSelectModuleToManage) {
                      onSelectModuleToManage(m.id);
                    }
                  }}
                  className={`px-3 py-1 transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-neutral-900 text-white font-bold'
                      : 'bg-white text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {m.id === 'jaringan-komputer' && 'Jaringan Komputer'}
                  {m.id === 'bahasa-inggris' && 'Bahasa Inggris'}
                  {m.id === 'matematika' && 'Matematika'}
                  {!['jaringan-komputer', 'bahasa-inggris', 'matematika'].includes(m.id) && m.title}
                </button>
              );
            })}
          </div>
        )}


        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Editing Lesson Modal Drawer */}
          {editingLesson ? (
            <form onSubmit={handleSaveLessonEdit} className="space-y-4 border border-neutral-200 p-4 bg-neutral-50/50">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <span className="font-mono text-xs uppercase font-bold text-red-500">
                  Edit Materi: {editingLesson.lesson.title}
                </span>
                <button
                  type="button"
                  onClick={() => setEditingLesson(null)}
                  className="text-xs text-neutral-400 hover:text-neutral-700 font-mono"
                >
                  Batal
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                  Judul Materi
                </label>
                <input
                  type="text"
                  value={editingLesson.lesson.title}
                  onChange={(e) =>
                    setEditingLesson({
                      ...editingLesson,
                      lesson: { ...editingLesson.lesson, title: e.target.value },
                    })
                  }
                  className="w-full text-sm p-2 border border-neutral-300 bg-white text-neutral-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                  Ringkasan Singkat
                </label>
                <textarea
                  value={editingLesson.lesson.summary}
                  onChange={(e) =>
                    setEditingLesson({
                      ...editingLesson,
                      lesson: { ...editingLesson.lesson, summary: e.target.value },
                    })
                  }
                  rows={2}
                  className="w-full text-sm p-2 border border-neutral-300 bg-white text-neutral-900 font-sans"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/3">
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                    Estimasi Menit
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={120}
                    value={editingLesson.lesson.estimatedMinutes}
                    onChange={(e) =>
                      setEditingLesson({
                        ...editingLesson,
                        lesson: {
                          ...editingLesson.lesson,
                          estimatedMinutes: Number(e.target.value) || 5,
                        },
                      })
                    }
                    className="w-full text-sm p-2 border border-neutral-300 bg-white text-neutral-900 font-mono"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingLesson(null)}
                  className="px-3 py-1.5 border border-neutral-300 text-xs font-mono cursor-pointer"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-neutral-900 text-white text-xs font-mono font-bold uppercase cursor-pointer"
                >
                  Terapkan Perubahan
                </button>
              </div>
            </form>
          ) : null}

          {/* Module Chapters List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                Struktur Bab & Materi Saat Ini
              </span>
              <button
                onClick={() => setIsAddingChapter(true)}
                className="flex items-center gap-1 text-xs font-mono text-red-500 hover:text-red-600 cursor-pointer font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah Bab Baru</span>
              </button>
            </div>

            {/* Form to add chapter */}
            {isAddingChapter && (
              <form
                onSubmit={handleAddChapter}
                className="p-4 border border-dashed border-red-500/50 bg-red-50/20 space-y-3"
              >
                <p className="text-xs font-mono uppercase font-bold text-red-500">
                  Tambah Bab Pembelajaran Baru
                </p>
                <div>
                  <input
                    type="text"
                    placeholder="Judul Bab (contoh: Network Security)"
                    value={newChapterTitle}
                    onChange={(e) => setNewChapterTitle(e.target.value)}
                    className="w-full text-sm p-2 border border-neutral-300 bg-white text-neutral-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Deskripsi singkat bab"
                    value={newChapterSummary}
                    onChange={(e) => setNewChapterSummary(e.target.value)}
                    className="w-full text-sm p-2 border border-neutral-300 bg-white text-neutral-900"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingChapter(false)}
                    className="px-3 py-1 text-xs font-mono cursor-pointer border border-neutral-300"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 bg-red-600 text-white text-xs font-mono uppercase cursor-pointer"
                  >
                    Simpan Bab
                  </button>
                </div>
              </form>
            )}

            {/* List of chapters with reorder & edit */}
            <div className="space-y-3">
              {currentModule.chapters.map((chapter, chapIdx) => (
                <div
                  key={chapter.id}
                  className="p-3.5 border border-neutral-200 bg-white"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-red-500">
                        {chapter.number}
                      </span>
                      <h3 className="text-sm font-bold text-neutral-900">
                        {chapter.title}
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">
                        ({chapter.lessons.length} materi)
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleMoveChapter(chapIdx, 'up')}
                        disabled={chapIdx === 0}
                        className="p-1 text-neutral-400 hover:text-neutral-900 disabled:opacity-20 cursor-pointer"
                        title="Geser ke Atas"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleMoveChapter(chapIdx, 'down')}
                        disabled={chapIdx === currentModule.chapters.length - 1}
                        className="p-1 text-neutral-400 hover:text-neutral-900 disabled:opacity-20 cursor-pointer"
                        title="Geser ke Bawah"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleAddLesson(chapter.id)}
                        className="flex items-center gap-0.5 text-xs font-mono text-blue-500 hover:text-blue-600 ml-2 px-1.5 py-0.5 border border-blue-500/30 cursor-pointer"
                        title="Tambah materi pada bab ini"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Materi</span>
                      </button>
                      <button
                        onClick={() => handleDeleteChapter(chapter.id)}
                        className="p-1 text-neutral-400 hover:text-red-500 cursor-pointer"
                        title="Hapus Bab"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Lessons list inside chapter */}
                  <div className="mt-2 pl-4 border-l-2 border-neutral-100 space-y-1">
                    {chapter.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between text-xs py-1 text-neutral-700"
                      >
                        <span className="truncate pr-2">{lesson.title}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-mono text-neutral-400">
                            {lesson.estimatedMinutes}m
                          </span>
                          <button
                            onClick={() => setEditingLesson({ chapterId: chapter.id, lesson })}
                            className="p-1 text-neutral-400 hover:text-neutral-900 cursor-pointer"
                            title="Edit Materi"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDeleteLesson(chapter.id, lesson.id)}
                            className="p-1 text-neutral-400 hover:text-red-500 cursor-pointer"
                            title="Hapus Materi"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <button
            onClick={() => {
              if (confirm('Kembalikan semua bab dan materi ke data contoh original (7 Bab · 11 Materi)?')) {
                onResetToDefault();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-neutral-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset ke Modul Asli Jaringan Komputer</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 border border-neutral-300 text-neutral-700 cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-1.5 bg-neutral-900 text-white font-bold uppercase cursor-pointer"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
