import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faServer,
  faCheckCircle,
  faCircleNotch,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { dashboardService } from "../../services/dashboard";
import StatusDialog from "../../components/StatusDialog";

export default function AnalysisLoading() {
  const location = useLocation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const hasCalledAPI = useRef(false);
  const stateData = location.state as { file: File; role: string } | null;
  const file = stateData?.file;
  const role = stateData?.role || "";

  useEffect(() => {
    if (!file) {
      navigate("/dashboard");
    }
  }, [file, navigate]);

  useEffect(() => {
    if (!file) return;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        const nextProgress = prev + 1;
        if (nextProgress < 30) setCurrentStep(0);
        else if (nextProgress < 60) setCurrentStep(1);
        else if (nextProgress < 90) setCurrentStep(2);
        else setCurrentStep(3);
        return nextProgress;
      });
    }, 80);
    return () => clearInterval(progressInterval);
  }, [file]);

  useEffect(() => {
    if (!file || hasCalledAPI.current) return;
    hasCalledAPI.current = true;

    const executeAnalysis = async () => {
      try {
        const response = await dashboardService.uploadAndAnalyzeCV(file, role);

        if (response && (response.status === "success" || response.code === 201)) {
          setProgress(100);
          setCurrentStep(4);
          setTimeout(() => {
            navigate("/dashboard/result", { state: { resultData: response.data } });
          }, 800);
        } else {
          setDialogMessage(response?.message || "Server merespons namun format data tidak sesuai.");
          setIsErrorDialogOpen(true);
        }
      } catch (error) {
        console.error("Gagal memproses data analisis:", error);
        if (axios.isAxiosError(error)) {
          const apiMessage = error.response?.data?.message || "Gagal meramu data. Silakan coba unggah kembali berkas Anda.";
          setDialogMessage(apiMessage);
        } else {
          setDialogMessage("Gagal meramu data. Silakan coba unggah kembali berkas Anda.");
        }
        setIsErrorDialogOpen(true);
      }
    };

    executeAnalysis();
  }, [file, role, navigate]);

  const strokeDashoffset = 439.6 - (439.6 * progress) / 100;
  const steps = [
    { title: "Mengambil data CV", desc: "Data berhasil dimuat" },
    { title: "Menganalisis skill", desc: "750 kompetensi teridentifikasi" },
    { title: "Mencocokkan role", desc: "Memetakan pada 2000+ data industri" },
    { title: "Menghasilkan insight", desc: "Menghitung klaster akurasi final" },
  ];

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center p-6 relative font-inter text-gray-900">
      <StatusDialog
        isOpen={isErrorDialogOpen}
        variant="failed"
        title="Analisis Gagal!"
        description={dialogMessage}
        buttonText="Kembali ke Dashboard"
        onConfirm={() => navigate("/dashboard")}
      />

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col items-center gap-8 relative z-10">
        <div className="text-center space-y-2">
          <h2 className="text-zinc-900 text-2xl md:text-3xl font-bold font-manrope tracking-tight">Menganalisis profil profesional Anda</h2>
          <p className="text-gray-500 text-sm md:text-base font-normal max-w-md mx-auto leading-relaxed">Kecerdasan buatan kami sedang membedah setiap detail pengalaman Anda untuk menemukan kecocokan yang paling presisi.</p>
        </div>
        <div className="relative w-48 h-48 flex items-center justify-center select-none my-4">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="96" cy="96" r="70" className="stroke-gray-100" strokeWidth="8" fill="transparent" />
            <circle cx="96" cy="96" r="70" className="stroke-blue-800 transition-all duration-300 ease-out" strokeWidth="8" fill="transparent" strokeDasharray="439.6" strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-zinc-900 text-4xl font-extrabold font-manrope leading-none">{progress}%</span>
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 animate-pulse">{progress === 100 ? "SELESAI" : "MEMPROSES"}</span>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            return (
              <div key={index} className={`w-full p-4 rounded-xl flex justify-start items-center gap-4 transition-all duration-300 border ${isActive ? "bg-white border-blue-800/30 shadow-md ring-1 ring-blue-800/10" : "bg-gray-50/70 border-transparent opacity-60"} ${isCompleted ? "bg-emerald-50/20 opacity-100 border-emerald-100/40" : ""}`}>
                <div className={`w-10 h-10 rounded-xl flex justify-center items-center transition-all ${isCompleted ? "bg-emerald-600 text-white" : ""} ${isActive ? "bg-blue-800 text-white animate-pulse" : ""} ${!isCompleted && !isActive ? "bg-gray-200 text-gray-400" : ""}`}>
                  {isCompleted ? <FontAwesomeIcon icon={faCheckCircle} className="text-sm" /> : isActive ? <FontAwesomeIcon icon={faCircleNotch} className="text-sm animate-spin" /> : <FontAwesomeIcon icon={faCircle} className="text-[6px]" />}
                </div>
                <div className="flex flex-col text-left">
                  <span className={`text-sm font-semibold transition-colors ${isActive ? "text-blue-800" : "text-zinc-900"}`}>{step.title}</span>
                  <span className="text-gray-500 text-xs font-normal">{isActive ? "Sedang memproses..." : isCompleted ? step.desc : "Menunggu antrean"}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs select-none">
          <div className="flex items-center gap-2 text-gray-500 font-medium"><FontAwesomeIcon icon={faLock} className="text-gray-400" /><span>Data Anda dienkripsi secara privat</span></div>
          <div className="flex items-center gap-2 text-blue-800 font-bold tracking-wider"><FontAwesomeIcon icon={faServer} className="text-xs animate-pulse" /><span>ANALYZING SERVER CLUSTER 04</span></div>
        </div>
      </div>
    </div>
  );
}