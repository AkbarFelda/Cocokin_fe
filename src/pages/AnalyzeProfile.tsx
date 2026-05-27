import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faBuilding,
  faCheckCircle,
  faDownload,
  faChevronRight,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import type { AnalysisResponse } from "../types/dashboard";

export default function AnalysisResult() {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Tangkap lemparan data analisis dari halaman loading
  const stateData = location.state as { resultData: AnalysisResponse["data"] } | null;
  const analysis = stateData?.resultData?.analysis;
  // const document = stateData?.resultData?.document;

  // Proteksi jika halaman ini diakses manual tanpa bawa data
  useEffect(() => {
    if (!analysis) {
      navigate("/dashboard");
    }
  }, [analysis, navigate]);

  if (!analysis) return null;

  return (
    <div className="w-full min-h-screen bg-slate-50 font-inter pb-16">
      {/* MAIN CONTAINER CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8 flex flex-col gap-8">
        
        {/* 🟢 SECTION 1: CANDIDATE PROFILE HEADER CARD */}
        <section className="w-full p-6 md:p-8 relative bg-white rounded-2xl border border-gray-100 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-linear-to-l from-blue-700/5 to-transparent pointer-events-none"></div>
          
          <div className="space-y-3 relative z-10 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-blue-800/10 text-blue-800 text-[10px] font-bold rounded-full tracking-wide">
                CANDIDATE PROFILE
              </span>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <FontAwesomeIcon icon={faFilePdf} className="text-red-500 text-xs" />
                <span className="font-medium truncate max-w-xs">{analysis.filename}</span>
              </div>
            </div>
            
            {/* Nama kandidat dinamis dari data portofolio/user */}
            <h1 className="text-zinc-900 text-3xl md:text-4xl font-extrabold font-manrope tracking-tight">
              {}
            </h1>

            {/* Metadata detail */}
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-50 text-blue-800 rounded-lg flex justify-center items-center text-sm">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div className="text-left">
                  <span className="block text-gray-400 text-[9px] font-bold tracking-wider leading-none">TARGET INDUSTRY</span>
                  <span className="text-zinc-900 text-sm font-semibold">{analysis.industry_sector_cand}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-50 text-emerald-700 rounded-lg flex justify-center items-center text-sm">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className="text-left">
                  <span className="block text-gray-400 text-[9px] font-bold tracking-wider leading-none">VERIFICATION STATUS</span>
                  <span className="text-zinc-900 text-sm font-semibold">Analyzed via AI v2.4</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-2 group cursor-pointer">
            <FontAwesomeIcon icon={faDownload} className="text-xs group-hover:translate-y-0.5 transition-transform" />
            <span>Export Analysis</span>
          </button>
        </section>

        {/* TITLE SEPARATOR */}
        <div className="w-full flex justify-between items-baseline border-b border-gray-100 pb-2 text-left">
          <h2 className="text-zinc-900 text-2xl font-bold font-manrope tracking-tight">Job Recommendations</h2>
          <span className="text-gray-500 text-sm font-medium">{analysis.recommendations.length} opportunities found</span>
        </div>

        {/* 🟢 SECTION 2: DYNAMIC JOB RECS LIST CARDS */}
        <section className="w-full flex flex-col gap-6">
          {analysis.recommendations.map((job) => {
            const isStrongFit = job.match_score_percent >= 80;
            
            return (
              <div 
                key={job.job_id} 
                className={`w-full p-6 md:p-8 bg-white rounded-2xl border-l-4 border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col gap-6 text-left ${
                  isStrongFit ? "border-l-blue-800" : "border-l-amber-500"
                }`}
              >
                {/* Atas Card: Judul dan Fit Category */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-[10px] font-bold rounded-full tracking-wide uppercase ${
                        isStrongFit ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                      }`}>
                        {job.fit_category.replace("_", " ")}
                      </span>
                      <span className="text-gray-500 text-xs font-semibold">
                        {job.match_score_percent}% Match Score
                      </span>
                    </div>
                    <h3 className="text-zinc-900 text-xl font-bold font-manrope tracking-tight">
                      {job.job_title}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-3xl leading-relaxed">
                      Sektor Industri: <span className="font-medium text-zinc-800">{job.industry_sector_job || "Technology"}</span>. 
                      Posisi ini membutuhkan spesialisasi mendalam dengan batas pengalaman minimum sekitar {job.minimum_experience_years || 0} tahun.
                    </p>
                  </div>

                  {/* SVG Ring Progress Mini Khas Figma */}
                  <div className="relative w-16 h-16 flex items-center justify-center select-none shrink-0 self-center md:self-start">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r="26" className="stroke-gray-100" strokeWidth="4" fill="transparent" />
                      <circle 
                        cx="32" 
                        cy="32" 
                        r="26" 
                        className={`transition-all duration-300 ${isStrongFit ? "stroke-blue-800" : "stroke-amber-500"}`} 
                        strokeWidth="4" 
                        fill="transparent" 
                        strokeDasharray="163.28" 
                        strokeDashoffset={163.28 - (163.28 * job.match_score_percent) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-zinc-900 text-xs font-bold font-manrope">
                      {Math.round(job.match_score_percent)}%
                    </span>
                  </div>
                </div>

                {/* Tengah Card: Badge List Matched Skills */}
                <div className="w-full space-y-2">
                  <span className="text-gray-400 text-[10px] font-bold tracking-wider uppercase block">
                    PRIMARY MATCHED SKILLS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {job.matched_skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-2 transition hover:bg-gray-100"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full"></span>
                        <span className="text-zinc-800 text-xs font-medium">{skill}</span>
                      </div>
                    ))}
                    {job.matched_skills.length === 0 && (
                      <span className="text-gray-400 text-xs italic">Tidak ada keahlian yang cocok secara spesifik.</span>
                    )}
                  </div>
                </div>

                {/* Bawah Card: Tombol Trigger Detail Action */}
                <div className="w-full pt-2 flex justify-between items-center border-t border-gray-50">
                  {/* Bagian tag level pengalaman figma bawah */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faTools} className="text-gray-400" />
                    <span>Missing Skills: {job.missing_skills.slice(0, 3).join(", ") || "None"}</span>
                  </div>
                  
                  <button 
                  onClick={() => navigate("/dashboard/job-detail", { state: { jobData: job, candidateName: "Nadia Aulia Rahman" } })}
                  className="px-5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer">
                    <span>View Detail</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                  </button>
                </div>

              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}