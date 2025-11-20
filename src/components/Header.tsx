import { useState } from "react"
import { Search, ChevronDown, Github, Menu, X, PanelLeft } from "lucide-react"
import { Sidebar } from "./Sidebar"
import { useSidebar } from "@/contexts/SidebarContext"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  const navigate = useNavigate()

  return (
    <>

      {/* Banner */}
      {showBanner && (
        <div className="fixed top-0 inset-x-0 bg-muted text-muted-foreground text-sm py-2 px-4 flex items-center justify-center z-[60]">
          <p className="text-center">
            Join our Discord Community — Get help, share components, and connect with developers
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

              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-20 h-9 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
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

