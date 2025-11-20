import { Layout } from "@/components/Layout"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Target, Eye, CheckCircle2, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function MaksudTujuan() {
  const [openSections, setOpenSections] = useState<string[]>(["maksud", "tujuan", "implementasi"])

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
            <h1 className="text-4xl font-bold mb-4">Maksud dan Tujuan</h1>
            <p className="text-lg text-muted-foreground">
              Tujuan utama dari pengembangan website manajemen dana bantuan sosial desa
            </p>
          </div>

          {/* Maksud */}
          <Collapsible 
            open={openSections.indexOf("maksud") !== -1} 
            onOpenChange={() => toggleSection("maksud")}
            className="mb-6"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Maksud</h2>
              </div>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform",
                openSections.indexOf("maksud") !== -1 && "transform rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-muted-foreground leading-relaxed">
                Pengembangan website manajemen bantuan sosial desa ini dimaksudkan untuk 
                menciptakan sistem informasi yang terintegrasi dalam pengelolaan dana bantuan 
                sosial di tingkat desa. Website ini akan menjadi solusi digital yang memfasilitasi 
                seluruh proses mulai dari pendaftaran calon penerima, verifikasi data, hingga 
                penyaluran bantuan secara transparan dan akuntabel.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Tujuan Utama */}
          <Collapsible 
            open={openSections.indexOf("tujuan") !== -1} 
            onOpenChange={() => toggleSection("tujuan")}
            className="mb-6"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Tujuan Utama</h2>
              </div>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform",
                openSections.indexOf("tujuan") !== -1 && "transform rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Tujuan utama dari pengembangan website ini adalah:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Mempermudah petugas desa</strong> dalam melakukan pendataan, 
                    verifikasi, dan penyaluran bantuan secara tepat sasaran dengan mekanisme 
                    yang transparan dan dapat dipertanggungjawabkan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Menjadi sarana monitoring dan evaluasi</strong> yang efektif sehingga 
                    proses distribusi bantuan dapat berjalan lebih teratur dan efisien
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Menyediakan informasi lengkap</strong> mengenai program bantuan sosial 
                    termasuk profil desa, visi-misi program, dan jadwal penyaluran yang dapat 
                    diakses oleh seluruh masyarakat
                  </span>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Implementasi */}
          <Collapsible 
            open={openSections.indexOf("implementasi") !== -1} 
            onOpenChange={() => toggleSection("implementasi")}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-3 border-b hover:bg-muted/50 transition-colors rounded-t-lg px-4">
              <h2 className="text-xl font-semibold">Implementasi</h2>
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform",
                openSections.indexOf("implementasi") !== -1 && "transform rotate-180"
              )} />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-4">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Dalam implementasinya, website ini juga memberikan ruang bagi masyarakat atau 
                pihak ketiga yang ingin berkontribusi melalui sumbangan, dimana dana tersebut 
                akan dikelola dan didistribusikan secara transparan sesuai dengan mekanisme 
                yang telah ditetapkan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sistem juga dilengkapi dengan layanan pengaduan online yang terhubung langsung 
                dengan pihak terkait untuk mendorong keterbukaan informasi dan partisipasi aktif 
                masyarakat. Dengan demikian, interaksi antara masyarakat dan petugas desa dapat 
                berlangsung dengan cepat dan efisien, mendukung terwujudnya penyaluran bantuan 
                yang adil, transparan, dan berkelanjutan demi kesejahteraan masyarakat desa.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </main>
    </Layout>
  )
}

