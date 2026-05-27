import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔑 Harus pakai ini untuk pindah page utuh
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faBriefcase,
  faCheckCircle,
  faFileAlt,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { AI } from "../assets/icons";

export default function DashboardOverview() {
  const navigate = useNavigate(); 
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [targetRole, setTargetRole] = useState("");
  const handleDragOver = (e: React.DragEvent) => e.preventDefault();
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      if (file.size <= 5 * 1024 * 1024) setCvFile(file);
      else alert("Ukuran file melebihi 5MB weh!");
    } else {
      alert("Format berkas wajib PDF!");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) setCvFile(file);
  };

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      alert("Harap unggah berkas CV Anda terlebih dahulu weh!");
      return;
    }
    console.log("Memicu perpindahan halaman ke /dashboard/loading membawa berkas:", cvFile.name);
    navigate("/dashboard/loading", {
      state: {
        file: cvFile,
        role: targetRole,
      },
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 flex flex-col justify-start items-center gap-12 font-inter">
      <div className="w-full flex flex-col justify-start items-center gap-4 text-center">
        <h1 className="w-full text-zinc-900 text-4xl md:text-5xl font-bold font-manrope tracking-tight leading-tight md:leading-14">
          Tingkatkan Karir Anda dengan <span className="text-blue-800">Analisis AI</span>
        </h1>
        <p className="max-w-2xl text-gray-600 text-base md:text-lg font-normal leading-relaxed">
          Unggah CV Anda dan tautkan portofolio untuk mendapatkan wawasan mendalam tentang potensi karir, celah keahlian, dan rekomendasi industri.
        </p>
      </div>
      <form
        onSubmit={handleStartAnalysis}
        className="w-full p-8 md:p-12 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-10"
      >
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="w-full h-64 bg-slate-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col justify-center items-center p-6 text-center transition group hover:border-blue-800 hover:bg-blue-50/20"
        >
          <div className="flex flex-col justify-start items-center gap-2">
            <div className="w-14 h-14 bg-indigo-50 text-blue-800 rounded-full flex justify-center items-center shadow-xs transition group-hover:scale-105">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="text-xl" />
            </div>
            <h3 className="text-zinc-900 text-lg font-bold font-manrope mt-2">
              {cvFile ? cvFile.name : "Tarik & Lepas CV Anda di Sini"}
            </h3>
            <p className="text-gray-500 text-xs font-normal">
              {cvFile ? `(${(cvFile.size / 1024 / 1024).toFixed(2)} MB)` : "Mendukung format PDF (Maks. 5MB)"}
            </p>
            <label className="mt-4 px-5 py-2 bg-white text-blue-800 text-xs font-bold rounded-xl border border-indigo-100 shadow-xs hover:bg-slate-50 transition cursor-pointer select-none">
              <span>Pilih File</span>
              <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        </div>
        <div className="w-full gap-6 text-left">
          <div className="w-full flex flex-col gap-2">
            <label className="text-gray-700 text-sm font-semibold tracking-tight">Target Peran (Opsional)</label>
            <div className="w-full relative">
              <input
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="Contoh: Senior Product Designer"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:bg-white focus:outline-blue-800 rounded-xl text-sm font-normal transition"
              />
              <FontAwesomeIcon icon={faBriefcase} className="absolute left-4 top-4 text-gray-400 text-sm" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <button
            type="submit"
            disabled={!cvFile}
            className="min-w-xs md:w-72 px-8 py-4 bg-linear-86 from-blue-800 to-blue-700 text-white text-base font-extrabold font-manrope rounded-xl shadow-md shadow-blue-800/20 hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2.5 select-none"
          >
            <span>Mulai Analisis</span>
            <img src={AI} alt="AI Icon" />
          </button>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-normal">
            <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 text-xs" />
            <span>Privasi Anda terjaga. Data dienkripsi dan diproses secara aman.</span>
          </div>
        </div>
      </form>

      <section className="w-full pt-4 flex flex-col gap-8 text-left">
        <h2 className="w-full text-zinc-900 text-2xl font-bold font-manrope text-center">Apa yang Akan Anda Dapatkan?</h2>
        <div className="w-full flex flex-wrap gap-6 items-center justify-center">
          <div className="w-full md:w-[calc(33.333%-16px)] max-w-sm p-6 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex justify-center items-center shadow-xs"><FontAwesomeIcon icon={faFileAlt} className="text-base" /></div>
            <div className="space-y-1.5">
              <h3 className="text-zinc-900 text-base font-bold font-manrope">CV Analysis</h3>
              <p className="text-gray-600 text-sm font-normal leading-relaxed">Identifikasi kekuatan dan kelemahan dalam narasi karir Anda secara komparatif.</p>
            </div>
          </div>
          <div className="w-full md:w-[calc(33.333%-16px)] max-w-sm p-6 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex justify-center items-center shadow-xs"><FontAwesomeIcon icon={faExclamationTriangle} className="text-base" /></div>
            <div className="space-y-1.5">
              <h3 className="text-zinc-900 text-base font-bold font-manrope">Skill Gap Analysis</h3>
              <p className="text-gray-600 text-sm font-normal leading-relaxed">Ketahui keahlian dan sertifikasi kompetensi apa yang perlu ditingkatkan untuk peran impian Anda.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}