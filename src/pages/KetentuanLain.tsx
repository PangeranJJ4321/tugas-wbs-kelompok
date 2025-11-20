import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, AlertCircle, Clock, DollarSign, Scale } from "lucide-react"

const ketentuan = [
  {
    id: 1,
    title: "Kerahasiaan (Confidentiality)",
    icon: Shield,
    content: "Semua informasi proyek yang bersifat rahasia tidak boleh diungkapkan kepada pihak ketiga tanpa persetujuan tertulis dari pemilik proyek. Kewajiban kerahasiaan berlaku selama pelaksanaan proyek dan 2 (dua) tahun setelahnya."
  },
  {
    id: 2,
    title: "Hak Kekayaan Intelektual (IPR)",
    icon: FileText,
    content: "Hak cipta atas kode sumber, dokumentasi, desain, dan deliverable lainnya menjadi milik [Pemilik Proyek] setelah pembayaran akhir dan serah terima. Materi pihak ketiga tetap berada di pemilik lisensinya masing-masing."
  },
  {
    id: 3,
    title: "Perubahan Ruang Lingkup (Change Request)",
    icon: AlertCircle,
    content: "Perubahan ruang lingkup yang memengaruhi jadwal/biaya harus diajukan lewat formulir Change Request, disetujui oleh Project Manager dan Stakeholder, dan didokumentasikan beserta estimasi dampaknya (waktu & biaya)."
  },
  {
    id: 4,
    title: "Jaminan & Pemeliharaan (Warranty & Maintenance)",
    icon: Shield,
    content: "Tim pengembang memberikan garansi perbaikan bug kritis tanpa biaya selama 90 hari setelah serah terima. Layanan pemeliharaan lanjutan dikenai kontrak terpisah."
  },
  {
    id: 5,
    title: "Kewajiban & Batas Tanggung Jawab",
    icon: Scale,
    content: "Masing-masing pihak bertanggung jawab atas kewajiban yang tercantum di TOR. Maksimum tanggung jawab finansial tim pengembang dibatasi hingga total nilai kontrak."
  },
  {
    id: 6,
    title: "Service Level & Waktu Respon (SLA)",
    icon: Clock,
    content: "Untuk isu kritis: respon awal maksimal 24 jam dan penyelesaian prioritas dalam 3 hari kerja; untuk isu non-kritis: respon maksimal 3 hari kerja."
  },
  {
    id: 7,
    title: "Pembayaran & Biaya",
    icon: DollarSign,
    content: "Rincian termin pembayaran: Mis. 30% DP saat kontrak, 40% saat delivery versi beta, 30% saat serah terima final. Biaya tambahan akibat Change Request akan ditagihkan terpisah."
  },
  {
    id: 8,
    title: "Force Majeure",
    icon: AlertCircle,
    content: "Kedua pihak dibebaskan dari kewajiban yang terhambat oleh kejadian di luar kendali wajar (bencana alam, perang, pemadaman luas). Pihak terdampak wajib memberi pemberitahuan tertulis segera."
  },
  {
    id: 9,
    title: "Pengakhiran Proyek",
    icon: AlertCircle,
    content: "Pengakhiran oleh salah satu pihak harus disertai pemberitahuan tertulis 30 hari sebelumnya. Saat pengakhiran, deliverable yang sudah selesai dan biaya yang timbul sampai tanggal pengakhiran akan diselesaikan."
  },
  {
    id: 10,
    title: "Penyelesaian Sengketa",
    icon: Scale,
    content: "Segala sengketa akan diselesaikan terlebih dahulu secara musyawarah. Jika tidak tercapai, diselesaikan melalui mediasi atau arbitrase sesuai hukum yang berlaku di Indonesia."
  },
  {
    id: 11,
    title: "Kepatuhan & Etika",
    icon: Shield,
    content: "Semua pengembang/anggota tim wajib mematuhi hukum, peraturan perlindungan data, serta etika profesional selama pelaksanaan proyek."
  },
  {
    id: 12,
    title: "Dokumentasi & Arsip",
    icon: FileText,
    content: "Dokumentasi final (SRS, SDD, kode, manual, video) diserahkan dalam format digital dan diarsipkan oleh kedua pihak selama minimal 1 tahun."
  },
  {
    id: 13,
    title: "Persetujuan & Tanda Terima",
    icon: FileText,
    content: "Semua deliverable utama memerlukan tanda terima/approval tertulis dari stakeholder saat setiap milestone diselesaikan."
  }
]

export function KetentuanLain() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Ketentuan Lain-Lain</h1>
          <p className="text-lg text-muted-foreground">
            Ketentuan dan persyaratan tambahan dalam pelaksanaan proyek
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ketentuan.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle>{item.id}. {item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

