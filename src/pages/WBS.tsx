import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Circle, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "sonner"

// Data WBS berdasarkan kontent.md
const wbsData = [
  {
    id: 1,
    phase: "Planning",
    activities: [
      "Analisis kebutuhan sistem secara komprehensif",
      "Studi kompetitor untuk identifikasi best practice",
      "Dokumentasi teknis terstruktur (SRS dan SDD)"
    ],
    deliverables: [
      "Dokumen Analisis Kebutuhan (Functional & Non-functional) — SRS",
      "Studi Kompetitor — laporan ringkas",
      "Dokumen Desain Teknis Awal (SDD) — arsitektur & flow utama"
    ],
    duration: "Agt 4 - Sep 2",
    status: "completed"
  },
  {
    id: 2,
    phase: "Design",
    activities: [
      "Pembuatan wireframe untuk 5 halaman utama",
      "Pengembangan prototype interaktif untuk 3 halaman utama",
      "Design system (color palette, typography, component library)"
    ],
    deliverables: [
      "Wireframe seluruh halaman — file Figma",
      "Prototype interaktif (halaman inti) — link prototipe Figma",
      "Design system (color, typography, komponen) — style guide"
    ],
    duration: "Sep 2 - Sep 4",
    status: "completed"
  },
  {
    id: 3,
    phase: "Develop",
    activities: [
      "Implementasi HTML/CSS (40 jam kerja)",
      "Integrasi dengan React JS (20 jam kerja)",
      "Responsive design untuk berbagai perangkat",
      "Pembuatan REST API (30 jam kerja)",
      "Sistem autentikasi dan otorisasi (20 jam kerja)",
      "Integrasi API pihak ketiga (10 endpoint)"
    ],
    deliverables: [
      "Source code frontend & backend — repository Git",
      "Database schema & ERD — SQL dan gambar ERD",
      "Dokumentasi integrasi API (termasuk endpoint & contoh request/response)"
    ],
    duration: "Okt 1 - Okt 4",
    status: "in_progress"
  },
  {
    id: 4,
    phase: "Test",
    activities: [
      "Unit testing (20 jam kerja)",
      "User Acceptance Test/UAT (5 sesi)",
      "Testing keamanan dan performa"
    ],
    deliverables: [
      "Dokumen Test Case — daftar skenario fungsional & non-fungsional",
      "Laporan Hasil Testing & Daftar Bug — status perbaikan tiap sprint",
      "Laporan UAT (User Acceptance Test) beserta feedback pengguna"
    ],
    duration: "Nov 1 - Nov 2",
    status: "pending"
  },
  {
    id: 5,
    phase: "Deploy",
    activities: [
      "Deployment ke server produksi",
      "Konfigurasi domain dan SSL certificate",
      "Setup backup data otomatis",
      "Pengujian sistem di lingkungan produksi"
    ],
    deliverables: [
      "Aplikasi/Website ter-deploy — akses live (domain aktif)",
      "Dokumen konfigurasi server, SSL, backup & monitoring"
    ],
    duration: "Nov 3",
    status: "pending"
  },
  {
    id: 6,
    phase: "Review",
    activities: [
      "Pengumpulan feedback dari pengguna dan stakeholder",
      "Evaluasi sistem secara menyeluruh",
      "Identifikasi area yang perlu ditingkatkan",
      "Perbaikan berdasarkan masukan pengguna"
    ],
    deliverables: [
      "Laporan evaluasi sistem",
      "Dokumen perbaikan dan peningkatan"
    ],
    duration: "Des 1",
    status: "pending"
  },
  {
    id: 7,
    phase: "Launch",
    activities: [
      "Peluncuran resmi website",
      "Sosialisasi dan pelatihan untuk aparat desa dan masyarakat",
      "Monitoring berkala untuk menjaga performa sistem",
      "Dukungan teknis berkelanjutan"
    ],
    deliverables: [
      "Website live dan dapat diakses publik",
      "Dokumentasi pelatihan dan sosialisasi"
    ],
    duration: "Des 2",
    status: "pending"
  },
  {
    id: 8,
    phase: "Maintenance",
    activities: [
      "Pemeliharaan selama 3 bulan",
      "Perbaikan bug dan optimasi",
      "Penyesuaian berdasarkan feedback pengguna"
    ],
    deliverables: [
      "Panduan Troubleshooting & SOP monitoring",
      "Laporan monitoring dan pemeliharaan berkala",
      "Video tutorial tambahan / knowledge transfer session"
    ],
    duration: "Des 3 - Des 4",
    status: "pending"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-5 w-5 text-green-600" />
    case "in_progress":
      return <Clock className="h-5 w-5 text-blue-600" />
    default:
      return <Circle className="h-5 w-5 text-gray-400" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "in_progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
  }
}

interface PhaseProgress {
  [phaseId: number]: {
    activities: { [index: number]: boolean }
    deliverables: { [index: number]: boolean }
  }
}

const STORAGE_KEY = "wbs-progress"

export function WBS() {
  // Load progress from localStorage
  const [progress, setProgress] = useState<PhaseProgress>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch {
          return {}
        }
      }
    }
    return {}
  })

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    }
  }, [progress])

  // Show error message for disabled task
  const showDisabledTaskError = (phaseId: number, type: "activities" | "deliverables") => {
    const phase = wbsData.find(p => p.id === phaseId)
    const phaseName = phase?.phase || "Task"
    
    if (!isPreviousPhaseCompleted(phaseId)) {
      const previousPhase = wbsData.find(p => p.id === phaseId - 1)
      toast.error("Tidak bisa mengerjakan task ini!", {
        description: `Selesaikan semua task di fase "${previousPhase?.phase}" terlebih dahulu.`
      })
    } else if (type === "deliverables") {
      toast.error("Tidak bisa mengerjakan task ini!", {
        description: `Selesaikan semua aktivitas di fase "${phaseName}" terlebih dahulu.`
      })
    }
  }

  // Toggle checkbox for activity or deliverable
  const toggleItem = (phaseId: number, type: "activities" | "deliverables", index: number) => {
    // Check if task can be worked on (should not happen since checkbox is disabled, but safety check)
    if (!canWorkOnTask(phaseId, type, index)) {
      showDisabledTaskError(phaseId, type)
      return
    }
    
    setProgress(prev => {
      const phaseData = prev[phaseId] || { activities: {}, deliverables: {} }
      const typeData = phaseData[type] || {}
      const currentValue = typeData[index] || false
      const newValue = !currentValue
      
      // Show success toast when completing a task
      if (newValue) {
        const phase = wbsData.find(p => p.id === phaseId)
        const phaseName = phase?.phase || "Task"
        const taskName = type === "activities" 
          ? phase?.activities[index] 
          : phase?.deliverables[index]
        
        toast.success("Task berhasil diselesaikan!", {
          description: `${taskName} di fase "${phaseName}" telah selesai.`
        })
      }
      
      return {
        ...prev,
        [phaseId]: {
          ...phaseData,
          [type]: {
            ...typeData,
            [index]: newValue
          }
        }
      }
    })
  }

  // Check if previous phase is completed
  const isPreviousPhaseCompleted = (phaseId: number) => {
    if (phaseId === 1) return true // First phase is always available
    
    const previousPhase = wbsData.find(p => p.id === phaseId - 1)
    if (!previousPhase) return true
    
    const previousPhaseProgress = getPhaseProgress(previousPhase)
    return previousPhaseProgress === 100
  }

  // Check if a specific task can be worked on (sequential)
  const canWorkOnTask = (phaseId: number, type: "activities" | "deliverables", index: number) => {
    // Check if previous phase is completed
    if (!isPreviousPhaseCompleted(phaseId)) {
      return false
    }
    
    // For activities, no need to check previous activities in same phase
    // Activities can be worked on freely within the same phase
    if (type === "activities") {
      return true
    }
    
    // For deliverables, check if all activities in same phase are completed
    if (type === "deliverables") {
      const phase = wbsData.find(p => p.id === phaseId)
      if (!phase) return false
      
      const phaseProgress = progress[phaseId] || { activities: {}, deliverables: {} }
      // Check if all activities are completed
      for (let i = 0; i < phase.activities.length; i++) {
        if (!phaseProgress.activities[i]) {
          return false
        }
      }
      
      // Deliverables can be worked on freely after all activities are done
      return true
    }
    
    return true
  }

  // Calculate progress for a phase
  const getPhaseProgress = (phase: typeof wbsData[0]) => {
    const phaseProgress = progress[phase.id] || { activities: {}, deliverables: {} }
    const totalItems = phase.activities.length + phase.deliverables.length
    if (totalItems === 0) return 0

    const completedActivities = phase.activities.filter((_, idx) => phaseProgress.activities[idx]).length
    const completedDeliverables = phase.deliverables.filter((_, idx) => phaseProgress.deliverables[idx]).length
    const completedItems = completedActivities + completedDeliverables

    return Math.round((completedItems / totalItems) * 100)
  }

  // Calculate overall progress
  const getOverallProgress = () => {
    let totalItems = 0
    let completedItems = 0

    wbsData.forEach(phase => {
      const phaseProgress = progress[phase.id] || { activities: {}, deliverables: {} }
      totalItems += phase.activities.length + phase.deliverables.length
      completedItems += phase.activities.filter((_, idx) => phaseProgress.activities[idx]).length
      completedItems += phase.deliverables.filter((_, idx) => phaseProgress.deliverables[idx]).length
    })

    return totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100)
  }

  const overallProgress = getOverallProgress()

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Work Breakdown Structure</h1>
          <p className="text-muted-foreground text-lg">
            Pengembangan Website Manajemen Dana Bantuan Sosial Desa
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Periode Proyek: 21 Agustus 2025 - 4 Desember 2025 (3,5 bulan)
          </p>
        </div>

        {/* Overall Progress Bar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Progress Keseluruhan Proyek</CardTitle>
            <CardDescription>
              {overallProgress}% dari seluruh tugas telah diselesaikan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted rounded-full h-4">
              <div
                className="bg-slate-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <div className="flex justify-center text-sm text-muted-foreground mt-2">
              <span className="font-semibold text-foreground">{overallProgress}%</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wbsData.map((phase) => {
            const phaseProgress = getPhaseProgress(phase)
            const phaseProgressData = progress[phase.id] || { activities: {}, deliverables: {} }
            const isCompleted = phaseProgress === 100

            return (
              <Card key={phase.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : phaseProgress > 0 ? (
                        <Clock className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-400" />
                      )}
                      <CardTitle className="text-xl">{phase.phase}</CardTitle>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      isCompleted 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : phaseProgress > 0
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    }`}>
                      {isCompleted ? "Selesai" : phaseProgress > 0 ? "Berjalan" : "Menunggu"}
                    </span>
                  </div>
                  <CardDescription className="text-sm font-medium">
                    {phase.duration}
                  </CardDescription>
                  
                  {/* Progress Bar per Phase */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span className="font-semibold">{phaseProgress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          isCompleted ? "bg-emerald-500" : "bg-slate-500"
                        }`}
                        style={{ width: `${phaseProgress}%` }}
                      />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Kegiatan:</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {phase.activities.map((activity, idx) => {
                        const isChecked = phaseProgressData.activities?.[idx] || false
                        const isDisabled = !canWorkOnTask(phase.id, "activities", idx)
                        return (
                          <li key={`activity-${phase.id}-${idx}`} className="flex items-start gap-2">
                            <div 
                              onClick={() => {
                                if (isDisabled) {
                                  showDisabledTaskError(phase.id, "activities")
                                }
                              }}
                              className="cursor-pointer"
                            >
                              <Checkbox
                                checked={isChecked}
                                disabled={isDisabled}
                                onCheckedChange={(checked) => {
                                  if (checked !== isChecked) {
                                    toggleItem(phase.id, "activities", idx)
                                  }
                                }}
                                className="mt-1"
                              />
                            </div>
                            <span className={isChecked ? "line-through opacity-60" : ""}>
                              {activity}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-semibold text-sm mb-2">Deliverable:</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {phase.deliverables.map((deliverable, idx) => {
                        const isChecked = phaseProgressData.deliverables?.[idx] || false
                        const isDisabled = !canWorkOnTask(phase.id, "deliverables", idx)
                        return (
                          <li key={`deliverable-${phase.id}-${idx}`} className={`flex items-start gap-2 ${isDisabled ? "opacity-50" : ""}`}>
                            <div 
                              onClick={() => {
                                if (isDisabled) {
                                  showDisabledTaskError(phase.id, "deliverables")
                                }
                              }}
                              className="cursor-pointer"
                            >
                              <Checkbox
                                checked={isChecked}
                                disabled={isDisabled}
                                onCheckedChange={(checked) => {
                                  if (checked !== isChecked) {
                                    toggleItem(phase.id, "deliverables", idx)
                                  }
                                }}
                                className="mt-0.5"
                              />
                            </div>
                            <span className={isChecked ? "line-through opacity-60" : ""}>
                              {deliverable}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Summary Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ringkasan Proyek</CardTitle>
            <CardDescription>
              Total anggaran dan timeline keseluruhan proyek
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Total Anggaran</p>
                <p className="text-2xl font-bold">Rp 103.515.825</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Durasi Proyek</p>
                <p className="text-2xl font-bold">3,5 Bulan</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Tahapan</p>
                <p className="text-2xl font-bold">8 Fase</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </Layout>
  )
}

