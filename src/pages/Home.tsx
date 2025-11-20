import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Target, ClipboardList, Code, Calendar, Users, Settings, Info } from "lucide-react"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PENGEMBANGAN WEBSITE MANAJEMEN DANA BANTUAN SOSIAL DESA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Term of Reference (TOR) - Dokumentasi Proyek
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Program Studi Sistem Informasi | Fakultas Matematika dan Ilmu Pengetahuan Alam<br />
            Universitas Hasanuddin | 2025
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link to="/latar-belakang">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-8 w-8 text-primary" />
                  Latar Belakang
                </CardTitle>
                <CardDescription>
                  Konteks dan permasalahan yang melatarbelakangi proyek
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/maksud-tujuan">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-8 w-8 text-primary" />
                  Maksud dan Tujuan
                </CardTitle>
                <CardDescription>
                  Tujuan utama pengembangan website
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/ruang-lingkup">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-8 w-8 text-primary" />
                  Ruang Lingkup
                </CardTitle>

                <CardDescription>
                  Detail tahapan dan lingkup pekerjaan
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>


          <Link to="/metodologi">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                  <Code className="h-8 w-8 text-primary" />
                  Metodologi
                </CardTitle>
                <CardDescription>
                  Metodologi Agile untuk pengembangan
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/spesifikasi-teknis">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-8 w-8 text-primary" />
                  Spesifikasi Teknis
                </CardTitle>
                <CardDescription>
                  Perangkat lunak dan perangkat keras
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/jadwal-pelaksanaan">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-8 w-8 text-primary" />
                  Jadwal Pelaksanaan
                </CardTitle>
                <CardDescription>
                  Work Breakdown Structure (WBS)
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/organisasi-pelaksana">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-8 w-8 text-primary" />
                  Organisasi Pelaksana
                </CardTitle>
                <CardDescription>
                  Struktur tim dan tanggung jawab
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/anggaran-biaya">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-8 w-8 text-primary" />
                  Anggaran Biaya
                </CardTitle>
                <CardDescription>
                  Rincian anggaran keseluruhan proyek
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/deliverable">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-8 w-8 text-primary" />
                  Deliverable
                </CardTitle>
                <CardDescription>
                  Hasil kerja yang akan diserahkan
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Info Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-8 w-8 text-primary" />
              Informasi Proyek
            </CardTitle>
            <CardDescription>Ringkasan proyek pengembangan website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3,5</div>
                <div className="text-sm text-muted-foreground">Bulan Durasi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Rp 103.515.825</div>
                <div className="text-sm text-muted-foreground">Total Anggaran</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Fase Proyek</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </Layout>
  )
}

