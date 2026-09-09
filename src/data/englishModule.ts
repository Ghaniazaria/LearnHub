import { Module } from '../types';

export const DEFAULT_ENGLISH_MODULE: Module = {
  id: 'bahasa-inggris',
  badge: 'MODUL · 5 BAB · 10 MATERI',
  title: 'MODUL PEMBELAJARAN BAHASA INGGRIS',
  description:
    'Panduan komprehensif penguasaan tata bahasa, tenses esensial, struktur kalimat kompleks, pemahaman bacaan akademik, penulisan profesional, dan ekspresi percakapan kontekstual.',
  category: 'Bahasa & Komunikasi Global',
  ctaText: 'MULAI DARI BAB 01 →',
  chapters: [
    {
      id: 'eng-ch-01',
      number: '01',
      title: 'Grammar Foundations & Parts of Speech',
      summary: 'Fondasi kelas kata dalam bahasa Inggris, klasifikasi fungsi, dan sintaksis kalimat.',
      lessons: [
        {
          id: 'eng-parts-of-speech',
          title: 'Parts of Speech & Word Classes',
          summary: 'Mengenal 8 kelas kata dasar: noun, pronoun, verb, adjective, adverb, preposition, conjunction, dan interjection.',
          estimatedMinutes: 7,
          tags: ['grammar', 'parts-of-speech', 'foundations'],
          sections: [
            {
              type: 'heading2',
              text: 'Delapan Pilar Kelas Kata (Parts of Speech)',
            },
            {
              type: 'paragraph',
              text: 'Setiap kata dalam kalimat bahasa Inggris memiliki fungsi gramatikal tertentu. Memahami peran masing-masing kata membantu menyusun kalimat yang akurat secara sintaksis dan bermakna jelas tanpa ambigu.',
            },
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Prinsip Fungsi Kontekstual',
                content:
                  'Sebuah kata yang sama dapat berubah kelas katanya tergantung posisinya dalam kalimat. Contoh: "run" dapat menjadi kata kerja ("They run fast") atau kata benda ("He went for a 5-mile run").',
              },
            },
            {
              type: 'table',
              tableData: {
                headers: ['Part of Speech', 'Fungsi Utama', 'Contoh Kata', 'Contoh Dalam Kalimat'],
                rows: [
                  ['Noun (Kata Benda)', 'Menamai orang, tempat, benda, atau ide abstrak', 'scientist, protocol, courage', 'The scientist verified the data.'],
                  ['Pronoun (Kata Ganti)', 'Menggantikan kata benda untuk menghindari repetisi', 'he, they, which, itself', 'They deployed the build yesterday.'],
                  ['Verb (Kata Kerja)', 'Menyatakan tindakan, keadaan, atau peristiwa', 'analyze, establish, remains', 'The system analyzes network logs in real-time.'],
                  ['Adjective (Kata Sifat)', 'Memodifikasi atau memperjelas kata benda', 'scalable, resilient, modular', 'We need a resilient architecture.'],
                  ['Adverb (Kata Keterangan)', 'Memodifikasi kata kerja, kata sifat, atau keterangan lain', 'accurately, exceedingly, often', 'The server responds exceedingly fast.'],
                  ['Preposition (Kata Depan)', 'Menunjukkan relasi ruang, waktu, atau arah', 'across, beneath, during', 'Packets flow across multiple subnets.'],
                  ['Conjunction (Kata Hubung)', 'Menghubungkan kata, frasa, atau klausa', 'whereas, although, furthermore', 'He tested the route, although the ping was high.'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Contoh Analisis Sintaksis',
            },
            {
              type: 'paragraph',
              text: 'Perhatikan pembedahan kalimat teknis berikut berdasarkan kelas katanya:',
            },
            {
              type: 'code',
              language: 'text',
              code: `Sentence: "The dedicated engineer quietly optimized the database yesterday."

[The]         -> Definite Article
[dedicated]   -> Adjective (describing engineer)
[engineer]    -> Noun (Subject)
[quietly]     -> Adverb of Manner (modifying optimized)
[optimized]   -> Transitive Verb (Past Simple)
[the]         -> Definite Article
[database]    -> Noun (Direct Object)
[yesterday]   -> Adverb of Time`,
            },
          ],
        },
        {
          id: 'eng-subject-verb-agreement',
          title: 'Subject-Verb Agreement & Sentence Core',
          summary: 'Aturan penyesuaian subjek tunggal dan jamak dengan bentuk kata kerja predikatnya.',
          estimatedMinutes: 6,
          tags: ['grammar', 'subject-verb', 'syntax'],
          sections: [
            {
              type: 'heading2',
              text: 'Aturan Keselarasan Subjek dan Verba',
            },
            {
              type: 'paragraph',
              text: 'Aturan mendasar dalam sintaksis bahasa Inggris: subjek tunggal (singular subject) membutuhkan verba tunggal, dan subjek jamak (plural subject) membutuhkan verba jamak.',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Kata ganti he, she, it dan kata benda tunggal memerlukan penambahan -s / -es pada verba present simple (e.g., "The router forwards packets").',
                'Kata ganti I, you, we, they dan kata benda jamak menggunakan bentuk dasar verba (e.g., "Routers forward packets").',
                'Subjek yang dipisahkan oleh frasa preposisi tidak memengaruhi jumlah verba (e.g., "The list of parameters is complete", bukan "are").',
                'Kata penghubung "either... or" atau "neither... nor" menyelaraskan verba dengan subjek yang paling dekat posisinya.',
              ],
            },
            {
              type: 'callout',
              callout: {
                type: 'warning',
                title: 'Perangkap Umum: Collective Nouns',
                content:
                  'Kata benda kolektif seperti "committee", "team", "faculty" dalam American English umumnya dianggap tunggal ("The team has published the paper"), sedangkan dalam British English dapat dianggap jamak tergantung fokus ke anggota individu.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-02',
      number: '02',
      title: 'Mastering English Tenses',
      summary: 'Pemahaman mendalam tentang 12 tenses bahasa Inggris dan penggunaannya dalam konteks nyata.',
      lessons: [
        {
          id: 'eng-present-past-tenses',
          title: 'Present & Past Tenses in Action',
          summary: 'Perbedaan fundamental antara Simple, Continuous, dan penggunaannya dalam laporan fakta vs kejadian lampau.',
          estimatedMinutes: 8,
          tags: ['tenses', 'present', 'past'],
          sections: [
            {
              type: 'heading2',
              text: 'Membedakan Fakta Umum dan Peristiwa Berlangsung',
            },
            {
              type: 'paragraph',
              text: 'Present Simple digunakan untuk kebenaran umum, hukum sains, dan kebiasaan berulang. Sementara itu, Present Continuous digunakan untuk kegiatan sementara yang sedang berlangsung pada saat bicara atau tren sementara.',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tense', 'Pola Rumus', 'Kapan Digunakan', 'Contoh Kalimat'],
                rows: [
                  ['Simple Present', 'S + V1 (s/es) + O', 'Fakta permanen, hukum alam, rutinitas', 'Light travels at 300,000 km per second.'],
                  ['Present Continuous', 'S + am/is/are + V-ing', 'Aksi sedang terjadi saat ini, tren', 'The software is currently updating dependencies.'],
                  ['Simple Past', 'S + V2 + O', 'Aksi selesai di waktu lampau tertentu', 'Alan Turing published his seminal paper in 1936.'],
                  ['Past Continuous', 'S + was/were + V-ing', 'Aksi yang sedang berlangsung saat kejadian lain menyela', 'The server was restarting when the outage occurred.'],
                ],
              },
            },
          ],
        },
        {
          id: 'eng-perfect-aspect',
          title: 'The Perfect Aspect: Connecting Past and Present',
          summary: 'Menguasai Present Perfect vs Past Simple serta dampaknya terhadap relevansi waktu.',
          estimatedMinutes: 8,
          tags: ['tenses', 'perfect-tense', 'aspect'],
          sections: [
            {
              type: 'heading2',
              text: 'Mengapa Present Perfect Penting?',
            },
            {
              type: 'paragraph',
              text: 'Present Perfect (have/has + V3) menjembatani peristiwa yang dimulai di masa lampau dengan kondisi saat ini. Berbeda dengan Simple Past yang terputus dari masa sekarang.',
            },
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Kunci Penggunaan Present Perfect',
                content:
                  'Jangan pernah memasukkan keterangan waktu lampau yang spesifik (seperti "yesterday", "in 1998", "two hours ago") bersama Present Perfect. Gunakan indikator seperti "already", "yet", "since", "for", atau "recently".',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-03',
      number: '03',
      title: 'Voice, Modality & Conditionals',
      summary: 'Kalimat pasif akademis, modal verbs penentu probabilitas, dan kalimat pengandaian.',
      lessons: [
        {
          id: 'eng-passive-voice',
          title: 'Passive Voice in Academic & Technical Writing',
          summary: 'Kapan dan bagaimana menggunakan kalimat pasif untuk memprioritaskan objek dan proses ilmiah.',
          estimatedMinutes: 7,
          tags: ['passive-voice', 'academic-writing', 'style'],
          sections: [
            {
              type: 'heading2',
              text: 'Fungsi Pasif dalam Penulisan Ilmiah',
            },
            {
              type: 'paragraph',
              text: 'Dalam laporan teknis, peneliti sering kali lebih mementingkan fenomena atau hasil eksperimen daripada subjek pelaku penelitian. Di sinilah Passive Voice (S + to be + V3) memainkan peran kunci.',
            },
            {
              type: 'code',
              language: 'text',
              code: `Active: "The lab technician measured the voltage five times."
Passive: "The voltage was measured five times under controlled conditions."

Active: "Researchers have discovered a zero-day vulnerability."
Passive: "A zero-day vulnerability has been discovered in the protocol."`,
            },
          ],
        },
        {
          id: 'eng-conditionals',
          title: 'Conditionals: Zero, First, Second, Third & Mixed',
          summary: 'Struktur logika sebab-akibat, probabilitas di masa depan, serta penyesalan hipotesis masa lampau.',
          estimatedMinutes: 9,
          tags: ['conditionals', 'if-clause', 'logic'],
          sections: [
            {
              type: 'heading2',
              text: 'Tabel Komparasi Struktur If-Clause',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tipe Conditional', 'Klausa If (Syarat)', 'Klausa Utama (Hasil)', 'Konteks Realitas'],
                rows: [
                  ['Zero Conditional', 'If + Simple Present', 'Simple Present', 'Kebenaran ilmiah mutlak (If ice melts, it becomes water)'],
                  ['First Conditional', 'If + Simple Present', 'will + Verb base', 'Kemungkinan nyata di masa depan (If it rains, we will stay)'],
                  ['Second Conditional', 'If + Simple Past', 'would + Verb base', 'Hipotesis tidak nyata saat ini (If I were you, I would accept)'],
                  ['Third Conditional', 'If + Past Perfect', 'would have + V3', 'Penyesalan kejadian masa lampau (If they had alerted us, we would have patched it)'],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-04',
      number: '04',
      title: 'Academic & Critical Reading',
      summary: 'Teknik membaca cepat, menemukan ide pokok paragraf, serta mengekstrak kesimpulan implisit.',
      lessons: [
        {
          id: 'eng-skimming-scanning',
          title: 'Skimming, Scanning & Paragraph Mapping',
          summary: 'Strategi membaca efisien untuk jurnal, buku teks tebal, dan artikel ilmiah internasional.',
          estimatedMinutes: 8,
          tags: ['reading', 'skimming', 'comprehension'],
          sections: [
            {
              type: 'heading2',
              text: 'Membedakan Skimming vs Scanning',
            },
            {
              type: 'paragraph',
              text: 'Skimming adalah membaca cepat dengan mata melayang di atas teks untuk menangkap gambaran umum atau tesis utama. Scanning adalah mencari kata kunci spesifik (angka, nama peneliti, istilah khusus) tanpa membaca setiap baris kata.',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Baca kalimat pertama dan terakhir dari setiap paragraf untuk memahami alur argumen (Topic Sentence & Concluding Sentence).',
                'Identifikasi kata transisi logis: however, therefore, in contrast, consequently.',
                'Abaikan kata keterangan yang tidak esensial saat melakukan penjelajahan awal dokumen.',
              ],
            },
          ],
        },
        {
          id: 'eng-vocabulary-context',
          title: 'Context Clues & Academic Collocations',
          summary: 'Cara menebak arti kata sulit tanpa kamus menggunakan petunjuk konteks kalimat di sekitarnya.',
          estimatedMinutes: 7,
          tags: ['vocabulary', 'context-clues', 'collocations'],
          sections: [
            {
              type: 'heading2',
              text: 'Empat Jenis Petunjuk Konteks (Context Clues)',
            },
            {
              type: 'paragraph',
              text: 'Ketika menjumpai kata teknis atau kata serapan yang belum pernah dilihat sebelumnya, gunakan petunjuk berupa definisi langsung, sinonim, antonim kontras, atau contoh ilustratif yang disediakan penulis.',
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-05',
      number: '05',
      title: 'Professional Communication & Idioms',
      summary: 'Etika penulisan email profesional, proposal formal, serta idiom percakapan modern.',
      lessons: [
        {
          id: 'eng-professional-emails',
          title: 'Professional Email Writing & Register',
          summary: 'Menulis korespondensi formal berbahasa Inggris dengan nada sopan, padat, dan terstruktur.',
          estimatedMinutes: 8,
          tags: ['writing', 'email', 'professional'],
          sections: [
            {
              type: 'heading2',
              text: 'Anatomi Email Profesional',
            },
            {
              type: 'paragraph',
              text: 'Email profesional menuntut subject line yang deskriptif, salam pembuka yang tepat, ringkasan tujuan di paragraf awal, serta call-to-action (CTA) yang jelas.',
            },
            {
              type: 'code',
              language: 'text',
              code: `Subject: Project Phoenix - Status Update & Milestone 2 Review

Dear Dr. Arisandi,

I hope this email finds you well.

I am writing to provide an update on Milestone 2 for Project Phoenix. All core API endpoints have been implemented and stress-tested according to the agreed schedule.

Could we schedule a brief 15-minute sync this Thursday at 2:00 PM WIB to review the telemetry dashboard?

Thank you for your ongoing support.

Warm regards,
Budi Santoso
Lead Systems Engineer`,
            },
          ],
        },
        {
          id: 'eng-everyday-idioms',
          title: 'Essential Idioms & Collocations in Tech & Business',
          summary: 'Idiom populer yang sering digunakan penutur asli dalam rapat internasional dan dunia kerja.',
          estimatedMinutes: 6,
          tags: ['idioms', 'speaking', 'business-english'],
          sections: [
            {
              type: 'heading2',
              text: 'Daftar Idiom Kunci & Makna Kontekstual',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Idiom', 'Makna Harfiah Palsu', 'Makna Sebenarnya', 'Contoh Penggunaan'],
                rows: [
                  ['Back to the drawing board', 'Kembali ke papan gambar', 'Memulai ulang dari awal karena rencana gagal', 'The prototype crashed; it is back to the drawing board.'],
                  ['Touch base', 'Menyentuh pangkalan', 'Melakukan komunikasi singkat untuk update status', 'Let us touch base tomorrow regarding the deadline.'],
                  ['Cut corners', 'Memotong sudut', 'Mengorbankan kualitas demi menghemat waktu/biaya', 'Never cut corners on database security protocols.'],
                  ['Bite the bullet', 'Menggigit peluru', 'Menghadapi situasi sulit yang tak terhindarkan', 'We have to bite the bullet and refactor legacy code.'],
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
