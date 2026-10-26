import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Mic, Brain, Lock, ExternalLink } from "lucide-react";

interface ConsentNoticeProps {
  roleTitle: string;
  candidateName?: string;
  onConsentGiven: () => void;
  isLoading?: boolean;
}

export default function ConsentNotice({
  roleTitle,
  candidateName,
  onConsentGiven,
  isLoading = false,
}: ConsentNoticeProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
      {/* Header Banner */}
      <div className="bg-primary/5 border-b p-5">
        <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span>Kepatuhan UU Pelindungan Data Pribadi (UU PDP No. 27/2022)</span>
        </div>
        <h2 className="text-lg font-bold text-foreground">
          Pemberitahuan & Persetujuan Privasi Kandidat
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {candidateName ? `Halo ${candidateName}, s` : "S"}ebelum memulai sesi wawancara AI untuk posisi{" "}
          <strong className="text-foreground">{roleTitle}</strong>, mohon tinjau hak dan ketentuan pemrosesan data pribadi Anda.
        </p>
      </div>

      {/* Highlights */}
      <div className="p-5 space-y-4">
        <div className="grid gap-3 text-sm">
          <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/40 border">
            <Mic className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Data Biometrik Suara</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Audio suara Anda akan direkam dan distreaming secara real-time selama sesi berlangsung untuk keperluan interaksi percakapan dua arah.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/40 border">
            <Brain className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Pemrosesan AI & Transkrip Percakapan</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Percakapan Anda akan ditranskrip dan dianalisis oleh model AI (Google Gemini) untuk mengukur kompetensi teknis sesuai taksonomi keterampilan.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/40 border">
            <Lock className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Hak Subjek Data & Evaluasi Manusia</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Hasil evaluasi AI dapat ditinjau dan dikoreksi ulang oleh asesor manusia (Human-in-the-Loop). Anda berhak mengajukan permohonan akses atau penghapusan data wawancara melalui tim rekrutmen.
              </p>
            </div>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 p-3.5 rounded-lg border-2 border-primary/20 bg-primary/[0.02] cursor-pointer hover:bg-primary/[0.05] transition-colors">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-xs text-foreground leading-relaxed select-none">
              Saya telah membaca, memahami, dan <strong>memberikan persetujuan eksplisit</strong> bagi platform untuk merekam suara, memproses transkrip dengan AI, dan menyimpan data wawancara untuk keperluan seleksi kerja ini sesuai ketentuan <strong>UU PDP No. 27/2022</strong>.
            </span>
          </label>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-4 border-t bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-muted-foreground">
          Persetujuan ini dapat ditarik sewaktu-waktu sebelum wawancara dimulai.
        </span>
        <Button
          onClick={onConsentGiven}
          disabled={!agreed || isLoading}
          size="default"
          className="w-full sm:w-auto"
        >
          {isLoading ? "Menyimpan Persetujuan..." : "Setujui & Lanjutkan"}
        </Button>
      </div>
    </div>
  );
}
