import { Layout } from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Upload } from "lucide-react"
import { useState } from "react"

export function PendaftaranOnline() {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    alamat: "",
    program: "",
    noHp: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Formulir berhasil dikirim! Tim kami akan menghubungi Anda untuk verifikasi.")
  }

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Pendaftaran Online</h1>
            <p className="text-lg text-muted-foreground">
              Formulir pendaftaran bantuan sosial secara online
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Formulir Pendaftaran</CardTitle>
              <CardDescription>
                Isi formulir di bawah ini dengan data yang benar dan lengkap
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nama Lengkap <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    NIK <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nik}
                    onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Masukkan NIK (16 digit)"
                    maxLength={16}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Alamat <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.alamat}
                    onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Program Bantuan <span className="text-destructive">*</span>
                  </label>
                  <select
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Pilih Program Bantuan</option>
                    <option value="BLT">Bantuan Langsung Tunai (BLT)</option>
                    <option value="BPNT">Bantuan Pangan Non Tunai (BPNT)</option>
                    <option value="PKH">Program Keluarga Harapan (PKH)</option>
                    <option value="Pendidikan">Bantuan Pendidikan</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    No. Handphone <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.noHp}
                    onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Upload Dokumen <span className="text-destructive">*</span>
                  </label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Klik untuk upload atau drag & drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Format: PDF, JPG, PNG (Max 2MB)
                    </p>
                    <input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-10 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Kirim Formulir
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Persyaratan Dokumen</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Fotokopi Kartu Keluarga (KK)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Fotokopi KTP Kepala Keluarga</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Surat Keterangan Tidak Mampu dari RT/RW</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Bukti Pendapatan atau Surat Keterangan Penghasilan</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  )
}

