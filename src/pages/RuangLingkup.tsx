import { Layout } from "@/components/Layout"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ClipboardList, Palette, Code, Server, Database, TestTube, Users, Wrench, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const ruangLingkup = [
  {
    id: "3.1",
    title: "Tahap Perencanaan",
    icon: ClipboardList,
    items: [
      "Analisis kebutuhan sistem secara komprehensif",
      "Studi kompetitor untuk identifikasi best practice",
      "Dokumentasi teknis terstruktur (SRS dan SDD)"
    ]
  },
  {
    id: "3.2",
    title: "Desain Antarmuka Pengguna",
    icon: Palette,
    items: [
      "Pembuatan wireframe untuk 5 halaman utama (Beranda, Tentang, Bantuan Sosial, Laporan Transparansi, Informasi Layanan)",
      "Pengembangan prototype interaktif untuk 3 halaman utama",
      "Design system (color palette, typography, component library)"
    ]
  },
  {
    id: "3.3",
    title: "Pengembangan Frontend",
    icon: Code,
    items: [
      "Implementasi HTML/CSS (40 jam kerja)",
      "Integrasi dengan React JS (20 jam kerja)",
      "Responsive design untuk berbagai perangkat"
    ]
  },
  {
    id: "3.4",
    title: "Pengembangan Backend",
    icon: Server,
    items: [
      "Pembuatan REST API (30 jam kerja)",
      "Sistem autentikasi dan otorisasi (20 jam kerja)",
      "Integrasi API pihak ketiga (10 endpoint)"
    ]
  },
  {
    id: "3.5",
    title: "Infrastruktur Data",
    icon: Database,
    items: [
      "Perancangan dan konfigurasi database MySQL",
      "Konfigurasi server dan hosting (VPS)",
      "Setup keamanan dan backup data"
    ]
  },
  {
    id: "3.6",
    title: "Pengujian Sistem",
    icon: TestTube,
    items: [
      "Unit testing (20 jam kerja)",
      "User Acceptance Test/UAT (5 sesi)",
      "Testing keamanan dan performa"
    ]
  },
  {
    id: "3.7",
    title: "Manajemen Proyek",
    icon: Users,
    items: [
      "Koordinasi tim (8 jam)",
      "Monitoring progress proyek",
      "Dokumentasi dan pelaporan"
    ]
  },
  {
    id: "3.8",
    title: "Pemeliharaan dan Dukungan",
    icon: Wrench,
    items: [
      "Maintenance selama 3 bulan",
      "Perbaikan bug dan optimasi",
      "Penyesuaian berdasarkan feedback pengguna"
    ]
  }
]

export function RuangLingkup() {
  const [openSections, setOpenSections] = useState<string[]>(ruangLingkup.map(item => item.id))

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
          <h1 className="text-4xl font-bold mb-4">Ruang Lingkup Pekerjaan</h1>
          <p className="text-lg text-muted-foreground">
            Detail tahapan dan lingkup pekerjaan pengembangan website
          </p>
        </div>

        <div className="space-y-4">
          {ruangLingkup.map((item) => {
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

