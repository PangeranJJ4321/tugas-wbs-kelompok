import { Layout } from "@/components/Layout"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Calendar, Palette, Code, TestTube, Rocket, Eye, CheckCircle2, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const metodologi = [
  {
    id: "4.1",
    title: "Planning (Perencanaan)",
    icon: Calendar,
    items: [
      "Analisis kebutuhan pengguna secara mendalam",
      "Merancang kerangka kerja dan arsitektur informasi terstruktur",
      "Identifikasi stakeholder dan penyusunan user stories",
      "Analisis kebutuhan data (profil desa, data penerima, jadwal penyaluran, program bantuan, layanan pengaduan)"
    ]
  },
  {
    id: "4.2",
    title: "Design (Desain)",
    icon: Palette,
    items: [
      "Perancangan halaman Beranda sebagai gambaran umum sistem",
      "Halaman Tentang berisi profil desa, visi dan misi website",
      "Bagian Bantuan Sosial: program bantuan, daftar penerima terverifikasi, formulir pendaftaran online",
      "Laporan Transparansi: data penggunaan dana secara detail",
      "Informasi Layanan: lokasi desa, panduan sistem, pengaduan online, Media Pengumuman"
    ]
  },
  {
    id: "4.3",
    title: "Develop (Pengembangan)",
    icon: Code,
    items: [
      "Pembuatan halaman statis dan dinamis",
      "Integrasi frontend dengan backend",
      "Implementasi fitur pengelolaan data penerima",
      "Sistem pendaftaran dan verifikasi otomatis",
      "Pengembangan database penerima terintegrasi",
      "Visualisasi data penggunaan dana",
      "Sistem pengumuman yang dapat di-update admin"
    ]
  },
  {
    id: "4.4",
    title: "Test (Pengujian)",
    icon: TestTube,
    items: [
      "Pengujian fungsional untuk memastikan fitur bekerja sesuai spesifikasi",
      "Pengujian non-fungsional (performa dan keamanan data)",
      "Testing responsivitas pada berbagai ukuran layar dan perangkat",
      "Pengujian kompatibilitas pada berbagai browser",
      "Perbaikan bug dan issue yang ditemukan"
    ]
  },
  {
    id: "4.5",
    title: "Deploy (Penerapan)",
    icon: Rocket,
    items: [
      "Pemasangan website pada server produksi",
      "Konfigurasi domain dan SSL certificate",
      "Setup backup data otomatis",
      "Pengujian sistem di lingkungan produksi"
    ]
  },
  {
    id: "4.6",
    title: "Review (Tinjauan)",
    icon: Eye,
    items: [
      "Pengumpulan feedback dari pengguna dan stakeholder",
      "Evaluasi sistem secara menyeluruh",
      "Identifikasi area yang perlu ditingkatkan",
      "Perbaikan berdasarkan masukan pengguna"
    ]
  },
  {
    id: "4.7",
    title: "Launch (Peluncuran)",
    icon: CheckCircle2,
    items: [
      "Peluncuran resmi website",
      "Sosialisasi dan pelatihan untuk aparat desa dan masyarakat",
      "Monitoring berkala untuk menjaga performa sistem",
      "Dukungan teknis berkelanjutan"
    ]
  }
]

export function Metodologi() {
  const [openSections, setOpenSections] = useState<string[]>(["agile", ...metodologi.map(item => item.id)])

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.indexOf(sectionId) !== -1
        ? prev.filter(s => s !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Metodologi Pelaksanaan</h1>
          <p className="text-lg text-muted-foreground">
            Pengembangan website menggunakan metodologi Agile
          </p>
        </div>

        {/* Metodologi Agile */}
        <Collapsible 
          open={openSections.indexOf("agile") !== -1} 
          onOpenChange={() => toggleSection("agile")}
          className="mb-6"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
            <h2 className="text-xl font-semibold">Metodologi Agile</h2>
            <ChevronDown className={cn(
              "h-5 w-5 transition-transform",
              openSections.indexOf("agile") !== -1 && "transform rotate-180"
            )} />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-4">
            <p className="text-muted-foreground leading-relaxed">
              Pengembangan website manajemen dana bantuan sosial desa menggunakan 
              <strong> metodologi Agile</strong> yang menawarkan fleksibilitas dan 
              adaptabilitas terhadap perubahan kebutuhan selama proses pengembangan.
            </p>
          </CollapsibleContent>
        </Collapsible>

        {/* Tahapan Metodologi */}
        <div className="space-y-4">
          {metodologi.map((item) => {
            const Icon = item.icon
            return (
              <Collapsible 
                key={item.id}
                open={openSections.indexOf(item.id) !== -1} 
                onOpenChange={() => toggleSection(item.id)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                    </div>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 transition-transform",
                    openSections.indexOf(item.id) !== -1 && "transform rotate-180"
                  )} />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

