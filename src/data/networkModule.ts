import { Module } from '../types';

export const DEFAULT_NETWORK_MODULE: Module = {
  id: 'jaringan-komputer',
  badge: 'RUJUKAN RESMI: CISCO NETACAD & MIKROTIK ROUTEROS · 10 BAB · 20 MATERI',
  title: 'MODUL PEMBELAJARAN JARINGAN KOMPUTER',
  description:
    'Modul komprehensif terverifikasi 100% berlandaskan kurikulum resmi Cisco Networking Academy (NetAcad CCNA ITN/SRWE/ENSA v7.02) dan dokumentasi resmi MikroTik RouterOS v7 (MTCNA/MTCRE) serta standar RFC IETF. Dilengkapi perbandingan konsep dan sintaks CLI Cisco IOS vs MikroTik RouterOS berdampingan.',
  category: 'Teknik Komputer & Jaringan',
  ctaText: 'MULAI DARI BAB 01 →',
  chapters: [
    {
      id: 'chapter-01',
      number: '01',
      title: 'Pengenalan Jaringan & Topologi',
      summary: 'Konsep dasar interkoneksi, komponen fisik, perbandingan topologi, dan verifikasi awal (NetAcad ITN & MikroTik MTCNA).',
      lessons: [
        {
          id: 'dasar-jaringan',
          title: 'Dasar Jaringan Komputer & Elemen Komunikasi',
          summary: 'Definisi standar NetAcad & MikroTik, 4 elemen komunikasi, dan perbandingan topologi fisik.',
          estimatedMinutes: 7,
          tags: ['netacad', 'mtcna', 'topologi', 'arsitektur'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum Resmi: Cisco NetAcad ITN Modul 1 & MikroTik MTCNA Modul 1',
                content:
                  'Materi ini disusun mengacu pada kurikulum resmi Cisco Networking Academy (CCNA: Introduction to Networks v7.02 - Chapter 1: Networking Today) dan materi sertifikasi MikroTik Academy MTCNA (Module 1: Introduction to RouterOS & Network Basics).',
              },
            },
            {
              type: 'heading2',
              text: 'Apa itu Jaringan Komputer?',
            },
            {
              type: 'paragraph',
              text: 'Berdasarkan standar Cisco Networking Academy (NetAcad), jaringan komputer adalah interkoneksi antara dua atau lebih perangkat otonom (end devices seperti PC, laptop, server, serta intermediary devices seperti switch dan router) menggunakan media transmisi kabel (copper/fiber) atau nirkabel (wireless RF) yang diatur oleh seperangkat protokol baku untuk berbagi sumber daya, bertukar pesan/data, dan menyediakan layanan secara andal dan aman.',
            },
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Empat Elemen Kunci Komunikasi Data (NetAcad ITN)',
                content:
                  'Komunikasi data berhasil jika memenuhi 4 elemen: Transmitter (pengirim pesan), Receiver (penerima pesan), Medium (saluran transmisi pembawa sinyal), dan Protocol (kesepakatan aturan format, penanganan galat, dan waktu pengiriman).',
              },
            },
            {
              type: 'heading3',
              text: 'Karakteristik & Perbandingan Topologi Jaringan',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Topologi', 'Kelebihan', 'Kekurangan', 'Implementasi Industri (NetAcad / MikroTik)'],
                rows: [
                  ['Star', 'Mudah diisolasi; jika satu kabel putus node lain tetap beroperasi normal', 'Tergantung penuh pada central switch/hub; switch mati = segmen mati', 'Standar de facto LAN Kantor, Lab Sekolah, & Hotspot Kafe'],
                  ['Mesh (Full / Partial)', 'Toleransi galat maksimal (High Availability), tidak ada single point of failure', 'Kebutuhan kabel dan antarmuka fisik sangat mahal, konfigurasi rumit', 'Jaringan WAN Backbone Antar-Cabang Bank & Core ISP'],
                  ['Ring (Cincin)', 'Aliran data berurutan searah tanpa tabrakan collision token passing', 'Satu titik putus melumpuhkan seluruh ring (kecuali Dual Ring)', 'Jaringan Metro FDDI / Ring Sonet / SDH Provider'],
                  ['Bus', 'Sederhana dan hemat kabel pada jaringan kecil tempo dulu', 'Collision domain bersama sangat tinggi; gangguan terminator mematikan jaringan', 'Jaringan Coaxial legacy (10BASE2/10BASE5)'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Verifikasi Konektivitas Pertama (ICMP Ping & ARP Table)',
            },
            {
              type: 'paragraph',
              text: 'Pada Cisco IOS maupun MikroTik RouterOS, protokol ICMP (Internet Control Message Protocol, RFC 792) digunakan untuk menguji keterjangkauan Layer 3, sedangkan protokol ARP (Address Resolution Protocol, RFC 826) digunakan untuk memetakan IP ke MAC address fisik.',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. SINTAKS CISCO IOS (NetAcad ITN Verification)
! ==========================================================
Router# ping 192.168.10.1
! Sending 5, 100-byte ICMP Echos to 192.168.10.1, timeout is 2 seconds:
! !!!!!
! Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms

! Memeriksa pemetaan alamat IP ke MAC address pada Cisco IOS:
Router# show ip arp
! Protocol  Address          Age (min)  Hardware Addr   Type   Interface
! Internet  192.168.10.1            -   aabb.cc00.0100  ARPA   FastEthernet0/0
! Internet  192.168.10.15          12   0050.7966.6801  ARPA   FastEthernet0/0


# ==========================================================
# 2. SINTAKS MIKROTIK ROUTEROS v7 (MTCNA Verification)
# ==========================================================
[admin@MikroTik] > /ping count=4 192.168.10.1
#  SEQ HOST                                     SIZE TTL TIME       STATUS
#    0 192.168.10.1                               56  64 542us     
#    1 192.168.10.1                               56  64 489us     
#    2 192.168.10.1                               56  64 471us     
#    3 192.168.10.1                               56  64 463us     
#    sent=4 received=4 packet-loss=0% min-rtt=463us avg-rtt=491us max-rtt=542us

# Memeriksa tabel ARP pada MikroTik RouterOS:
[admin@MikroTik] > /ip arp print
# Flags: D - DYNAMIC; C - COMPLETE
#   COLUMNS     ADDRESS        MAC-ADDRESS       INTERFACE
# 0  DC         192.168.10.15  00:50:79:66:68:01 ether2`,
            },
          ],
        },
        {
          id: 'komponen-dan-skala-jaringan',
          title: 'Komponen Fisik & Skala Jaringan',
          summary: 'Klasifikasi End Devices, Intermediary Devices, Media Transmisi, dan cakupan geografis LAN/WAN.',
          estimatedMinutes: 8,
          tags: ['netacad', 'mtcna', 'hardware', 'lan', 'wan'],
          sections: [
            {
              type: 'heading2',
              text: 'Klasifikasi Perangkat Jaringan (NetAcad Standard)',
            },
            {
              type: 'bullet_list',
              listItems: [
                'End Devices (Perangkat Akhir): Titik asal (source) atau titik tujuan akhir (destination) data. Contoh: PC Klien, Laptop, Server Fisik/Virtual, IP Phone VoIP, IP Camera CCTV, dan Terminal Kasir POS.',
                'Intermediary Devices (Perangkat Perantara): Perangkat yang mengarahkan dan memodulasi aliran data di sepanjang jalur jaringan. Contoh: Switch Layer 2 (meneruskan frame berdasarkan MAC address), Switch Layer 3 / MLS (switching dan routing lokal berkecepatan tinggi), Router (memilih rute terbaik antar jaringan logis), dan Hardware Firewall.',
                'Media Transmisi: Media fisik atau elektromagnetik pembawa sinyal. Terdiri dari UTP/STP Tembaga (maksimal 100 meter), Serat Optik (Single-Mode jarak hingga puluhan kilometer, Multi-Mode untuk interkoneksi data center), dan Nirkabel (Wireless 2.4 GHz, 5 GHz, 6 GHz Wi-Fi 6/7).',
              ],
            },
            {
              type: 'heading2',
              text: 'Skala Jaringan Berdasarkan Jangkauan Geografis',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Klasifikasi', 'Jangkauan', 'Kepemilikan & Kecepatan', 'Contoh Nyata'],
                rows: [
                  ['PAN (Personal Area Network)', '< 10 meter', 'Personal / Pribadi, kecepatan sedang (Bluetooth, USB interlink)', 'Koneksi smartphone ke earphone nirkabel, smartwatch, atau sensor IoT pribadi'],
                  ['LAN (Local Area Network)', 'Satu ruangan, gedung kantor, kampus', 'Dikelola secara mandiri oleh satu organisasi/perusahaan; kecepatan tinggi (1 Gbps - 100 Gbps)', 'Lab Komputer TKJ, jaringan kantor lantai 3, hotspot kampus'],
                  ['MAN (Metropolitan Area Network)', 'Satu kota / wilayah urban (10 - 50 km)', 'Sering dikelola bersama konsorsium atau penyedia telekomunikasi regional', 'Jaringan fiber optik terintegrasi Diskominfo kota, interkoneksi cabang bank se-kota'],
                  ['WAN (Wide Area Network)', 'Lintas kota, negara, antar benua', 'Dikelola oleh ISP (Internet Service Provider) dan operator telekomunikasi multinasional', 'Jaringan internet global, tautan leased-line SD-WAN antar-kantor pusat Jakarta ke Tokyo'],
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-02',
      number: '02',
      title: 'Model OSI & TCP/IP',
      summary: 'Arsitektur komunikasi berlapis, enkapsulasi PDU, dan 3-Way Handshake TCP (NetAcad ITN & RFC Standards).',
      lessons: [
        {
          id: 'tujuh-lapisan-osi',
          title: 'Tujuh Lapisan Model OSI & Enkapsulasi PDU',
          summary: 'Fungsi rinci Layer 1 sampai Layer 7, format Protocol Data Unit (PDU), dan alur enkapsulasi.',
          estimatedMinutes: 10,
          tags: ['netacad', 'osi', 'layer', 'pdu', 'enkapsulasi'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum Resmi: Cisco NetAcad ITN Modul 3 & ISO/IEC 7498-1',
                content:
                  'Model OSI (Open Systems Interconnection) adalah model arsitektur teoritis formal yang diterbitkan oleh ISO untuk menjamin interoperabilitas sistem antar vendor di seluruh dunia.',
              },
            },
            {
              type: 'heading2',
              text: 'Rincian Tujuh Lapisan Model OSI',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Layer', 'Nama Layer', 'PDU Unit', 'Fungsi Utama (NetAcad)', 'Protokol & Perangkat Terkait'],
                rows: [
                  ['7', 'Application', 'Data', 'Antarmuka langsung antara perangkat lunak aplikasi pengguna dengan protokol jaringan', 'HTTP, HTTPS, DNS, DHCP, Telnet, SSH, FTP'],
                  ['6', 'Presentation', 'Data', 'Format representasi data, kompresi, dan enkripsi/dekripsi kriptografis', 'TLS/SSL, ASCII, UTF-8, JPEG, PNG, MPEG'],
                  ['5', 'Session', 'Data', 'Membuka, mengelola, mengontrol dialog, dan menutup sesi koneksi antar program', 'NetBIOS, RPC, Sockets, PPTP Session'],
                  ['4', 'Transport', 'Segment (TCP) / Datagram (UDP)', 'End-to-end delivery, multiplexing port, segmentasi, flow control, dan error recovery', 'TCP (andal dengan handshake), UDP (cepat connectionless)'],
                  ['3', 'Network', 'Packet', 'Pengalamatan logis (IP Address) dan penentuan rute terbaik (Path Determination / Routing)', 'IPv4, IPv6, ICMP, ARP, Router, L3 Switch, MikroTik Cloud Core Router'],
                  ['2', 'Data Link', 'Frame', 'Pengalamatan fisik (MAC Address 48-bit), framing data, dan deteksi galat transmisi kabel', 'Ethernet (IEEE 802.3), 802.1Q (VLAN), PPP, HDLC, Switch L2'],
                  ['1', 'Physical', 'Bits', 'Transmisi bit biner elektrik, pulsa cahaya, atau frekuensi radio melalui media fisik', 'Kabel UTP Cat6, Fiber Optic SFP+, Konektor RJ-45, Repeater, Hub'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Alur Enkapsulasi & Dekapsulasi (NetAcad PDU Flow)',
            },
            {
              type: 'code',
              language: 'text',
              code: `[PENGIRIM]                                                           [PENERIMA]
Data Asli Pengguna (L7-L5)                                      Data Diterima Aplikasi
          ↓                                                               ↑
Layer 4 (Transport) -> Enkapsulasi Header TCP/UDP (Segment)   <- Dekapsulasi L4 Header
          ↓                                                               ↑
Layer 3 (Network)   -> Tambah Source & Dest IP (Packet)       <- Dekapsulasi L3 Header
          ↓                                                               ↑
Layer 2 (Data Link) -> Tambah Source & Dest MAC + FCS (Frame) <- Validasi FCS & Hapus Header
          ↓                                                               ↑
Layer 1 (Physical)  -> Modulasi sinyal listrik/cahaya (Bits)   <- Sinyal diubah ke bit biner`,
            },
          ],
        },
        {
          id: 'model-tcp-ip-handshake',
          title: 'Model TCP/IP & Mekanisme 3-Way Handshake',
          summary: 'Arsitektur praktis 4 layer TCP/IP, pembentukan sesi TCP (RFC 793), dan klasifikasi nomor port.',
          estimatedMinutes: 9,
          tags: ['netacad', 'tcp', 'udp', 'handshake', 'rfc793'],
          sections: [
            {
              type: 'heading2',
              text: 'Perbandingan Model TCP/IP (4 Layer) vs OSI (7 Layer)',
            },
            {
              type: 'paragraph',
              text: 'Model TCP/IP (Internet Protocol Suite, didefinisikan dalam RFC 1122) menyederhanakan arsitektur menjadi 4 lapisan praktis yang langsung diimplementasikan pada TCP/IP stack sistem operasi modern (Windows, Linux, Cisco IOS, MikroTik RouterOS):',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Application Layer TCP/IP: Menggabungkan fungsi Application (L7), Presentation (L6), dan Session (L5) OSI.',
                'Transport Layer TCP/IP: Bersesuaian langsung dengan Layer 4 OSI (TCP & UDP). Mengelola komunikasi antar-proses menggunakan port number.',
                'Internet Layer TCP/IP: Bersesuaian dengan Layer 3 OSI (IPv4, IPv6, ICMP, routing).',
                'Network Access Layer TCP/IP: Menggabungkan fungsi Data Link (L2) dan Physical (L1) OSI.',
              ],
            },
            {
              type: 'heading3',
              text: 'Proses TCP 3-Way Handshake (RFC 793)',
            },
            {
              type: 'numbered_list',
              listItems: [
                'Langkah 1 (SYN): Klien mengirimkan paket TCP dengan kontrol bit flag SYN (Synchronize) bernilai 1 serta memilih Initial Sequence Number (ISN) acak klien untuk meminta inisialisasi koneksi.',
                'Langkah 2 (SYN-ACK): Server menerima permintaan dan merespons dengan flag SYN = 1 dan ACK = 1. Server mengakui nomor urut klien (Acknowledgment Number = ISN_klien + 1) dan menyertakan ISN acak server.',
                'Langkah 3 (ACK): Klien mengirimkan paket balasan terakhir dengan flag ACK = 1 (Acknowledgment Number = ISN_server + 1). Pada titik ini, status soket koneksi berubah menjadi ESTABLISHED dan pengiriman data aplikasi dapat dimulai.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-03',
      number: '03',
      title: 'Pengalamatan IP & Subnetting',
      summary: 'Arsitektur IPv4 32-bit, prefix CIDR, metode Magic Number, VLSM, dan konfigurasi interface (NetAcad ITN & MikroTik MTCNA).',
      lessons: [
        {
          id: 'ipv4-dan-subnetting',
          title: 'IPv4, Notasi CIDR & Perhitungan Subnetting (VLSM)',
          summary: 'Metode Magic Number NetAcad, pemetaan Network ID, Broadcast ID, Usable Hosts, serta CLI Cisco & MikroTik.',
          estimatedMinutes: 11,
          tags: ['netacad', 'mtcna', 'ipv4', 'subnetting', 'cidr', 'vlsm'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad ITN Modul 11 & MikroTik MTCNA Modul 2',
                content:
                  'Mengacu pada standar RFC 791 (IPv4), RFC 4632 (CIDR), dan RFC 1918 (Private Address Allocation).',
              },
            },
            {
              type: 'heading2',
              text: 'Struktur Alamat IPv4 & Konsep Subnetting',
            },
            {
              type: 'paragraph',
              text: 'IPv4 adalah pengalamatan numerik 32-bit yang dibagi menjadi 4 oktet (masing-masing 8 bit) dipisahkan oleh tanda titik. Setiap alamat IPv4 terdiri atas porsi Network (Network ID) dan porsi Host. Subnet Mask menentukan batas pembagian bit network dan bit host.',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Prefix CIDR', 'Subnet Mask Desimal', 'Wildcard Mask (NetAcad ACL)', 'Total IP (2^H)', 'Usable Hosts (2^H - 2)', 'Magic Number (Kelipatan Subnet)'],
                rows: [
                  ['/24', '255.255.255.0', '0.0.0.255', '256', '254', '256 - 0 = 256 (1 blok penuh)'],
                  ['/25', '255.255.255.128', '0.0.0.127', '128', '126', '256 - 128 = 128 (kelipatan 0, 128)'],
                  ['/26', '255.255.255.192', '0.0.0.63', '64', '62', '256 - 192 = 64 (kelipatan 0, 64, 128, 192)'],
                  ['/27', '255.255.255.224', '0.0.0.31', '32', '30', '256 - 224 = 32 (kelipatan 0, 32, 64, ...)'],
                  ['/28', '255.255.255.240', '0.0.0.15', '16', '14', '256 - 240 = 16 (kelipatan 0, 16, 32, ...)'],
                  ['/29', '255.255.255.248', '0.0.0.7', '8', '6', '256 - 248 = 8 (kelipatan 0, 8, 16, ...)'],
                  ['/30', '255.255.255.252', '0.0.0.3', '4', '2 (Tautan Point-to-Point)', '256 - 252 = 4 (kelipatan 0, 4, 8, 12, ...)'],
                ],
              },
            },
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Metode Magic Number Cisco NetAcad',
                content:
                  'Magic Number didapat dari 256 dikurangi nilai oktet subnet mask yang tidak bernilai 255. Magic Number merupakan nilai kelipatan yang memisahkan blok subnet satu dengan blok subnet berikutnya secara presisi.',
              },
            },
            {
              type: 'heading3',
              text: 'Konfigurasi IP Address Interface: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS (NetAcad ITN Standard)
! ==========================================================
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# description Gateway-LAN-Karyawan
Router(config-if)# ip address 192.168.10.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit

! Verifikasi antarmuka:
Router# show ip interface brief
! Interface              IP-Address      OK? Method Status                Protocol
! GigabitEthernet0/0     192.168.10.1    YES manual up                    up


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 (MTCNA Standard)
# ==========================================================
[admin@MikroTik] > /ip address add address=192.168.10.1/24 interface=ether2 comment="Gateway-LAN-Karyawan"

# Verifikasi antarmuka:
[admin@MikroTik] > /ip address print
# Flags: D - DYNAMIC
#   COLUMNS   ADDRESS          NETWORK        INTERFACE
# 0           192.168.10.1/24  192.168.10.0   ether2`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-04',
      number: '04',
      title: 'Switching, VLAN & Inter-VLAN Routing',
      summary: 'VLAN 802.1Q, Port Access/Trunk, Allowed VLAN, SVI Multilayer Switch, Router-on-a-Stick, dan VTP (NetAcad SRWE & MikroTik MTCRE).',
      lessons: [
        {
          id: 'vlan-access-trunk-allowed',
          title: 'VLAN, Port Access & Trunking 802.1Q',
          summary: 'Segmentasi broadcast domain L2, enkapsulasi IEEE 802.1Q, dan filter allowed VLAN pada Cisco & MikroTik.',
          estimatedMinutes: 12,
          tags: ['netacad', 'mtcna', 'vlan', 'trunk', '802.1q'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad SRWE Modul 1 & MikroTik RouterOS Bridge VLAN',
                content:
                  'Standar internasional IEEE 802.1Q mendefinisikan penyisipan tag 4-byte (termasuk 12-bit VLAN ID mendukung rentang VLAN 1 hingga 4094) ke dalam frame Ethernet standar.',
              },
            },
            {
              type: 'heading2',
              text: 'Pengertian VLAN (Virtual Local Area Network)',
            },
            {
              type: 'paragraph',
              text: 'Berdasarkan standar Cisco NetAcad SRWE, VLAN adalah partisi logis di dalam switch Layer 2 yang memecah satu broadcast domain fisik menjadi beberapa broadcast domain logis mandiri. Host yang berada pada VLAN berbeda tidak dapat berkomunikasi secara langsung di Layer 2 tanpa bantuan perangkat Layer 3 (Router atau Multilayer Switch).',
            },
            {
              type: 'bullet_list',
              listItems: [
                'Port Access (Untagged): Port switch yang ditugaskan ke SATU VLAN spesifik untuk menghubungkan end devices (PC, printer). Frame yang keluar dari port ini tidak memiliki tag 802.1Q.',
                'Port Trunk (Tagged): Port point-to-point switch-to-switch atau switch-to-router yang membawa lalu lintas banyak VLAN sekaligus dengan menyematkan tag 802.1Q.',
                'Allowed Trunk: Fitur hardening keamanan switch untuk membatasi hanya VLAN ID tertentu yang diizinkan melintasi tautan trunk, mencegah banjir paket broadcast yang tidak diinginkan.',
              ],
            },
            {
              type: 'heading3',
              text: 'Konfigurasi VLAN & Trunk: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS (NetAcad SRWE Standard)
! ==========================================================
Switch# configure terminal
! Membuat database VLAN
Switch(config)# vlan 10
Switch(config-vlan)# name VLAN10-GURU
Switch(config-vlan)# exit

! Menjadikan port FastEthernet0/2 sebagai Port Access VLAN 10
Switch(config)# interface FastEthernet0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# exit

! Menjadikan port GigabitEthernet0/1 sebagai Trunk & memfilter Allowed VLAN
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10
Switch(config-if)# exit


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 (Bridge VLAN Filtering Standard)
# ==========================================================
# Membuat bridge utama dengan hardware VLAN filtering
/interface bridge add name=bridge-lan vlan-filtering=yes

# Menambahkan port access ether2 (PVID 10) ke bridge
/interface bridge port add bridge=bridge-lan interface=ether2 pvid=10

# Menambahkan port trunk ether1 ke bridge
/interface bridge port add bridge=bridge-lan interface=ether1

# Mengatur keanggotaan VLAN 10 (ether1 Tagged/Trunk, ether2 Untagged/Access)
/interface bridge vlan add bridge=bridge-lan tagged=ether1 untagged=ether2 vlan-ids=10`,
            },
          ],
        },
        {
          id: 'mls-trunk-svi-intervlan',
          title: 'MLS Trunk, SVI & Inter-VLAN Routing',
          summary: 'Routing antar VLAN via SVI (Switch Virtual Interface) pada Multilayer Switch dan Router-on-a-Stick pada router fisik.',
          estimatedMinutes: 14,
          tags: ['netacad', 'mtcre', 'mls', 'svi', 'inter-vlan', 'subinterface'],
          sections: [
            {
              type: 'heading2',
              text: 'Dua Metode Utama Inter-VLAN Routing (NetAcad SRWE)',
            },
            {
              type: 'paragraph',
              text: 'Inter-VLAN Routing adalah proses meneruskan lalu lintas jaringan dari satu VLAN ke VLAN lainnya. Dalam standar Cisco NetAcad dan praktik industri MikroTik, terdapat dua arsitektur utama:',
            },
            {
              type: 'numbered_list',
              listItems: [
                'SVI (Switch Virtual Interface) pada Multilayer Switch: Gateway dibuat secara internal di dalam switch L3 menggunakan interface logis virtual. Menghasilkan performa routing tercepat (wire-speed ASIC).',
                'Router-on-a-Stick pada Router Fisik: Satu kabel fisik menghubungkan switch L2 ke interface router. Interface router dibagi menjadi sub-interface logis bertag dot1q untuk setiap VLAN.',
              ],
            },
            {
              type: 'heading3',
              text: 'Sintaks Konfigurasi SVI & Router-on-a-Stick',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! A. CISCO MULTILAYER SWITCH (SVI Gateway)
! ==========================================================
MLS# configure terminal
MLS(config)# ip routing    ! Wajib mengaktifkan engine Layer 3
MLS(config)# vlan 10
MLS(config-vlan)# name VLAN10
MLS(config-vlan)# exit

! Konfigurasi gateway virtual SVI untuk VLAN 10:
MLS(config)# interface vlan 10
MLS(config-if)# ip address 192.168.10.1 255.255.255.0
MLS(config-if)# no shutdown
MLS(config-if)# exit

! Trunk dot1q ke switch distribusi:
MLS(config)# interface FastEthernet0/1
MLS(config-if)# switchport trunk encapsulation dot1q
MLS(config-if)# switchport mode trunk
MLS(config-if)# exit


! ==========================================================
! B. CISCO ROUTER: ROUTER-ON-A-STICK (NetAcad SRWE)
! ==========================================================
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# no shutdown
Router(config-if)# exit

! Sub-interface logis untuk VLAN 10:
Router(config)# interface GigabitEthernet0/0.10
Router(config-subif)# encapsulation dot1q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# exit


# ==========================================================
# C. MIKROTIK ROUTEROS v7: INTER-VLAN ROUTING (MTCRE)
# ==========================================================
# Membuat interface VLAN logis di atas port fisik ether1:
/interface vlan add name=vlan10-gateway vlan-id=10 interface=ether1

# Memasang IP gateway pada interface VLAN tersebut:
/ip address add address=192.168.10.1/24 interface=vlan10-gateway comment="Gateway-VLAN10"`,
            },
          ],
        },
        {
          id: 'vtp-vlan-trunking-protocol',
          title: 'VTP (VLAN Trunking Protocol)',
          summary: 'Protokol sinkronisasi database VLAN otomatis pada Cisco Switch (Server, Client, Transparent).',
          estimatedMinutes: 10,
          tags: ['netacad', 'vtp', 'cisco-proprietary', 'trunk'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad SRWE Modul 3',
                content:
                  'VTP adalah protokol proprietary Cisco. Memahami VTP sangat penting untuk sertifikasi CCNA dan manajemen switch enterprise berskala besar.',
              },
            },
            {
              type: 'heading2',
              text: 'Prinsip Kerja & Tiga Mode Operasi VTP',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Mode Operasi', 'Bisa Membuat/Menghapus VLAN?', 'Menyinkronkan ke Switch Lain?', 'Menyimpan di NVRAM (vlan.dat)?'],
                rows: [
                  ['Server (Default)', 'Ya, perubahan menaikkan Configuration Revision number', 'Ya, memancarkan advertisement ke seluruh domain trunk', 'Ya, tersimpan permanen di flash:vlan.dat'],
                  ['Client', 'Tidak, hanya membaca dan menyerap dari Server', 'Ya, meneruskan advertisement VTP ke switch tetangga', 'Tidak, hilang saat reboot jika VTP server belum aktif'],
                  ['Transparent', 'Ya, tetapi hanya berlaku untuk switch lokal sendiri', 'Tidak menyerap, hanya meneruskan paket VTP advertisement lewat trunk', 'Ya, tersimpan di running-config lokal'],
                ],
              },
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! CISCO IOS VTP CONFIGURATION (NetAcad SRWE)
! ==========================================================
! 1. Switch Core (VTP Server)
Core-Switch(config)# vtp mode server
Core-Switch(config)# vtp domain idn.sch.id
Core-Switch(config)# vtp password rahasia123

! 2. Switch Access (VTP Client)
Access-Switch(config)# vtp mode client
Access-Switch(config)# vtp domain idn.sch.id
Access-Switch(config)# vtp password rahasia123

! Verifikasi nomor revisi konfigurasi dan status:
Core-Switch# show vtp status`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-05',
      number: '05',
      title: 'Keamanan Switch & Manajemen Remote',
      summary: 'Port Security, Sticky MAC, Violations, serta pengamanan jalur remote SSH vs Telnet (NetAcad SRWE & MikroTik MTCNA).',
      lessons: [
        {
          id: 'port-security',
          title: 'Switch Port Security & Violation Modes',
          summary: 'Pencegahan CAM table flooding, MAC address spoofing, dan aksi pelanggaran shutdown/restrict/protect.',
          estimatedMinutes: 10,
          tags: ['netacad', 'mtcna', 'port-security', 'cam-table', 'hardening'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad SRWE Modul 10-11 & MikroTik Bridge Filter',
                content:
                  'Mengamankan port akses fisik dari serangan CAM Table Flooding (MAC flooding attack) yang dapat memaksa switch berpindah ke mode fail-open hub.',
              },
            },
            {
              type: 'heading2',
              text: 'Tiga Mode Pelanggaran Port Security (NetAcad Standard)',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Violation Mode', 'Status Port Saat Pelanggaran', 'Lalu Lintas MAC Liar', 'Syslog & Counter Error'],
                rows: [
                  ['Shutdown (Default)', 'Port langsung dimatikan ke status err-disabled', 'Semua lalu lintas terputus total', 'Kirim notifikasi Syslog/SNMP trap & violation counter bertambah'],
                  ['Restrict', 'Port tetap menyala (UP)', 'Frame dari MAC liar di-drop seketika', 'Kirim notifikasi Syslog/SNMP trap & violation counter bertambah'],
                  ['Protect', 'Port tetap menyala (UP)', 'Frame dari MAC liar di-drop seketika', 'Senyap (Silent): TIDAK kirim Syslog dan TIDAK menaikkan counter'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Konfigurasi Port Security: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS PORT SECURITY (NetAcad SRWE Standard)
! ==========================================================
Switch# configure terminal
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 1
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation shutdown
Switch(config-if)# exit

! Verifikasi status port security:
Switch# show port-security interface FastEthernet0/1


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 (MAC Filter / Port Security Equivalent)
# ==========================================================
# Membatasi port ether2 hanya menerima MAC address resmi yang disetujui:
/interface bridge filter add chain=forward in-interface=ether2 src-mac-address=!00:50:79:66:68:01 action=drop log=yes log-prefix="ILLEGAL_MAC_DETECTED"`,
            },
          ],
        },
        {
          id: 'remote-access-telnet-ssh',
          title: 'Manajemen Remote: Telnet (Insecure) vs SSH (Secure)',
          summary: 'Perbandingan risiko transmisi plain-text Telnet vs enkripsi asimetris RSA pada SSH v2.',
          estimatedMinutes: 11,
          tags: ['netacad', 'mtcna', 'ssh', 'telnet', 'rsa', 'vty'],
          sections: [
            {
              type: 'heading2',
              text: 'Mengapa Telnet Dilarang di Lingkungan Produksi? (RFC 854 vs RFC 4253)',
            },
            {
              type: 'paragraph',
              text: 'Berdasarkan standar Cisco NetAcad dan praktik MikroTik MTCNA, protokol Telnet (TCP port 23) mengirimkan seluruh kredensial termasuk username dan password dalam bentuk teks polos (plain-text) yang dapat disadap dengan mudah menggunakan packet analyzer (Wireshark). SSH (Secure Shell, TCP port 22) menggunakan kriptografi kunci publik asimetris (RSA/Ed25519) dan enkripsi simetris (AES) untuk melindungi seluruh sesi manajemen jarak jauh.',
            },
            {
              type: 'heading3',
              text: 'Konfigurasi SSH Remote Access: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS SECURE SHELL (NetAcad ITN/SRWE)
! ==========================================================
Router# configure terminal
Router(config)# hostname Router-Pusat
Router-Pusat(config)# ip domain-name idn.sch.id
Router-Pusat(config)# username admin privilege 15 secret RahasiaKuat2026!
Router-Pusat(config)# crypto key generate rsa modulus 2048
Router-Pusat(config)# ip ssh version 2

! Mengunci baris VTY agar hanya menerima SSH (blokir Telnet):
Router-Pusat(config)# line vty 0 4
Router-Pusat(config-line)# transport input ssh
Router-Pusat(config-line)# login local
Router-Pusat(config-line)# exit


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 (MTCNA Remote Hardening)
# ==========================================================
# Mematikan Telnet yang tidak aman dan mengamankan layanan SSH:
/ip service disable telnet
/ip service enable ssh
/ip service set ssh port=22 address=192.168.10.0/24

# Membuat akun administrator khusus dan menghapus user default 'admin' kosong:
/user add name=netadmin group=full password="RahasiaKuat2026!"
/user disable admin`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-06',
      number: '06',
      title: 'Redundansi Layer 2: STP & EtherChannel',
      summary: 'Spanning Tree Protocol (Root Bridge, Cost, PortFast) dan Link Aggregation / Bonding (NetAcad SRWE & MikroTik RouterOS).',
      lessons: [
        {
          id: 'spanning-tree-protocol',
          title: 'STP (IEEE 802.1D) & Rapid STP (IEEE 802.1w)',
          summary: 'Pemilihan Root Bridge, manipulasi port cost, dan percepatan koneksi klien dengan PortFast / Edge Port.',
          estimatedMinutes: 12,
          tags: ['netacad', 'mtcre', 'stp', 'rstp', 'root-bridge', 'portfast'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad SRWE Modul 5 & IEEE 802.1D / IEEE 802.1w',
                content:
                  'STP mencegah terjadinya loop Layer 2 (Broadcast Storm dan MAC Database Instability) pada topologi switch yang memiliki jalur fisik berlebih (redundant).',
              },
            },
            {
              type: 'heading2',
              text: 'Mekanisme Pemilihan Root Bridge (NetAcad SRWE)',
            },
            {
              type: 'paragraph',
              text: 'Switch dengan Bridge ID (BID) terendah di seluruh jaringan akan terpilih sebagai Root Bridge. Bridge ID tersusun atas: Priority (default 32768, kelipatan 4096) + System ID Extension (VLAN ID) + MAC Address switch.',
            },
            {
              type: 'heading3',
              text: 'Konfigurasi STP/RSTP: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS STP CONFIGURATION (NetAcad SRWE)
! ==========================================================
Switch# configure terminal
! Mengaktifkan Rapid PVST+ (IEEE 802.1w per VLAN):
Switch(config)# spanning-tree mode rapid-pvst

! Menentukan switch ini sebagai Root Bridge utama untuk VLAN 1 (Priority 4096):
Switch(config)# spanning-tree vlan 1 priority 4096

! Mengaktifkan PortFast pada port yang terhubung langsung ke PC end-device:
Switch(config)# interface FastEthernet0/10
Switch(config-if)# switchport mode access
Switch(config-if)# spanning-tree portfast
Switch(config-if)# spanning-tree bpduguard enable
Switch(config-if)# exit


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 (RSTP & Edge Port Standard)
# ==========================================================
# Mengaktifkan RSTP dan menurunkan bridge priority agar menjadi Root Bridge:
/interface bridge set bridge-lan protocol-mode=rstp priority=0x1000

# Mengaktifkan fitur Edge Port (setara Cisco PortFast) pada port klien:
/interface bridge port set [find interface=ether2] edge=yes bpdu-guard=yes`,
            },
          ],
        },
        {
          id: 'etherchannel-link-aggregation',
          title: 'EtherChannel (LACP IEEE 802.3ad vs PAgP)',
          summary: 'Agregasi bandwidth beberapa kabel fisik menjadi satu tautan logis Port-Channel berkecepatan tinggi.',
          estimatedMinutes: 13,
          tags: ['netacad', 'mtcre', 'lacp', 'bonding', 'etherchannel', '802.3ad'],
          sections: [
            {
              type: 'heading2',
              text: 'Protokol Negosiasi EtherChannel (NetAcad SRWE)',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Protokol', 'Standar', 'Mode Pengaturan', 'Kompatibilitas'],
                rows: [
                  ['LACP (Link Aggregation Control Protocol)', 'Standar Terbuka IEEE 802.3ad / 802.1AX', 'Active (mengajak aktif) & Passive (menunggu diajak)', 'Universal: Cisco, MikroTik, Linux Server, Juniper, HP'],
                  ['PAgP (Port Aggregation Protocol)', 'Cisco Proprietary', 'Desirable (mengajak aktif) & Auto (menunggu diajak)', 'Hanya sesama perangkat switch Cisco'],
                  ['Static / Manual (Mode ON)', 'Tanpa Protokol Negosiasi', 'Mode "on" di kedua ujung', 'Bekerja jika kedua sisi switch dikonfigurasi identik secara manual'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Konfigurasi LACP: Cisco IOS vs MikroTik Bonding',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS LACP ETHERCHANNEL (NetAcad SRWE)
! ==========================================================
Switch# configure terminal
Switch(config)# interface range GigabitEthernet0/1 - 2
Switch(config-if-range)# channel-group 1 mode active
Switch(config-if-range)# exit

! Mengkonfigurasi port-channel logis sebagai trunk:
Switch(config)# interface port-channel 1
Switch(config-if)# switchport mode trunk
Switch(config-if)# exit

! Verifikasi status EtherChannel:
Switch# show etherchannel summary


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 (Bonding LACP 802.3ad)
# ==========================================================
/interface bonding add name=bonding-core slaves=ether1,ether2 mode=802.3ad lacp-rate=fast transmit-hash-policy=layer-2-and-3`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-07',
      number: '07',
      title: 'Routing Statis & Protokol Dinamis',
      summary: 'Static Routing, OSPF Single/Multi-Area, EIGRP DUAL, RIPv2, dan Route Redistribution (NetAcad SRWE/ENSA & MikroTik MTCRE).',
      lessons: [
        {
          id: 'routing-statis',
          title: 'Routing Statis & Default Route (0.0.0.0/0)',
          summary: 'Prinsip Next-Hop, Exit-Interface, Administrative Distance (AD), dan Default Route ke Internet.',
          estimatedMinutes: 10,
          tags: ['netacad', 'mtcna', 'static-route', 'default-route', 'ad'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad SRWE Modul 14-16 & MikroTik MTCNA Modul 3',
                content:
                  'Routing statis menentukan jalur rute paket secara manual oleh administrator. Rute statis memiliki Administrative Distance default bernilai 1 (sangat dipercaya di tabel routing).',
              },
            },
            {
              type: 'heading2',
              text: 'Konfigurasi Static Route: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS STATIC & DEFAULT ROUTE (NetAcad SRWE)
! ==========================================================
! Rute spesifik ke subnet kantor cabang:
Router-Pusat(config)# ip route 192.168.20.0 255.255.255.0 10.10.10.2

! Default route (Gateway of Last Resort) ke arah ISP:
Router-Pusat(config)# ip route 0.0.0.0 0.0.0.0 200.10.10.1


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 STATIC & DEFAULT ROUTE (MTCNA)
# ==========================================================
# Rute spesifik ke subnet kantor cabang:
/ip route add dst-address=192.168.20.0/24 gateway=10.10.10.2 distance=1 comment="Route-ke-Cabang"

# Default route ke arah ISP:
/ip route add dst-address=0.0.0.0/0 gateway=200.10.10.1 distance=1 comment="Default-Route-ISP"`,
            },
          ],
        },
        {
          id: 'ospf-single-multi-area',
          title: 'OSPF (Open Shortest Path First - RFC 2328)',
          summary: 'Algoritma Dijkstra SPF, penentuan Router-ID, Area 0 Backbone, dan Multi-Area OSPF.',
          estimatedMinutes: 14,
          tags: ['netacad', 'mtcre', 'ospf', 'dijkstra', 'area0', 'link-state'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad ENSA Modul 1-2 & MikroTik MTCRE Routing',
                content:
                  'OSPFv2 (RFC 2328) adalah protokol routing dinamis Link-State standar terbuka yang menghitung rute bebas loop tercepat menggunakan algoritma SPF (Shortest Path First) Edsger Dijkstra.',
              },
            },
            {
              type: 'heading2',
              text: 'Hierarki Area OSPF (Backbone Area 0)',
            },
            {
              type: 'paragraph',
              text: 'Pada jaringan OSPF berskala besar, jaringan dibagi menjadi beberapa area. Area 0 (0.0.0.0) adalah Area Backbone wajib tempat semua area non-backbone (seperti Area 1 atau Area 2) harus terhubung langsung melalui router perbatasan (ABR - Area Border Router) untuk mencegah routing loop inter-area.',
            },
            {
              type: 'heading3',
              text: 'Konfigurasi OSPF: Cisco IOS vs MikroTik RouterOS v7',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS OSPFv2 (NetAcad ENSA)
! ==========================================================
Router# configure terminal
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
! Mendaftarkan network ke Backbone Area 0 menggunakan Wildcard Mask:
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# network 10.10.10.0 0.0.0.3 area 0
Router(config-router)# exit

! Verifikasi ketetanggaan OSPF:
Router# show ip ospf neighbor
Router# show ip route ospf


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 (MTCRE Standard Architecture)
# ==========================================================
# Membuat instance OSPF v7:
/routing ospf instance add name=ospf-inst-1 router-id=1.1.1.1

# Membuat Area 0 Backbone:
/routing ospf area add name=backbone-area instance=ospf-inst-1 area-id=0.0.0.0

# Menugaskan antarmuka jaringan ke Area Backbone:
/routing ospf interface-template add area=backbone-area networks=192.168.10.0/24 type=broadcast
/routing ospf interface-template add area=backbone-area networks=10.10.10.0/30 type=ptp

# Verifikasi tetangga OSPF:
/routing ospf neighbor print`,
            },
          ],
        },
        {
          id: 'eigrp-dan-autentikasi',
          title: 'EIGRP (Enhanced Interior Gateway Routing Protocol)',
          summary: 'Algoritma DUAL, Successor/Feasible Successor, K-Values, dan Autentikasi Kriptografis MD5.',
          estimatedMinutes: 11,
          tags: ['netacad', 'eigrp', 'dual', 'md5', 'cisco'],
          sections: [
            {
              type: 'heading2',
              text: 'Karakteristik EIGRP (RFC 7868)',
            },
            {
              type: 'paragraph',
              text: 'EIGRP adalah protokol Advanced Distance Vector dengan konvergensi tercepat karena menyimpan jalur cadangan bebas loop (Feasible Successor) di tabel topologinya melalui algoritma DUAL (Diffusing Update Algorithm). Metric komposit EIGRP secara default dihitung dari Bandwidth minimum dan Total Delay kumulatif.',
            },
            {
              type: 'code',
              language: 'text',
              code: `! Konfigurasi EIGRP dengan Autentikasi MD5 (Cisco IOS)
Router# configure terminal
Router(config)# key chain EIGRP-KEYS
Router(config-keychain)# key 1
Router(config-keychain-key)# key-string KunciRahasiaNetAcad123
Router(config-keychain-key)# exit
Router(config-keychain)# exit

Router(config)# router eigrp 100
Router(config-router)# no auto-summary
Router(config-router)# network 192.168.10.0 0.0.0.255
Router(config-router)# network 10.10.10.0 0.0.0.3
Router(config-router)# exit

! Memasang autentikasi MD5 pada interface FastEthernet0/0:
Router(config)# interface FastEthernet0/0
Router(config-if)# ip authentication mode eigrp 100 md5
Router(config-if)# ip authentication key-chain eigrp 100 EIGRP-KEYS
Router(config-if)# exit`,
            },
          ],
        },
        {
          id: 'rip-dan-redistribution',
          title: 'RIPv2 & Route Redistribution Antar-Protokol',
          summary: 'Protokol RIPv2 (RFC 2453) serta injeksi rute silang (Mutual Redistribution) antara OSPF dan EIGRP.',
          estimatedMinutes: 11,
          tags: ['netacad', 'mtcre', 'ripv2', 'redistribution', 'metric'],
          sections: [
            {
              type: 'heading2',
              text: 'Route Redistribution (NetAcad ENSA & MikroTik MTCRE)',
            },
            {
              type: 'paragraph',
              text: 'Ketika sebuah perusahaan menggabungkan dua jaringan dengan protokol routing berbeda (misalnya kantor pusat menggunakan OSPF dan cabang lama menggunakan EIGRP atau RIP), router perbatasan (ASBR) harus menerjemahkan metric antar protokol melalui Route Redistribution.',
            },
            {
              type: 'code',
              language: 'text',
              code: `! Konfigurasi Route Redistribution di Router ASBR (Cisco IOS)
Router(config)# router ospf 1
! Menginjeksi rute EIGRP 100 ke dalam OSPF dengan opsi subnets:
Router(config-router)# redistribute eigrp 100 subnets
Router(config-router)# exit

Router(config)# router eigrp 100
! Menginjeksi rute OSPF ke dalam EIGRP dengan metrik bawaan K (Bandwidth, Delay, Reliability, Load, MTU):
Router(config-router)# redistribute ospf 1 metric 10000 100 255 1 1500
Router(config-router)# exit`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-08',
      number: '08',
      title: 'Access Control List (ACL) & Firewall',
      summary: 'Penyaringan lalu lintas Standard ACL, Extended ACL, dan aturan Firewall Filter Rules (NetAcad ENSA & MikroTik MTCNA).',
      lessons: [
        {
          id: 'standard-acl',
          title: 'Standard Access Control List (Nomor 1-99)',
          summary: 'Penyaringan paket Layer 3 murni berdasarkan IP Sumber (Source IP Address) dan aturan penempatan NetAcad.',
          estimatedMinutes: 9,
          tags: ['netacad', 'mtcna', 'acl', 'firewall', 'security'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Aturan Emas Penempatan ACL Cisco NetAcad ENSA',
                content:
                  'Standard ACL wajib ditempatkan SEDEKAT MUNGKIN DENGAN DESTINATION (tujuan), agar tidak mematikan lalu lintas host tersebut ke jaringan tujuan lain yang sah secara prematur.',
              },
            },
            {
              type: 'heading2',
              text: 'Konfigurasi Standard ACL / Firewall Filter Rule',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS STANDARD ACL (NetAcad ENSA)
! ==========================================================
Router# configure terminal
! Memblokir seluruh host dari network 192.168.20.0/24:
Router(config)# access-list 10 deny 192.168.20.0 0.0.0.255

! Memberikan izin untuk network lainnya (wajib karena ada implicit deny any di akhir ACL):
Router(config)# access-list 10 permit any

! Memasang ACL pada interface yang paling dekat ke tujuan:
Router(config)# interface FastEthernet0/0
Router(config-if)# ip access-group 10 out
Router(config-if)# exit


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 FIREWALL FILTER (MTCNA Standard)
# ==========================================================
# Memblokir traffic dari network sumber 192.168.20.0/24 yang melintasi router:
/ip firewall filter add chain=forward src-address=192.168.20.0/24 action=drop comment="Standard-ACL-Equivalent"`,
            },
          ],
        },
        {
          id: 'extended-acl',
          title: 'Extended Access Control List (Nomor 100-199)',
          summary: 'Penyaringan granular Layer 3 & Layer 4: Source IP, Dest IP, Protokol (TCP/UDP/ICMP), dan Nomor Port.',
          estimatedMinutes: 12,
          tags: ['netacad', 'mtcna', 'extended-acl', 'layer4', 'firewall-filter'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'tip',
                title: 'Aturan Penempatan Extended ACL NetAcad',
                content:
                  'Extended ACL wajib ditempatkan SEDEKAT MUNGKIN DENGAN SOURCE (sumber paket) agar lalu lintas yang dilarang langsung di-drop sebelum mengonsumsi bandwidth link antar router.',
              },
            },
            {
              type: 'heading2',
              text: 'Sintaks Extended ACL: Cisco IOS vs MikroTik Firewall Filter',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS EXTENDED ACL (NetAcad ENSA)
! ==========================================================
Router# configure terminal
! Contoh 1: Memblokir ICMP Ping dari host 192.168.10.50 ke server 172.16.1.100
Router(config)# access-list 100 deny icmp host 192.168.10.50 host 172.16.1.100 echo

! Contoh 2: Memblokir akses web HTTP (Port 80) dari LAN ke server web internal
Router(config)# access-list 100 deny tcp any host 172.16.1.100 eq 80

! Mengizinkan seluruh lalu lintas lainnya:
Router(config)# access-list 100 permit ip any any

! Menerapkan pada interface masuk terdekat ke sumber:
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip access-group 100 in
Router(config-if)# exit


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 FIREWALL FILTER (MTCNA)
# ==========================================================
# Memblokir ICMP echo (ping) dari host spesifik ke server:
/ip firewall filter add chain=forward src-address=192.168.10.50 dst-address=172.16.1.100 protocol=icmp action=drop comment="Block-Ping"

# Memblokir HTTP port 80 ke server:
/ip firewall filter add chain=forward protocol=tcp dst-address=172.16.1.100 dst-port=80 action=drop comment="Block-HTTP"`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-09',
      number: '09',
      title: 'Network Address Translation (NAT)',
      summary: 'Private IP RFC 1918, Static NAT, Dynamic NAT, PAT (Overload), dan Port Forwarding (NetAcad ENSA & MikroTik MTCNA).',
      lessons: [
        {
          id: 'static-dan-dynamic-nat',
          title: 'Static NAT & Dynamic NAT Pool',
          summary: 'Pemetaan satu-ke-satu IP privat ke IP publik dan alokasi dinamis dari kumpulan IP publik.',
          estimatedMinutes: 10,
          tags: ['netacad', 'mtcna', 'nat', 'static-nat', 'rfc1918'],
          sections: [
            {
              type: 'heading2',
              text: 'Alamat IPv4 Privat Berdasarkan RFC 1918',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Kelas IPv4', 'Rentang Alamat Privat RFC 1918', 'Prefix CIDR', 'Jumlah Alamat'],
                rows: [
                  ['Kelas A', '10.0.0.0 s/d 10.255.255.255', '10.0.0.0/8', '16.777.216 IP'],
                  ['Kelas B', '172.16.0.0 s/d 172.31.255.255', '172.16.0.0/12', '1.048.576 IP'],
                  ['Kelas C', '192.168.0.0 s/d 192.168.255.255', '192.168.0.0/16', '65.536 IP'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Konfigurasi Static NAT (1-to-1 Mapping untuk Server Internal)',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS STATIC NAT (NetAcad ENSA)
! ==========================================================
Router# configure terminal
! Menentukan interface dalam (inside) dan interface internet publik (outside):
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip nat inside
Router(config-if)# exit

Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip nat outside
Router(config-if)# exit

! Pemetaan 1-ke-1 dari Server Internal ke IP Publik:
Router(config)# ip nat inside source static 192.168.10.100 200.10.10.5


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 DST-NAT (Port Forwarding / Static NAT)
# ==========================================================
/ip firewall nat add chain=dstnat in-interface=ether1 dst-address=200.10.10.5 action=dst-nat to-addresses=192.168.10.100 comment="Static-NAT-Server"`,
            },
          ],
        },
        {
          id: 'nat-overload-pat',
          title: 'NAT Overload / PAT (Port Address Translation) & Masquerade',
          summary: 'Multiplexing ribuan host LAN privat menggunakan satu IP publik melalui pelacakan port Layer 4 unik.',
          estimatedMinutes: 11,
          tags: ['netacad', 'mtcna', 'pat', 'masquerade', 'overload'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Industri: PAT Cisco NetAcad vs Masquerade MikroTik',
                content:
                  'PAT (Port Address Translation) atau NAT Overload adalah teknologi yang memungkinkan seluruh perangkat di rumah atau kantor mengakses internet publik secara bersamaan hanya dengan menggunakan SATU alamat IP publik resmi dari ISP.',
              },
            },
            {
              type: 'heading2',
              text: 'Sintaks PAT / Masquerade: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS NAT OVERLOAD / PAT (NetAcad ENSA Standard)
! ==========================================================
Router# configure terminal
! 1. Mendefinisikan interface peran inside dan outside:
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip nat inside
Router(config-if)# exit

Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip nat outside
Router(config-if)# exit

! 2. ACL penentu host LAN privat yang diizinkan NAT:
Router(config)# access-list 1 permit 192.168.10.0 0.0.0.255

! 3. Mengaktifkan PAT dengan parameter kata kunci 'overload':
Router(config)# ip nat inside source list 1 interface GigabitEthernet0/1 overload
Router(config)# exit

! Verifikasi translasi alamat yang aktif:
Router# show ip nat translations


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 MASQUERADE (MTCNA Standard)
# ==========================================================
# Menerapkan aksi masquerade pada interface internet keluar (ether1):
/ip firewall nat add chain=srcnat out-interface=ether1 action=masquerade comment="NAT-Masquerade-Internet"

# Verifikasi tabel koneksi NAT:
/ip firewall connection print`,
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-10',
      number: '10',
      title: 'Layanan Jaringan, Tunneling & Redundansi FHRP',
      summary: 'DHCP Server DORA, NTP Stratum, Site-to-Site GRE Tunnel (RFC 2784), dan FHRP HSRP/VRRP (NetAcad ENSA & MikroTik MTCRE).',
      lessons: [
        {
          id: 'dhcp-server-dan-ntp',
          title: 'DHCP Server (DORA Process) & Sinkronisasi NTP',
          summary: 'Otomatisasi pengalamatan IP klien (Discover, Offer, Request, ACK), Option 3/6, dan sinkronisasi jam NTP.',
          estimatedMinutes: 11,
          tags: ['netacad', 'mtcna', 'dhcp', 'ntp', 'dora', 'services'],
          sections: [
            {
              type: 'heading2',
              text: 'Empat Tahapan Proses DHCP (DORA)',
            },
            {
              type: 'numbered_list',
              listItems: [
                'Discover (Broadcast): Klien menyalakan komputer dan memancarkan paket DHCP Discover mencari DHCP Server aktif.',
                'Offer (Unicast/Broadcast): DHCP Server yang menerima menawarkan satu alamat IP beserta lease time melalui paket DHCP Offer.',
                'Request (Broadcast): Klien menerima tawaran tersebut dan mengirim DHCP Request meminta konfirmasi pemakaian IP terpilih.',
                'Acknowledge (ACK): Server membalas paket DHCP ACK menyetujui peminjaman IP, subnet mask, default gateway (Option 3), dan DNS server (Option 6).',
              ],
            },
            {
              type: 'heading3',
              text: 'Konfigurasi DHCP Server: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS DHCP SERVER (NetAcad ENSA)
! ==========================================================
Router# configure terminal
! Mengamankan rentang IP untuk server dan router agar tidak dibagikan ke klien:
Router(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10

! Membuat pool DHCP untuk LAN:
Router(config)# ip dhcp pool POOL-KLIEN-LAN
Router(config-dhcp)# network 192.168.10.0 255.255.255.0
Router(config-dhcp)# default-router 192.168.10.1
Router(config-dhcp)# dns-server 8.8.8.8 1.1.1.1
Router(config-dhcp)# exit

! Sinkronisasi jam jaringan via NTP Stratum:
Router(config)# ntp server 162.159.200.123
Router(config)# ntp update-calendar


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 DHCP SERVER (MTCNA)
# ==========================================================
# Membuat pool alamat IP yang dibagikan ke klien:
/ip pool add name=pool-lan ranges=192.168.10.11-192.168.10.254

# Mengaktifkan DHCP Server pada interface ether2:
/ip dhcp-server add name=dhcp-lan interface=ether2 address-pool=pool-lan disabled=no

# Mengatur informasi Network, Gateway (Option 3), dan DNS Server (Option 6):
/ip dhcp-server network add address=192.168.10.0/24 gateway=192.168.10.1 dns-server=8.8.8.8,1.1.1.1 comment="Config-LAN"`,
            },
          ],
        },
        {
          id: 'gre-tunnel-site-to-site',
          title: 'GRE Tunnel (Generic Routing Encapsulation - RFC 2784)',
          summary: 'VPN Point-to-Point enkapsulasi IP Protokol 47 melintasi jaringan internet publik untuk kantor cabang.',
          estimatedMinutes: 12,
          tags: ['netacad', 'mtcre', 'gre', 'tunnel', 'vpn', 'rfc2784'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad ENSA Modul 8 & MikroTik MTCRE Tunneling',
                content:
                  'GRE (IP Protocol 47, RFC 2784) adalah protokol enkapsulasi tunneling point-to-point yang mampu membungkus paket routing dinamis (seperti OSPF multicast 224.0.0.5) melintasi internet publik.',
              },
            },
            {
              type: 'heading2',
              text: 'Sintaks Konfigurasi GRE Tunnel Kiri (Cabang) & Kanan (Pusat)',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS GRE TUNNEL (NetAcad ENSA Standard)
! ==========================================================
! --- ROUTER KANTOR CABANG ---
Router-Cabang(config)# interface tunnel 0
Router-Cabang(config-if)# ip address 100.100.100.2 255.255.255.0
Router-Cabang(config-if)# tunnel source FastEthernet0/0
Router-Cabang(config-if)# tunnel destination 20.20.20.2
Router-Cabang(config-if)# exit

! Rute jaringan privat melintasi antarmuka GRE Tunnel:
Router-Cabang(config)# ip route 192.168.10.0 255.255.255.0 100.100.100.1


! --- ROUTER KANTOR PUSAT ---
Router-Pusat(config)# interface tunnel 0
Router-Pusat(config-if)# ip address 100.100.100.1 255.255.255.0
Router-Pusat(config-if)# tunnel source FastEthernet0/0
Router-Pusat(config-if)# tunnel destination 10.10.10.2
Router-Pusat(config-if)# exit

! Rute jaringan privat cabang melintasi GRE Tunnel:
Router-Pusat(config)# ip route 192.168.20.0 255.255.255.0 100.100.100.2


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 GRE TUNNEL (MTCRE Standard)
# ==========================================================
# Di Router Cabang:
/interface gre add name=gre-ke-pusat local-address=10.10.10.2 remote-address=20.20.20.2
/ip address add address=100.100.100.2/24 interface=gre-ke-pusat
/ip route add dst-address=192.168.10.0/24 gateway=100.100.100.1

# Di Router Pusat:
/interface gre add name=gre-ke-cabang local-address=20.20.20.2 remote-address=10.10.10.2
/ip address add address=100.100.100.1/24 interface=gre-ke-cabang
/ip route add dst-address=192.168.20.0/24 gateway=100.100.100.2`,
            },
          ],
        },
        {
          id: 'fhrp-hsrp-vrrp',
          title: 'FHRP (First Hop Redundancy Protocol): HSRP & VRRP',
          summary: 'Redundansi default gateway transparan dengan Virtual IP, Priority, dan Preemption (RFC 5798 & NetAcad ENSA).',
          estimatedMinutes: 12,
          tags: ['netacad', 'mtcre', 'fhrp', 'hsrp', 'vrrp', 'rfc5798', 'ha'],
          sections: [
            {
              type: 'callout',
              callout: {
                type: 'info',
                title: 'Standar Kurikulum: Cisco NetAcad ENSA Modul 9 & IETF RFC 5798 (VRRPv3)',
                content:
                  'FHRP memecahkan masalah single point of failure pada default gateway klien LAN dengan mengelompokkan dua router fisik menjadi satu Virtual Router yang memiliki satu Virtual IP bersama.',
              },
            },
            {
              type: 'heading2',
              text: 'Perbandingan HSRP (Cisco Proprietary) vs VRRP (Standar Terbuka IETF)',
            },
            {
              type: 'table',
              tableData: {
                headers: ['Parameter', 'HSRP (Hot Standby Router Protocol)', 'VRRP (Virtual Router Redundancy Protocol)'],
                rows: [
                  ['Standar', 'Cisco Proprietary', 'Standar Terbuka IETF RFC 5798'],
                  ['Peran Router', 'Active Router & Standby Router', 'Master Router & Backup Router'],
                  ['Virtual MAC Address', '0000.0c07.acXX (HSRP v1)', '0000.5e00.01XX (VRRP)'],
                  ['Kompatibilitas Multi-Vendor', 'Hanya router Cisco', 'Universal: Cisco, MikroTik, Linux Keepalived, Juniper'],
                ],
              },
            },
            {
              type: 'heading3',
              text: 'Konfigurasi VRRP Standar Terbuka: Cisco IOS vs MikroTik RouterOS',
            },
            {
              type: 'code',
              language: 'text',
              code: `! ==========================================================
! 1. CISCO IOS VRRP (NetAcad ENSA / RFC 5798)
! ==========================================================
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.10.2 255.255.255.0

! 1. Menentukan Virtual IP yang dipasang sebagai gateway pada PC klien:
Router(config-if)# vrrp 1 ip 192.168.10.254

! 2. Menentukan prioritas (nilai 150 memenangkan peran Master di atas default 100):
Router(config-if)# vrrp 1 priority 150

! 3. Mengaktifkan preempt (mengambil alih Master saat router utama hidup kembali):
Router(config-if)# vrrp 1 preempt
Router(config-if)# exit

! Verifikasi status peran Master/Backup:
Router# show vrrp brief


# ==========================================================
# 2. MIKROTIK ROUTEROS v7 VRRP (MTCRE High Availability)
# ==========================================================
# Membuat antarmuka VRRP di atas port LAN ether2:
/interface vrrp add interface=ether2 name=vrrp-gateway vrid=1 priority=150 preemption-mode=yes

# Menugaskan Virtual Gateway IP pada antarmuka virtual VRRP:
/ip address add address=192.168.10.254/24 interface=vrrp-gateway comment="Virtual-Gateway-LAN"

# Verifikasi status VRRP:
/interface vrrp print`,
            },
          ],
        },
      ],
    },
  ],
};
