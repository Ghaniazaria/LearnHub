import { Module } from '../types';

export const DEFAULT_NETWORK_MODULE: Module = {
  id: 'jaringan-komputer',
  badge: 'MODUL · 7 BAB · 11 MATERI',
  title: 'MODUL PEMBELAJARAN JARINGAN KOMPUTER',
  description:
    'Materi dasar sampai menengah tentang cara komputer saling terhubung: mulai dari model lapisan, pengalamatan IP, sampai routing, VLAN, dan NAT. Dibaca berurutan atau langsung ke bagian yang dibutuhkan.',
  category: 'Teknik Komputer & Jaringan',
  ctaText: 'MULAI DARI BAB 01 →',
  chapters: [
    {
      id: 'chapter-01',
      number: '01',
      title: 'Pengenalan Jaringan',
      summary: 'Apa itu jaringan komputer, komponennya, dan skala jaringan.',
      lessons: [
        {
          id: 'dasar-jaringan',
          title: 'Dasar Jaringan',
          summary: 'Definisi jaringan komputer, tujuan interkoneksi, dan topologi dasar.',
          estimatedMinutes: 6,
          tags: ['dasar', 'topologi', 'arsitektur'],
          sections: [
            {
              type: 'heading2',
              text: 'Apa itu Jaringan Komputer?',
            },
            {
              type: 'paragraph',
              text: 'Jaringan komputer adalah sekumpulan perangkat otonom (komputer, server, switch, router, smartphone) yang saling terhubung satu sama lain melalui media transmisi kabel maupun nirkabel untuk berbagi sumber daya (file, printer, internet) dan bertukar informasi secara efisien.',
            },
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Prinsip Kunci Jaringan',
                content:
                  'Komunikasi data hanya dapat terjadi apabila pengirim (transmitter), media transmisi (channel), dan penerima (receiver) beroperasi di bawah protokol komunikasi standar yang sama.',
              },
            },
            {
              type: 'heading3',
              text: 'Karakteristik Utama Topologi Jaringan',
            },
            {
              type: 'paragraph',
              text: 'Topologi menentukan bagaimana node-node dalam jaringan dihubungkan secara fisik maupun logis. Setiap topologi memiliki trade-off antara biaya, keandalan, dan kemudahan perawatan.',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Topologi', 'Kelebihan', 'Kelemahan', 'Implementasi Populer'],
                rows: [
                  ['Star', 'Mudah diisolasi saat bermasalah, jika satu kabel putus node lain tetap aktif', 'Tergantung penuh pada central device (switch/hub)', 'LAN Kantor / Rumah'],
                  ['Mesh', 'Redundansi tinggi, tidak ada bottleneck tunggal', 'Biaya pengkabelan dan port switch sangat mahal', 'Backbone WAN & ISP Core'],
                  ['Ring', 'Aliran data teratur searah cincin', 'Kerusakan satu simpul dapat melumpuhkan seluruh ring', 'Token Ring (Legacy), FDDI'],
                  ['Bus', 'Sederhana dan hemat kabel', 'Collisions tinggi saat traffic padat', 'Jaringan coaxial masa awal'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Verifikasi Konektivitas Pertama',
            },
            {
              type: 'paragraph',
              text: 'Utilitas dasar untuk menguji apakah simpul tujuan dapat dijangkau adalah ICMP Echo Request melalui perintah ping:',
            },
            {
              type: 'code',
              language: 'bash',
              code: `# Menguji konektivitas ke gateway lokal
ping -c 4 192.168.1.1

# Hasil uji respon:
# 64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.24 ms
# 64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=0.98 ms
# --- 192.168.1.1 ping statistics ---
# 4 packets transmitted, 4 received, 0% packet loss, time 3004ms`,
            },
          ],
        },
        {
          id: 'komponen-dan-skala-jaringan',
          title: 'Komponen & Skala Jaringan',
          summary: 'Hardware jaringan dan klasifikasi LAN, MAN, WAN, hingga PAN.',
          estimatedMinutes: 8,
          tags: ['hardware', 'lan', 'wan', 'skala'],
          sections: [
            {
              type: 'heading2',
              text: 'Komponen Fisik Jaringan',
            },
            {
              type: 'paragraph',
              text: 'Infrastruktur jaringan modern terdiri dari end devices (komputer klien, server, IoT), intermediary devices (switch, access point, firewall, router), dan media transmisi.',
            },
            {
              type: 'bullet_list',
              listItems: [
                'End Devices: Sumber asal atau tujuan akhir transmisi paket data (PC, printer, kamera IP, smartphone).',
                'Intermediary Devices: Mengatur lalu lintas data, meregenerasi sinyal, dan menentukan rute (Hub L1, Switch L2/L3, Router L3).',
                'Media Transmisi: Saluran fisik meliputi tembaga (UTP Cat6/Cat6a), serat optik (Single-mode/Multi-mode), dan nirkabel (Wi-Fi 802.11ax/be).',
              ],
            },
            {
              type: 'heading2',
              text: 'Klasifikasi Berdasarkan Cakupan Geografis',
            },
            {
              type: 'numbered_list',
              listItems: [
                'PAN (Personal Area Network): Rentang < 10 meter (Bluetooth, NFC, USB interlink).',
                'LAN (Local Area Network): Cakupan terbatas pada satu ruangan, gedung, atau kampus.',
                'MAN (Metropolitan Area Network): Cakupan satu kota, menghubungkan kantor-kantor cabang pemerintah atau bank via jaringan fiber optik metro.',
                'WAN (Wide Area Network): Menghubungkan berbagai lokasi terpisah negara atau benua, contohnya Internet global.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-02',
      number: '02',
      title: 'OSI Layer',
      summary: 'Tujuh lapisan model referensi dan tugas masing-masing.',
      lessons: [
        {
          id: 'tujuh-lapisan-osi',
          title: 'Tujuh Lapisan OSI',
          summary: 'Model konseptual 7 layer ISO/OSI dari Physical hingga Application.',
          estimatedMinutes: 10,
          tags: ['osi', 'layer', 'protokol'],
          sections: [
            {
              type: 'heading2',
              text: 'Model Referensi OSI (Open Systems Interconnection)',
            },
            {
              type: 'paragraph',
              text: 'Model OSI dibuat oleh International Organization for Standardization (ISO) pada 1984 untuk memberikan standar arsitektur komunikasi terbuka tanpa memandang vendor hardware atau sistem operasi.',
            },
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Mnemonic Menghafal OSI Layer',
                content:
                  'Dari layer 7 ke layer 1: "All People Seem To Need Data Processing" (Application, Presentation, Session, Transport, Network, Data Link, Physical).',
              },
            },
            {
              type: 'table',
              tableData: {
                headers: ['No', 'Layer Name', 'Unit Data (PDU)', 'Fungsi Utama', 'Contoh Protokol / Alat'],
                rows: [
                  ['7', 'Application', 'Data', 'Antarmuka komunikasi aplikasi dengan jaringan', 'HTTP, DNS, SSH, SMTP'],
                  ['6', 'Presentation', 'Data', 'Format data, enkripsi, dan kompresi', 'TLS/SSL, JPEG, ASCII'],
                  ['5', 'Session', 'Data', 'Mengelola sesi dialog koneksi (buka, jaga, tutup)', 'NetBIOS, RPC, PPTP'],
                  ['4', 'Transport', 'Segment / Datagram', 'End-to-end delivery, flow control, error recovery', 'TCP, UDP'],
                  ['3', 'Network', 'Packet', 'Logical addressing (IP) dan penentuan rute (routing)', 'IPv4, IPv6, ICMP, Router'],
                  ['2', 'Data Link', 'Frame', 'Physical addressing (MAC) & deteksi galat transmisi', 'Ethernet (802.3), Switch L2, ARP'],
                  ['1', 'Physical', 'Bit', 'Transmisi bit biner mentah melalui sinyal elektrik/optik', 'Kabel UTP, Fiber Optik, Hub'],
                ],
              },
            },
          ],
        },
        {
          id: 'enkapsulasi-data',
          title: 'Enkapsulasi Data & PDU',
          summary: 'Proses pembungkusan data dari layer atas ke layer bawah saat transmisi.',
          estimatedMinutes: 7,
          tags: ['enkapsulasi', 'pdu', 'header'],
          sections: [
            {
              type: 'heading2',
              text: 'Mekanisme Enkapsulasi & Dekapsulasi',
            },
            {
              type: 'paragraph',
              text: 'Saat sebuah aplikasi mengirimkan data, data tersebut bergerak turun melalui lapisan-lapisan. Setiap lapisan menambahkan informasi kontrolnya sendiri yang disebut header (dan trailer pada Data Link layer). Proses ini disebut Enkapsulasi.',
            },
            {
              type: 'code',
              language: 'text',
              code: `[Application Data]
       ↓ Layer 4 (Transport)
[TCP Header | Application Data]                     -> Segment
       ↓ Layer 3 (Network)
[IP Header | TCP Header | Application Data]         -> Packet
       ↓ Layer 2 (Data Link)
[Ethernet Header | IP Header | TCP Header | Data | FCS] -> Frame
       ↓ Layer 1 (Physical)
01101001 01101110 01110100 01100101 01110010 01101110 -> Bits`,
            },
            {
              type: 'callout',
              callout: {
                type: 'warning',
                title: 'FCS (Frame Check Sequence)',
                content:
                  'Trailer pada layer 2 berisi algoritma CRC (Cyclic Redundancy Check) untuk mendeteksi korupsi frame selama perjalanan kabel. Jika checksum tidak cocok, frame langsung di-drop.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-03',
      number: '03',
      title: 'TCP/IP',
      summary: 'Model praktis yang benar-benar dipakai di internet.',
      lessons: [
        {
          id: 'model-tcp-ip',
          title: 'Model TCP/IP',
          summary: 'Perbandingan model TCP/IP 4 lapis dengan OSI 7 lapis dan mekanisme 3-way handshake.',
          estimatedMinutes: 9,
          tags: ['tcp', 'udp', 'handshake', 'port'],
          sections: [
            {
              type: 'heading2',
              text: 'Arsitektur Model TCP/IP',
            },
            {
              type: 'paragraph',
              text: 'Jika model OSI merupakan acuan teoritis, model DoD TCP/IP adalah implementasi protokol riil yang menopang seluruh infrastruktur Internet sedunia.',
            },
            {
              type: 'heading3',
              text: 'Tiga Tahap TCP 3-Way Handshake',
            },
            {
              type: 'paragraph',
              text: 'TCP adalah protokol berorientasi koneksi (connection-oriented) yang menjamin pengiriman paket secara andal dan berurutan melalui mekanisme pembukaan sesi:',
            },
            {
              type: 'numbered_list',
              listItems: [
                'SYN (Synchronize): Klien mengirimkan segmen SYN dengan Sequence Number awal (ISN) acak ke server tujuan.',
                'SYN-ACK: Server membalas dengan SYN-ACK mengkonfirmasi penerimaan dan memberikan ISN milik server.',
                'ACK (Acknowledgment): Klien membalas ACK terakhir. Sesi koneksi full-duplex kini aktif dan data aplikasi mulai dikirimkan.',
              ],
            },
            {
              type: 'code',
              language: 'bash',
              code: `# Melihat koneksi TCP yang sedang aktif di sistem Linux / macOS
ss -tuln

# Memeriksa listening ports pada TCP
# State      Recv-Q  Send-Q   Local Address:Port   Peer Address:Port
# LISTEN     0       128      0.0.0.0:22           0.0.0.0:*
# LISTEN     0       511      0.0.0.0:80           0.0.0.0:*
# LISTEN     0       511      0.0.0.0:443          0.0.0.0:*`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-04',
      number: '04',
      title: 'IP Address',
      summary: 'Pengalamatan logis, pembagian subnet, dan transisi ke IPv6.',
      lessons: [
        {
          id: 'ipv4-dan-subnetting',
          title: 'IPv4 & Subnetting',
          summary: 'Struktur 32-bit IPv4, subnet mask, CIDR notation, dan kalkulasi host.',
          estimatedMinutes: 11,
          tags: ['ipv4', 'subnetting', 'cidr', 'kelas'],
          sections: [
            {
              type: 'heading2',
              text: 'Format Pengalamatan IPv4',
            },
            {
              type: 'paragraph',
              text: 'IPv4 menggunakan bilangan 32-bit biner yang dipisahkan ke dalam 4 oktet (masing-masing 8 bit) dan direpresentasikan dalam notasi desimal bertitik (dotted-decimal), misal 192.168.10.5.',
            },
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Rumus Subnetting',
                content:
                  'Jumlah Subnet = 2^x (x = jumlah bit subnet 1 yang dipinjam). Jumlah Host per Subnet = 2^y - 2 (y = jumlah bit host 0 yang tersisa, dikurangi 2 untuk Network ID dan Broadcast ID).',
              },
            },
            {
              type: 'heading3',
              text: 'Tabel Prefiks CIDR yang Sering Digunakan',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Prefiks CIDR', 'Subnet Mask', 'Total IP', 'Usable Hosts', 'Skenario Umum'],
                rows: [
                  ['/24', '255.255.255.0', '256', '254', 'LAN kantor kecil / segmen standar'],
                  ['/26', '255.255.255.192', '64', '62', 'Departemen internal menengah'],
                  ['/28', '255.255.255.240', '16', '14', 'DMZ server cluster kecil'],
                  ['/30', '255.255.255.252', '4', '2', 'Point-to-point link antar router'],
                ],
              },
            },
            {
              type: 'code',
              language: 'bash',
              code: `# Konfigurasi IP static pada Linux interface eth0
sudo ip addr add 192.168.1.50/24 dev eth0
sudo ip route add default via 192.168.1.1 dev eth0

# Verifikasi konfigurasi
ip -brief addr show eth0
# Output: eth0 UP 192.168.1.50/24 fe80::a00:27ff:fe4e:66b1/64`,
            },
          ],
        },
        {
          id: 'pengenalan-ipv6',
          title: 'Pengenalan IPv6',
          summary: 'Arsitektur 128-bit IPv6, format heksadesimal, dan keunggulan auto-configuration SLAAC.',
          estimatedMinutes: 6,
          tags: ['ipv6', 'slaac', 'hexadecimal'],
          sections: [
            {
              type: 'heading2',
              text: 'Mengapa Dunia Beralih ke IPv6?',
            },
            {
              type: 'paragraph',
              text: 'Ruang alamat IPv4 yang hanya menyediakan sekitar 4,3 miliar alamat telah habis dialokasikan oleh IANA. IPv6 menyediakan ruang alamat 128-bit (sekitar 3,4 × 10^38 alamat), cukup untuk memberikan miliaran alamat untuk setiap butir debu di muka bumi.',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Format Heksadesimal: 8 kelompok 4 digit heksa, dipisahkan tanda titik dua (contoh: 2001:0db8:85a3:0000:0000:8a2e:0370:7334).',
                'Aturan Kompresi: Nol berurutan dalam blok dapat disingkat dengan tanda ganda titik dua (::) sekali saja.',
                'Tanpa Broadcast: IPv6 menghapus konsep broadcast dan menggantikannya dengan multicast yang jauh lebih hemat bandwidth.',
                'SLAAC (Stateless Address Autoconfiguration): Host dapat mengkonfigurasi IP mereka sendiri tanpa bantuan DHCP server.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-05',
      number: '05',
      title: 'Routing',
      summary: 'Mekanisme penerusan paket antar subnet dan protokol dinamis.',
      lessons: [
        {
          id: 'konsep-routing',
          title: 'Konsep Routing',
          summary: 'Tabel routing, static route vs dynamic routing protocols (OSPF, BGP).',
          estimatedMinutes: 10,
          tags: ['routing', 'ospf', 'bgp', 'gateway'],
          sections: [
            {
              type: 'heading2',
              text: 'Bagaimana Router Meneruskan Paket?',
            },
            {
              type: 'paragraph',
              text: 'Routing adalah proses seleksi jalur di mana router memilih rute terbaik (best path) melalui algoritma metric (hop count, bandwidth, delay) untuk meneruskan paket dari jaringan asal ke jaringan tujuan yang berbeda network ID.',
            },
            {
              type: 'heading3',
              text: 'Perbandingan Static vs Dynamic Routing',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Parameter', 'Static Routing', 'Dynamic Routing (OSPF/EIGRP/BGP)'],
                rows: [
                  ['Konfigurasi', 'Manual oleh administrator', 'Otomatis lewat pertukaran pesan antar router'],
                  ['Beban CPU Router', 'Sangat rendah', 'Memerlukan kalkulasi memori dan CPU untuk graph path'],
                  ['Skalabilitas', 'Buruk untuk jaringan berskala besar', 'Sangat tinggi, rute baru otomatis terdeteksi'],
                  ['Ketahanan Kegagalan', 'Manual re-routing jika link putus', 'Failover otomatis dalam hitungan detik (konvergensi)'],
                ],
              },
            },
            {
              type: 'code',
              language: 'text',
              code: `! Contoh konfigurasi Static Route pada Cisco IOS Router
Router# configure terminal
Router(config)# ip route 10.20.0.0 255.255.0.0 192.168.1.254

! Contoh konfigurasi OSPF Area 0
Router(config)# router ospf 1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# network 10.20.0.0 0.0.255.255 area 0
Router(config-router)# end`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-06',
      number: '06',
      title: 'VLAN',
      summary: 'Isolasi broadcast domain dan standard IEEE 802.1Q.',
      lessons: [
        {
          id: 'virtual-lan',
          title: 'Virtual LAN & 802.1Q',
          summary: 'Segmentasi logis pada switch Layer 2, trunking, dan inter-VLAN routing.',
          estimatedMinutes: 8,
          tags: ['vlan', 'trunk', 'access-port', '802.1q'],
          sections: [
            {
              type: 'heading2',
              text: 'Mengapa Menggunakan VLAN?',
            },
            {
              type: 'paragraph',
              text: 'Secara default, seluruh port pada sebuah switch fisik berada dalam satu broadcast domain yang sama. VLAN (Virtual Local Area Network) memecah satu switch fisik menjadi beberapa jaringan logis yang saling terisolasi.',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Keamanan Lebih Tinggi: Komputer di VLAN Keuangan tidak dapat melihat atau mengendus traffic VLAN Tamu meskipun tertancap pada switch yang sama.',
                'Efisiensi Bandwidth: Mengurangi cakupan broadcast storm.',
                'Port Access vs Trunk: Port Access membawa traffic 1 VLAN saja (untagged ke PC), sedangkan Port Trunk membawa traffic banyak VLAN menggunakan tag header IEEE 802.1Q antar switch.',
              ],
            },
            {
              type: 'code',
              language: 'text',
              code: `! Membuat VLAN 10 (Marketing) & VLAN 20 (Finance) pada Switch Cisco
Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name MARKETING
Switch(config-vlan)# exit

Switch(config)# vlan 20
Switch(config-vlan)# name FINANCE
Switch(config-vlan)# exit

! Menugaskan port FastEthernet 0/1 ke VLAN 10
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-07',
      number: '07',
      title: 'NAT',
      summary: 'Translasi IP private ke IP public untuk penghematan alamat.',
      lessons: [
        {
          id: 'network-address-translation',
          title: 'Network Address Translation & Port Forwarding',
          summary: 'Prinsip SNAT, DNAT, PAT (Overload), dan cara gateway memetakan port.',
          estimatedMinutes: 9,
          tags: ['nat', 'pat', 'private-ip', 'gateway'],
          sections: [
            {
              type: 'heading2',
              text: 'Konsep Dasar NAT (Network Address Translation)',
            },
            {
              type: 'paragraph',
              text: 'NAT adalah teknik yang memungkinkan ratusan atau ribuan komputer dengan IP Private (RFC 1918) mengakses internet global dengan meminjam satu atau beberapa IP Public resmi yang terdaftar di ISP.',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Tipe NAT', 'Cara Kerja', 'Contoh Penggunaan'],
                rows: [
                  ['Static NAT', 'Pemetaan satu-ke-satu tetap (1 IP Private <-> 1 IP Public)', 'Web server internal yang ingin diakses dari internet'],
                  ['Dynamic NAT', 'Pemetaan dari pool IP public yang tersedia', 'Jaringan kampus dengan blok IP public berlebih'],
                  ['PAT / Masquerade', 'Banyak IP private dipetakan ke 1 IP public dengan membedakan port layer 4', 'Router Wi-Fi rumahan, modem Indihome / Biznet'],
                ],
              },
            },
            {
              type: 'code',
              language: 'bash',
              code: `# Contoh konfigurasi NAT Masquerade menggunakan iptables pada Linux Gateway
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# Mengaktifkan IP Forwarding di Linux kernel
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

# Port Forwarding (DNAT): Meneruskan port 80 publik ke web server internal 192.168.1.100
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.1.100:80`,
            },
          ],
        },
      ],
    },
  ],
};

import { DEFAULT_ENGLISH_MODULE } from './englishModule';
import { DEFAULT_MATH_MODULE } from './mathModule';

export { DEFAULT_ENGLISH_MODULE, DEFAULT_MATH_MODULE };

export const ALL_DEFAULT_MODULES: Module[] = [
  DEFAULT_NETWORK_MODULE,
  DEFAULT_ENGLISH_MODULE,
  DEFAULT_MATH_MODULE,
];

export function getDefaultModuleById(id: string): Module {
  const found = ALL_DEFAULT_MODULES.find((m) => m.id === id);
  return found || DEFAULT_NETWORK_MODULE;
}

