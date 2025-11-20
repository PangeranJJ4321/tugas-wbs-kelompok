import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SidebarProvider } from "./contexts/SidebarContext"
import { Toaster } from "./components/ui/sonner"
import { Home } from "./pages/Home"
import { LatarBelakang } from "./pages/LatarBelakang"
import { MaksudTujuan } from "./pages/MaksudTujuan"
import { RuangLingkup } from "./pages/RuangLingkup"
import { Metodologi } from "./pages/Metodologi"
import { SpesifikasiTeknis } from "./pages/SpesifikasiTeknis"
import { WBS } from "./pages/WBS"
import { OrganisasiPelaksana } from "./pages/OrganisasiPelaksana"
import { AnggaranBiaya } from "./pages/AnggaranBiaya"
import { Deliverable } from "./pages/Deliverable"
import { KetentuanLain } from "./pages/KetentuanLain"

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latar-belakang" element={<LatarBelakang />} />
          <Route path="/maksud-tujuan" element={<MaksudTujuan />} />
          <Route path="/ruang-lingkup" element={<RuangLingkup />} />
          <Route path="/metodologi" element={<Metodologi />} />
          <Route path="/spesifikasi-teknis" element={<SpesifikasiTeknis />} />
          <Route path="/jadwal-pelaksanaan" element={<WBS />} />
          <Route path="/organisasi-pelaksana" element={<OrganisasiPelaksana />} />
          <Route path="/anggaran-biaya" element={<AnggaranBiaya />} />
          <Route path="/deliverable" element={<Deliverable />} />
          <Route path="/ketentuan-lain" element={<KetentuanLain />} />
        </Routes>
        <Toaster />
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App

