import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, DollarSign, TrendingUp, Users } from "lucide-react"

const laporan = [
  {
    bulan: "Januari 2025",
    totalDana: 500000000,
    tersalurkan: 450000000,
    penerima: 150,
    program: "BLT, BPNT, PKH"
  },
  {
    bulan: "Februari 2025",
    totalDana: 500000000,
    tersalurkan: 480000000,
    penerima: 160,
    program: "BLT, BPNT, PKH, Pendidikan"
  },
  {
    bulan: "Maret 2025",
    totalDana: 550000000,
    tersalurkan: 520000000,
    penerima: 170,
    program: "BLT, BPNT, PKH"
  }
]

const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(amount)
}

export function LaporanTransparansi() {
  const totalDana = laporan.reduce((sum, item) => sum + item.totalDana, 0)
  const totalTersalurkan = laporan.reduce((sum, item) => sum + item.tersalurkan, 0)

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Laporan Transparansi</h1>
          <p className="text-lg text-muted-foreground">
            Data penggunaan dana bantuan sosial secara detail dan transparan
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Dana</p>
                  <p className="text-2xl font-bold">{formatRupiah(totalDana)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tersalurkan</p>
                  <p className="text-2xl font-bold">{formatRupiah(totalTersalurkan)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Penerima</p>
                  <p className="text-2xl font-bold">
                    {laporan.reduce((sum, item) => sum + item.penerima, 0)}
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Laporan Detail */}
        <Card>
          <CardHeader>
            <CardTitle>Laporan Bulanan</CardTitle>
            <CardDescription>
              Rincian penggunaan dana bantuan sosial per bulan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {laporan.map((item, idx) => {
                const persentase = (item.tersalurkan / item.totalDana) * 100
                return (
                  <div key={idx} className="border-b last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{item.bulan}</h3>
                        <p className="text-sm text-muted-foreground">{item.program}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Tersalurkan</p>
                        <p className="font-bold">{formatRupiah(item.tersalurkan)}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Dana:</span>
                        <span className="font-medium">{formatRupiah(item.totalDana)}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${persentase}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{item.penerima} penerima</span>
                        <span>{persentase.toFixed(1)}% tersalurkan</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Chart Placeholder */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Grafik Penggunaan Dana</CardTitle>
            <CardDescription>Visualisasi tren penggunaan dana bantuan sosial</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Grafik akan ditampilkan di sini</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </Layout>
  )
}

