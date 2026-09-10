import { Module } from '../types';

export const DEFAULT_MATH_MODULE: Module = {
  id: 'matematika',
  badge: 'PETA KONSEP 10 CABANG LENGKAP · 10 BAB · 24 MATERI',
  title: 'MODUL PEMBELAJARAN MATEMATIKA KOMPREHENSIF',
  description:
    'Kurikulum lengkap berstandar akademik yang mencakup 10 cabang utama matematika: Aritmatika, Aljabar, Geometri, Trigonometri, Barisan & Deret, Kalkulus, Statistika, Peluang, Logika Matematika, dan Penalaran Matematika (HOTS & Pemodelan).',
  category: 'Sains, Aljabar & Kalkulus',
  ctaText: 'MULAI DARI BAB 01 →',
  chapters: [
    {
      id: 'math-ch-01',
      number: '01',
      title: 'Aritmatika & Teori Bilangan',
      summary: 'Operasi bilangan riil, pecahan, desimal, persentase, rasio, serta perbandingan senilai dan berbalik nilai.',
      lessons: [
        {
          id: 'aritmatika-operasi-bilangan',
          title: 'Operasi Bilangan, Pecahan, Desimal & Persentase',
          summary: 'Hierarki operasi (PEMDAS/BODMAS), konversi pecahan ke desimal/persentase, dan operasi hitung rasional.',
          estimatedMinutes: 9,
          tags: ['aritmatika', 'pecahan', 'desimal', 'persentase', 'bilangan'],
          sections: [
            {
              type: 'heading2',
              text: 'Hierarki Operasi Hitung (Urutan Prioritas PEMDAS)',
            },
            {
              type: 'paragraph',
              text: 'Dalam operasi matematika tanpa tanda kurung bertingkat, berlaku urutan hierarki mutlak: Parentheses (Kurung), Exponents (Pangkat/Akar), Multiplication & Division (Perkalian & Pembagian setara dari kiri ke kanan), serta Addition & Subtraction (Penjumlahan & Pengurangan setara dari kiri ke kanan).',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Bentuk Bilangan', 'Representasi Matematis', 'Metode Konversi', 'Contoh Operasi'],
                rows: [
                  ['Pecahan Biasa / Campuran', 'a/b (b ≠ 0) atau c a/b', 'Samakan penyebut (KPK) untuk + dan -', '2/3 + 3/4 = (8 + 9)/12 = 17/12'],
                  ['Desimal', 'Angka di belakang koma bernilai 10⁻ⁿ', 'Perkalian: hitung total digit koma', '0.25 × 0.4 = 0.100 = 0.1'],
                  ['Persentase', 'Pecahan dengan penyebut 100 (P%)', 'Bagi 100 untuk desimal; kali 100% untuk pecahan', '15% dari 800 = 0.15 × 800 = 120'],
                ],
              },
            },
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Trik Pembagian Pecahan',
                content:
                  'Membagi dengan pecahan sama dengan mengalikan dengan kebalikannya (reciprocal): (a/b) ÷ (c/d) = (a/b) × (d/c) = (ad) / (bc). Contoh: (3/5) ÷ (2/7) = (3/5) × (7/2) = 21/10 = 2.1.',
              },
            },
          ],
        },
        {
          id: 'aritmatika-rasio-perbandingan',
          title: 'Rasio, Skala & Perbandingan (Senilai vs Berbalik Nilai)',
          summary: 'Konsep proporsi proporsional, pembagian nilai berdasarkan rasio, dan pemodelan waktu-pekerja.',
          estimatedMinutes: 8,
          tags: ['rasio', 'perbandingan', 'skala', 'senilai', 'berbalik-nilai'],
          sections: [
            {
              type: 'heading2',
              text: 'Membedakan Perbandingan Senilai vs Berbalik Nilai',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Jenis Perbandingan', 'Karakteristik Perubahan', 'Rumus Proporsi', 'Contoh Kasus Nyata'],
                rows: [
                  [
                    'Perbandingan Senilai (Direct)',
                    'Jika variabel A naik, maka variabel B ikut naik sebanding (konstanta k = y/x)',
                    'a₁ / b₁ = a₂ / b₂',
                    'Konsumsi bensin terhadap jarak tempuh kendaraan: 2 liter = 50 km, maka 6 liter = 150 km.',
                  ],
                  [
                    'Perbandingan Berbalik Nilai (Inverse)',
                    'Jika variabel A naik, maka variabel B justru turun sebanding (konstanta k = x · y)',
                    'a₁ × b₁ = a₂ × b₂',
                    'Jumlah pekerja terhadap waktu penyelesaian: 10 pekerja butuh 12 hari (total beban 120 orang-hari), maka 15 pekerja butuh 120/15 = 8 hari.',
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-02',
      number: '02',
      title: 'Aljabar, Polinomial & Sistem Persamaan',
      summary: 'Variabel, bentuk aljabar, persamaan & pertidaksamaan linear, persamaan kuadrat, SPL, fungsi, grafik, eksponen, dan logaritma.',
      lessons: [
        {
          id: 'aljabar-variabel-faktorisasi',
          title: 'Bentuk Aljabar, Polinom & Teknik Faktorisasi',
          summary: 'Manipulasi suku sejenis, teorema sisa polinomial, dan rumus faktorisasi aljabar penting.',
          estimatedMinutes: 10,
          tags: ['aljabar', 'polinom', 'faktorisasi', 'variabel'],
          sections: [
            {
              type: 'heading2',
              text: 'Rumus Identitas Faktorisasi Aljabar',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Nama Bentuk', 'Identitas Aljabar', 'Contoh Soal Faktorisasi'],
                rows: [
                  ['Selisih Dua Kuadrat', 'a² - b² = (a - b)(a + b)', '4x² - 25 = (2x - 5)(2x + 5)'],
                  ['Kuadrat Sempurna', 'a² ± 2ab + b² = (a ± b)²', 'x² + 8x + 16 = (x + 4)²'],
                  ['Jumlah Dua Kubik', 'a³ + b³ = (a + b)(a² - ab + b²)', 'x³ + 27 = (x + 3)(x² - 3x + 9)'],
                  ['Selisih Dua Kubik', 'a³ - b³ = (a - b)(a² + ab + b²)', '8x³ - 1 = (2x - 1)(4x² + 2x + 1)'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Teorema Sisa & Faktor pada Suku Banyak (Polinomial)',
            },
            {
              type: 'paragraph',
              text: 'Jika polinomial P(x) dibagi oleh (x - k), maka sisa pembagiannya adalah S = P(k). Apabila P(k) = 0, maka (x - k) merupakan faktor linear dari P(x).',
            },
          ],
        },
        {
          id: 'aljabar-persamaan-kuadrat-spl',
          title: 'Persamaan Linear, Persamaan Kuadrat & Sistem Persamaan (SPL)',
          summary: 'Rumus ABC (kuadratik), analisis diskriminan D = b² - 4ac, sifat akar Vieta, dan eliminasi SPL.',
          estimatedMinutes: 12,
          tags: ['persamaan-kuadrat', 'rumus-abc', 'diskriminan', 'spldv', 'spltv'],
          sections: [
            {
              type: 'heading2',
              text: 'Persamaan Kuadrat: Bentuk Umum ax² + bx + c = 0 (a ≠ 0)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Rumus Kuadratik (Rumus ABC):
x₁,₂ = (-b ± √(b² - 4ac)) / (2a)

Analisis Nilai Diskriminan (D = b² - 4ac):
• D > 0 : Memiliki 2 akar riil berbeda (grafik memotong sumbu X di dua titik).
• D = 0 : Memiliki 1 akar kembar / riil sama (grafik menyinggung sumbu X).
• D < 0 : Tidak memiliki akar riil / akar imajiner (grafik tidak memotong sumbu X).

Rumus Vieta (Hubungan Akar-Akar Kuadrat):
• x₁ + x₂ = -b / a
• x₁ · x₂ = c / a
• |x₁ - x₂| = √D / |a|`,
            },
          ],
        },
        {
          id: 'aljabar-fungsi-eksponen-logaritma',
          title: 'Fungsi, Grafik Fungsi, Eksponen & Logaritma',
          summary: 'Domain dan range fungsi, sifat-sifat bilangan berpangkat (eksponen), dan hukum logaritma dasar.',
          estimatedMinutes: 11,
          tags: ['fungsi', 'grafik', 'eksponen', 'logaritma'],
          sections: [
            {
              type: 'heading2',
              text: 'Sifat-Sifat Operasi Eksponen & Logaritma',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Sifat Eksponen (a > 0)', 'Sifat Logaritma Berbasis a (ᵃlog x)', 'Catatan Syarat'],
                rows: [
                  ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'ᵃlog (x · y) = ᵃlog x + ᵃlog y', 'a > 0, a ≠ 1, x,y > 0'],
                  ['aᵐ / aⁿ = aᵐ⁻ⁿ', 'ᵃlog (x / y) = ᵃlog x - ᵃlog y', 'Numerus x/y harus positif'],
                  ['(aᵐ)ⁿ = aᵐⁿ', 'ᵃlog (xⁿ) = n · ᵃlog x', 'Eksponen numerus turun ke depan'],
                  ['a⁰ = 1 (a ≠ 0)', 'ᵃlog a = 1 dan ᵃlog 1 = 0', 'Definisi dasar logaritma'],
                  ['a⁻ⁿ = 1 / aⁿ', 'ᵃlog b = (ᶜlog b) / (ᶜlog a)', 'Rumus ganti basis logaritma'],
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
      title: 'Geometri Bidang, Ruang & Transformasi',
      summary: 'Bangun datar, bangun ruang, lingkaran, koordinat Kartesius, teorema Pythagoras, transformasi geometri, dan vektor dasar.',
      lessons: [
        {
          id: 'geometri-bidang-pythagoras-lingkaran',
          title: 'Bangun Datar, Teorema Pythagoras & Lingkaran',
          summary: 'Luas & keliling poligon, triple Pythagoras, panjang busur, luas juring, dan persamaan lingkaran.',
          estimatedMinutes: 11,
          tags: ['geometri', 'bangun-datar', 'pythagoras', 'lingkaran'],
          sections: [
            {
              type: 'heading2',
              text: 'Teorema Pythagoras & Triple Pythagoras Populer',
            },
            {
              type: 'paragraph',
              text: 'Pada segitiga siku-siku dengan sisi siku-siku a dan b serta hipotenusa c: a² + b² = c². Bilangan bulat triple Pythagoras yang sering muncul: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (9, 40, 41) beserta kelipatannya.',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Elemen Lingkaran', 'Rumus Matematis', 'Keterangan'],
                rows: [
                  ['Keliling & Luas', 'K = 2πr = πd  |  L = πr²', 'r = jari-jari, d = diameter'],
                  ['Panjang Busur AB', 'Busur = (θ / 360°) × 2πr', 'θ = sudut pusat dalam derajat'],
                  ['Luas Juring AOB', 'Juring = (θ / 360°) × πr²', 'θ = sudut pusat dalam derajat'],
                  ['Persamaan Lingkaran Pusat (a, b)', '(x - a)² + (y - b)² = r²', 'Pusat di (a,b) dengan jari-jari r'],
                ],
              },
            },
          ],
        },
        {
          id: 'geometri-ruang-dan-transformasi',
          title: 'Bangun Ruang, Dimensi Tiga, Transformasi & Vektor Dasar',
          summary: 'Volume & luas permukaan bangun ruang, translasi, refleksi, rotasi, dilatasi, dan vektor pada R² / R³.',
          estimatedMinutes: 12,
          tags: ['bangun-ruang', 'transformasi', 'translasi', 'rotasi', 'vektor'],
          sections: [
            {
              type: 'heading2',
              text: 'Empat Jenis Transformasi Geometri Utama',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Jenis Transformasi', 'Prinsip Operasi', 'Rumus Titik Bayangan (x\', y\')'],
                rows: [
                  ['Translasi (Pergeseran) T(a, b)', 'Menggeser objek sejauh vektor (a, b)', 'x\' = x + a  ,  y\' = y + b'],
                  ['Refleksi (Pencerminan)', 'Membalikkan posisi terhadap garis cermin', 'Refleksi sb-X: (x, -y)\nRefleksi sb-Y: (-x, y)\nRefleksi y=x: (y, x)'],
                  ['Rotasi (Perputaran) [O, θ]', 'Memutar sudut θ berlawanan arah jarum jam', 'x\' = x cos θ - y sin θ\ny\' = x sin θ + y cos θ'],
                  ['Dilatasi (Perbesaran) [P, k]', 'Mengalikan jarak titik terhadap pusat dengan faktor skala k', 'x\' = a + k(x - a)\ny\' = b + k(y - b)'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Vektor Dasar (Operasi Penjumlahan & Dot Product)',
            },
            {
              type: 'code',
              language: 'text',
              code: `Vektor u = (u₁, u₂) dan v = (v₁, v₂):
• Panjang Vektor (Magnitude): |u| = √(u₁² + u₂²)
• Penjumlahan: u + v = (u₁ + v₁, u₂ + v₂)
• Perkalian Titik (Dot Product): u · v = u₁v₁ + u₂v₂ = |u| |v| cos θ
• Syarat Vektor Tegak Lurus (Ortogonal): u · v = 0 (karena cos 90° = 0)`,
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-04',
      number: '04',
      title: 'Trigonometri Analitik & Segitiga',
      summary: 'Sudut, perbandingan trigonometri segitiga siku-siku, sudut istimewa, identitas, grafik, aturan sinus, dan aturan cosinus.',
      lessons: [
        {
          id: 'trigonometri-dasar-sudut-istimewa',
          title: 'Perbandingan Trigonometri & Sudut Istimewa',
          summary: 'Definisi sin, cos, tan (Demi, Sami, Desa), kuadran I-IV, dan tabel eksak sudut istimewa 0° hingga 90°.',
          estimatedMinutes: 10,
          tags: ['trigonometri', 'sudut-istimewa', 'sin-cos-tan', 'kuadran'],
          sections: [
            {
              type: 'heading2',
              text: 'Definisi Rasio Trigonometri Segitiga Siku-Siku',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Sinus (sin θ) = Sisi Depan / Sisi Miring (De / Mi)',
                'Cosinus (cos θ) = Sisi Samping / Sisi Miring (Sa / Mi)',
                'Tangen (tan θ) = Sisi Depan / Sisi Samping (De / Sa) = sin θ / cos θ',
                'Cosecan (csc θ) = 1 / sin θ  |  Secan (sec θ) = 1 / cos θ  |  Cotangen (cot θ) = 1 / tan θ',
              ],
            },
            {
              type: 'table',
              tableData: {
                headers: ['Sudut Istimewa', '0°', '30° (π/6)', '45° (π/4)', '60° (π/3)', '90° (π/2)'],
                rows: [
                  ['sin θ', '0', '1/2', '1/2 √2', '1/2 √3', '1'],
                  ['cos θ', '1', '1/2 √3', '1/2 √2', '1/2', '0'],
                  ['tan θ', '0', '1/3 √3', '1', '√3', 'Tak Terdefinisi (∞)'],
                ],
              },
            },
          ],
        },
        {
          id: 'trigonometri-identitas-aturan-segitiga',
          title: 'Identitas Trigonometri, Aturan Sinus, Aturan Cosinus & Persamaan',
          summary: 'Identitas Pythagoras, rumus jumlah dua sudut, aturan sinus/cosinus segitiga sembarang, dan solusi persamaan.',
          estimatedMinutes: 12,
          tags: ['aturan-sinus', 'aturan-cosinus', 'identitas-trigonometri', 'persamaan-trigonometri'],
          sections: [
            {
              type: 'heading2',
              text: 'Identitas Trigonometri Esensial',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. Identitas Pythagoras:
• sin² θ + cos² θ = 1
• 1 + tan² θ = sec² θ
• 1 + cot² θ = csc² θ

2. Rumus Sudut Ganda (Double Angle):
• sin(2θ) = 2 sin θ cos θ
• cos(2θ) = cos² θ - sin² θ = 2 cos² θ - 1 = 1 - 2 sin² θ
• tan(2θ) = (2 tan θ) / (1 - tan² θ)`,
            },
            {
              type: 'heading2',
              text: 'Aturan Sinus & Aturan Cosinus untuk Segitiga Sembarang ABC',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Aturan', 'Rumus Segitiga ABC', 'Kapan Digunakan'],
                rows: [
                  [
                    'Aturan Sinus',
                    'a / sin A = b / sin B = c / sin C = 2R',
                    'Diketahui sepasang sisi dan sudut yang berhadapan (misal: Sisi-Sudut-Sudut atau Sisi-Sisi-Sudut).',
                  ],
                  [
                    'Aturan Cosinus',
                    'a² = b² + c² - 2bc cos A\nb² = a² + c² - 2ac cos B\nc² = a² + b² - 2ab cos C',
                    'Diketahui dua sisi dan sudut yang diapitnya (Sisi-Sudut-Sisi) atau diketahui ketiga sisinya (Sisi-Sisi-Sisi).',
                  ],
                  [
                    'Luas Segitiga',
                    'Luas = 1/2 · a · b · sin C',
                    'Menghitung luas tanpa perlu mengetahui garis tinggi segitiga.',
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-05',
      number: '05',
      title: 'Barisan, Deret & Notasi Sigma',
      summary: 'Barisan dan deret aritmatika, barisan dan deret geometri, deret tak hingga konvergen, notasi sigma, dan relasi rekurensi.',
      lessons: [
        {
          id: 'barisan-deret-aritmatika-geometri',
          title: 'Barisan & Deret Aritmatika serta Geometri',
          summary: 'Suku ke-n (Un), jumlah n suku pertama (Sn), beda konstan vs rasio geometri, dan deret konvergen tak hingga.',
          estimatedMinutes: 11,
          tags: ['aritmatika', 'geometri', 'barisan', 'deret', 'deret-tak-hingga'],
          sections: [
            {
              type: 'heading2',
              text: 'Tabel Perbandingan Barisan Aritmatika vs Geometri',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Parameter', 'Barisan & Deret Aritmatika', 'Barisan & Deret Geometri'],
                rows: [
                  ['Karakteristik Pengali/Penambah', 'Beda konstan (b = Uₙ - Uₙ₋₁)', 'Rasio konstan (r = Uₙ / Uₙ₋₁)'],
                  ['Suku ke-n (Uₙ)', 'Uₙ = a + (n - 1)b', 'Uₙ = a · rⁿ⁻¹'],
                  ['Jumlah n Suku Pertama (Sₙ)', 'Sₙ = n/2 · (2a + (n-1)b) = n/2 · (a + Uₙ)', 'Sₙ = a(1 - rⁿ) / (1 - r) untuk r < 1\nSₙ = a(rⁿ - 1) / (r - 1) untuk r > 1'],
                  ['Suku Tengah (Uₜ)', 'Uₜ = (a + Uₙ) / 2', 'Uₜ = √(a · Uₙ)'],
                  ['Deret Tak Hingga (S∞)', 'Divergen (tidak memiliki jumlah berhingga)', 'S∞ = a / (1 - r) dengan syarat konvergen: -1 < r < 1'],
                ],
              },
            },
          ],
        },
        {
          id: 'notasi-sigma-dan-rekurensi',
          title: 'Notasi Sigma (∑) & Relasi Rekurensi',
          summary: 'Sifat-sifat linearitas notasi sigma, rumus deret khusus (Gauss, kuadrat, kubik), dan barisan rekursif Fibonacci.',
          estimatedMinutes: 10,
          tags: ['notasi-sigma', 'rekurensi', 'fibonacci', 'induksi'],
          sections: [
            {
              type: 'heading2',
              text: 'Rumus Deret Khusus Notasi Sigma',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. Deret Bilangan Asli Pertama:
∑(i=1 sampai n) i = 1 + 2 + 3 + ... + n = n(n + 1) / 2

2. Deret Kuadrat Bilangan Asli:
∑(i=1 sampai n) i² = 1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1) / 6

3. Deret Kubik Bilangan Asli:
∑(i=1 sampai n) i³ = [ n(n + 1) / 2 ]² = ( ∑ i )²

4. Relasi Rekurensi (Contoh Fibonacci):
F₁ = 1, F₂ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂ untuk n ≥ 3
Urutan: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...`,
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-06',
      number: '06',
      title: 'Kalkulus Diferensial & Integral',
      summary: 'Limit fungsi, turunan fungsi aljabar/trigonometri, integral tak tentu & tentu, serta aplikasi luas daerah dan optimasi.',
      lessons: [
        {
          id: 'kalkulus-limit-dan-turunan',
          title: 'Limit Fungsi & Konsep Dasar Turunan (Diferensial)',
          summary: 'Bentuk tak tentu 0/0, dalil L’Hospital, turunan pertama aturan rantai (Chain Rule), perkalian & pembagian.',
          estimatedMinutes: 12,
          tags: ['kalkulus', 'limit', 'turunan', 'diferensial', 'l-hospital'],
          sections: [
            {
              type: 'heading2',
              text: 'Aturan Baku Diferensial (Turunan)',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Bentuk Fungsi f(x)', 'Turunan Pertama f\'(x)', 'Contoh Penerapan'],
                rows: [
                  ['Konstanta c', '0', 'f(x) = 15 -> f\'(x) = 0'],
                  ['Pangkat xⁿ', 'n · xⁿ⁻¹', 'f(x) = 4x³ -> f\'(x) = 12x²'],
                  ['Perkalian u · v', 'u\'v + uv\'', 'f(x) = x² sin x -> f\'(x) = 2x sin x + x² cos x'],
                  ['Pembagian u / v', '(u\'v - uv\') / v²', 'f(x) = x / (x + 1) -> f\'(x) = 1 / (x + 1)²'],
                  ['Aturan Rantai [g(x)]ⁿ', 'n · [g(x)]ⁿ⁻¹ · g\'(x)', 'f(x) = (3x² - 5)⁴ -> f\'(x) = 4(3x² - 5)³ · 6x'],
                ],
              },
            },
          ],
        },
        {
          id: 'kalkulus-integral-dan-aplikasi',
          title: 'Integral & Aplikasi Kalkulus (Gradien, Optimasi & Luas Daerah)',
          summary: 'Anti-turunan aljabar, integral tentu Teorema Dasar Kalkulus, titik stasioner maksimum/minimum, dan luas kurva.',
          estimatedMinutes: 13,
          tags: ['integral', 'luas-daerah', 'optimasi', 'maksimum-minimum'],
          sections: [
            {
              type: 'heading2',
              text: 'Aplikasi Turunan: Titik Stasioner & Optimasi',
            },
            {
              type: 'paragraph',
              text: 'Titik stasioner kurva y = f(x) terjadi ketika turunan pertamanya bernilai nol: f\'(x) = 0. Uji turunan kedua menentukan jenis stasioner: f\'\'(x) < 0 menunjukkan titik balik maksimum lokal, sedangkan f\'\'(x) > 0 menunjukkan titik balik minimum lokal.',
            },
            {
              type: 'heading2',
              text: 'Aplikasi Integral: Menghitung Luas Bidang Datar di Antara Dua Kurva',
            },
            {
              type: 'code',
              language: 'text',
              code: `Luas daerah yang dibatasi oleh kurva atas y₁ = f(x) dan kurva bawah y₂ = g(x) dari x = a hingga x = b:
Luas = ∫ [f(x) - g(x)] dx dari x = a sampai x = b

Contoh: Luas antara parabola y = x² dan garis y = 2x:
1. Cari titik potong: x² = 2x -> x(x - 2) = 0 -> x = 0 dan x = 2
2. Kurva atas adalah y = 2x, kurva bawah y = x²
3. Luas = ∫ (2x - x²) dx [0 sampai 2]
   = [x² - (1/3)x³] batas 0 sampai 2
   = (4 - 8/3) - 0 = 4/3 satuan luas.`,
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-07',
      number: '07',
      title: 'Statistika Deskriptif & Ukuran Penyebaran',
      summary: 'Penyajian data tabel/diagram, ukuran pemusatan (mean, median, modus), kuartil, desil, varians, dan standar deviasi.',
      lessons: [
        {
          id: 'statistika-pemusatan-data',
          title: 'Penyajian Data & Ukuran Pemusatan (Mean, Median, Modus)',
          summary: 'Kalkulasi nilai rata-rata hitung data tunggal & kelompok, titik tengah median, serta frekuensi modus.',
          estimatedMinutes: 10,
          tags: ['statistika', 'mean', 'median', 'modus', 'data-kelompok'],
          sections: [
            {
              type: 'heading2',
              text: 'Ukuran Pemusatan Data (Measures of Central Tendency)',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Ukuran', 'Definisi Konsep', 'Rumus Data Tunggal', 'Rumus Data Kelompok'],
                rows: [
                  ['Mean (x̄)', 'Nilai rata-rata aritmatika seluruh data', 'x̄ = (∑ xᵢ) / n', 'x̄ = (∑ fᵢ · xᵢ) / (∑ fᵢ)'],
                  ['Median (Me)', 'Nilai tengah setelah data diurutkan dari terkecil', 'Nilai pada data ke-(n + 1)/2', 'Me = Tb + [ (n/2 - Fk) / f_me ] · p'],
                  ['Modus (Mo)', 'Nilai data dengan frekuensi kemunculan tertinggi', 'Data yang paling sering muncul', 'Mo = Tb + [ d₁ / (d₁ + d₂) ] · p'],
                ],
              },
            },
          ],
        },
        {
          id: 'statistika-kuartil-varians-deviasi',
          title: 'Ukuran Penyebaran: Kuartil, Jangkauan, Varians & Standar Deviasi',
          summary: 'Mengukur dispersi data: Q1, Q2, Q3, Jangkauan Interkuartil (IQR), varians populasi/sampel, dan simpangan baku.',
          estimatedMinutes: 11,
          tags: ['kuartil', 'varians', 'standar-deviasi', 'simpangan-baku', 'iqr'],
          sections: [
            {
              type: 'heading2',
              text: 'Kalkulasi Varians & Standar Deviasi (Simpangan Baku)',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. Varians Sampel (s²):
s² = [ ∑ (xᵢ - x̄)² ] / (n - 1)
Menyatakan rata-rata kuadrat penyimpangan tiap data terhadap nilai rata-rata (mean).

2. Standar Deviasi / Simpangan Baku (s):
s = √(s²) = √ ( [ ∑ (xᵢ - x̄)² ] / (n - 1) )
Satuan simpangan baku identik dengan satuan data asli, menunjukkan kestabilan/keragaman data.

3. Kuartil & Jangkauan Interkuartil (IQR):
• Q₁ (Kuartil Bawah 25%), Q₂ (Median 50%), Q₃ (Kuartil Atas 75%)
• Jangkauan Interkuartil: IQR = Q₃ - Q₁
• Batas Pagar Luar (Outlier / Pencilan):
  Batas Bawah = Q₁ - 1.5 × IQR
  Batas Atas = Q₃ + 1.5 × IQR`,
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-08',
      number: '08',
      title: 'Teori Peluang & Kaidah Pencacahan',
      summary: 'Kaidah pencacahan (aturan penjumlahan & perkalian), permutasi, kombinasi, peluang empiris/teoretis, dan distribusi peluang.',
      lessons: [
        {
          id: 'kaidah-pencacahan-permutasi-kombinasi',
          title: 'Kaidah Pencacahan: Aturan Perkalian, Permutasi & Kombinasi',
          summary: 'Membedakan kasus yang memperhatikan urutan (Permutasi) vs tanpa urutan (Kombinasi).',
          estimatedMinutes: 11,
          tags: ['peluang', 'pencacahan', 'permutasi', 'kombinasi', 'faktorial'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Kunci Perbedaan Mutlak: Urutan Diperhatikan atau Tidak?',
                content:
                  'Permutasi memperhatikan urutan: Posisi Juara 1, 2, 3 atau Jabatan Ketua, Sekretaris, Bendahara (AB ≠ BA). Kombinasi TIDAK memperhatikan urutan: Memilih anggota tim delegasi, jabat tangan, atau mengambil kelereng secara acak (AB = BA).',
              },
            },
            {
              type: 'table',
              tableData: {
                headers: ['Metode Pencacahan', 'Rumus Matematis', 'Karakteristik Masalah', 'Contoh Kasus'],
                rows: [
                  ['Aturan Perkalian (Filling Slots)', 'n₁ × n₂ × n₃ × ...', 'Tahapan kegiatan berurutan', 'Menyusun kode sandi 4 digit dari angka 1-9 tanpa pengulangan = 9 × 8 × 7 × 6.'],
                  ['Permutasi Unsur Berbeda', 'nPᵣ = n! / (n - r)!', 'Memilih r unsur dari n objek dengan urutan spesifik', 'Memilih Ketua dan Wakil dari 8 calon = 8P2 = 8! / 6! = 56 cara.'],
                  ['Permutasi Unsur Sama', 'P = n! / (k₁! · k₂! · ...)', 'Ada huruf/elemen kembar yang berulang', 'Banyak susunan kata "STATISTIKA" = 10! / (2! · 3! · 2!).'],
                  ['Permutasi Siklis (Melingkar)', 'Psiklis = (n - 1)!', 'Objek disusun melingkar pada meja bundar', '6 orang duduk melingkar mengelilingi meja rapat = (6 - 1)! = 120 cara.'],
                  ['Kombinasi', 'nCᵣ = n! / [ r! (n - r)! ]', 'Memilih r objek dari n tanpa memedulikan urutan', 'Memilih 3 siswa delegasi olimpiade dari 10 kandidat = 10C3 = 120 cara.'],
                ],
              },
            },
          ],
        },
        {
          id: 'peluang-kejadian-dan-distribusi',
          title: 'Peluang Kejadian Majemuk & Distribusi Peluang',
          summary: 'Peluang komplemen, kejadian saling lepas vs tidak saling lepas, kejadian saling bebas, dan peluang bersyarat.',
          estimatedMinutes: 12,
          tags: ['peluang-majemuk', 'saling-lepas', 'saling-bebas', 'peluang-bersyarat'],
          sections: [
            {
              type: 'heading2',
              text: 'Operasi Peluang Kejadian Majemuk',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tipe Kejadian', 'Kondisi & Relasi Himpunan', 'Rumus Peluang', 'Contoh Kasus'],
                rows: [
                  ['Peluang Dasar', 'Perbandingan titik sampel n(A) terhadap ruang sampel n(S)', 'P(A) = n(A) / n(S)', 'Peluang muncul angka prima ganjil pada dadu (3, 5) = 2/6 = 1/3.'],
                  ['Komplemen Kejadian', 'Peluang kejadian bukan A', 'P(A\') = 1 - P(A)', 'Peluang tidak hujan jika peluang hujan 0.35 = 1 - 0.35 = 0.65.'],
                  ['Kejadian Saling Lepas', 'A dan B tidak mungkin terjadi bersamaan (A ∩ B = ∅)', 'P(A ∪ B) = P(A) + P(B)', 'Peluang menarik kartu As ATAU kartu King dari dek kartu remi standard.'],
                  ['Kejadian Saling Bebas', 'Terjadinya A tidak mempengaruhi peluang terjadinya B', 'P(A ∩ B) = P(A) × P(B)', 'Melempar koin dan dadu secara bersamaan; hasil koin tidak mengubah dadu.'],
                  ['Peluang Bersyarat', 'Peluang B terjadi DENGAN SYARAT A telah terjadi lebih dulu', 'P(B|A) = P(A ∩ B) / P(A)', 'Peluang bola kedua merah setelah bola pertama merah diambil tanpa pengembalian.'],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-09',
      number: '09',
      title: 'Logika Matematika & Penarikan Kesimpulan',
      summary: 'Pernyataan (proposisi), tabel kebenaran, negasi, konjungsi, disjungsi, implikasi, biimplikasi, konvers, invers, dan silogisme.',
      lessons: [
        {
          id: 'logika-proposisi-tabel-kebenaran',
          title: 'Proposisi, Negasi & Tabel Kebenaran Lengkap',
          summary: 'Konjungsi (∧), Disjungsi (∨), Implikasi (p → q), dan Biimplikasi (p ↔ q) dengan analisis nilai kebenaran.',
          estimatedMinutes: 10,
          tags: ['logika', 'proposisi', 'tabel-kebenaran', 'implikasi', 'biimplikasi'],
          sections: [
            {
              type: 'heading2',
              text: 'Master Tabel Kebenaran Logika Proposisi',
            },
            {
              type: 'table',
              tableData: {
                headers: ['p', 'q', '~p (Negasi)', 'p ∧ q (Konjungsi)', 'p ∨ q (Disjungsi)', 'p → q (Implikasi)', 'p ↔ q (Biimplikasi)'],
                rows: [
                  ['B (True)', 'B (True)', 'S', 'B (Hanya jika keduanya B)', 'B', 'B', 'B (Sama nilai)'],
                  ['B (True)', 'S (False)', 'S', 'S', 'B', 'S (Satu-satunya kasus salah)', 'S'],
                  ['S (False)', 'B (True)', 'B', 'S', 'B', 'B', 'S'],
                  ['S (False)', 'S (False)', 'B', 'S', 'S (Hanya jika keduanya S)', 'B', 'B (Sama nilai)'],
                ],
              },
            },
            {
              type: 'callout',
              callout: {
                type: 'warning',
                title: 'Kunci Penting: Implikasi p → q',
                content:
                  'Implikasi p → q HANYA bernilai SALAH jika premis awal (p) BENAR namun kesimpulan (q) SALAH (Kasus True -> False). Jika premis awalnya sudah salah (p = S), maka pernyataan implikasi otomatis selalu dianggap BENAR (True)!',
              },
            },
          ],
        },
        {
          id: 'logika-ekuivalensi-dan-silogisme',
          title: 'Konvers, Invers, Kontraposisi & 3 Metode Penarikan Kesimpulan Sah',
          summary: 'Ekuivalensi kontraposisi (~q → ~p) serta pembuktian Modus Ponens, Modus Tollens, dan Silogisme Hipotetis.',
          estimatedMinutes: 11,
          tags: ['silogisme', 'modus-ponens', 'modus-tollens', 'kontraposisi', 'penarikan-kesimpulan'],
          sections: [
            {
              type: 'heading2',
              text: 'Hubungan Implikasi: Konvers, Invers, dan Kontraposisi',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Bentuk Pernyataan', 'Simbol Logika', 'Status Ekuivalensi'],
                rows: [
                  ['Pernyataan Asli (Implikasi)', 'p → q', 'Ekuivalen dengan Kontraposisi ( p → q ≡ ~q → ~p )'],
                  ['Konvers (Dibalik)', 'q → p', 'Ekuivalen dengan Invers ( q → p ≡ ~p → ~q )'],
                  ['Invers (Dinegasi)', '~p → ~q', 'Ekuivalen dengan Konvers'],
                  ['Kontraposisi (Dibalik & Dinegasi)', '~q → ~p', 'Ekuivalen 100% dengan Pernyataan Asli (p → q)'],
                ],
              },
            },
            {
              type: 'heading2',
              text: 'Tiga Kaidah Penarikan Kesimpulan yang Sah (Valid Inferences)',
            },
            {
              type: 'code',
              language: 'text',
              code: `1. MODUS PONENS:
Premis 1 : p → q  (Jika server kelebihan beban, sistem melambat)
Premis 2 : p      (Server kelebihan beban)
----------------------------------------
Konklusi : ∴ q    (Sistem melambat)

2. MODUS TOLLENS:
Premis 1 : p → q  (Jika firewall aktif, paket mencurigakan diblokir)
Premis 2 : ~q     (Paket mencurigakan TIDAK diblokir)
----------------------------------------
Konklusi : ∴ ~p   (Firewall tidak aktif)

3. SILOGISME HIPOTETIS:
Premis 1 : p → q  (Jika jalur fiber optik terputus, switch kehilangan sinyal)
Premis 2 : q → r  (Jika switch kehilangan sinyal, alarm darurat berbunyi)
----------------------------------------
Konklusi : ∴ p → r (Jika jalur fiber optik terputus, alarm darurat berbunyi)`,
            },
          ],
        },
      ],
    },
    {
      id: 'math-ch-10',
      number: '10',
      title: 'Penalaran Matematika, Pemodelan & HOTS',
      summary: 'Soal kemampuan berpikir tingkat tinggi (HOTS), pola bilangan non-standar, interpretasi grafik, analisis data, dan pemodelan.',
      lessons: [
        {
          id: 'penalaran-pola-bilangan-dan-grafik',
          title: 'Pola Bilangan Kompleks & Interpretasi Grafik Tren',
          summary: 'Menganalisis deret angka selang-seling, pola bertingkat (deret kuadratik), serta membaca grafik fungsi tren.',
          estimatedMinutes: 11,
          tags: ['pola-bilangan', 'interpretasi-grafik', 'hots', 'penalaran-kuantitatif'],
          sections: [
            {
              type: 'heading2',
              text: 'Strategi Memecahkan Pola Bilangan Non-Standar',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Pola Selang-Seling (Larik Ganda): Deret memuat dua sub-pola berlainan pada posisi ganjil dan genap (misal: 2, 10, 4, 20, 8, 40, ...).',
                'Pola Bertingkat (Barisan Aritmatika Bertingkat Dua): Beda antar-suku tidak konstan pada tingkat 1, melainkan konstan pada selisih tingkat 2. Rumus: Uₙ = an² + bn + c.',
                'Pola Operasi Berulang (Kombinasi): Operasi berurutan seperti (+2, ×3, -1, +2, ×3, -1).',
                'Pola Berbasis Pangkat & Selisih Kubik: Suku bernilai n³ - 1 atau n² + 2.',
              ],
            },
          ],
        },
        {
          id: 'penalaran-hots-dan-pemodelan-matematika',
          title: 'Problem Solving HOTS & Pemodelan Matematika Dunia Nyata',
          summary: 'Menerjemahkan narasi kontekstual bisnis dan teknologi ke dalam model matematis yang dapat diselesaikan.',
          estimatedMinutes: 12,
          tags: ['problem-solving', 'pemodelan-matematika', 'hots', 'optimasi-kasus'],
          sections: [
            {
              type: 'heading2',
              text: 'Metodologi 4 Langkah Pemodelan Matematika (Polya)',
            },
            {
              type: 'bullet_list',
              listItems: [
                '1. Pahami Masalah: Identifikasi besaran yang diketahui, besaran yang ditanyakan, dan batasan (constraints).',
                '2. Rancang Model: Tetapkan variabel (misal: x = jumlah unit server, y = biaya operasional bulanan) dan bentuk fungsi kendala.',
                '3. Eksekusi Solusi: Selesaikan sistem persamaan, pertidaksamaan linear, atau kalkulus turunan untuk nilai optimal.',
                '4. Verifikasi dan Interpretasi: Uji apakah solusi numerik masuk akal secara fisis dan sesuai dengan konteks dunia nyata.',
              ],
            },
            {
              type: 'heading3',
              text: 'Studi Kasus HOTS: Optimasi Biaya Bandwidth Jaringan',
            },
            {
              type: 'code',
              language: 'text',
              code: `Kasus:
Sebuah data center membutuhkan total bandwidth 1.200 Mbps. Tersedia dua provider:
• Provider Alpha: Biaya tetap Rp 2.000.000/bulan + Rp 5.000 per Mbps. Maksimal kuota 800 Mbps.
• Provider Beta: Biaya tetap Rp 1.500.000/bulan + Rp 6.000 per Mbps. Maksimal kuota 1.000 Mbps.
Untuk menjamin redundansi (failover), masing-masing provider minimal harus dialokasikan 300 Mbps.

Model Matematis:
Misalkan x = bandwidth Alpha (Mbps), y = bandwidth Beta (Mbps).
Kendala:
1. x + y = 1.200 -> y = 1.200 - x
2. 300 ≤ x ≤ 800
3. 300 ≤ y ≤ 1.000  ->  300 ≤ 1.200 - x ≤ 1.000  ->  200 ≤ x ≤ 900
Irisan kendala x: 300 ≤ x ≤ 800

Fungsi Total Biaya C(x):
C(x) = (2.000.000 + 5.000x) + (1.500.000 + 6.000(1.200 - x))
C(x) = 3.500.000 + 5.000x + 7.200.000 - 6.000x
C(x) = 10.700.000 - 1.000x

Kesimpulan Optimasi:
Karena koefisien x bernilai negatif (-1.000x), biaya minimum tercapai saat x bernilai MAKSIMUM.
Nilai x maksimum yang memenuhi kendala adalah x = 800 Mbps.
Maka y = 1.200 - 800 = 400 Mbps.
Biaya Minimal = 10.700.000 - 1.000(800) = Rp 9.900.000 per bulan.`,
            },
          ],
        },
      ],
    },
  ],
};
