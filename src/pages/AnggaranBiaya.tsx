import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp } from "lucide-react"

const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(amount)
}

export function AnggaranBiaya() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Anggaran Biaya</h1>
          <p className="text-lg text-muted-foreground">
            Rincian anggaran keseluruhan proyek
          </p>
        </div>

        {/* Total Anggaran */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <CardTitle>Total Anggaran Keseluruhan</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <p className="text-5xl font-bold text-primary mb-2">
                {formatRupiah(103515825)}
              </p>
              <p className="text-muted-foreground">
                Rp 103.515.825
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Rincian Anggaran */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Biaya Operasional Proyek</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>• Biaya langsung pengembangan website</li>
                <li>• Mencakup semua tahapan dari perencanaan hingga deployment</li>
              </ul>
              <p className="text-2xl font-bold">{formatRupiah(57250000)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biaya Kontingensi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                7% dari biaya operasional untuk antisipasi biaya tak terduga
              </p>
              <p className="text-2xl font-bold">{formatRupiah(4007500)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pajak</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                PPN 11% dari sub total (A + B)
              </p>
              <p className="text-2xl font-bold">{formatRupiah(6738325)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biaya Infrastruktur</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>• VPS untuk 12 bulan: {formatRupiah(3360000)}</li>
                <li>• Domain untuk 12 bulan: {formatRupiah(2160000)}</li>
              </ul>
              <p className="text-2xl font-bold">{formatRupiah(5520000)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biaya Sumber Daya Manusia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Kompensasi untuk 5 posisi selama durasi proyek (3,5 bulan)
              </p>
              <p className="text-2xl font-bold">{formatRupiah(30000000)}</p>
            </CardContent>
          </Card>
        </div>

        {/* Rekapitulasi */}
        <Card>
          <CardHeader>
            <CardTitle>Rekapitulasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 text-sm font-semibold">Komponen</th>
                    <th className="text-right p-3 text-sm font-semibold">Jumlah (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Biaya Operasional Proyek</td>
                    <td className="p-3 text-right">57.250.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Biaya Kontingensi (7%)</td>
                    <td className="p-3 text-right">4.007.500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">PPN 11%</td>
                    <td className="p-3 text-right">6.73325</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Biaya Infrastruktur</td>
                    <td className="p-3 text-right">5.520.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Biaya SDM</td>
                    <td className="p-3 text-right">30.000.000</td>
                  </tr>
                  <tr className="border-b-2 border-primary font-bold">
                    <td className="p-3">TOTAL KESELURUHAN</td>
                    <td className="p-3 text-right">103.515.825</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </Layout>
  )
}

