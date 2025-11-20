import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Users, Shield } from "lucide-react"

export function About() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-lg text-muted-foreground">
              Profil desa, visi dan misi website manajemen dana bantuan sosial
            </p>
          </div>

          {/* Profil Desa */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Profil Desa</CardTitle>
              <CardDescription>Informasi umum tentang desa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Website Manajemen Dana Bantuan Sosial Desa merupakan platform digital 
                yang dikembangkan untuk meningkatkan efektivitas dan transparansi dalam 
                pengelolaan dana bantuan sosial di tingkat desa.
              </p>
              <p className="text-muted-foreground">
                Sistem ini dirancang untuk memfasilitasi seluruh proses mulai dari 
                pendaftaran calon penerima, verifikasi data, hingga penyaluran bantuan 
                secara transparan dan akuntabel.
              </p>
            </CardContent>
          </Card>

          {/* Visi */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                <CardTitle>Visi</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Menjadi platform digital terdepan dalam pengelolaan dana bantuan sosial 
                desa yang transparan, akuntabel, dan berkelanjutan untuk meningkatkan 
                kesejahteraan masyarakat desa.
              </p>
            </CardContent>
          </Card>

          {/* Misi */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle>Misi</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Mempermudah petugas desa dalam melakukan pendataan, verifikasi, 
                    dan penyaluran bantuan secara tepat sasaran
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Meningkatkan transparansi dalam pengambilan kebijakan dan proses 
                    distribusi bantuan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Memungkinkan masyarakat untuk memantau langsung proses penyaluran bantuan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Menyediakan sarana monitoring dan evaluasi yang efektif
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Membuka ruang bagi donatur yang ingin berkontribusi dalam program 
                    bantuan sosial desa
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Tujuan */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Tujuan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Tujuan utama dari pengembangan website ini adalah:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>
                    Mengurangi kesalahan dalam penginputan data penerima bantuan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>
                    Meningkatkan transparansi dalam pengambilan kebijakan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>
                    Memungkinkan masyarakat memantau langsung proses penyaluran bantuan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>
                    Menciptakan interaksi yang cepat dan efisien antara masyarakat 
                    dan petugas desa
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  )
}

