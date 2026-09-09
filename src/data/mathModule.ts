import { Module } from '../types';

export const DEFAULT_MATH_MODULE: Module = {
  id: 'matematika',
  badge: 'MODUL · 5 BAB · 10 MATERI',
  title: 'MODUL PEMBELAJARAN MATEMATIKA',
  description:
    'Pemahaman konseptual dan aplikasi sistematis matematika: dari aljabar linear, sistem persamaan, fungsi dan grafiknya, trigonometri praktis, dasar kalkulus diferensial, hingga statistika dan probabilitas.',
  category: 'Sains, Aljabar & Kalkulus',
  ctaText: 'MULAI DARI BAB 01 →',
  chapters: [
    {
      id: 'math-ch-01',
      number: '01',
      title: 'Aljabar & Persamaan Linear',
      summary: 'Operasi variabel, pemfaktoran polinomial, dan sistem persamaan linear dua variabel.',
      lessons: [
        {
          id: 'math-operasi-aljabar',
          title: 'Operasi Aljabar & Pemfaktoran Polinomial',
          summary: 'Konsep dasar suku sejenis, manipulasi variabel aljabar, dan teknik pemfaktoran kuadrat.',
          estimatedMinutes: 8,
          tags: ['aljabar', 'polinomial', 'pemfaktoran'],
          sections: [
            {
              type: 'heading2',
              text: 'Fondasi Bahasa Aljabar',
            },
            {
              type: 'paragraph',
              text: 'Aljabar adalah bahasa simbolis untuk mengekspresikan pola relasi numerik umum. Koefisien, variabel, dan konstanta menyusun suku-suku yang dapat dioperasikan secara matematis.',
            },
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Hukum Distributif & Pemfaktoran',
                content:
                  'Prinsip a(b + c) = ab + ac adalah dasar dari pemfaktoran. Memfaktorkan polinomial adalah proses membalikkan perkalian suku menjadi bentuk perkalian faktor-faktor prima pembentuknya.',
              },
            },
            {
              type: 'table',
              tableData: {
                headers: ['Bentuk Polinomial', 'Rumus Pemfaktoran', 'Contoh Kasus', 'Hasil Akhir'],
                rows: [
                  ['Selisih Dua Kuadrat', 'a² - b² = (a - b)(a + b)', 'x² - 49', '(x - 7)(x + 7)'],
                  ['Kuadrat Sempurna (+)', 'a² + 2ab + b² = (a + b)²', 'x² + 6x + 9', '(x + 3)²'],
                  ['Kuadrat Sempurna (-)', 'a² - 2ab + b² = (a - b)²', 'x² - 10x + 25', '(x - 5)²'],
                  ['Trinomial Umum', 'x² + (p+q)x + pq = (x+p)(x+q)', 'x² + 5x + 6', '(x + 2)(x + 3)'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Contoh Penyederhanaan Pecahan Aljabar',
            },
            {
              type: 'code',
              language: 'text',
              code: `Sederhanakan: (x² - 9) / (x² + 5x + 6)

Langkah 1: Faktorkan pembilang:
x² - 9 = (x - 3)(x + 3)

Langkah 2: Faktorkan penyebut:
x² + 5x + 6 = (x + 2)(x + 3)

Langkah 3: Coret faktor sekutu (x + 3) dengan syarat x ≠ -3, -2:
= (x - 3) / (x + 2)`,
            },
          ],
        },
        {
          id: 'math-spldv',
          title: 'Sistem Persamaan Linear Dua Variabel (SPLDV)',
          summary: 'Metode eliminasi, substitusi, dan interpretasi grafik titik potong dua garis linear.',
          estimatedMinutes: 9,
          tags: ['spldv', 'linear', 'eliminasi'],
          sections: [
            {
              type: 'heading2',
              text: 'Mencari Solusi Titik Potong Simultan',
            },
            {
              type: 'paragraph',
              text: 'SPLDV memodelkan dua kondisi yang harus dipenuhi secara bersamaan oleh pasangan variabel (x, y). Secara geometris, solusinya adalah koordinat titik potong kedua garis pada bidang koordinat Kartesius.',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Metode Eliminasi: Menyamakan koefisien salah satu variabel melalui perkalian silang lalu menjumlahkan/mengurangkan kedua persamaan.',
                'Metode Substitusi: Menyatakan satu variabel dalam variabel lain dari persamaan pertama, lalu memasukkannya ke persamaan kedua.',
                'Metode Campuran: Mengeliminasi satu variabel untuk mendapatkan nilai awal, kemudian mensubstitusikannya untuk variabel kedua.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-02',
      number: '02',
      title: 'Fungsi, Relasi & Grafik',
      summary: 'Pemetaan domain ke kodomain, sifat fungsi, dan analisis kurva parabola kuadrat.',
      lessons: [
        {
          id: 'math-konsep-fungsi',
          title: 'Konsep Fungsi: Domain, Kodomain, & Range',
          summary: 'Definisi formal pemetaan tepat satu elemen, uji garis vertikal, dan komposisi fungsi.',
          estimatedMinutes: 7,
          tags: ['fungsi', 'domain', 'grafik'],
          sections: [
            {
              type: 'heading2',
              text: 'Karakteristik Formal Sebuah Fungsi',
            },
            {
              type: 'paragraph',
              text: 'Relasi dari himpunan A ke himpunan B disebut fungsi f: A → B jika setiap elemen x ∈ A dipasangkan tepat dengan satu elemen y ∈ B. Himpunan A adalah Domain, B adalah Kodomain, dan hasil petanya adalah Range.',
            },
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Uji Garis Vertikal (Vertical Line Test)',
                content:
                  'Untuk memastikan sebuah kurva pada bidang Kartesius merupakan grafik fungsi y = f(x), buat garis vertikal imajiner di sembarang titik x. Jika garis tersebut memotong kurva lebih dari 1 titik, kurva tersebut BUKAN fungsi.',
              },
            },
          ],
        },
        {
          id: 'math-fungsi-kuadrat',
          title: 'Fungsi Kuadrat & Penentuan Titik Ekstrem',
          summary: 'Bentuk umum y = ax² + bx + c, sumbu simetri, nilai diskriminan (D), dan koordinat titik puncak.',
          estimatedMinutes: 8,
          tags: ['kuadrat', 'parabola', 'titik-puncak'],
          sections: [
            {
              type: 'heading2',
              text: 'Anatomi Kurva Parabola Kuadrat',
            },
            {
              type: 'paragraph',
              text: 'Arah keterbukaan kurva ditentukan oleh tanda koefisien a: jika a > 0 kurva terbuka ke atas (memiliki titik balik minimum), jika a < 0 kurva terbuka ke bawah (memiliki titik balik maksimum).',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Parameter Parabola', 'Rumus Analitis', 'Interpretasi Geometris'],
                rows: [
                  ['Sumbu Simetri', 'x = -b / (2a)', 'Garis vertikal pembagi parabola menjadi dua sisi simetris'],
                  ['Nilai Optimum', 'y = -D / (4a) = -(b² - 4ac) / (4a)', 'Nilai maksimum atau minimum yang dapat dicapai kurva'],
                  ['Titik Puncak (Vertex)', 'P(-b/(2a), -D/(4a))', 'Koordinat titik belok ekstrem kurva'],
                  ['Diskriminan D > 0', 'b² - 4ac > 0', 'Kurva memotong sumbu X di dua titik berbeda'],
                  ['Diskriminan D = 0', 'b² - 4ac = 0', 'Kurva menyinggung sumbu X tepat di satu titik'],
                  ['Diskriminan D < 0', 'b² - 4ac < 0', 'Kurva melayang tidak memotong sumbu X (definit)'],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-03',
      number: '03',
      title: 'Trigonometri & Geometri Praktis',
      summary: 'Perbandingan sudut segitiga siku-siku, sudut istimewa, aturan sinus & kosinus.',
      lessons: [
        {
          id: 'math-trigonometri-dasar',
          title: 'Perbandingan Trigonometri Segitiga Siku-Siku',
          summary: 'Definisi Sinus, Kosinus, Tangen (Demi-Sami-Desa) dan tabel sudut istimewa.',
          estimatedMinutes: 8,
          tags: ['trigonometri', 'sinus', 'kosinus', 'geometri'],
          sections: [
            {
              type: 'heading2',
              text: 'Rasio Sisi Segitiga Siku-Siku',
            },
            {
              type: 'paragraph',
              text: 'Trigonometri mempelajari perbandingan ukuran panjang sisi-sisi segitiga siku-siku terhadap besar sudut lancipnya. Tiga rasio utama dinamakan sinus (sin), kosinus (cos), dan tangen (tan).',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Sudut (θ)', 'Sin θ', 'Cos θ', 'Tan θ'],
                rows: [
                  ['0°', '0', '1', '0'],
                  ['30° (π/6)', '1/2', '√3 / 2', '1 / √3 = √3 / 3'],
                  ['45° (π/4)', '√2 / 2', '√2 / 2', '1'],
                  ['60° (π/3)', '√3 / 2', '1/2', '√3'],
                  ['90° (π/2)', '1', '0', 'Tidak terdefinisi (∞)'],
                ],
              },
            },
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Identitas Pythagoras Trigonometri',
                content:
                  'Identitas fundamental: sin²(θ) + cos²(θ) = 1. Dari rumus ini diturunkan 1 + tan²(θ) = sec²(θ) dan 1 + cot²(θ) = csc²(θ).',
              },
            },
          ],
        },
        {
          id: 'math-aturan-sin-cos',
          title: 'Aturan Sinus dan Aturan Kosinus',
          summary: 'Menghitung panjang sisi dan besar sudut pada segitiga sembarang (non-siku-siku).',
          estimatedMinutes: 8,
          tags: ['trigonometri', 'aturan-sinus', 'aturan-kosinus'],
          sections: [
            {
              type: 'heading2',
              text: 'Menyelesaikan Segitiga Sembarang',
            },
            {
              type: 'paragraph',
              text: 'Ketika segitiga tidak memiliki sudut siku-siku, teorema Pythagoras tidak dapat langsung diterapkan. Aturan sinus dan kosinus adalah generalisasi yang berlaku untuk segala jenis segitiga.',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. Aturan Sinus:
a / sin(A) = b / sin(B) = c / sin(C) = 2R
(Digunakan saat diketahui: 1 sisi & 2 sudut, atau 2 sisi & 1 sudut di depan salah satu sisi)

2. Aturan Kosinus:
c² = a² + b² - 2ab · cos(C)
b² = a² + c² - 2ac · cos(B)
a² = b² + c² - 2bc · cos(A)
(Digunakan saat diketahui: 3 sisi (SSS) atau 2 sisi dan 1 sudut apit (SAS))`,
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-04',
      number: '04',
      title: 'Pengantar Kalkulus Diferensial',
      summary: 'Konsep intuitif limit fungsi aljabar, laju perubahan sesaat, dan turunan pertama.',
      lessons: [
        {
          id: 'math-limit-fungsi',
          title: 'Limit Fungsi Aljabar & Pendekatan Nilai',
          summary: 'Pengertian limit kiri, limit kanan, kontinuitas fungsi, dan penanganan bentuk tak tentu 0/0.',
          estimatedMinutes: 9,
          tags: ['kalkulus', 'limit', 'analisis'],
          sections: [
            {
              type: 'heading2',
              text: 'Arti Filosofis Nilai Limit',
            },
            {
              type: 'paragraph',
              text: 'Limit mendeskripsikan perilaku nilai f(x) saat x bergerak mendekati suatu titik c tanpa harus benar-benar menyentuh c itu sendiri. Notasi lim(x→c) f(x) = L berarti kita dapat membuat f(x) sedekat mungkin ke L dengan memilih x yang cukup dekat ke c.',
            },
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Strategi Mengatasi Bentuk Tak Tentu (0/0)',
                content:
                  'Jika substitusi langsung menghasilkan 0/0, gunakan salah satu dari tiga teknik: (1) Pemfaktoran aljabar dan pencoretan pembuat nol, (2) Perkalian akar sekawan, atau (3) Teorema L\'Hôpital untuk turunan.',
              },
            },
          ],
        },
        {
          id: 'math-turunan-pertama',
          title: 'Turunan Pertama: Laju Perubahan & Gradien Garis Singgung',
          summary: 'Definisi turunan f\'(x), aturan turunan pangkat, dan aplikasi mencari nilai optimal.',
          estimatedMinutes: 9,
          tags: ['kalkulus', 'turunan', 'diferensial'],
          sections: [
            {
              type: 'heading2',
              text: 'Dari Garis Sechan Menuju Garis Singgung',
            },
            {
              type: 'paragraph',
              text: 'Turunan pertama f\'(x) adalah limit gradien tali busur saat interval h mendekati nol. Turunan merepresentasikan laju perubahan sesaat (instantaneous rate of change) dari fungsi terhadap variabelnya.',
            },
            {
              type: 'code',
              language: 'text',
              code: `Definisi Formal:
f'(x) = lim(h→0) [ f(x + h) - f(x) ] / h

Aturan Dasar Turunan Pangkat:
f(x) = c          => f'(x) = 0
f(x) = xⁿ         => f'(x) = n · xⁿ⁻¹
f(x) = c · g(x)   => f'(x) = c · g'(x)

Aturan Perkalian & Pembagian:
(u · v)' = u'v + uv'
(u / v)' = (u'v - uv') / v²`,
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-05',
      number: '05',
      title: 'Statistika & Teori Peluang',
      summary: 'Ukuran pemusatan data (mean, median, modus), varians, dan kalkulasi peluang kejadian.',
      lessons: [
        {
          id: 'math-statistika-deskriptif',
          title: 'Statistika Deskriptif: Pemusatan & Penyebaran',
          summary: 'Menghitung rata-rata aritmatika, nilai tengah median, kuartil, dan standar deviasi.',
          estimatedMinutes: 8,
          tags: ['statistika', 'mean', 'median', 'standar-deviasi'],
          sections: [
            {
              type: 'heading2',
              text: 'Membaca Karakteristik Kumpulan Data',
            },
            {
              type: 'paragraph',
              text: 'Statistika deskriptif merangkum dan mendeskripsikan ciri-ciri utama kumpulan data kuantitatif tanpa menarik kesimpulan induktif pada populasi umum.',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Ukuran', 'Kategori', 'Definisi Operasional', 'Sensitivitas Outlier'],
                rows: [
                  ['Mean (x̄)', 'Pemusatan', 'Jumlah seluruh nilai dibagi total observasi: Σx / n', 'Sangat sensitif terhadap pencilan ekstrim'],
                  ['Median (Me)', 'Pemusatan', 'Nilai titik tengah data setelah diurutkan teratur', 'Sangat robust/kebal terhadap outlier'],
                  ['Modus (Mo)', 'Pemusatan', 'Nilai data yang memiliki frekuensi kemunculan tertinggi', 'Tidak terpengaruh nilai numerik'],
                  ['Jangkauan (Range)', 'Penyebaran', 'Selisih nilai data maksimum dengan nilai data minimum', 'Sangat dipengaruhi 2 titik ekstrim'],
                  ['Standar Deviasi (s)', 'Penyebaran', 'Akar rata-rata kuadrat deviasi data dari mean: √(Σ(x - x̄)² / (n - 1))', 'Ukuran dispersi paling standar dalam sains'],
                ],
              },
            },
          ],
        },
        {
          id: 'math-peluang-kombinatorika',
          title: 'Peluang Klasik, Kaidah Pencacahan & Kombinasi',
          summary: 'Ruang sampel, aturan perkalian, permutasi urutan penting, dan kombinasi pemilihan kelompok.',
          estimatedMinutes: 7,
          tags: ['peluang', 'kombinatorika', 'permutasi'],
          sections: [
            {
              type: 'heading2',
              text: 'Prinsip Probabilitas dan Ruang Sampel',
            },
            {
              type: 'paragraph',
              text: 'Peluang suatu kejadian A dalam ruang sampel S dengan kemungkinan hasil yang berbobot sama dihitung dengan rasio P(A) = n(A) / n(S), di mana 0 ≤ P(A) ≤ 1.',
            },
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Perbedaan Krusial Permutasi vs Kombinasi',
                content:
                  'Permutasi memperhatikan URUTAN (contoh: nomor pin sandi, juara 1-2-3). Rumus: nPr = n! / (n - r)!. Kombinasi TIDAK memperhatikan urutan (contoh: memilih 3 anggota panitia dari 10 siswa). Rumus: nCr = n! / (r! · (n - r)!).',
              },
            },
          ],
        },
      ],
    },
  ],
};
