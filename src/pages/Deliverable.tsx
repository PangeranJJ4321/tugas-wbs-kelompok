import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Palette, Code, TestTube, Rocket, BookOpen } from "lucide-react"

const deliverables = [
  {
    id: "9.1",
    title: "Perencanaan",
    icon: FileText,
    items: [
      "Dokumen Analisis Kebutuhan (Functional & Non-functional) — SRS (doc/pdf)",
      "Studi Kompetitor — laporan ringkas (doc/pdf)",
      "Dokumen Desain Teknis Awal (SDD) — arsitektur & flow utama (doc/pdf)"
    ]
  },
  {
    id: "9.2",
    title: "Desain",
    icon: Palette,
    items: [
      "Wireframe seluruh halaman — file Figma / gambar",
      "Prototype interaktif (halaman inti) — link prototipe Figma",
      "Design system (color, typography, komponen) — style guide / Figma"
    ]
  },
  {
    id: "9.3",
    title: "Pengembangan",
    icon: Code,
    items: [
      "Source code frontend & backend — repository Git (branching, README)",
      "Database schema & ERD — SQL dan gambar ERD (png/pdf)",
      "Dokumentasi integrasi API (termasuk endpoint & contoh request/response)"
    ]
  },
  {
    id: "9.4",
    title: "Testing",
    icon: TestTube,
    items: [
      "Dokumen Test Case — daftar skenario fungsional & non-fungsional (doc/pdf)",
      "Laporan Hasil Testing & Daftar Bug — status perbaikan tiap sprint (doc/pdf)",
      "Laporan UAT (User Acceptance Test) beserta feedback pengguna"
    ]
  },
  {
    id: "9.5",
    title: "Deployment & Operasional",
    icon: Rocket,
    items: [
      "Aplikasi/Website ter-deploy — akses live (domain aktif)",
      "Dokumen konfigurasi server, SSL, backup & monitoring"
    ]
  },
  {
    id: "9.6",
    title: "Dokumentasi & Pelatihan",
    icon: BookOpen,
    items: [
      "Dokumentasi API (OpenAPI / Postman collection)",
      "User Manual untuk end-user (doc/pdf + video tutorial singkat)",
      "Admin Manual untuk pengelola sistem (doc/pdf + video tutorial)"
    ]
  },
  {
    id: "After-launch",
    title: "After-launch / Maintenance",
    icon: BookOpen,
    items: [
      "Panduan Troubleshooting & SOP monitoring (doc/pdf)",
      "Laporan monitoring dan pemeliharaan berkala (periode maintenance yang disepakati, mis. 3 bulan)",
      "Video tutorial tambahan / knowledge transfer session (opsional)"
    ]
  }
]

export function Deliverable() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Deliverable</h1>
          <p className="text-lg text-muted-foreground">
            Hasil kerja yang akan diserahkan dalam setiap tahapan proyek
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

