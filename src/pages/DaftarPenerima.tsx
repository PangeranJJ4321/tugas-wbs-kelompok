import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CheckCircle2, Search } from "lucide-react"
import { useState } from "react"

const penerima = [
  {
    id: 1,
    nama: "Ahmad Hidayat",
    nik: "7301234567890123",
    program: "BLT",
    status: "Terverifikasi",
    tanggalVerifikasi: "15 Januari 2025"
  },
  {
    id: 2,
    nama: "Siti Nurhaliza",
    nik: "7301234567890124",
    program: "BPNT",
    status: "Terverifikasi",
    tanggalVerifikasi: "16 Januari 2025"
  },
  {
    id: 3,
    nama: "Budi Santoso",
    nik: "7301234567890125",
    program: "PKH",
    status: "Terverifikasi",
    tanggalVerifikasi: "17 Januari 2025"
  },
  {
    id: 4,
    nama: "Maya Sari",
    nik: "7301234567890126",
    program: "Bantuan Pendidikan",
    status: "Terverifikasi",
    tanggalVerifikasi: "18 Januari 2025"
  },
  {
    id: 5,
    nama: "Rudi Hartono",
    nik: "7301234567890127",
    program: "BLT",
    status: "Terverifikasi",
    tanggalVerifikasi: "19 Januari 2025"
  }
]

export function DaftarPenerima() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPenerima = penerima.filter(
    (p) =>
      p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.nik.includes(searchTerm)
  )

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Daftar Penerima Bantuan</h1>
          <p className="text-lg text-muted-foreground">
            Daftar penerima bantuan sosial yang telah terverifikasi
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari berdasarkan nama atau NIK..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Penerima</p>
                  <p className="text-2xl font-bold">{penerima.length}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Terverifikasi</p>
                  <p className="text-2xl font-bold">{penerima.length}</p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Program Aktif</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Penerima Terverifikasi</CardTitle>
            <CardDescription>
              Menampilkan {filteredPenerima.length} dari {penerima.length} penerima
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 text-sm font-semibold">No</th>
                    <th className="text-left p-3 text-sm font-semibold">Nama</th>
                    <th className="text-left p-3 text-sm font-semibold">NIK</th>
                    <th className="text-left p-3 text-sm font-semibold">Program</th>
                    <th className="text-left p-3 text-sm font-semibold">Status</th>
                    <th className="text-left p-3 text-sm font-semibold">Tanggal Verifikasi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPenerima.map((p, idx) => (
                    <tr key={p.id} className="border-b hover:bg-muted/50">
                      <td className="p-3 text-sm">{idx + 1}</td>
                      <td className="p-3 text-sm font-medium">{p.nama}</td>
                      <td className="p-3 text-sm text-muted-foreground">{p.nik}</td>
                      <td className="p-3 text-sm">
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                          {p.program}
                        </span>
                      </td>
                      <td className="p-3 text-sm">
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs dark:bg-green-900 dark:text-green-200">
                          {p.status}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">
                        {p.tanggalVerifikasi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </Layout>
  )
}

