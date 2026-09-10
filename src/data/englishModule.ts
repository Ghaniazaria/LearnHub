import { Module } from '../types';

export const DEFAULT_ENGLISH_MODULE: Module = {
  id: 'bahasa-inggris',
  badge: 'MATRIKS 16 TENSES LENGKAP & TATA BAHASA PENDUKUNG · 10 BAB · 20 MATERI',
  title: 'MODUL PEMBELAJARAN TATA BAHASA INGGRIS',
  description:
    'Panduan komprehensif terlengkap penguasaan 16 Tenses bahasa Inggris disertai contoh kalimat positif (+), negatif (-), dan tanya (?) beserta artinya dalam bahasa Indonesia, serta materi pendukung esensial: Gerund & Infinitive, Participles, Passive Voice, Modals, Causative Verbs, Reported Speech, Conditionals, Relative Clauses, Degrees of Comparison, dan Question Tags.',
  category: 'Bahasa & Komunikasi Global',
  ctaText: 'MULAI DARI BAB 01 →',
  chapters: [
    {
      id: 'eng-ch-01',
      number: '01',
      title: 'Matriks 16 Tenses & Present Tenses',
      summary: 'Perbandingan 16 tenses dalam satu kalimat yang sama, serta rumus dan contoh kalimat lengkap 4 Present Tenses.',
      lessons: [
        {
          id: 'matriks-16-tenses',
          title: 'Matriks Lengkap 16 Tenses: Perubahan 1 Kalimat Lintas Tenses',
          summary: 'Memahami 16 tenses secara visual melalui transformasi satu kalimat yang sama ("I learn English") agar langsung paham perbedaannya.',
          estimatedMinutes: 12,
          tags: ['16-tenses', 'grammar-matrix', 'aspect', 'timeline', 'contoh-kalimat'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Konsep Dasar: 4 Dimensi Waktu × 4 Aspek Kejadian = 16 Bentuk Kalimat',
                content:
                  'Bahasa Inggris membagi waktu menjadi 4 (Present = Sekarang, Past = Lampau, Future = Masa Depan, Past Future = Rencana Masa Lalu). Setiap waktu memiliki 4 cara kejadian berlangsung (Simple = Fakta/Rutin, Continuous = Sedang berlangsung, Perfect = Sudah selesai, Perfect Continuous = Sudah dan masih berlangsung).',
              },
            },
            {
              type: 'heading2',
              text: 'Tabel Transformasi 1 Kalimat ("I learn English") dalam 16 Tenses',
            },
            {
              type: 'paragraph',
              text: 'Perhatikan bagaimana satu kalimat sederhana berubah maknanya ketika dimasukkan ke dalam 16 tenses yang berbeda:',
            },
            {
              type: 'table',
              tableData: {
                headers: ['No', 'Nama Tense', 'Bentuk Kalimat Bahasa Inggris', 'Arti & Maksud dalam Bahasa Indonesia'],
                rows: [
                  ['01', 'Simple Present', 'I learn English every day.', 'Saya belajar bahasa Inggris setiap hari. (Kebiasaan rutin/fakta).'],
                  ['02', 'Present Continuous', 'I am learning English right now.', 'Saya sedang belajar bahasa Inggris sekarang. (Sedang berlangsung saat ini).'],
                  ['03', 'Present Perfect', 'I have learned English for two years.', 'Saya sudah belajar bahasa Inggris selama dua tahun. (Sudah dilakukan, hasilnya terasa sekarang).'],
                  ['04', 'Present Perfect Continuous', 'I have been learning English since morning.', 'Saya sudah dan masih terus belajar bahasa Inggris sejak pagi. (Menekankan durasi yang belum selesai).'],
                  ['05', 'Simple Past', 'I learned English yesterday.', 'Saya belajar bahasa Inggris kemarin. (Kejadian sudah selesai di masa lalu).'],
                  ['06', 'Past Continuous', 'I was learning English when you called.', 'Saya sedang belajar bahasa Inggris ketika kamu menelepon kemarin. (Aksi sedang berlangsung di masa lampau lalu diinterupsi).'],
                  ['07', 'Past Perfect', 'I had learned English before moving to London.', 'Saya sudah belajar bahasa Inggris sebelum pindah ke London. (Selesai sebelum peristiwa lampau lainnya terjadi).'],
                  ['08', 'Past Perfect Continuous', 'I had been learning English for an hour before the teacher came.', 'Saya sudah sedang belajar bahasa Inggris selama 1 jam sebelum guru datang kemarin.'],
                  ['09', 'Simple Future', 'I will learn English tomorrow.', 'Saya akan belajar bahasa Inggris besok. (Rencana/keputusan masa depan).'],
                  ['10', 'Future Continuous', 'I will be learning English at 8 PM tonight.', 'Saya akan sedang belajar bahasa Inggris pada jam 8 malam nanti. (Sedang berlangsung di masa depan).'],
                  ['11', 'Future Perfect', 'I will have learned all 16 tenses by next week.', 'Saya akan sudah selesai mempelajari 16 tenses sebelum minggu depan tiba.'],
                  ['12', 'Future Perfect Continuous', 'By next year, I will have been learning English for three years.', 'Menjelang tahun depan, saya akan sudah belajar bahasa Inggris selama tiga tahun penuh.'],
                  ['13', 'Simple Past Future', 'I would learn English if I had more time.', 'Saya akan belajar bahasa Inggris seandainya saya punya waktu luang. (Pengandaian masa kini/lampau).'],
                  ['14', 'Past Future Continuous', 'I would be learning English right now if the power were not out.', 'Saya seharusnya sedang belajar bahasa Inggris sekarang seandainya listrik tidak padam.'],
                  ['15', 'Past Future Perfect', 'I would have learned English if you had reminded me.', 'Saya pasti sudah belajar bahasa Inggris kemarin seandainya kamu mengingatkan saya.'],
                  ['16', 'Past Future Perfect Continuous', 'I would have been learning English for two hours by noon if the class had started.', 'Saya seharusnya sudah sedang belajar bahasa Inggris selama 2 jam menjelang siang kemarin jika kelas dimulai tepat waktu.'],
                ],
              },
            },
          ],
        },
        {
          id: 'four-present-tenses',
          title: '4 Present Tenses: Rumus & Contoh Kalimat (+ / - / ?)',
          summary: 'Contoh kalimat positif, negatif, dan tanya untuk Simple Present, Present Continuous, Present Perfect, dan Present Perfect Continuous.',
          estimatedMinutes: 14,
          tags: ['present-simple', 'present-continuous', 'present-perfect', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: '1. Simple Present Tense (Fakta, Kebiasaan & Rutinitas)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus Verbal:
(+) S + V1 (s/es) + O
(-) S + do/does + not + V1 + O
(?) Do/Does + S + V1 + O?

Contoh Kalimat:
(+) He plays football every Sunday.
    (Dia bermain sepak bola setiap hari Minggu.)
(-) He does not play football on weekdays.
    (Dia tidak bermain sepak bola pada hari kerja.)
(?) Does he play football with his friends?
    (Apakah dia bermain sepak bola bersama teman-temannya?)

Rumus Nominal (Tanpa Kata Kerja / Menggunakan to be: is/am/are):
(+) She is a talented graphic designer. (Dia adalah seorang desainer grafis berbakat.)
(-) She is not at the office today. (Dia tidak sedang di kantor hari ini.)
(?) Is she ready for the presentation? (Apakah dia siap untuk presentasi?)`,
            },
            {
              type: 'heading2',
              text: '2. Present Continuous Tense (Sedang Terjadi Saat Ini)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + is/am/are + V-ing + O
(-) S + is/am/are + not + V-ing + O
(?) Is/Am/Are + S + V-ing + O?

Contoh Kalimat:
(+) We are studying English right now.
    (Kita sedang belajar bahasa Inggris saat ini.)
(-) We are not watching television at the moment.
    (Kita sedang tidak menonton televisi saat ini.)
(?) Are you listening to what I am saying?
    (Apakah kamu sedang mendengarkan apa yang saya katakan?)`,
            },
            {
              type: 'heading2',
              text: '3. Present Perfect Tense (Sudah Selesai / Terjadi, Relevan Sekarang)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + have/has + V3 (Past Participle) + O
(-) S + have/has + not + V3 + O
(?) Have/Has + S + V3 + O?

Catatan Subjek:
• I / You / We / They -> HAVE
• He / She / It -> HAS

Contoh Kalimat:
(+) I have finished my homework.
    (Saya sudah menyelesaikan pekerjaan rumah saya.)
(-) She has not eaten lunch yet.
    (Dia belum makan siang sampai sekarang.)
(?) Have you ever visited Bali?
    (Apakah kamu pernah berkunjung ke Bali?)`,
            },
            {
              type: 'heading2',
              text: '4. Present Perfect Continuous Tense (Sudah dan Masih Terus Berlangsung)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + have/has + been + V-ing + O
(-) S + have/has + not + been + V-ing + O
(?) Have/Has + S + been + V-ing + O?

Contoh Kalimat:
(+) It has been raining for three hours.
    (Hujan sudah turun selama tiga jam dan sampai sekarang masih hujan.)
(-) They have not been working here for very long.
    (Mereka belum bekerja di sini lama.)
(?) How long have you been waiting for the bus?
    (Sudah berapa lama kamu menunggu bus itu?)`,
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-02',
      number: '02',
      title: 'Past Tenses & Relasi Waktu Lampau',
      summary: 'Rumus dan contoh kalimat (+, -, ?) untuk 4 Past Tenses dan interaksi konektor waktu When vs While.',
      lessons: [
        {
          id: 'four-past-tenses',
          title: '4 Past Tenses: Rumus & Contoh Kalimat (+ / - / ?)',
          summary: 'Simple Past, Past Continuous, Past Perfect, dan Past Perfect Continuous dengan contoh kalimat terjemahan lengkap.',
          estimatedMinutes: 14,
          tags: ['past-simple', 'past-continuous', 'past-perfect', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: '1. Simple Past Tense (Kejadian Selesai di Masa Lalu)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus Verbal:
(+) S + V2 + O
(-) S + did not + V1 + O  (Ingat: setelah "did not", kata kerja kembali ke V1!)
(?) Did + S + V1 + O?

Contoh Kalimat:
(+) I bought a new laptop yesterday.
    (Saya membeli laptop baru kemarin.)
(-) I did not buy the expensive one.
    (Saya tidak membeli yang mahal.)
(?) Did you buy the laptop online?
    (Apakah kamu membeli laptop itu secara online?)

Rumus Nominal (was / were):
(+) He was sick last Monday. (Dia sakit hari Senin lalu.)
(-) They were not at home last night. (Mereka tidak ada di rumah tadi malam.)
(?) Were you surprised by the news? (Apakah kamu terkejut oleh berita itu?)`,
            },
            {
              type: 'heading2',
              text: '2. Past Continuous Tense (Sedang Terjadi di Masa Lampau)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + was/were + V-ing + O
(-) S + was/were + not + V-ing + O
(?) Was/Were + S + V-ing + O?

Contoh Kalimat:
(+) I was sleeping at 11:00 PM last night.
    (Saya sedang tidur pada jam 11 malam tadi malam.)
(-) She was not driving when the accident occurred.
    (Dia tidak sedang menyetir ketika kecelakaan itu terjadi.)
(?) What were you doing when I called you?
    (Apa yang sedang kamu lakukan ketika saya meneleponmu?)`,
            },
            {
              type: 'heading2',
              text: '3. Past Perfect Tense (Sudah Selesai Sebelum Kejadian Lampau Lain)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + had + V3 + O
(-) S + had + not + V3 + O
(?) Had + S + V3 + O?

Contoh Kalimat:
(+) The train had already left before we arrived at the station.
    (Kereta sudah berangkat sebelum kami tiba di stasiun.)
(-) He had not saved his document before the computer crashed.
    (Dia belum menyimpan dokumennya sebelum komputernya mendadak rusak.)
(?) Had you studied English before you moved to Canada?
    (Apakah kamu sudah belajar bahasa Inggris sebelum kamu pindah ke Kanada?)`,
            },
            {
              type: 'heading2',
              text: '4. Past Perfect Continuous Tense (Durasi Lampau Sebelum Titik Tertentu)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + had been + V-ing + O
(-) S + had not been + V-ing + O
(?) Had + S + been + V-ing + O?

Contoh Kalimat:
(+) They had been walking for two hours before they finally found the road.
    (Mereka sudah berjalan selama dua jam sebelum akhirnya menemukan jalan raya.)
(-) She was not tired because she had not been working hard that day.
    (Dia tidak lelah karena dia tidak bekerja keras hari itu.)
(?) Had you been waiting long before the doctor called your name?
    (Apakah kamu sudah menunggu lama sebelum dokter memanggil namamu?)`,
            },
          ],
        },
        {
          id: 'past-time-connectors',
          title: 'Kombinasi Past Tenses: When vs While & Urutan Waktu',
          summary: 'Contoh kalimat penggabungan dua kejadian masa lampau menggunakan When, While, Before, After, dan By the time.',
          estimatedMinutes: 10,
          tags: ['when-while', 'before-after', 'by-the-time', 'konektor'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat Praktis Penggunaan When vs While',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Konektor', 'Pola Kalimat', 'Contoh Kalimat Bahasa Inggris', 'Arti Bahasa Indonesia'],
                rows: [
                  [
                    'While (Sedang)',
                    'While + Past Continuous, Simple Past',
                    'While my mother was cooking, the doorbell rang.',
                    'Ketika ibu saya sedang memasak, bel pintu berbunyi (interupsi).',
                  ],
                  [
                    'While (Bersamaan)',
                    'Past Continuous + while + Past Continuous',
                    'I was reading a book while my brother was playing games.',
                    'Saya sedang membaca buku sementara adik saya sedang bermain game (dua aktivitas simultan).',
                  ],
                  [
                    'When (Tiba-tiba)',
                    'Past Continuous + when + Simple Past',
                    'The students were taking an exam when the alarm went off.',
                    'Para siswa sedang mengikuti ujian ketika alarm tiba-tiba berbunyi.',
                  ],
                  [
                    'By the time',
                    'By the time + Simple Past, Past Perfect',
                    'By the time the ambulance arrived, the patient had recovered.',
                    'Pada saat ambulans tiba, pasien sudah pulih lebih dulu.',
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-03',
      number: '03',
      title: 'Future & Past Future Tenses',
      summary: 'Rumus dan contoh kalimat (+, -, ?) untuk 4 Future Tenses dan 4 Past Future Tenses.',
      lessons: [
        {
          id: 'four-future-tenses',
          title: '4 Future Tenses: Rumus & Contoh Kalimat (+ / - / ?)',
          summary: 'Simple Future (will vs be going to), Future Continuous, Future Perfect, dan Future Perfect Continuous.',
          estimatedMinutes: 13,
          tags: ['future-simple', 'future-continuous', 'future-perfect', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: '1. Simple Future Tense (Akan Datang)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Pola 1 (Spontan / Janji / Prediksi): S + will + V1
(+) I will call you as soon as I arrive.
    (Saya akan meneleponmu segera setelah saya sampai.)
(-) I will not (won't) tell your secret to anyone.
    (Saya tidak akan memberi tahu rahasiamu kepada siapa pun.)
(?) Will you come to my birthday party tomorrow?
    (Maukah kamu datang ke pesta ulang tahunku besok?)

Pola 2 (Rencana Matang / Tanda Pasti): S + am/is/are going to + V1
(+) Look at those black clouds! It is going to rain.
    (Lihat awan-awan hitam itu! Hujan akan segera turun.)
(-) We are not going to move to a new apartment next month.
    (Kami tidak jadi pindah ke apartemen baru bulan depan.)
(?) Are you going to buy that red jacket?
    (Apakah kamu berniat membeli jaket merah itu?)`,
            },
            {
              type: 'heading2',
              text: '2. Future Continuous Tense (Akan Sedang Berlangsung di Masa Depan)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + will be + V-ing + O
(-) S + will not be + V-ing + O
(?) Will + S + be + V-ing + O?

Contoh Kalimat:
(+) This time tomorrow, I will be flying to Japan.
    (Pada jam seperti ini besok, saya akan sedang terbang menuju Jepang.)
(-) Do not call him at 9 PM; he will not be working then.
    (Jangan telepon dia jam 9 malam; dia tidak akan sedang bekerja waktu itu.)
(?) Will you be using the car this afternoon?
    (Apakah kamu akan sedang memakai mobil ini siang nanti?)`,
            },
            {
              type: 'heading2',
              text: '3. Future Perfect Tense (Akan Sudah Selesai Sebelum Waktu Tertentu)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + will have + V3 + O
(-) S + will not have + V3 + O
(?) Will + S + have + V3 + O?

Contoh Kalimat:
(+) By 5:00 PM, I will have finished writing this essay.
    (Menjelang jam 5 sore, saya akan sudah selesai menulis esai ini.)
(-) They will not have built the bridge by next December.
    (Mereka belum akan menyelesaikan pembangunan jembatan itu sebelum Desember depan.)
(?) Will you have graduated from university by 2028?
    (Apakah kamu akan sudah lulus dari universitas sebelum tahun 2028?)`,
            },
            {
              type: 'heading2',
              text: '4. Future Perfect Continuous Tense (Durasi Panjang di Masa Depan)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus:
(+) S + will have been + V-ing + O
(-) S + will not have been + V-ing + O
(?) Will + S + have been + V-ing + O?

Contoh Kalimat:
(+) Next month, she will have been living in this city for ten years.
    (Bulan depan, dia akan genap sudah tinggal di kota ini selama sepuluh tahun.)
(?) Will you have been working here for five years by next August?
    (Apakah kamu akan sudah bekerja di sini selama lima tahun menjelang Agustus depan?)`,
            },
          ],
        },
        {
          id: 'four-past-future-tenses',
          title: '4 Past Future Tenses: Rumus & Contoh Kalimat (+ / - / ?)',
          summary: 'Simple Past Future (would), Continuous, Perfect (would have + V3), dan Perfect Continuous.',
          estimatedMinutes: 12,
          tags: ['past-future', 'would', 'hypothetical', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat Lengkap 4 Past Future Tenses',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tense', 'Rumus (+ / - / ?)', 'Contoh Kalimat Bahasa Inggris', 'Arti Bahasa Indonesia'],
                rows: [
                  [
                    'Simple Past Future',
                    '(+) S + would + V1\n(-) S + would not + V1\n(?) Would + S + V1?',
                    '(+) He said he would help me with the project.\n(-) I told her I would not be late.\n(?) Would you accept the job offer if they called?',
                    '(+) Dia bilang dia akan membantu saya menyelesaikan proyek itu.\n(-) Saya mengatakan padanya bahwa saya tidak akan terlambat.\n(?) Apakah kamu akan menerima tawaran kerja itu jika mereka menelepon?',
                  ],
                  [
                    'Past Future Continuous',
                    '(+) S + would be + V-ing\n(-) S + would not be + V-ing\n(?) Would + S + be + V-ing?',
                    '(+) I thought you would be studying at the library.\n(-) She would not be crying if he had treated her well.\n(?) Would they be sleeping at this hour yesterday?',
                    '(+) Saya kira kamu sedang belajar di perpustakaan kemarin.\n(-) Dia tidak akan sedang menangis seandainya pria itu memperlakukannya dengan baik.\n(?) Apakah mereka sedang tidur pada jam segini kemarin?',
                  ],
                  [
                    'Past Future Perfect',
                    '(+) S + would have + V3\n(-) S + would not have + V3\n(?) Would + S + have + V3?',
                    '(+) We would have won the game if our striker had not been injured.\n(-) I would not have known the truth without your help.\n(?) Would you have forgiven him if he had apologized?',
                    '(+) Kita pasti sudah memenangkan pertandingan itu seandainya penyerang kita tidak cedera.\n(-) Saya tidak akan pernah tahu kebenaran ini tanpa bantuanmu.\n(?) Apakah kamu akan memaafkannya seandainya dulu dia meminta maaf?',
                  ],
                  [
                    'Past Future Perfect Continuous',
                    '(+) S + would have been + V-ing\n(-) S + would not have been + V-ing',
                    '(+) If the flight had departed on time, we would have been sitting on the beach for hours by yesterday afternoon.',
                    '(+) Seandainya penerbangan berangkat tepat waktu, kita seharusnya sudah sedang duduk di pantai selama berjam-jam menjelang kemarin sore.',
                  ],
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
      title: 'Gerund, Infinitive & Participles',
      summary: 'Penjelasan tuntas Gerund (V-ing sebagai Noun), To-Infinitive, daftar kata kerja, serta contoh perbandingan makna kalimat.',
      lessons: [
        {
          id: 'gerund-and-infinitive',
          title: 'Gerund vs To-Infinitive: Contoh Kalimat & Perbedaan Makna',
          summary: 'Contoh kalimat Gerund sebagai subjek/objek/preposisi, kata kerja wajib Gerund, wajib Infinitive, dan perubahan makna kata kerja.',
          estimatedMinutes: 15,
          tags: ['gerund', 'infinitive', 'contoh-kalimat', 'perbedaan-makna'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Kunci Mudah Memahami Gerund: "Verb yang Berubah Menjadi Kata Benda"',
                content:
                  'Gerund dibentuk dari Verb + -ing, tetapi memiliki peran sebagai kata benda (Noun). Misalnya kata kerja "swim" (berenang) diubah menjadi gerund "swimming" (kegiatan berenang).',
              },
            },
            {
              type: 'heading2',
              text: '1. Contoh Gerund Berdasarkan Posisinya dalam Kalimat',
            },
            {
              type: 'code',
              language: 'text',
              code: `a. Gerund Sebagai Subjek Kalimat (Di Awal Kalimat):
• "Swimming is the best exercise for heart health."
  (Berenang adalah latihan terbaik untuk kesehatan jantung.)
• "Smoking causes serious damage to your lungs."
  (Merokok menyebabkan kerusakan serius pada paru-paru Anda.)
• "Learning a second language improves memory."
  (Mempelajari bahasa kedua meningkatkan daya ingat.)

b. Gerund Sebagai Objek Kata Kerja:
• "She enjoys reading historical novels."
  (Dia menikmati membaca novel-novel sejarah.)
• "I practice speaking English with native speakers."
  (Saya berlatih berbicara bahasa Inggris dengan penutur asli.)

c. Gerund Setelah Preposisi (Prepositional Complement):
*INGAT: Semua kata kerja yang berada tepat setelah kata depan (in, on, at, about, for, without, by, after, before) WAJIB GERUND!*
• "He left the room without saying goodbye."
  (Dia meninggalkan ruangan tanpa mengucapkan selamat tinggal.)
• "Thank you for helping me with the task."
  (Terima kasih telah membantu saya menyelesaikan tugas itu.)
• "She is interested in learning computer science."
  (Dia tertarik untuk mempelajari ilmu komputer.)`,
            },
            {
              type: 'heading2',
              text: '2. Kata Kerja yang WAJIB Diikuti Gerund vs To-Infinitive',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Kelompok', 'Kata Kerja', 'Contoh Kalimat Bahasa Inggris', 'Arti Bahasa Indonesia'],
                rows: [
                  ['Wajib GERUND', 'avoid (menghindari)', 'You should avoid eating too much sugar.', 'Kamu sebaiknya menghindari makan gula berlebihan.'],
                  ['Wajib GERUND', 'mind (keberatan)', 'Would you mind closing the window, please?', 'Apakah Anda keberatan menutup jendela itu?'],
                  ['Wajib GERUND', 'finish (selesai)', 'Have you finished writing the report?', 'Apakah kamu sudah selesai menulis laporan itu?'],
                  ['Wajib GERUND', 'suggest (menyarankan)', 'The doctor suggested taking a short walk.', 'Dokter menyarankan jalan santai sejenak.'],
                  ['Wajib GERUND', 'look forward to (menantikan)', 'I look forward to meeting you next week.', 'Saya sangat menantikan bertemu dengan Anda minggu depan (Ingat: to di sini preposisi!).'],
                  ['Wajib INFINITIVE', 'decide (memutuskan)', 'We decided to buy a smaller car.', 'Kami memutuskan untuk membeli mobil yang lebih kecil.'],
                  ['Wajib INFINITIVE', 'promise (berjanji)', 'He promised to call me tonight.', 'Dia berjanji untuk menelepon saya malam ini.'],
                  ['Wajib INFINITIVE', 'hope (berharap)', 'I hope to pass the English exam.', 'Saya berharap bisa lulus ujian bahasa Inggris.'],
                  ['Wajib INFINITIVE', 'refuse (menolak)', 'She refused to give up hope.', 'Dia menolak untuk berputus asa.'],
                ],
              },
            },
            {
              type: 'heading2',
              text: '3. Pasangan Contoh Kata Kerja yang Berubah Makna Total',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. STOP:
• "He stopped smoking."
  -> Artinya: Dia berhenti merokok (dia sudah tidak pernah merokok lagi).
• "He stopped to smoke."
  -> Artinya: Dia menghentikan aktivitas berjalannya/kerjanya UNTUK merokok sejenak.

2. REMEMBER:
• "I remember locking the door."
  -> Artinya: Saya ingat momen masa lalu ketika saya mengunci pintu itu.
• "Remember to lock the door before leaving!"
  -> Artinya: Ingatlah/jangan lupa untuk mengunci pintu sebelum pergi!

3. FORGET:
• "I will never forget meeting the President."
  -> Artinya: Saya tidak akan pernah lupa kenangan saat bertemu Presiden dulu.
• "Don't forget to pay the electricity bill!"
  -> Artinya: Jangan sampai lupa untuk membayar tagihan listrik!

4. TRY:
• "Try adding a pinch of salt to the soup."
  -> Artinya: Cobalah menambahkan sedikit garam ke sup itu sebagai eksperimen rasa.
• "He tried to push the heavy car by himself."
  -> Artinya: Dia berusaha sekuat tenaga mendorong mobil berat itu sendirian.`,
            },
          ],
        },
        {
          id: 'participles-and-participial-phrases',
          title: 'Participles: Present (-ing) vs Past (-ed/V3) dengan Contoh',
          summary: 'Membedakan sifat aktif (-ing) vs pasif (-ed) pada kata sifat dan contoh kalimat gabungan.',
          estimatedMinutes: 10,
          tags: ['participles', 'adjectives', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Perbandingan Makna Kata Sifat Participle',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Pasangan Kata Sifat', 'Contoh Present Participle (-ing)', 'Contoh Past Participle (-ed/V3)'],
                rows: [
                  [
                    'boring vs bored',
                    '"The lecture was very boring."\n(Kuliahnya sangat membosankan - penyebab rasa).',
                    '"The students felt bored."\n(Para mahasiswa merasa bosan - yang merasakan dampak).',
                  ],
                  [
                    'confusing vs confused',
                    '"The map instructions are confusing."\n(Petunjuk petanya membingungkan).',
                    '"I am completely confused by the map."\n(Saya benar-benar bingung oleh peta itu).',
                  ],
                  [
                    'interesting vs interested',
                    '"This is a very interesting book."\n(Ini adalah buku yang sangat menarik).',
                    '"She is interested in photography."\n(Dia tertarik pada bidang fotografi).',
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-05',
      number: '05',
      title: 'Passive Voice & Causative Verbs',
      summary: 'Contoh perubahan kalimat aktif menjadi pasif di semua tenses serta penggunaan kalimat kausatif (have, get, make, let).',
      lessons: [
        {
          id: 'passive-voice-complete',
          title: 'Passive Voice: Contoh Kalimat Aktif vs Pasif Lengkap Lintas Tenses',
          summary: 'Transformasi kalimat aktif ke pasif dengan rumus S + be + V3 dan terjemahan bahasa Indonesia yang jelas.',
          estimatedMinutes: 14,
          tags: ['passive-voice', 'contoh-kalimat', 'transformasi-aktif-pasif'],
          sections: [
            {
              type: 'heading2',
              text: 'Tabel Perubahan Kalimat Aktif ke Pasif di Berbagai Tense',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tense', 'Kalimat Aktif (Active Voice)', 'Kalimat Pasif (Passive Voice)', 'Arti Kalimat Pasif'],
                rows: [
                  [
                    'Simple Present',
                    'The janitor cleans the classrooms every morning.',
                    'The classrooms are cleaned by the janitor every morning.',
                    'Ruang-ruang kelas dibersihkan oleh petugas kebersihan setiap pagi.',
                  ],
                  [
                    'Present Continuous',
                    'The mechanic is repairing my motorcycle right now.',
                    'My motorcycle is being repaired by the mechanic right now.',
                    'Sepeda motor saya sedang diperbaiki oleh montir saat ini.',
                  ],
                  [
                    'Simple Past',
                    'Alexander Graham Bell invented the telephone in 1876.',
                    'The telephone was invented by Alexander Graham Bell in 1876.',
                    'Telepon diciptakan oleh Alexander Graham Bell pada tahun 1876.',
                  ],
                  [
                    'Past Continuous',
                    'They were painting the house when it started to rain.',
                    'The house was being painted when it started to rain.',
                    'Rumah itu sedang dicat ketika hujan mulai turun.',
                  ],
                  [
                    'Present Perfect',
                    'The company has published the financial report.',
                    'The financial report has been published by the company.',
                    'Laporan keuangan telah diterbitkan oleh perusahaan itu.',
                  ],
                  [
                    'Past Perfect',
                    'Someone had stolen the car before the police arrived.',
                    'The car had been stolen before the police arrived.',
                    'Mobil itu telah dicuri sebelum polisi tiba.',
                  ],
                  [
                    'Simple Future',
                    'The courier will deliver the package tomorrow.',
                    'The package will be delivered by the courier tomorrow.',
                    'Paket itu akan diantarkan oleh kurir besok.',
                  ],
                  [
                    'Modal Verbs',
                    'You must wear a helmet on a motorbike.',
                    'A helmet must be worn on a motorbike.',
                    'Helm harus dikenakan saat mengendarai sepeda motor.',
                  ],
                ],
              },
            },
          ],
        },
        {
          id: 'causative-verbs',
          title: 'Causative Verbs (Have, Get, Make, Let, Help) dengan Contoh Kalimat',
          summary: 'Menyuruh atau meminta orang lain mengerjakan sesuatu: perbedaan pola aktif vs pasif.',
          estimatedMinutes: 11,
          tags: ['causative', 'have-get-make-let', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat Kausatif Aktif vs Pasif',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. MAKE (Memaksa / Mengharuskan seseorang):
• "The strict coach makes the athletes run five miles every day."
  (Pelatih yang tegas itu menyuruh/memaksa para atlet berlari sejauh lima mil setiap hari.)

2. HAVE (Mendelegasikan tugas ke profesional / orang lain):
• Aktif: "I had the technician check my laptop."
  (Saya menyuruh/meminta teknisi itu memeriksa laptop saya - bare infinitive: check.)
• Pasif: "I had my laptop checked."
  (Saya memeriksakan laptop saya ke tukang servis - pakai V3: checked.)

3. GET (Membujuk atau meyakinkan seseorang):
• Aktif: "She got her brother to wash her car."
  (Dia berhasil membujuk saudaranya untuk mencuci mobilnya - pakai 'to wash'!)
• Pasif: "She got her car washed."
  (Dia mencucikan mobilnya ke tempat cuci mobil.)

4. LET (Memberi izin / membiarkan):
• "My parents let me study abroad in Australia."
  (Orang tua saya mengizinkan saya kuliah di luar negeri di Australia.)

5. HELP (Membantu meringankan):
• "This English grammar app helps me understand difficult concepts."
  (Aplikasi tata bahasa Inggris ini membantu saya memahami konsep-konsep sulit.)`,
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-06',
      number: '06',
      title: 'Modals & Modal Perfect',
      summary: 'Penggunaan can, could, must, should serta spekulasi masa lalu (must have, should have, could have + V3).',
      lessons: [
        {
          id: 'modal-auxiliaries',
          title: 'Modal Auxiliaries: Fungsi & Contoh Kalimat Nyata',
          summary: 'Mengekspresikan kemampuan, izin, kewajiban, saran, dan kemungkinan dengan modal verbs.',
          estimatedMinutes: 11,
          tags: ['modals', 'contoh-kalimat', 'obligation', 'permission'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Penggunaan Modal Auxiliaries',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Modal Verb', 'Fungsi Utama', 'Contoh Kalimat Bahasa Inggris', 'Arti Bahasa Indonesia'],
                rows: [
                  ['Can / Could', 'Kemampuan (Ability)', 'She can speak three languages fluently.\nI could swim when I was five years old.', 'Dia bisa berbicara tiga bahasa dengan lancar.\nSaya dulu bisa berenang ketika berumur 5 tahun.'],
                  ['May / Can', 'Izin Sopan (Permission)', 'May I borrow your dictionary, please?', 'Bolehkah saya meminjam kamus Anda?'],
                  ['Must', 'Kewajiban Mutlak (Obligation)', 'All drivers must stop at the red light.', 'Semua pengemudi wajib berhenti saat lampu merah.'],
                  ['Must not', 'Larangan Keras (Prohibition)', 'You must not use your phone during the flight takeoff.', 'Kamu tidak boleh menggunakan ponsel saat pesawat lepas landas.'],
                  ['Should', 'Saran / Anjuran (Advice)', 'You look exhausted; you should get some rest.', 'Kamu tampak sangat lelah; kamu sebaiknya beristirahat.'],
                  ['Might / May', 'Kemungkinan (Possibility 50%)', 'Take an umbrella; it might rain this afternoon.', 'Bawalah payung; nanti siang mungkin hujan.'],
                ],
              },
            },
          ],
        },
        {
          id: 'modal-perfect-deduction',
          title: 'Modal Perfect (Must have, Should have, Could have + V3)',
          summary: 'Menganalisis kejadian masa lalu: penyesalan, spekulasi bukti, dan peluang yang terlewat.',
          estimatedMinutes: 12,
          tags: ['modal-perfect', 'regret', 'contoh-kalimat', 'deduksi-lampau'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat Modal Perfect Beserta Konteks Nyatanya',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. MUST HAVE + V3 (Pasti sudah - 95% yakin berdasarkan bukti nyata):
• Kalimat: "The grass is wet this morning; it must have rained last night."
• Arti: Rumputnya basah pagi ini; tadi malam pasti sudah turun hujan.
• Konteks: Bukti rumput basah membuktikan hujan pasti sudah terjadi.

2. SHOULD HAVE + V3 (Seharusnya sudah - Penyesalan karena TIDAK dilakukan):
• Kalimat: "I failed the test; I should have studied harder."
• Arti: Saya gagal dalam tes itu; seharusnya saya dulu belajar lebih giat.
• Konteks: Faktanya dulu saya tidak belajar giat, sekarang saya menyesal.

3. SHOULD NOT HAVE + V3 (Seharusnya TIDAK - Penyesalan karena TERLANJUR dilakukan):
• Kalimat: "My stomach hurts; I should not have eaten that spicy sambal."
• Arti: Perut saya sakit; seharusnya saya tidak memakan sambal pedas itu tadi.
• Konteks: Faktanya saya sudah terlanjur memakannya dan sekarang sakit perut.

4. COULD HAVE + V3 (Sebenarnya bisa/mampu, tapi tidak diambil):
• Kalimat: "I could have bought that house five years ago, but I chose to invest elsewhere."
• Arti: Saya sebenarnya mampu membeli rumah itu 5 tahun lalu, tapi saya memilih berinvestasi di tempat lain.

5. COULDN'T HAVE + V3 (Mustahil sudah terjadi):
• Kalimat: "He couldn't have stolen the wallet because he was in another city all day."
• Arti: Mustahil dia yang mencuri dompet itu karena dia berada di kota lain sepanjang hari.`,
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-07',
      number: '07',
      title: 'Direct & Indirect Speech (Reported Speech)',
      summary: 'Cara mengubah kalimat langsung menjadi kalimat tidak langsung (pernyataan, pertanyaan, perintah) beserta contohnya.',
      lessons: [
        {
          id: 'reported-statements-backshift',
          title: 'Reported Statements: Contoh Kalimat Langsung vs Tidak Langsung',
          summary: 'Aturan pergeseran tenses mundur (backshift) saat reporting verb berbentuk lampau (said/told).',
          estimatedMinutes: 13,
          tags: ['reported-speech', 'direct-indirect', 'contoh-kalimat', 'backshift'],
          sections: [
            {
              type: 'heading2',
              text: 'Perbandingan Kalimat Langsung vs Kalimat Lapor (Pernyataan)',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tense Asli', 'Kalimat Langsung (Direct Speech)', 'Kalimat Tidak Langsung (Reported Speech)', 'Arti Bahasa Indonesia'],
                rows: [
                  [
                    'Simple Present -> Simple Past',
                    'Budi said, "I live in Surabaya."',
                    'Budi said that he lived in Surabaya.',
                    'Budi mengatakan bahwa dia tinggal di Surabaya.',
                  ],
                  [
                    'Present Continuous -> Past Continuous',
                    'Ani said, "I am cooking dinner now."',
                    'Ani said that she was cooking dinner then.',
                    'Ani mengatakan bahwa dia sedang memasak makan malam saat itu.',
                  ],
                  [
                    'Simple Past -> Past Perfect',
                    'John said, "I bought a new car yesterday."',
                    'John said that he had bought a new car the day before.',
                    'John mengatakan bahwa dia telah membeli mobil baru sehari sebelumnya.',
                  ],
                  [
                    'Present Perfect -> Past Perfect',
                    'They said, "We have finished our project."',
                    'They said that they had finished their project.',
                    'Mereka mengatakan bahwa mereka sudah menyelesaikan proyek mereka.',
                  ],
                  [
                    'Simple Future -> Past Future',
                    'Sarah said, "I will travel to Paris next month."',
                    'Sarah said that she would travel to Paris the following month.',
                    'Sarah mengatakan bahwa dia akan bepergian ke Paris bulan berikutnya.',
                  ],
                ],
              },
            },
          ],
        },
        {
          id: 'reported-questions-commands',
          title: 'Reported Questions & Commands: Contoh Pertanyaan & Perintah',
          summary: 'Melaporkan pertanyaan dengan Wh- atau If/Whether, serta perintah/larangan menggunakan to-infinitive.',
          estimatedMinutes: 11,
          tags: ['reported-questions', 'commands', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat Reported Questions (Tanya) & Commands (Perintah)',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. Pertanyaan Yes/No (Gunakan "if" atau "whether" + Subject + Verb):
• Direct: Lisa asked, "Are you hungry?"
• Reported: Lisa asked if I was hungry.
  (Lisa bertanya apakah saya lapar.)

• Direct: My father asked, "Did you lock the front gate?"
• Reported: My father asked whether I had locked the front gate.
  (Ayah saya bertanya apakah saya sudah mengunci pagar depan.)

2. Pertanyaan Wh- (Gunakan kata tanya sebagai penghubung + Subject + Verb):
• Direct: The police officer asked, "Where do you live?"
• Reported: The police officer asked where I lived.
  (Petugas polisi itu bertanya di mana saya tinggal - BUKAN: where did I live!)

• Direct: She asked, "Why are you crying?"
• Reported: She asked why I was crying.
  (Dia bertanya mengapa saya sedang menangis.)

3. Kalimat Perintah & Larangan (Gunakan "told + to / not to + V1"):
• Perintah: The teacher said, "Open your books to page 50!"
• Reported: The teacher told the students to open their books to page 50.
  (Guru menyuruh para siswa untuk membuka buku mereka ke halaman 50.)

• Larangan: The doctor said, "Do not drink cold water!"
• Reported: The doctor told me not to drink cold water.
  (Dokter menyuruh saya untuk tidak meminum air dingin.)`,
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-08',
      number: '08',
      title: 'Conditionals & Subjunctive Mood',
      summary: 'Kalimat pengandaian (Type 0, 1, 2, 3) dan Subjunctive (wish, if only) lengkap dengan contoh dan fakta nyatanya.',
      lessons: [
        {
          id: 'conditional-sentences-all',
          title: '5 Tipe Conditionals: Contoh Kalimat & Fakta Sebenarnya (The Real Fact)',
          summary: 'Menguasai Zero, First, Second, Third, dan Mixed Conditionals dengan penjelasan realita vs khayalan.',
          estimatedMinutes: 14,
          tags: ['conditionals', 'if-clause', 'contoh-kalimat', 'the-real-fact'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat dan Fakta untuk Setiap Tipe Conditional',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. ZERO CONDITIONAL (Kebenaran Ilmiah Mutlak 100%):
• Rumus: If + Simple Present, Simple Present
• Contoh: "If you heat ice, it melts."
• Terjemahan: Jika kamu memanaskan es, es itu mencair.
• Fakta: Hukum alam yang selalu terjadi tanpa pengecualian.

2. FIRST CONDITIONAL (Kemungkinan Nyata di Masa Depan):
• Rumus: If + Simple Present, will + V1
• Contoh: "If it rains tomorrow, we will cancel the picnic."
• Terjemahan: Jika besok hujan, kita akan membatalkan piknik itu.
• Fakta: Hujan besok adalah hal yang sangat mungkin terjadi.

3. SECOND CONDITIONAL (Khayalan / Berlawanan dengan Fakta Sekarang):
• Rumus: If + Simple Past (were), would + V1
• Contoh 1: "If I won the lottery, I would travel around the world."
  - Terjemahan: Seandainya saya memenangkan lotre, saya akan keliling dunia.
  - Fakta Nyata: I do not win the lottery, so I do not travel around the world (Sekarang saya tidak menang lotre).
• Contoh 2: "If I were you, I would accept that scholarship."
  - Terjemahan: Seandainya saya adalah kamu, saya akan menerima beasiswa itu.
  - Fakta Nyata: I am not you (Saya bukan kamu).

4. THIRD CONDITIONAL (Penyesalan Masa Lalu / Berlawanan dengan Fakta Lampau):
• Rumus: If + Past Perfect, would have + V3
• Contoh: "If you had studied harder, you would have passed the exam."
  - Terjemahan: Seandainya dulu kamu belajar lebih giat, kamu pasti sudah lulus ujian itu.
  - Fakta Nyata: You didn't study hard in the past, so you failed the exam (Dulu kamu tidak belajar giat, dan kenyataannya kamu gagal ujian).

5. MIXED CONDITIONAL (Peristiwa Lampau Berdampak Pada Masa Sekarang):
• Rumus: If + Past Perfect, would + V1 (now)
• Contoh: "If I had saved money last year, I would buy that car today."
  - Terjemahan: Seandainya tahun lalu saya menabung, hari ini saya bisa membeli mobil itu.
  - Fakta Nyata: I didn't save money last year, so I cannot buy the car today.`,
            },
          ],
        },
        {
          id: 'subjunctive-mood-and-wishes',
          title: 'Subjunctive Mood: Wish, If Only & Contoh Kalimat',
          summary: 'Mengungkapkan harapan yang berlawanan dengan kenyataan masa kini dan penyesalan masa lampau.',
          estimatedMinutes: 10,
          tags: ['subjunctive', 'wish', 'if-only', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat Wish & If Only Beserta Faktanya',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Pola Harapan', 'Contoh Kalimat', 'Terjemahan', 'Fakta Kenyataan Sebenarnya (The Fact)'],
                rows: [
                  [
                    'Wish + Past Simple (Masa Kini)',
                    'I wish I had a car.',
                    'Saya berharap saya punya mobil saat ini.',
                    'Faktanya: I do not have a car right now (Saya tidak punya mobil).',
                  ],
                  [
                    'Wish + were (Masa Kini)',
                    'I wish he were here with us.',
                    'Saya berharap dia ada di sini bersama kita.',
                    'Faktanya: He is not here with us (Dia tidak ada di sini).',
                  ],
                  [
                    'Wish + Past Perfect (Masa Lalu)',
                    'She wishes she had not spent all her savings.',
                    'Dia menyesal mengapa dulu menghabiskan seluruh tabungannya.',
                    'Faktanya: She spent all her savings in the past (Dulu dia menghabiskannya).',
                  ],
                  [
                    'If only (Seandainya saja)',
                    'If only I knew his phone number!',
                    'Seandainya saja saya tahu nomor teleponnya!',
                    'Faktanya: I do not know his phone number (Saya tidak tahu nomornya).',
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-09',
      number: '09',
      title: 'Relative Clauses & Sentence Connectors',
      summary: 'Contoh penggunaan Who, Whom, Whose, Which, That untuk menggabungkan kalimat secara alami dan elegan.',
      lessons: [
        {
          id: 'relative-clauses-defining-nondefining',
          title: 'Relative Clauses: Contoh Penggabungan Kalimat dengan Who, Whom, Whose, Which, That',
          summary: 'Langkah demi langkah menyatukan dua kalimat menjadi satu kalimat majemuk menggunakan kata ganti penghubung.',
          estimatedMinutes: 12,
          tags: ['relative-clauses', 'who-whom-whose', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Penggabungan Dua Kalimat Menggunakan Relative Pronoun',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. WHO (Menggantikan Orang sebagai SUBJEK):
• Kalimat 1: The boy is my younger brother.
• Kalimat 2: He won the math olympiad yesterday.
-> Gabungan: "The boy WHO won the math olympiad yesterday is my younger brother."
   (Anak laki-laki yang memenangkan olimpiade matematika kemarin adalah adik saya.)

2. WHOM (Menggantikan Orang sebagai OBJEK):
• Kalimat 1: The teacher is very kind.
• Kalimat 2: We met her at the library this morning.
-> Gabungan: "The teacher WHOM we met at the library this morning is very kind."
   (Guru yang kami temui di perpustakaan pagi ini sangat baik hati.)

3. WHOSE (Menyatakan KEPEMILIKAN / POSSESSIVE):
• Kalimat 1: I helped the student.
• Kalimat 2: His bicycle was stolen.
-> Gabungan: "I helped the student WHOSE bicycle was stolen."
   (Saya menolong siswa yang sepedanya dicuri.)

4. WHICH (Menggantikan BENDA atau HEWAN):
• Kalimat 1: The smartphone has an excellent camera.
• Kalimat 2: I bought it two days ago.
-> Gabungan: "The smartphone WHICH I bought two days ago has an excellent camera."
   (Ponsel pintar yang saya beli dua hari lalu memiliki kamera yang luar biasa.)

5. THAT (Menggantikan Orang atau Benda dalam Defining Clause tanpa koma):
• "This is the laptop THAT runs the simulations so quickly."
  (Inilah laptop yang menjalankan simulasi itu dengan sangat cepat.)`,
            },
          ],
        },
        {
          id: 'conjunctions-and-transitions',
          title: 'Conjunctions (FANBOYS & Transisi): Contoh Kalimat Kohesif',
          summary: 'Contoh kalimat penghubung coordinating, subordinating, correlative (not only... but also), dan adverbial transisi.',
          estimatedMinutes: 11,
          tags: ['conjunctions', 'fanboys', 'transitions', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Contoh Kalimat Penggunaan Conjunctions',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Jenis Penghubung', 'Kata Hubung', 'Contoh Kalimat Bahasa Inggris', 'Arti Bahasa Indonesia'],
                rows: [
                  ['FANBOYS (But)', 'but', 'He studied hard for the test, but he did not get the top score.', 'Dia belajar giat untuk ujian, tetapi dia tidak mendapat nilai tertinggi.'],
                  ['FANBOYS (So)', 'so', 'The weather was cold outside, so we stayed indoors.', 'Udara di luar dingin, sehingga kami tetap berada di dalam ruangan.'],
                  ['Subordinating', 'Although (Meskipun)', 'Although he was tired, he continued writing the software code.', 'Meskipun dia lelah, dia tetap melanjutkan menulis kode program itu.'],
                  ['Subordinating', 'Because (Karena)', 'She was promoted because she achieved the highest sales.', 'Dia dipromosikan karena dia mencapai angka penjualan tertinggi.'],
                  ['Correlative', 'Not only... but also', 'He is not only intelligent, but also very humble.', 'Dia tidak hanya cerdas, tetapi juga sangat rendah hati.'],
                  ['Transition', 'However (Namun)', 'The plan was good; however, we lacked the budget to execute it.', 'Rencana itu bagus; namun, kami kekurangan anggaran untuk menjalankannya.'],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'eng-ch-10',
      number: '10',
      title: 'Comparison, Question Tags & Prepositions',
      summary: 'Tingkatan perbandingan (lebih/paling), Question Tags (bukan?), dan preposisi In, On, At lengkap dengan contoh kalimat.',
      lessons: [
        {
          id: 'degrees-of-comparison',
          title: 'Degrees of Comparison: Positive, Comparative & Superlative dengan Contoh',
          summary: 'Contoh perbandingan kesetaraan (as...as), perbandingan dua hal (-er/more than), dan paling unggul (-est/the most).',
          estimatedMinutes: 11,
          tags: ['comparison', 'comparative', 'superlative', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: 'Tiga Tingkatan Perbandingan Kata Sifat',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. POSITIVE DEGREE (Sama / Setara: as + adj + as):
• "My house is as big as your house."
  (Rumah saya sama besarnya dengan rumahmu.)
• "Learning Japanese is not as easy as learning Spanish."
  (Belajar bahasa Jepang tidak semudah belajar bahasa Spanyol.)

2. COMPARATIVE DEGREE (Lebih ... daripada: -er than / more ... than):
• Suku kata pendek (1 suku kata):
  "Mount Everest is HIGHER THAN Mount Fuji."
  (Gunung Everest lebih tinggi daripada Gunung Fuji.)
• Suku kata panjang (2+ suku kata):
  "A sports car is MORE EXPENSIVE THAN a regular sedan."
  (Mobil sport lebih mahal daripada mobil sedan biasa.)
• Kata sifat tak beraturan (Irregular):
  "My health is BETTER THAN it was last month."
  (Kesehatan saya lebih baik daripada bulan lalu - good -> better).

3. SUPERLATIVE DEGREE (Paling / Ter-: the + -est / the most ...):
• "Jupiter is THE LARGEST planet in our solar system."
  (Yupiter adalah planet terbesar di tata surya kita.)
• "This is THE MOST EXCITING movie I have ever watched."
  (Ini adalah film yang paling seru yang pernah saya tonton.)

4. DOUBLE COMPARATIVE (Semakin ..., semakin ...):
• "THE HARDER you study, THE BETTER your future will be."
  (Semakin giat kamu belajar, semakin baik masa depanmu nanti.)`,
            },
          ],
        },
        {
          id: 'question-tags-and-prepositions',
          title: 'Question Tags (..., kan?) & Preposisi In, On, At dengan Contoh Kalimat',
          summary: 'Membuat pertanyaan penegas (Question Tags) dan ketepatan penggunaan preposisi waktu/tempat dalam kalimat sehari-hari.',
          estimatedMinutes: 12,
          tags: ['question-tags', 'prepositions', 'in-on-at', 'contoh-kalimat'],
          sections: [
            {
              type: 'heading2',
              text: '1. Aturan Dasar Question Tags (Penegas: "... kan? / bukan?")',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tipe Kalimat', 'Contoh Kalimat Bahasa Inggris', 'Arti Bahasa Indonesia'],
                rows: [
                  ['Positif -> Tag Negatif', 'You are a student here, AREN’T YOU?', 'Kamu seorang pelajar di sini, kan?'],
                  ['Positif -> Tag Negatif', 'She speaks English fluently, DOESN’T SHE?', 'Dia berbicara bahasa Inggris dengan lancar, kan?'],
                  ['Positif -> Tag Negatif', 'They went to the cinema yesterday, DIDN’T THEY?', 'Mereka pergi ke bioskop kemarin, kan?'],
                  ['Negatif -> Tag Positif', 'You didn’t lock the door, DID YOU?', 'Kamu tidak mengunci pintunya, kan?'],
                  ['Negatif -> Tag Positif', 'He cannot swim, CAN HE?', 'Dia tidak bisa berenang, kan?'],
                  ['Pengecualian I AM', 'I am invited to the wedding party, AREN’T I?', 'Saya diundang ke pesta pernikahan itu, kan? (Bukan: amn’t I).'],
                  ['Pengecualian LET’S', 'Let’s take a short break, SHALL WE?', 'Ayo kita istirahat sejenak, ya?'],
                  ['Pengecualian Perintah', 'Don’t forget to call me, WILL YOU?', 'Jangan lupa telepon saya, ya?'],
                ],
              },
            },
            {
              type: 'heading2',
              text: '2. Contoh Kalimat Preposisi IN, ON, AT (Waktu & Tempat)',
            },
            {
              type: 'code',
              language: 'text',
              code: `a. WAKTU (Dari Umum ke Spesifik):
• IN (Bulan, Tahun, Abad):
  - "Indonesia declared independence IN August, IN 1945."
    (Indonesia memproklamasikan kemerdekaan pada bulan Agustus, pada tahun 1945.)
• ON (Hari, Tanggal Spesifik):
  - "We have an English test ON Monday, ON October 12th."
    (Kami ada ujian bahasa Inggris pada hari Senin, pada tanggal 12 Oktober.)
• AT (Jam Tepat):
  - "The meeting will begin AT 09:30 AM sharp."
    (Rapat akan dimulai tepat pada jam 09:30 pagi.)

b. TEMPAT / LOKASI (Dari Luas ke Titik Presisi):
• IN (Negara, Kota, Ruangan):
  - "I live IN Indonesia, IN Jakarta, and right now I am sitting IN my bedroom."
    (Saya tinggal di Indonesia, di kota Jakarta, dan sekarang sedang duduk di dalam kamar saya.)
• ON (Permukaan, Jalan, Lantai):
  - "The laptop is ON the desk, and our office is ON the third floor."
    (Laptop itu berada di atas meja, dan kantor kami berada di lantai tiga.)
• AT (Alamat Spesifik, Titik Lokasi):
  - "I am waiting for you AT the bus stop AT 45 Sudirman Street."
    (Saya menunggumu di halte bus di Jalan Sudirman Nomor 45.)`,
            },
          ],
        },
      ],
    },
  ],
};
