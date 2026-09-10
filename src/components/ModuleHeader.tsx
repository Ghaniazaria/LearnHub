import React from 'react';
import { ArrowRight, BookOpen, Clock, ShieldCheck } from 'lucide-react';
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
      <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-neutral-600 max-w-3xl leading-relaxed">
        {module.description}
      </p>

      {/* Official Curriculum / Provenance Verification Banner for Computer Networking */}
      {module.id === 'jaringan-komputer' && (
        <div className="mt-6 p-4 sm:p-5 bg-neutral-100/70 border border-neutral-300 text-xs font-mono space-y-2">
          <div className="flex items-center gap-2 text-neutral-900 font-bold uppercase tracking-wider text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>STANDAR RUJUKAN RESMI TERVERIFIKASI</span>
          </div>
          <p className="text-neutral-700 font-sans leading-relaxed text-xs sm:text-sm">
            Seluruh kurikulum, penjelasan teoritis, format paket/PDU, dan sintaks konfigurasi CLI pada modul ini bersumber 100% dari silabus resmi <strong>Cisco Networking Academy (NetAcad CCNA 200-301)</strong> dan dokumentasi resmi <strong>MikroTik RouterOS v7 (MTCNA / MTCRE)</strong> serta standar baku <strong>IETF RFC</strong>.
          </p>
          <div className="flex flex-wrap gap-2 pt-1.5">
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Cisco NetAcad (ITN · SRWE · ENSA)
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              MikroTik RouterOS v7 (MTCNA · MTCRE)
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Standar IETF RFC & IEEE 802.1Q / 802.3ad
            </span>
          </div>
        </div>
      )}

      {/* Official Curriculum Banner for English Grammar & 16 Tenses */}
      {module.id === 'bahasa-inggris' && (
        <div className="mt-6 p-4 sm:p-5 bg-neutral-100/70 border border-neutral-300 text-xs font-mono space-y-2">
          <div className="flex items-center gap-2 text-neutral-900 font-bold uppercase tracking-wider text-xs">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>KURIKULUM TATA BAHASA & 16 TENSES LENGKAP</span>
          </div>
          <p className="text-neutral-700 font-sans leading-relaxed text-xs sm:text-sm">
            Silabus mencakup <strong>Matriks Lengkap 16 Tenses</strong> (Present, Past, Future, Past Future × Simple, Continuous, Perfect, Perfect Continuous) serta materi pendukung esensial berstandar akademik CEFR/TOEFL: <strong>Gerund & To-Infinitive</strong>, <strong>Participles</strong>, <strong>Passive Voice</strong>, <strong>Modal Auxiliaries & Modal Perfect</strong>, <strong>Causative Verbs</strong>, <strong>Direct-Indirect / Reported Speech</strong>, <strong>Conditionals & Subjunctive</strong>, <strong>Relative Clauses</strong>, <strong>Degrees of Comparison</strong>, dan <strong>Question Tags</strong>.
          </p>
          <div className="flex flex-wrap gap-2 pt-1.5">
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              16 English Tenses Matrix
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Gerund & To-Infinitive Mastery
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Passive, Causative & Reported Speech
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Conditionals & Subjunctive Mood
            </span>
          </div>
        </div>
      )}

      {/* Official Curriculum Banner for Mathematics Mind Map */}
      {module.id === 'matematika' && (
        <div className="mt-6 p-4 sm:p-5 bg-neutral-100/70 border border-neutral-300 text-xs font-mono space-y-2">
          <div className="flex items-center gap-2 text-neutral-900 font-bold uppercase tracking-wider text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>PETA KONSEP 10 CABANG MATEMATIKA KOMPREHENSIF</span>
          </div>
          <p className="text-neutral-700 font-sans leading-relaxed text-xs sm:text-sm">
            Kurikulum disusun terstruktur memetakan 10 cabang utama matematika: <strong>Aritmatika</strong>, <strong>Aljabar</strong> (Polinom, Persamaan Kuadrat, SPL, Eksponen & Logaritma), <strong>Geometri</strong> (Datar, Ruang, Lingkaran, Transformasi, Vektor), <strong>Trigonometri</strong>, <strong>Barisan & Deret</strong> (Sigma, Rekurensi), <strong>Kalkulus</strong> (Limit, Diferensial, Integral), <strong>Statistika</strong>, <strong>Peluang</strong> (Pencacahan, Permutasi, Kombinasi), <strong>Logika Matematika</strong>, dan <strong>Penalaran Matematika (HOTS & Pemodelan)</strong>.
          </p>
          <div className="flex flex-wrap gap-2 pt-1.5">
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Aritmatika & Aljabar
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Geometri & Trigonometri
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Kalkulus & Barisan Deret
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Statistika & Peluang
            </span>
            <span className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-800 font-mono text-[11px] font-medium shadow-xs">
              Logika & Penalaran HOTS
            </span>
          </div>
        </div>
      )}

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
