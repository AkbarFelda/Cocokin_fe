import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCompass,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductLanding() {
  const navigate = useNavigate();

  const handleAction = () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      console.log("🟢 Sesi aktif dideteksi, bypass langsung ke dashboard...");
      navigate("/dashboard");
    } else {
      console.log("🔴 Sesi kosong, mengalihkan kandidat ke gerbang registrasi...");
      navigate("/register");
    }
  };

  return (
    <div className="font-inter text-gray-900 bg-white antialiased">
      {/* HERO SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-6 md:w-1/2">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-center">
                <span className="text-zinc-900 text-5xl md:text-7xl font-bold font-manrope leading-tight md:leading-18">
                  The Blueprints of
                  <br />
                </span>
                <span className="text-blue-800 text-5xl md:text-7xl font-bold font-manrope leading-tight">
                  Professional
                  <br />
                  Evolution
                </span>
              </div>
            </div>

            <div className="w-full max-w-2xl pt-2 flex flex-col justify-start items-start">
              <div className="justify-center text-gray-700 text-xl font-normal font-inter leading-7">
                Cocokin reconstructs career planning through an architectural
                lens. We don't just find jobs, we design the structural
                integrity of your professional future.
              </div>
            </div>

            <div className="self-stretch pt-4 inline-flex justify-start items-start gap-4">
              <button
                onClick={handleAction}
                className="px-8 py-4 bg-linear-to-r from-blue-800 to-blue-700 rounded-2xl inline-flex flex-col justify-center items-center cursor-pointer hover:opacity-90 transition text-white text-lg font-bold font-inter leading-7 select-none border-none outline-none"
              >
                Start Your Blueprint
              </button>
              <a
                href="#methodology"
                className="px-8 py-4 bg-gray-100 rounded-2xl inline-flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 transition text-gray-700 text-lg font-bold font-inter leading-7 select-none"
              >
                View Methodology
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end relative w-full">
            <div className="absolute -left-4 -top-6 w-64 h-64 rounded-xl border border-gray-500/10 pointer-events-none hidden md:block"></div>
            <div className="absolute -right-4 -bottom-6 w-48 h-48 border-l-2 border-b-2 border-blue-800/10 pointer-events-none hidden md:block"></div>

            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100/50 flex flex-col gap-6 relative z-10">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">
                    STRUCTURAL STRENGTH
                  </span>
                  <h3 className="text-blue-800 text-3xl font-bold font-manrope">
                    84% Match
                  </h3>
                </div>
                <div className="w-24 h-12 p-1 bg-gray-100 flex items-end gap-1.5 rounded-md">
                  <div className="flex-1 h-5 bg-blue-600 rounded-xs"></div>
                  <div className="flex-1 h-8 bg-blue-600 rounded-xs"></div>
                  <div className="flex-1 h-12 bg-blue-800 rounded-xs"></div>
                  <div className="flex-1 h-7 bg-blue-600 rounded-xs"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-full h-2 bg-gray-100 rounded-xl overflow-hidden">
                  <div className="w-[84%] h-full bg-blue-800 rounded-xl"></div>
                </div>
                <p className="text-gray-600 text-sm font-normal italic leading-relaxed text-left">
                  "Foundational alignment identified in Leadership and Systems
                  Architecture."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section
        id="methodology"
        className="w-full py-24 bg-gray-100 flex flex-col justify-start items-start"
      >
        <div className="container mx-auto px-6 flex flex-col justify-start items-start gap-16">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-zinc-900 text-4xl font-extrabold font-manrope leading-10">
                Precision Instrumentation
              </div>
            </div>
            <div className="w-full max-w-xl flex flex-col justify-start items-center">
              <div className="text-center justify-center text-gray-700 text-base font-normal font-inter leading-6">
                Our analytical tools are engineered for surgical precision in
                career mapping.
              </div>
            </div>
          </div>

          <div className="w-full grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-2xl flex flex-col justify-between items-start gap-6 shadow-xs border border-gray-50 text-left">
              <div className="flex flex-col gap-4 w-full">
                <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <h3 className="text-zinc-900 text-xl font-bold font-manrope leading-7">
                  AI Career Matchmaker
                </h3>
                <p className="text-gray-700 text-base font-normal font-inter leading-6">
                  Beyond keyword matching. Our neural engine analyzes the
                  geometric alignment between your behavioral DNA and
                  organizational culture.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center w-full mt-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-11 h-11 rounded-lg border-2 border-blue-800 flex items-center justify-center text-blue-800 font-bold text-xs">
                    9.8
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold tracking-wider">
                    STABILITY
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-11 h-11 rounded-lg border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-xs">
                    8.4
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold tracking-wider">
                    GROWTH
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-11 h-11 rounded-lg border-2 border-slate-400 flex items-center justify-center text-slate-600 font-bold text-xs">
                    7.2
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold tracking-wider">
                    IMPACT
                  </span>
                </div>
              </div>
            </div>

            <div className="p-10 bg-blue-800 text-white rounded-2xl flex flex-col justify-between items-start gap-6 shadow-md text-left">
              <div className="flex flex-col gap-4 w-full">
                <div className="w-14 h-14 bg-white/10 text-white rounded-lg flex items-center justify-center text-xl backdrop-blur-md">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className="text-white text-xl font-bold font-manrope leading-7">
                  Deep Skill Gap Analysis
                </h3>
                <p className="text-indigo-100 text-base font-normal font-inter leading-6">
                  We identify the load-bearing skills missing from your
                  portfolio. Our analysis assesses the technical and cognitive
                  "stress points" of your career.
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full mt-2">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-indigo-100">
                    <span>Strategic Thinking</span>
                    <span className="font-mono font-bold">82%</span>
                  </div>
                  <div className="w-full h-1 relative bg-white/20 rounded-xl">
                    <div className="w-[82%] h-full bg-white rounded-xl"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-indigo-100">
                    <span>Risk Assessment</span>
                    <span className="font-mono font-bold">45%</span>
                  </div>
                  <div className="w-full h-1 relative bg-white/20 rounded-xl">
                    <div className="w-[45%] h-full bg-white rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-zinc-200 rounded-2xl flex flex-col justify-between items-start gap-6 shadow-xs text-left">
              <div className="flex flex-col gap-4 w-full">
                <div className="w-14 h-14 bg-blue-800 text-white rounded-lg flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faCompass} />
                </div>
                <h3 className="text-zinc-900 text-xl font-bold font-manrope leading-7">
                  Actionable Roadmap
                </h3>
                <p className="text-gray-700 text-base font-normal font-inter leading-6">
                  A step-by-step construction plan. We provide the architectural
                  milestones to get there safely and efficiently.
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full mt-2">
                <div className="p-3 bg-white rounded-xl flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-blue-800 text-white font-mono text-[10px] flex items-center justify-center font-bold">
                    01
                  </span>
                  <span className="text-zinc-900 text-xs font-semibold">
                    Foundation Strengthening
                  </span>
                </div>
                <div className="p-3 opacity-60 bg-white/50 rounded-xl flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-gray-500 text-white font-mono text-[10px] flex items-center justify-center font-bold">
                    02
                  </span>
                  <span className="text-zinc-700 text-xs font-semibold">
                    Vertical Expansion
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-64 md:h-80 rounded-3xl relative overflow-hidden flex items-end p-8 md:p-10 text-left shadow-xs border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Architecture Infrastructure"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-900/40 to-transparent"></div>
            <div className="relative z-10 flex flex-col gap-1 max-w-xl">
              <span className="text-white text-xs font-bold tracking-wider uppercase">
                BUILD SUSTAINABLY
              </span>
              <h4 className="text-white text-2xl md:text-3xl font-bold font-manrope leading-snug">
                Your career is your most significant infrastructure project.
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="w-full py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-blue-800 text-4xl md:text-5xl font-extrabold font-manrope">
              12k+
            </h2>
            <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">
              CAREER AUDITS
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-blue-800 text-4xl md:text-5xl font-extrabold font-manrope">
              94%
            </h2>
            <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">
              SUCCESS RATE
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-blue-800 text-4xl md:text-5xl font-extrabold font-manrope">
              500+
            </h2>
            <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">
              PARTNER FIRMS
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-blue-800 text-4xl md:text-5xl font-extrabold font-manrope">
              24/7
            </h2>
            <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">
              NEURAL SUPPORT
            </span>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA CARD SECTION */}
      <section className="w-full py-24 px-6 bg-white flex flex-col justify-start items-center overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full bg-blue-600 rounded-[40px] px-6 py-16 md:py-20 flex flex-col justify-center items-center text-center shadow-xl shadow-blue-900/10 border border-blue-500/20">
            <h2 className="font-manrope text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-2xl leading-tight">
              Ready to begin your next construction?
            </h2>
            <p className="font-inter text-blue-100 text-sm md:text-base font-normal max-w-xl leading-relaxed mb-10 opacity-90">
              Join the elite network of professionals who treat their careers
              with the same rigor as an architectural masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <button
                onClick={handleAction}
                className="font-inter bg-white text-blue-800 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-sm w-full sm:w-auto text-sm tracking-wide text-center cursor-pointer border-none outline-none"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}