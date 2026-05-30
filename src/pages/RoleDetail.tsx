import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
  faGraduationCap,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import type { RecommendationItem } from "../types/dashboard";

export default function RoleDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const state = location.state as {
    jobData: RecommendationItem;
    candidateName?: string;
    candidateExpYears?: number;
  } | null;

  const job = state?.jobData;
  const candidateName = state?.candidateName || "Kandidat";
  const candidateExpYears = state?.candidateExpYears ?? 0;

  // 🟢 PERBAIKAN 1: PindahkanuseMemo ke ATAS (Sebelum early return 'if (!job)') agar patuh pada Rules of Hooks
  const cleanedSoftSkills = useMemo(() => {
    const rawSkills = job?.req_soft_skills;
    if (!rawSkills) return ["problem solving"];

    if (Array.isArray(rawSkills)) {
      return rawSkills.map(s => String(s).trim());
    }

    try {
      // 🟢 PERBAIKAN 2: Sederhanakan regex tanpa escape character '\\[' yang sia-sia di dalam character class
      const cleanString = rawSkills
        .replace(/[[\]'"\s]/g, "") 
        .split(",")
        .filter(Boolean);
        
      return cleanString.length > 0 ? cleanString : ["problem solving"];
    } catch (e) {
      console.error("Gagal melakukan parsing soft skills:", e);
      return ["problem solving"];
    }
  }, [job?.req_soft_skills]);

  useEffect(() => {
    if (!job) {
      navigate("/dashboard");
    }
  }, [job, navigate]);

  // 🟢 Early return ditaruh di bawah deklarasi Hooks demi keamanan render sirkuit
  if (!job) return null;

  const isStrongFit = job.match_score_percent >= 80;
  const matchedSkillsCount = job.matched_skills?.length || 0;

  return (
    <div className="w-full min-h-screen bg-slate-50 font-inter pb-16 text-left">
      <main className="max-w-6xl mx-auto px-4 md:px-8 mt-8 flex flex-col gap-8">
        <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="flex-1 p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-xs relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4">
              <span className="px-3 py-1 bg-blue-800/10 text-blue-800 text-[10px] font-bold rounded-full tracking-wide inline-block">
                ROLE ANALYSIS DETAIL
              </span>
              <h1 className="text-zinc-900 text-2xl md:text-3xl font-extrabold font-manrope tracking-tight leading-tight">
                {job.job_title}
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                Candidate Profile:{" "}
                <span className="font-semibold text-zinc-900">
                  {candidateName}
                </span>
                . Laporan mengevaluasi korelasi{" "}
                <span className="font-medium text-zinc-800">
                  {matchedSkillsCount} kompetensi teknis
                </span>
                , kecocokan klaster keahlian, serta audit durasi pengalaman
                kerja kandidat selama{" "}
                <span className="font-medium text-zinc-800">
                  {candidateExpYears} tahun
                </span>{" "}
                terhadap target peran industri ini.
              </p>
            </div>
          </div>
          <div
            className={`w-full lg:w-72 p-8 rounded-2xl flex flex-col justify-center items-center gap-4 text-center text-white shadow-lg ${
              isStrongFit
                ? "bg-blue-800 shadow-blue-800/10"
                : "bg-amber-600 shadow-amber-600/10"
            }`}
          >
            <div className="relative w-32 h-32 flex items-center justify-center select-none">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  className="stroke-white/20"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  className="stroke-white transition-all duration-300"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="326.7"
                  strokeDashoffset={
                    326.7 - (326.7 * job.match_score_percent) / 100
                  }
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-black font-manrope leading-none">
                  {Math.round(job.match_score_percent)}%
                </span>
                <span className="text-[8px] font-bold tracking-wider opacity-70 mt-1">
                  MATCH SCORE
                </span>
              </div>
            </div>

            <span className="px-5 py-1.5 bg-white text-zinc-900 text-sm font-bold rounded-xl shadow-xs uppercase tracking-wide">
              {job.fit_category.replace("_", " ")}
            </span>
          </div>
        </div>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 md:p-8 bg-gray-50 border border-gray-100 rounded-2xl flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-800 text-white rounded-xl flex justify-center items-center shrink-0 shadow-xs">
                <FontAwesomeIcon icon={faLightbulb} className="text-sm" />
              </div>
              <div className="space-y-2">
                <h3 className="text-zinc-900 text-base font-bold font-manrope">
                  Why You Match
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed italic border-l-4 border-blue-800/20 pl-4">
                  {job.why_you_match ||
                    `Kandidat memiliki skill relevan seperti ${job.matched_skills.slice(0, 3).join(", ")} yang mendukung kebutuhan posisi ini.`}
                </p>
              </div>
            </div>
            
            <div className="p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-xs flex flex-col gap-6">
              <div>
                <h3 className="text-zinc-900 text-base font-bold font-manrope">
                  Skill Alignment Matrix
                </h3>
              </div>
              
              <div className="space-y-3">
                <span className="text-gray-400 text-[10px] font-bold tracking-wider block">
                  MATCHED TECHNICAL SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {job.matched_skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 bg-blue-50/70 border border-blue-100 text-blue-900 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition hover:bg-blue-50"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-800 text-xs"
                      />
                      <span>{skill}</span>
                    </div>
                  ))}
                  {job.matched_skills.length === 0 && (
                    <span className="text-gray-400 text-xs italic">
                      Tidak ada keahlian kompetensi yang beririsan langsung.
                    </span>
                  )}
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-gray-50">
                <span className="text-gray-400 text-[10px] font-bold tracking-wider block">
                  REQUIRED SOFT SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {cleanedSoftSkills.map((sSkill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-zinc-800 text-xs font-semibold rounded-lg flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-800 rounded-full"></span>
                      <span>{sSkill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-gray-50">
                <span className="text-gray-400 text-[10px] font-bold tracking-wider block">
                  MISSING SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {job.missing_skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 bg-rose-50 border border-rose-100 text-rose-900 text-xs font-semibold rounded-lg flex items-center gap-1.5"
                    >
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="text-rose-600 text-xs"
                      />
                      <span>{skill}</span>
                    </div>
                  ))}
                  {job.missing_skills.length === 0 && (
                    <p className="text-emerald-700 text-xs font-semibold flex items-center gap-1">
                      ✨ Semua kebutuhan keahlian teknis terpenuhi dengan sempurna!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs flex flex-col gap-6">
            <div>
              <h3 className="text-zinc-900 text-base font-bold font-manrope">
                Experience Audit
              </h3>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-50 text-sm">
                <span className="text-gray-500 font-semibold flex items-center gap-1.5">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-gray-400"
                  />{" "}
                  REQUIRED
                </span>
                <span className="text-zinc-900 font-bold">
                  {job.minimum_experience_years || 0} Years
                </span>
              </div>

              <div className="flex justify-between items-center pb-1 text-sm">
                <span className="text-gray-500 font-semibold flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faClock} className="text-gray-400" />{" "}
                  CANDIDATE
                </span>
                <span className="text-zinc-900 font-bold">
                  {candidateExpYears} Years
                </span>
              </div>
            </div>

            {job.minimum_experience_years &&
            job.minimum_experience_years > candidateExpYears ? (
              <div className="w-full p-4 bg-rose-50 border border-rose-100/50 rounded-xl flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-rose-700 text-sm mt-0.5"
                />
                <div className="space-y-1 text-left">
                  <h4 className="text-rose-900 text-sm font-bold">
                    Gap identified:{" "}
                    {job.minimum_experience_years - candidateExpYears} years
                  </h4>
                  <p className="text-rose-800/90 text-xs font-normal leading-relaxed">
                    Kandidat saat ini memasuki level karir ini dengan
                    kualifikasi skill teknis yang baik, namun durasi masa kerja
                    formal masih kurang dari kriteria minimum industri.
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full p-4 bg-emerald-50 border border-emerald-100/50 rounded-xl flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-emerald-700 text-sm mt-0.5"
                />
                <div className="space-y-1 text-left">
                  <h4 className="text-emerald-900 text-sm font-bold">
                    Experience Cleared
                  </h4>
                  <p className="text-emerald-800/90 text-xs font-normal leading-relaxed">
                    Masa kerja formal kandidat telah memenuhi atau melampaui
                    kriteria dasar durasi yang ditetapkan untuk posisi ini.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}