import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HandHeart, Calendar, DollarSign, Users } from "lucide-react"

const programs = [
  {
    id: 1,
    name: "Bantuan Langsung Tunai (BLT)",
    description: "Program bantuan tunai untuk keluarga kurang mampu",
    amount: "Rp 300.000/bulan",
    duration: "6 bulan",
    recipients: 50,
    status: "Aktif"
  },
  {
    id: 2,
    name: "Bantuan Pangan Non Tunai (BPNT)",
    description: "Bantuan pangan untuk keluarga pra-sejahtera",
    amount: "Rp 200.000/bulan",
    duration: "12 bulan",
    recipients: 75,
    status: "Aktif"
  },
  {
    id: 3,
    name: "Program Keluarga Harapan (PKH)",
    description: "Bantuan sosial untuk keluarga sangat miskin",
    amount: "Rp 500.000 - Rp 1.000.000/bulan",
    duration: "12 bulan",
    recipients: 30,
    status: "Aktif"
  },
  {
    id: 4,
    name: "Bantuan Pendidikan",
    description: "Bantuan biaya pendidikan untuk anak sekolah",
    amount: "Rp 150.000/semester",
    duration: "Per semester",
    recipients: 45,
    status: "Aktif"
  }
]

export function ProgramBantuan() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Program Bantuan Sosial</h1>
          <p className="text-lg text-muted-foreground">
            Informasi lengkap tentang program bantuan sosial yang tersedia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <HandHeart className="h-6 w-6 text-primary" />
                    <CardTitle>{program.name}</CardTitle>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {program.status}
                  </span>
                </div>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Jumlah:</span>
                  <span className="font-medium">{program.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Durasi:</span>
                  <span className="font-medium">{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Penerima:</span>
                  <span className="font-medium">{program.recipients} keluarga</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Informasi Pendaftaran</CardTitle>
            <CardDescription>
              Syarat dan ketentuan untuk mendaftar program bantuan sosial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Kartu Keluarga (KK) yang masih berlaku</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Kartu Tanda Penduduk (KTP) kepala keluarga</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Surat keterangan tidak mampu dari RT/RW</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bukti pendapatan atau surat keterangan penghasilan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Mengisi formulir pendaftaran online</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </Layout>
  )
}

