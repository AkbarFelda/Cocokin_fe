import React from "react";
import graphImage from "@/assets/images/graph-image.png";
import meetingPhoto from "@/assets/images/Background-cocokin.png";

const Landing: React.FC = () => {
  return (
    <div className="font-sans">
      <section className="bg-gray-50 py-15">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <span className="rounded-2xl bg-blue-200 text-gray-700 text-sm uppercase items-start mb-2 px-3 py-1 inline-block">
              AI-Powered Career Analysis
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tau kamu cocoknya jadi apa dari <span className="text-blue-600">skill & project nyata</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Cocokin menganalisis CV dan portfolio kamu untuk memberikan rekomendasi karir yang akurat, lengkap dengan alasan dan gap yang harus diperbaiki.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Analyze My Profile
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
                Lihat Cara Kerja
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img src={graphImage} alt="Data Graph"/>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Bagaimana Cocokin Membantumu</h2>
          <p className="text-gray-600 mb-12">Proses analisis yang mendalam namun instan untuk menentukan masa depan karirmu.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <div className="text-blue-600 mb-4 text-2xl">1</div>
              <h3 className="font-semibold mb-2">Upload</h3>
              <p>Unggah CV, LinkedIn PDF, atau link portfolio project yang pernah kamu kerjakan.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <div className="text-blue-600 mb-4 text-2xl">2</div>
              <h3 className="font-semibold mb-2">Analyze</h3>
              <p>AI kami mengekstraksi technical skill, soft skill, dan pola keberhasilan dari pengalaman nyatamu.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <div className="text-blue-600 mb-4 text-2xl">3</div>
              <h3 className="font-semibold mb-2">Insight</h3>
              <p>Dapatkan laporan lengkap tentang role yang paling cocok, potensi gaji, dan daftar skill yang perlu dipelajari.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Deep Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <img src={meetingPhoto} alt="Meeting" className="rounded-lg shadow-lg" />
          <div className="space-y-6">
            <div className="bg-blue-600 text-white p-6 rounded">
              <h3 className="text-xl font-semibold">98% Akurasi</h3>
              <p>Algoritma kami telah dilatih dengan jutaan data karir profesional global.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold">Trusted by Professionals</h3>
              <p>Telah digunakan oleh ribuan talenta untuk transisi karir yang lebih mulus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Kenapa Pilih Cocokin?</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left">Fitur Analisis</th>
                  <th className="py-3 px-6 text-left">Cocokin AI</th>
                  <th className="py-3 px-6 text-left">Job Platforms</th>
                  <th className="py-3 px-6 text-left">Career Tests</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-6">Analisis Project Nyata</td>
                  <td className="py-3 px-6 text-center">✔️</td>
                  <td className="py-3 px-6 text-center">❌</td>
                  <td className="py-3 px-6 text-center">❌</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-6">Rekomendasi Skill Gap</td>
                  <td className="py-3 px-6 text-center">✔️</td>
                  <td className="py-3 px-6 text-center">❌</td>
                  <td className="py-3 px-6 text-center">✔️</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-6">Prediksi Market Fit</td>
                  <td className="py-3 px-6 text-center">✔️</td>
                  <td className="py-3 px-6 text-center">ℹ️</td>
                  <td className="py-3 px-6 text-center">❌</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-6">Alasan Logis (Reasoning)</td>
                  <td className="py-3 px-6 text-center">✔️</td>
                  <td className="py-3 px-6 text-center">❌</td>
                  <td className="py-3 px-6 text-center">❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Siap Temukan Karir Idamanmu?</h2>
        <p className="mb-6">Jangan biarkan potensimu terbuang di tempat yang salah. Mulai analisis sekarang secara gratis.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 transition">
            Analyze My Profile
          </button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition">
            Hubungi Ahli Karir
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;