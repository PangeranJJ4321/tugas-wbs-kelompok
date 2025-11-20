import { Link } from "react-router-dom"
import { PanelLeft, Home, FileText, Target, ClipboardList, Code, Settings, Calendar, Users, DollarSign, Package, Scale, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/contexts/SidebarContext"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  showBanner: boolean
}

const navigationItems = [
  {
    category: "Halaman Utama",
    items: [
      { name: "Beranda", icon: Home, href: "/", description: "Gambaran umum proyek" },
    ]
  },
  {
    category: "TOR",
    items: [
      { name: "Latar Belakang", icon: FileText, href: "/latar-belakang", description: "Konteks dan permasalahan" },
      { name: "Maksud dan Tujuan", icon: Target, href: "/maksud-tujuan", description: "Tujuan pengembangan website" },
      { name: "Ruang Lingkup", icon: ClipboardList, href: "/ruang-lingkup", description: "Lingkup pekerjaan proyek" },
      { name: "Metodologi", icon: Code, href: "/metodologi", description: "Metodologi Agile" },
      { name: "Spesifikasi Teknis", icon: Settings, href: "/spesifikasi-teknis", description: "Perangkat lunak & keras" },
      { name: "Jadwal Pelaksanaan", icon: Calendar, href: "/jadwal-pelaksanaan", description: "Work Breakdown Structure" },
      { name: "Organisasi Pelaksana", icon: Users, href: "/organisasi-pelaksana", description: "Struktur tim proyek" },
      { name: "Anggaran Biaya", icon: DollarSign, href: "/anggaran-biaya", description: "Rincian anggaran proyek" },
      { name: "Deliverable", icon: Package, href: "/deliverable", description: "Hasil kerja yang diserahkan" },
      { name: "Ketentuan Lain-Lain", icon: Scale, href: "/ketentuan-lain", description: "Ketentuan tambahan" },
    ]
  }
]

export function Sidebar({ isOpen, onClose, showBanner }: SidebarProps) {
  return (
    <>
      {/* Overlay - hanya untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 h-full w-80 bg-background border-r z-[70] transform transition-all duration-300 ease-in-out",
          isOpen ? "left-4 translate-x-0" : "-translate-x-full left-0",
          showBanner ? "top-[41px]" : "top-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header Sidebar */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">DS</span>
              </div>
              <div>
                <h2 className="font-bold text-lg">Manajemen Dana</h2>
                <p className="text-xs text-muted-foreground">Bantuan Sosial Desa</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Close sidebar"
            >
              <PanelLeft className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {navigationItems.map((category, categoryIdx) => (
              <div key={categoryIdx} className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  {category.category}
                </h3>
                <nav className="space-y-1">
                  {category.items.map((item, itemIdx) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={itemIdx}
                        to={item.href}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors group"
                        onClick={() => {
                          // Hanya tutup sidebar di mobile
                          if (window.innerWidth < 1024) {
                            onClose()
                          }
                        }}
                      >
                        <Icon className="h-4 w-4 shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground/70 mt-0.5 line-clamp-1">
                              {item.description}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                      </Link>
                    )
                  })}
                </nav>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 Manajemen Dana Bantuan Sosial Desa
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

