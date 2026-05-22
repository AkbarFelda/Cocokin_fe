import { graphImage, meetingPhoto, user1, user2 } from "../../assets/images";
import { icon1, icon2, icon3, akurasiIcon, falseIcon, trueIcon, infoIcon } from "../../assets/icons";

export default function Landing() {
  return (
    <div className="font-inter text-gray-900 bg-white antialiased">
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-6 md:w-1/2">
            <div className="px-3 py-1 bg-blue-100 rounded-full inline-flex justify-start items-center">
              <div className="justify-center text-gray-500 text-xs font-semibold font-inter leading-4 tracking-wide">
                AI-POWERED CAREER ANALYSIS
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center">
                <span className="text-zinc-900 text-5xl md:text-7xl font-extrabold font-manrope leading-tight md:leading-18">
                  Tau kamu cocoknya
                  <br />
                  jadi apa dari{" "}
                </span>
                <span className="text-blue-800 text-5xl md:text-7xl font-extrabold font-manrope leading-tight">
                  skill &<br />
                  project nyata
                </span>
              </div>
            </div>
            <div className="w-full max-w-2xl pt-2 flex flex-col justify-start items-start">
              <div className="justify-center text-gray-700 text-xl font-normal font-inter leading-7">
                Cocokin menganalisis CV dan portfolio kamu untuk memberikan
                <br className="hidden md:inline" />
                rekomendasi karir yang akurat, lengkap dengan alasan dan gap
                yang
                <br className="hidden md:inline" />
                harus diperbaiki.
              </div>
            </div>
            <div className="self-stretch pt-4 inline-flex justify-start items-start gap-4">
              <div className="px-8 py-4 bg-linear-86 from-blue-800 to-blue-700 rounded-2xl inline-flex flex-col justify-center items-center cursor-pointer hover:opacity-90 transition">
                <div className="text-center justify-center text-white text-lg font-bold font-inter leading-7">
                  Analyze My Profile
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-100 rounded-2xl inline-flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 transition">
                <div className="text-center justify-center text-gray-700 text-lg font-bold font-inter leading-7">
                  Lihat Cara Kerja
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img
              src={graphImage}
              alt="Data Graph"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Bagian Bagaimana Cocokin Membantumu */}
      <section className="w-full py-24 bg-gray-100 flex flex-col justify-start items-start">
        <div className="container mx-auto px-6 flex flex-col justify-start items-start gap-16">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-zinc-900 text-4xl font-extrabold font-manrope leading-10">
                Bagaimana Cocokin Membantumu
              </div>
            </div>
            <div className="w-full max-w-xl flex flex-col justify-start items-center">
              <div className="text-center justify-center text-gray-700 text-base font-normal font-inter leading-6">
                Proses analisis yang mendalam namun instan untuk menentukan masa
                <br className="hidden md:inline" />
                depan karirmu.
              </div>
            </div>
          </div>

          <div className="w-full grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-2xl flex flex-col justify-start items-start gap-4 shadow-xs border border-gray-50">
              <div className="size-14 bg-blue-700 rounded-lg inline-flex justify-center items-center">
                <img src={icon1} alt="Icon 1" className="w-5 h-6" />
              </div>
              <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-zinc-900 text-xl font-bold font-manrope leading-7">
                  1. Upload
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6">
                  Unggah CV, LinkedIn PDF, atau link portfolio proyek yang
                  pernah kamu kerjakan.
                </div>
              </div>
            </div>

            <div className="p-10 bg-white rounded-2xl flex flex-col justify-start items-start gap-4 shadow-xs border border-gray-50">
              <div className="size-14 bg-blue-700 rounded-lg inline-flex justify-center items-center">
                <img src={icon2} alt="Icon 2" className="w-6 h-6" />
              </div>
              <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-zinc-900 text-xl font-bold font-manrope leading-7">
                  2. Analyze
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6">
                  AI kami mengekstraksi technical skill, soft skill, dan pola
                  keberhasilan dari pengalaman nyatamu.
                </div>
              </div>
            </div>

            <div className="p-10 bg-white rounded-2xl flex flex-col justify-start items-start gap-4 shadow-xs border border-gray-50">
              <div className="size-14 bg-blue-700 rounded-lg inline-flex justify-center items-center">
                <img src={icon3} alt="Icon 3" className="w-7 h-5" />
              </div>
              <div className="self-stretch pt-4 flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-zinc-900 text-xl font-bold font-manrope leading-7">
                  3. Insight
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-gray-700 text-base font-normal font-inter leading-6">
                  Dapatkan laporan lengkap tentang role yang paling cocok,
                  potensi gaji, dan daftar skill yang perlu dipelajari.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 p-0 bg-white flex flex-col justify-start items-start overflow-hidden">
        <div className="container px-6 max-w-8xl">
          <div className="w-full grid md:grid-cols-12 gap-8 items-stretch">
            <div className="relative min-h-100 md:min-h-140 md:col-span-8 rounded-3xl overflow-hidden shadow-xs border border-gray-100">
              <img
                src={meetingPhoto}
                alt="Meeting"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="w-full max-w-xs p-6 left-6 top-6 md:left-8 md:top-8 absolute bg-white/90 rounded-2xl backdrop-blur-md shadow-lg border border-white/40 flex flex-col justify-start items-start gap-2 z-10">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-blue-800 text-xs font-bold font-inter uppercase tracking-wider">
                    DEEP ANALYSIS
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-900 text-xl font-bold font-manrope leading-7">
                    Visualisasi Karir Terpadu
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center text-gray-600 text-sm font-normal font-inter leading-relaxed">
                    Lihat bagaimana proyek masa lalumu memprediksi kesuksesan masa depanmu.
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="w-full p-8 relative bg-blue-800 rounded-3xl shadow-xs flex flex-col justify-end items-start min-h-65 flex-1 overflow-hidden">
                <div className="absolute right-8 top-8 w-10 h-10 opacity-30 flex justify-center items-center">
                  <img src={akurasiIcon} alt="Akurasi Icon" className="w-full h-full object-contain" />
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-2 mt-auto">
                  <h3 className="text-white text-3xl font-bold font-manrope leading-8">
                    98% Akurasi
                  </h3>
                  <p className="text-indigo-100 text-sm font-normal font-inter leading-6 max-w-sm">
                    Algoritma kami telah dilatih dengan jutaan data karir profesional global.
                  </p>
                </div>
              </div>

              <div className="w-full p-8 bg-white rounded-3xl border border-gray-100 shadow-md flex flex-col justify-end items-start min-h-65 flex-1 gap-4">
                <div className="flex items-center -space-x-3 overflow-hidden">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src={user1} alt="User 1" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src={user2} alt="User 2" />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-2 ring-white">
                    <span className="text-[10px] font-bold font-inter text-blue-800">+12k</span>
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <h3 className="text-zinc-900 text-xl font-bold font-manrope leading-7">
                    Trusted by Professionals
                  </h3>
                  <p className="text-gray-600 text-sm font-normal font-inter leading-relaxed">
                    Telah digunakan oleh ribuan talenta untuk transisi karir yang lebih mulus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-8 bg-gray-100 flex flex-col justify-start items-start">
        <div className="container mx-auto max-w-7xl flex flex-col justify-start items-start gap-16">
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-center justify-center text-zinc-900 text-4xl font-extrabold font-manrope leading-10">
              Kenapa Pilih Cocokin?
            </h2>
          </div>

          <div className="w-full overflow-x-auto rounded-3xl shadow-sm border border-gray-200/50">
            <table className="min-w-200 w-full table-layout-fixed bg-white border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-[25%] p-8 text-left text-zinc-900 text-base font-extrabold font-inter">
                    Fitur Analisis
                  </th>
                  <th className="w-[20%] p-8 text-left text-blue-800 text-base font-extrabold font-inter">
                    Cocokin AI
                  </th>
                  <th className="w-[20%] p-8 text-left text-zinc-900 text-base font-medium font-inter">
                    Job Platforms
                  </th>
                  <th className="w-[23%] p-8 text-left text-zinc-900 text-base font-medium font-inter">
                    Career Tests
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="pl-10 pr-8 py-8 text-zinc-900 text-base font-semibold font-inter">
                    Analisis Project Nyata
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={trueIcon} alt="True Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={falseIcon} alt="False Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={falseIcon} alt="False Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="pl-10 pr-8 py-8 text-zinc-900 text-base font-semibold font-inter">
                    Rekomendasi Skill Gap
                  </td>
                  <td className="pl-14 pr-8 py-8">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={trueIcon} alt="True Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14 pr-8 py-8">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={trueIcon} alt="True Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14 pr-8 py-8">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={trueIcon} alt="True Icon" className="w-full h-full object-contain brightness-0 opacity-70" />
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="pl-10 pr-8 py-8 text-zinc-900 text-base font-semibold font-inter">
                    Prediksi Market Fit
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={trueIcon} alt="True Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={infoIcon} alt="Info Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={falseIcon} alt="False Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="pl-10 pr-8 py-8 text-zinc-900 text-base font-semibold font-inter">
                    Alasan Logis (Reasoning)
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={trueIcon} alt="True Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={falseIcon} alt="False Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                  <td className="pl-14">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold">
                      <img src={falseIcon} alt="False Icon" className="w-full h-full object-contain" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-8 bg-gray-50 flex flex-col justify-start items-center overflow-hidden">
        <div className="container mx-auto max-w-304">
          
          <div className="w-full bg-blue-600 rounded-[40px] px-6 py-16 md:py-20 flex flex-col justify-center items-center text-center shadow-xl shadow-blue-900/10 border border-blue-500/20">
            <h2 className="font-manrope text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-2xl leading-tight">
              Siap Temukan Karir Idamanmu?
            </h2>
            <p className="font-inter text-blue-100 text-sm md:text-base font-normal max-w-xl leading-relaxed mb-10 opacity-90">
              Jangan biarkan potensimu terbuang di tempat yang salah. Mulai analisis sekarang secara gratis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <button className="font-inter bg-white text-blue-800 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-sm w-full sm:w-auto text-sm tracking-wide cursor-pointer">
                Analyze My Profile
              </button>
              <button className="font-inter border border-white/30 bg-blue-700/20 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 w-full sm:w-auto text-sm tracking-wide cursor-pointer">
                Hubungi Ahli Karir
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}