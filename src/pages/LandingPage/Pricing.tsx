import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleCheck,
  faXmark,
  faChartPie,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

export default function PricingContent() {
  return (
    <div className="w-full bg-slate-50 font-inter antialiased flex flex-col">
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 flex flex-col items-center gap-16">
          <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-4 text-center">
            <div className="px-3 py-1 bg-blue-100 rounded-full inline-flex justify-center items-center">
              <div className="text-center justify-center text-gray-500 text-xs font-bold font-inter uppercase tracking-wider">
                PRICING PLANS
              </div>
            </div>
            <h1 className="text-zinc-900 text-4xl md:text-5xl font-bold font-manrope tracking-tight leading-tight">
              The architectural path to{" "}
              <span className="text-blue-800">your dream career.</span>
            </h1>
            <p className="w-full max-w-2xl text-gray-700 text-lg font-normal leading-relaxed">
              Choose the level of analysis your journey requires. From basic
              profile checks to comprehensive AI-powered career architectural
              maps.
            </p>
          </div>

          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-stretch pt-4">
            <div className="p-10 bg-white rounded-2xl flex flex-col justify-between items-start gap-8 shadow-xs border border-gray-200 text-left relative">
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-zinc-900 text-2xl font-bold font-manrope">
                    Free
                  </h3>
                  <p className="text-gray-600 text-sm font-normal">
                    Essential tools for individual curiosity.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 border-b border-gray-100 pb-6 w-full">
                  <span className="text-zinc-900 text-4xl font-extrabold font-inter">
                    Rp 0
                  </span>
                  <span className="text-gray-500 text-sm font-normal">
                    /selamanya
                  </span>
                </div>

                <ul className="flex flex-col gap-4 w-full text-sm text-zinc-900">
                  <li className="flex justify-start items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-blue-800 text-sm shrink-0"
                    />
                    <span>1x CV & Career Analysis</span>
                  </li>
                  <li className="flex justify-start items-center gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-blue-800 text-sm shrink-0"
                    />
                    <span>Basic Industry Recommendations</span>
                  </li>
                  <li className="flex justify-start items-center gap-3 opacity-40">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-gray-400 text-sm shrink-0"
                    />
                    <span className="line-through">
                      Unlimited detailed skill gap
                    </span>
                  </li>
                </ul>
              </div>

              <button className="w-full py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl transition cursor-pointer text-sm">
                Mulai Sekarang
              </button>
            </div>

            <div className="p-10 bg-white rounded-2xl flex flex-col justify-between items-start gap-8 shadow-xl shadow-blue-900/5 border-2 border-blue-800 text-left relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 px-4 py-1.5 rounded-full shadow-md">
                <span className="text-white text-[10px] font-black font-inter tracking-wide uppercase">
                  RECOMMENDED
                </span>
              </div>

              <div className="w-full flex flex-col gap-6">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-blue-800 text-2xl font-bold font-manrope">
                      Pro
                    </h3>
                    <p className="text-gray-600 text-sm font-normal">
                      Advanced architectural insights for serious professionals.
                    </p>
                  </div>
                  <div className="w-6 h-6 text-blue-700 shrink-0 text-xl">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
                </div>

                <div className="flex items-baseline gap-1 border-b border-gray-100 pb-6 w-full">
                  <span className="text-zinc-900 text-4xl font-extrabold font-inter">
                    Rp 89k
                  </span>
                  <span className="text-gray-500 text-sm font-normal">
                    /bulan
                  </span>
                </div>

                <ul className="flex flex-col gap-3 w-full text-sm text-zinc-900">
                  <li className="p-3 bg-blue-800/5 rounded-lg flex justify-start items-center gap-3 font-semibold">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-blue-800 shrink-0"
                    />
                    <span>Unlimited Analysis & CV Scanning</span>
                  </li>
                  <li className="p-3 bg-blue-800/5 rounded-lg flex justify-start items-center gap-3 font-semibold">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-blue-800 shrink-0"
                    />
                    <span>Detailed Skill Gap Visualization</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/register"
                className="w-full py-4 bg-linear-to-r from-blue-800 to-blue-700 text-center text-white font-bold rounded-xl shadow-md hover:from-blue-900 transition text-sm"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-100 border-b border-gray-200/50">
        <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-6 flex flex-col justify-between gap-6 text-left">
            <div className="flex flex-col gap-4">
              <h2 className="text-zinc-900 text-3xl font-extrabold font-manrope leading-snug">
                Compare the level of <br />
                <span className="text-blue-700">editorial precision.</span>
              </h2>
              <p className="text-gray-700 text-base font-normal leading-relaxed">
                We don't just check keywords, we analyze the architecture of
                your career path to ensure structural integrity in your
                professional growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="p-4 bg-white rounded-xl shadow-xs flex flex-col gap-1 border border-gray-200/40">
                <span className="text-gray-500 text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faChartPie}
                    className="text-blue-700"
                  />{" "}
                  DATA DEPTH
                </span>
                <p className="text-zinc-900 text-sm font-normal leading-relaxed">
                  Free includes 12 data points. Pro analyzes over 150+ market
                  variables.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-xs flex flex-col gap-1 border border-gray-200/40">
                <span className="text-gray-500 text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                  <FontAwesomeIcon icon={faFilePdf} className="text-blue-700" />{" "}
                  REPORT QUALITY
                </span>
                <p className="text-zinc-900 text-sm font-normal leading-relaxed">
                  Pro reports are exported as high-end curated PDFs ready for
                  mentors.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 min-h-80 md:min-h-full rounded-2xl relative overflow-hidden flex items-end p-8 text-left shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
              alt="Data Tech Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-900/50 to-transparent"></div>

            <div className="w-full p-6 bg-white/10 rounded-xl outline -outline-offset-1 outline-white/20 backdrop-blur-md flex flex-col gap-2 relative z-10">
              <h4 className="text-white text-xl font-bold font-manrope">
                98% Success Rate
              </h4>
              <p className="text-white/80 text-sm font-normal leading-relaxed">
                Pro users are 3x more likely to secure jobs in their
                target industry within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-6 bg-white flex flex-col justify-start items-center">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full bg-gray-100 rounded-4xl p-10 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-xs border border-gray-200/40">
            <div className="w-64 h-64 absolute -right-20 -bottom-20 bg-blue-800/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-64 h-64 absolute -left-20 -top-20 bg-blue-800/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col gap-4 relative z-10 w-full">
              <h2 className="text-zinc-900 text-2xl md:text-3xl font-bold font-manrope">
                Still have questions about our plans?
              </h2>
              <p className="text-gray-700 text-base font-normal max-w-2xl mx-auto leading-relaxed">
                Our expert advisors are ready to help you choose the right
                architectural foundation for your career.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <button className="px-8 py-3.5 bg-zinc-900 text-white font-bold text-sm rounded-lg hover:bg-zinc-800 transition cursor-pointer w-full sm:w-auto shadow-xs">
                  Talk to Advisor
                </button>
                <button className="px-8 py-3.5 border-2 border-gray-300 text-zinc-900 font-bold text-sm rounded-lg hover:bg-gray-50 transition cursor-pointer w-full sm:w-auto">
                  Read FAQs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
