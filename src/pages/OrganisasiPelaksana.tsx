import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Code, Palette, TestTube, Server, Wrench } from "lucide-react"

const organisasi = [
  {
    jabatan: "Project Manager",
    tanggungJawab: [
      "Perencanaan & pengendalian proyek",
      "Manajemen risiko & komunikasi stakeholder",
      "Monitoring jadwal & anggaran"
    ],
    kualifikasi: "Memastikan proyek selesai tepat waktu & sesuai kualitas",
    icon: Briefcase
  },
  {
    jabatan: "Backend Developer",
    tanggungJawab: [
      "Implementasi server & REST API",
      "Integrasi database & security backend"
    ],
    kualifikasi: "Fokus performance, keamanan, integrasi API",
    icon: Server
  },
  {
    jabatan: "Frontend Developer",
    tanggungJawab: [
      "Implementasi UI dari desain",
      "Integrasi dengan API",
      "Responsive testing"
    ],
    kualifikasi: "Pastikan UX konsisten di berbagai perangkat",
    icon: Code
  },
  {
    jabatan: "UI/UX Designer",
    tanggungJawab: [
      "Wireframe & prototipe interaktif",
      "Design system (color, typography, komponen)",
      "User research & testing"
    ],
    kualifikasi: "Hasil desain diserahkan di Figma",
    icon: Palette
  },
  {
    jabatan: "Quality Assurance (QA) Engineer",
    tanggungJawab: [
      "Menyusun test case & melakukan testing fungsional & non-fungsional",
      "Dokumentasi bug & verifikasi perbaikan"
    ],
    kualifikasi: "Melakukan UAT bersama stakeholder",
    icon: TestTube
  },
  {
    jabatan: "(Opsional) DevOps / Infrastruktur",
    tanggungJawab: [
      "Konfigurasi VPS, domain, SSL",
      "Setup backup & monitoring"
    ],
    kualifikasi: "Bisa digabung dengan backend jika tim kecil",
    icon: Server
  },
  {
    jabatan: "Tim Support / Maintenance",
    tanggungJawab: [
      "Penanganan bug pasca-launch",
      "Laporan monitoring & update minor"
    ],
    kualifikasi: "Masa garansi 3 bulan (sesuai TOR)",
    icon: Wrench
  }
]

export function OrganisasiPelaksana() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Organisasi Pelaksana</h1>
          <p className="text-lg text-muted-foreground">
            Struktur tim dan tanggung jawab dalam pelaksanaan proyek
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {organisasi.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card key={idx} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle>{item.jabatan}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Tanggung Jawab Utama:</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {item.tanggungJawab.map((tj, tjIdx) => (
                        <li key={tjIdx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{tj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <h3 className="font-semibold text-sm mb-1">Kualifikasi / Catatan:</h3>
                    <p className="text-sm text-muted-foreground">{item.kualifikasi}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

