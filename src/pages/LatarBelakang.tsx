import { Layout } from "@/components/Layout"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { AlertCircle, Target, Users, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function LatarBelakang() {
  const [openSections, setOpenSections] = useState<string[]>(["program", "permasalahan", "dampak", "solusi"])

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.indexOf(section) !== -1
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Latar Belakang</h1>
            <p className="text-lg text-muted-foreground">
              Konteks dan permasalahan yang melatarbelakangi pengembangan website
            </p>
          </div>

          {/* Program Bantuan Sosial */}
          <Collapsible 
            open={openSections.indexOf("program") !== -1} 
            onOpenChange={() => toggleSection("program")}
            className="mb-6"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
              <h2 className="text-xl font-semibold">Program Bantuan Sosial</h2>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform",
                openSections.indexOf("program") !== -1 && "transform rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-muted-foreground leading-relaxed">
                Program bantuan sosial merupakan instrumen penting dalam upaya peningkatan 
                kesejahteraan masyarakat kurang mampu yang dikelola oleh pemerintah pusat 
                melalui Kementerian Sosial. Bantuan tersebut disalurkan dalam bentuk uang 
                tunai, barang, maupun jasa yang pengelolaannya diserahkan kepada pendamping 
                sosial di tingkat desa sebelum didistribusikan kepada masyarakat penerima.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Permasalahan yang Dihadapi */}
          <Collapsible 
            open={openSections.indexOf("permasalahan") !== -1} 
            onOpenChange={() => toggleSection("permasalahan")}
            className="mb-6"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Permasalahan yang Dihadapi</h2>
              </div>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform",
                openSections.indexOf("permasalahan") !== -1 && "transform rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Namun dalam pelaksanaannya di tingkat desa, penyaluran bantuan sosial masih 
                menghadapi berbagai permasalahan mendasar yang menghambat efektivitas program:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Ketidaktepatan data penerima bantuan</strong> - Data yang tidak 
                    akurat menyebabkan distribusi yang tidak tepat sasaran
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Minimnya sosialisasi kepada masyarakat</strong> - Masyarakat 
                    kurang mendapat informasi tentang program bantuan yang tersedia
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Lemahnya mekanisme pengawasan</strong> - Kurangnya kontrol dalam 
                    proses distribusi bantuan
                  </span>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Dampak Permasalahan */}
          <Collapsible 
            open={openSections.indexOf("dampak") !== -1} 
            onOpenChange={() => toggleSection("dampak")}
            className="mb-6"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Dampak Permasalahan</h2>
              </div>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform",
                openSections.indexOf("dampak") !== -1 && "transform rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Kondisi ini mengakibatkan:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ketidakmerataan distribusi bantuan dimana beberapa masyarakat yang seharusnya berhak tidak mendapatkan bantuan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ada pula yang menerima bantuan ganda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Menimbulkan ketidakadilan dan kecemburuan sosial di masyarakat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Dapat mengurangi kepercayaan publik terhadap program pemerintah</span>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Solusi yang Diusulkan */}
          <Collapsible 
            open={openSections.indexOf("solusi") !== -1} 
            onOpenChange={() => toggleSection("solusi")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Solusi yang Diusulkan</h2>
              </div>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform",
                openSections.indexOf("solusi") !== -1 && "transform rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Untuk mengatasi permasalahan tersebut, diperlukan solusi berbasis teknologi 
                informasi yang dapat mempermudah proses pendataan, verifikasi, dan penyaluran 
                bantuan sosial.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Pengembangan website manajemen dana bantuan sosial desa diharapkan dapat:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mengurangi kesalahan dalam penginputan data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Meningkatkan transparansi dalam pengambilan kebijakan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Memungkinkan masyarakat untuk memantau langsung proses penyaluran bantuan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Menjadi platform yang menghubungkan aparat desa sebagai pengelola dengan masyarakat sebagai penerima manfaat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Membuka ruang bagi donatur yang ingin berkontribusi dalam program bantuan sosial desa</span>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </main>
    </Layout>
  )
}

