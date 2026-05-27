import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faDownload,
  faBookOpen,
  faPodcast,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ResourcesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-slate-50 font-inter antialiased flex flex-col">
      <section className="bg-white pt-24 pb-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="w-full max-w-2xl flex flex-col justify-start items-start gap-4 text-left">
              <div className="px-3 py-1 bg-blue-100 rounded-full inline-flex justify-start items-center">
                <div className="text-center justify-center text-gray-500 text-xs font-bold font-inter uppercase tracking-wider">
                  KNOWLEDGE HUB
                </div>
              </div>
              <h1 className="text-zinc-900 text-5xl font-bold font-manrope tracking-tight leading-tight">
                Architectural Insights & <br />
                <span className="text-blue-800">Career Guides</span>
              </h1>
              <p className="w-full max-w-xl text-gray-700 text-lg font-normal leading-relaxed">
                Navigate the evolving landscape of career progression with
                curated articles, data-driven guides, and expert perspectives.
              </p>
            </div>

            <div className="w-full md:w-80 relative flex items-center">
              <div className="absolute left-4 text-gray-400 text-base pointer-events-none flex items-center justify-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="Search career guides..."
                className="w-full pl-11 pr-4 py-4 bg-zinc-200 text-base font-normal font-inter text-zinc-800 placeholder:text-gray-500 rounded-xl border-none outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-zinc-100/50 transition duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 h-100 md:h-125 rounded-2xl relative overflow-hidden flex items-end p-8 md:p-12 text-left shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
              alt="Strategy Featured"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900/60 to-transparent"></div>

            <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
              <div className="px-3 py-1 bg-blue-800 text-white text-xs font-bold font-inter rounded-xl inline-block w-fit tracking-wide">
                STRATEGY
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold font-manrope leading-tight">
                How to optimize your portfolio for executive roles
              </h2>
              <p className="text-white/80 text-base md:text-lg font-normal leading-relaxed">
                Move beyond technical expertise and showcase the architectural
                value of your career impact.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="w-full p-6 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-4 text-left hover:shadow-md transition">
              <div className="w-full h-40 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
                  alt="Market Trends"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-blue-800 text-xs font-semibold uppercase tracking-wider">
                  MARKET TRENDS
                </span>
                <h3 className="text-zinc-900 text-xl font-bold font-manrope leading-snug">
                  Understanding market trends in tech architectural roles
                </h3>
              </div>
            </div>

            <div className="w-full p-6 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-4 text-left hover:shadow-md transition">
              <div className="w-full h-40 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
                  alt="Mentorship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-blue-800 text-xs font-semibold uppercase tracking-wider">
                  MENTORSHIP
                </span>
                <h3 className="text-zinc-900 text-xl font-bold font-manrope leading-snug">
                  The non-linear path: Leveraging unconventional experience
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col gap-12">
          <div className="w-full flex justify-between items-center text-left">
            <h2 className="text-zinc-900 text-3xl font-bold font-manrope">
              Recent Analysis
            </h2>
            <Link
              to="#"
              className="flex items-center gap-2 text-blue-800 hover:underline font-semibold text-base transition"
            >
              View all resources{" "}
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
            <div className="p-8 bg-white rounded-2xl flex flex-col justify-between gap-6 shadow-xs border border-gray-50 text-left">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <h3 className="text-zinc-900 text-xl font-bold font-inter leading-snug">
                  Salary Benchmark Report 2026
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-normal leading-relaxed">
                  A deep dive into compensations across the architectural
                  software sector.
                </p>
              </div>
              <button className="text-blue-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:underline transition mt-2 cursor-pointer w-fit">
                DOWNLOAD REPORT
              </button>
            </div>

            <div className="p-8 bg-white rounded-2xl flex flex-col justify-between gap-6 shadow-xs border border-gray-50 text-left">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <h3 className="text-zinc-900 text-xl font-bold font-inter leading-snug">
                  The Resume Narrative Guide
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-normal leading-relaxed">
                  Crafting a story that connects your past achievements to
                  future visions.
                </p>
              </div>
              <button className="text-blue-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:underline transition mt-2 cursor-pointer w-fit">
                READ GUIDE
              </button>
            </div>

            <div className="p-8 bg-white rounded-2xl flex flex-col justify-between gap-6 shadow-xs border border-gray-50 text-left">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faPodcast} />
                </div>
                <h3 className="text-zinc-900 text-xl font-bold font-inter leading-snug">
                  Soft Skills in Hard Architecture
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-normal leading-relaxed">
                  Why emotional intelligence is the hidden engine of technical
                  leadership.
                </p>
              </div>
              <button className="text-blue-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:underline transition mt-2 cursor-pointer w-fit">
                LISTEN TO PODCAST
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col gap-16">
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-center text-zinc-900 text-4xl font-extrabold font-manrope tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="w-full flex flex-col gap-4 text-left">
            <div className="border border-gray-200 rounded-xl overflow-hidden transition duration-300">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full p-6 bg-slate-50 hover:bg-slate-100/70 flex justify-between items-center gap-4 text-left font-manrope text-zinc-900 text-lg font-bold cursor-pointer transition"
              >
                <span>How often is the career data updated?</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-gray-500 text-sm transition-transform duration-300 ${openFaq === 0 ? "transform rotate-180" : ""}`}
                />
              </button>
              {openFaq === 0 && (
                <div className="p-6 bg-white border-t border-gray-100 text-gray-700 text-base leading-relaxed animate-fade-in">
                  Our neural data engines pull, calibrate, and filter career
                  data indexes in real-time daily, ensuring all target market
                  projections and salary stresses match current 2026 conditions.
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden transition duration-300">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full p-6 bg-slate-50 hover:bg-slate-100/70 flex justify-between items-center gap-4 text-left font-manrope text-zinc-900 text-lg font-bold cursor-pointer transition"
              >
                <span>Can I request a specific career analysis?</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-gray-500 text-sm transition-transform duration-300 ${openFaq === 1 ? "transform rotate-180" : ""}`}
                />
              </button>
              {openFaq === 1 && (
                <div className="p-6 bg-white border-t border-gray-100 text-gray-700 text-base leading-relaxed animate-fade-in">
                  Yes! Pro plan unlocks unlimited CV analysis and allows users
                  to simulate different career paths by selecting target roles.
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden transition duration-300">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full p-6 bg-slate-50 hover:bg-slate-100/70 flex justify-between items-center gap-4 text-left font-manrope text-zinc-900 text-lg font-bold cursor-pointer transition"
              >
                <span>
                  What makes your insights different from standard recruiters?
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-gray-500 text-sm transition-transform duration-300 ${openFaq === 2 ? "transform rotate-180" : ""}`}
                />
              </button>
              {openFaq === 2 && (
                <div className="p-6 bg-white border-t border-gray-100 text-gray-700 text-base leading-relaxed animate-fade-in">
                  We focus on structured, data-driven analysis of real skill
                  signals to help individuals understand their career fit more
                  objectively than traditional screening methods.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
