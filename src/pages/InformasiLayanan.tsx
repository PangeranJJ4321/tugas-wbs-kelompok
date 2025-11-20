import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, BookOpen, AlertCircle, Bell, Phone, Mail, Clock } from "lucide-react"

export function InformasiLayanan() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Informasi Layanan</h1>
          <p className="text-lg text-muted-foreground">
            Informasi lengkap tentang layanan yang tersedia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lokasi Desa */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle>Lokasi Desa</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Alamat Kantor Desa</p>
                  <p className="text-sm text-muted-foreground">
                    Jl. Raya Desa No. 123<br />
                    Kecamatan, Kabupaten<br />
                    Provinsi, Kode Pos 12345
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Koordinat</p>
                  <p className="text-sm text-muted-foreground">
                    Latitude: -5.1477<br />
                    Longitude: 119.4327
                  </p>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Panduan Sistem */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Panduan Sistem</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Cara Mendaftar</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Kunjungi halaman Pendaftaran Online</li>
                    <li>Isi formulir dengan data yang benar</li>
                    <li>Upload dokumen yang diperlukan</li>
                    <li>Submit formulir dan tunggu verifikasi</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cara Mengecek Status</h4>
                  <p className="text-sm text-muted-foreground">
                    Anda dapat mengecek status pendaftaran melalui halaman Daftar Penerima 
                    dengan mencari nama atau NIK Anda.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">FAQ</h4>
                  <p className="text-sm text-muted-foreground">
                    Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui 
                    halaman Pengaduan Online.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pengaduan Online */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                <CardTitle>Pengaduan Online</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Jika Anda memiliki pengaduan atau keluhan terkait program bantuan sosial, 
                  silakan sampaikan melalui form di bawah ini.
                </p>
                <form className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Nama</label>
                    <input
                      type="text"
                      className="w-full h-9 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Masukkan nama"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email/No. HP</label>
                    <input
                      type="text"
                      className="w-full h-9 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="email@example.com atau 08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Pengaduan</label>
                    <textarea
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tuliskan pengaduan Anda di sini"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-9 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    Kirim Pengaduan
                  </button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Pengumuman */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-6 w-6 text-primary" />
                <CardTitle>Pengumuman</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Bell className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Pengumuman Penting</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Pendaftaran Program Bantuan Sosial Bulan Februari 2025 dibuka mulai 
                    tanggal 1 Februari 2025.
                  </p>
                  <p className="text-xs text-muted-foreground">15 Januari 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Bell className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Informasi Verifikasi</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Proses verifikasi data penerima akan dilakukan pada tanggal 20-25 
                    setiap bulannya.
                  </p>
                  <p className="text-xs text-muted-foreground">10 Januari 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Bell className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Update Sistem</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Sistem telah diperbarui dengan fitur pencarian yang lebih cepat 
                    dan akurat.
                  </p>
                  <p className="text-xs text-muted-foreground">5 Januari 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Kontak */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Kontak Kami</CardTitle>
            <CardDescription>Hubungi kami untuk informasi lebih lanjut</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Telepon</p>
                  <p className="text-sm text-muted-foreground">(0411) 123456</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">info@desa.example.id</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Jam Operasional</p>
                  <p className="text-sm text-muted-foreground">
                    Senin - Jumat: 08:00 - 16:00 WITA
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </Layout>
  )
}

