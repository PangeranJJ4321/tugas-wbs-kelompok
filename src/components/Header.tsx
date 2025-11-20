import { useState, useRef, useEffect } from "react"
import { Search, ChevronDown, Github, Menu, X, PanelLeft } from "lucide-react"
import { Sidebar } from "./Sidebar"
import { useSidebar } from "@/contexts/SidebarContext"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

// Navigation items untuk search (sama dengan di Sidebar)
const searchableItems = [
  { name: "Beranda", href: "/", description: "Gambaran umum proyek" },
  { name: "Latar Belakang", href: "/latar-belakang", description: "Konteks dan permasalahan" },
  { name: "Maksud dan Tujuan", href: "/maksud-tujuan", description: "Tujuan pengembangan website" },
  { name: "Ruang Lingkup", href: "/ruang-lingkup", description: "Lingkup pekerjaan proyek" },
  { name: "Metodologi", href: "/metodologi-pelaksanaan", description: "Metodologi Agile" },
  { name: "Spesifikasi Teknis", href: "/spesifikasi-teknis", description: "Perangkat lunak & keras" },
  { name: "Jadwal Pelaksanaan", href: "/jadwal-pelaksanaan", description: "Work Breakdown Structure" },
  { name: "Organisasi Pelaksana", href: "/organisasi-pelaksana", description: "Struktur tim proyek" },
  { name: "Anggaran Biaya", href: "/anggaran-biaya", description: "Rincian anggaran proyek" },
  { name: "Deliverable", href: "/deliverable", description: "Hasil kerja yang diserahkan" },
  { name: "Ketentuan Lain-Lain", href: "/ketentuan-lain", description: "Ketentuan tambahan" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const navigate = useNavigate()

  // Filter search results
  const filteredItems = searchQuery.trim()
    ? searchableItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowSearchResults(e.target.value.trim().length > 0)
  }

  const handleItemClick = (href: string) => {
    navigate(href)
    setSearchQuery("")
    setShowSearchResults(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredItems.length > 0) {
      handleItemClick(filteredItems[0].href)
    } else if (e.key === "Escape") {
      setShowSearchResults(false)
      setSearchQuery("")
    }
  }

  return (
    <>

      {/* Banner */}
      {showBanner && (
        <div className="fixed top-0 inset-x-0 bg-muted text-muted-foreground text-sm py-2 px-4 flex items-center justify-center z-[60]">
          <p className="text-center">
            Tema: Manajemen Dana Bantuan Sosial Desa
          </p>

          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 hover:opacity-70 transition-opacity"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

      )}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} showBanner={showBanner} />

      {/* Main Header */}
      <header className={cn(
        "sticky w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 mb-10",
        showBanner ? "top-[41px]" : "top-0"
      )}>
        <div className={cn(
          "container mx-auto px-4 transition-all duration-300",
          isSidebarOpen && "lg:pl-[calc(20rem+2rem)]"
        )}>
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left side - Sidebar Toggle & Search */}
            <div className={cn(
              "flex items-center flex-1 max-w-2xl",
              !isSidebarOpen && "gap-3"
            )}>
              {/* Sidebar Toggle Button - hanya muncul saat sidebar tertutup */}
              {!isSidebarOpen && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 hover:bg-muted rounded-md transition-colors shrink-0"
                  aria-label="Open sidebar"
                >
                  <PanelLeft className="h-5 w-5 text-muted-foreground" />
                </button>
              )}

              <div className="relative flex-1 max-w-lg" ref={searchRef}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setShowSearchResults(searchQuery.trim().length > 0)}
                  className="w-full pl-10 pr-20 h-9 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">Ctrl</span>
                  </kbd>
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    K
                  </kbd>
                </div>

                {/* Search Results Dropdown */}
                {showSearchResults && filteredItems.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                    {filteredItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleItemClick(item.href)}
                        className="w-full text-left px-4 py-3 hover:bg-muted transition-colors border-b last:border-b-0"
                      >
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                      </button>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {showSearchResults && searchQuery.trim().length > 0 && filteredItems.length === 0 && (
                  <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-md shadow-lg z-50 p-4 text-center text-sm text-muted-foreground">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button
                 onClick={() => navigate("/latar-belakang")}
                 className="flex items-center gap-1 text-sm font-medium hover:text-foreground transition-colors">
                  Latar Belakang
                </button>
              </div>

              <div className="relative group">
                <button 
                 onClick={() => navigate("/maksud-tujuan")}
                 className="flex items-center gap-1 text-sm font-medium hover:text-foreground transition-colors">
                  Maksud Tujuan
                </button>
              </div>

              <div className="relative group">
                <button
                 onClick={() => navigate("/jadwal-pelaksanaan")}
                 className="flex items-center gap-1 text-sm font-medium hover:text-foreground transition-colors">
                  Work Breakdown Structure
                </button>
              </div>            
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <button className="flex items-center justify-between w-full text-sm font-medium">
                Documentation
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-between w-full text-sm font-medium">
                Tools
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-between w-full text-sm font-medium">
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

