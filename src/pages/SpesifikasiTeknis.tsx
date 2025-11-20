import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Code, Server, Database, Cpu, HardDrive } from "lucide-react"

export function SpesifikasiTeknis() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Spesifikasi Teknis</h1>
          <p className="text-lg text-muted-foreground">
            Perangkat lunak dan perangkat keras yang digunakan dalam pengembangan
          </p>
        </div>

        {/* Perangkat Lunak */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">5.1 Perangkat Lunak</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>A. Sistem Operasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Windows/Linux/MacOS sebagai lingkungan pengembangan
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>B. IDE dan Tools Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Visual Studio Code sebagai IDE utama</li>
                  <li>• Git untuk version control dan kolaborasi tim</li>
                  <li>• Figma untuk desain UI/UX</li>
                  <li>• Postman untuk testing API</li>
                  <li>• JMeter untuk load testing</li>
                  <li>• Selenium untuk automated testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>C. Frontend Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React JS sebagai framework JavaScript</li>
                  <li>• HTML5 dan CSS3</li>
                  <li>• JavaScript ES6+</li>
                  <li>• Responsive design framework</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>D. Backend Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Python/Laravel sebagai backend framework</li>
                  <li>• REST API untuk komunikasi client-server</li>
                  <li>• Authentication dan authorization system</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E. Database</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• MySQL sebagai database relasional</li>
                  <li>• Database management tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>F. Hosting dan Server</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Virtual Private Server (VPS)</li>
                  <li>• Domain dan SSL certificate</li>
                  <li>• Cloud backup storage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Perangkat Keras */}
        <div>
          <h2 className="text-2xl font-bold mb-6">5.2 Perangkat Keras (Spesifikasi Minimal)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <CardTitle>A. Processor</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intel Core i3 / AMD Ryzen 3 atau setara ke atas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  <CardTitle>B. Memori (RAM)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Minimal 4GB RAM</li>
                  <li>• Direkomendasikan 8GB RAM</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" />
                  <CardTitle>C. Storage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SSD minimal 120GB</li>
                  <li>• Direkomendasikan SSD 256GB untuk proyek besar</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  <CardTitle>D. Monitor</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Minimal Full HD (1920x1080)</li>
                  <li>• Direkomendasikan 2K atau 4K untuk kenyamanan kerja</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E. Keyboard dan Mouse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keyboard dan mouse ergonomis untuk produktivitas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>F. Koneksi Internet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Koneksi internet stabil dan cepat</li>
                  <li>• Minimal 10 Mbps untuk upload dan download</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  )
}

