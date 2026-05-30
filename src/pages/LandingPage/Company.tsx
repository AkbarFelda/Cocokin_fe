import { faBullseye, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import MissionCard from "../../components/LandingPage/MissionCard";
import { teamMembers } from "../../data/teamData";
import { JangkaIcon } from "../../assets/icons";

export default function Company() {
  return (
    <div className="w-full bg-slate-50 font-inter text-gray-900 antialiased flex flex-col">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 max-w-8xl">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6 text-left">
            <div className="px-3 py-1 bg-blue-100 rounded-full inline-flex justify-start items-center">
              <div className="justify-center text-gray-500 text-xs font-semibold font-inter leading-4 tracking-wide">
                OUR VISION
              </div>
            </div>

            <h1 className="text-zinc-900 text-5xl md:text-7xl font-bold font-manrope tracking-tight leading-none">
              Architecting the <br />
              <span className="text-blue-800">future of work</span> <br />
              through data.
            </h1>

            <p className="max-w-xl text-gray-700 text-lg md:text-xl font-normal leading-relaxed">
              At Cocokin, we believe career trajectories shouldn't be left to
              chance. We are building the analytical infrastructure that
              empowers professionals to navigate the modern economy with
              architectural precision.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-100 md:min-h-120">
            <div className="w-full h-96 md:h-110 rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                alt="Office Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>

            <div className="w-full max-w-xs p-6 absolute -bottom-6 left-6 md:-left-6 bg-white rounded-2xl shadow-xl border border-gray-200/40 flex flex-col justify-start items-start gap-3 z-10 text-left">
              <div className="w-4 h-7 rounded-xs">
                <img
                  src={JangkaIcon}
                  alt="Jangka Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-zinc-900 text-lg font-bold font-manrope">
                Structure & Clarity
              </h3>
              <p className="text-gray-700 text-sm font-normal leading-relaxed">
                We turn unstructured career data into clear, structured
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-white border-t border-b border-gray-200/40">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-8xl">
          <MissionCard
            icon={faBullseye}
            title="The Mission"
            description="To make career insights more accessible and help individuals understand their skills and possible career paths through data-driven analysis."
          />
          <MissionCard
            icon={faScaleBalanced}
            title="Data Integrity"
            description="Our insights are built on structured analysis of real-world career signals, helping users make informed and transparent decisions about their career paths."
            isPrimary
          />
        </div>
      </section>

      <section className="w-full py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-8xl">
          <div className="lg:col-span-5 flex flex-col justify-start items-start gap-6 text-left border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 lg:pr-8">
            <h2 className="text-zinc-900 text-4xl font-bold font-manrope">
              Our Story
            </h2>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest font-inter">
              ESTABLISHED 2026
            </span>
            <div className="w-12 h-1 bg-blue-800 mt-2"></div>
            <blockquote className="text-zinc-900 text-xl font-normal italic leading-relaxed pt-2">
              "We help individuals understand their skills and turn them into
              clear career direction"
            </blockquote>
            <span className="text-zinc-900 text-sm font-semibold tracking-wide">
              — The Founding Vision
            </span>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-900 text-xl font-semibold font-manrope">
                  A Need for Clarity
                </h3>
                <p className="text-gray-700 text-base font-normal leading-relaxed">
                  Cocokin was built in response to a rapidly changing global job
                  market. While career paths are becoming less linear, many
                  individuals especially in emerging markets still lack clear,
                  data-driven guidance to navigate their next steps.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-900 text-xl font-semibold font-manrope">
                  Data as a Foundation
                </h3>
                <p className="text-gray-700 text-base font-normal leading-relaxed">
                  We analyze large-scale global career and technology data,
                  including job market trends and open-source activity, to
                  identify skill patterns and emerging roles. These insights are
                  then contextualized to better reflect the realities faced by
                  early-career professionals in Indonesia.
                </p>
              </div>
            </div>

            <div className="w-full h-56 rounded-xl overflow-hidden shadow-xs mt-2">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
                alt="Team working on algorithm blueprints"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-gray-50 flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col justify-start items-start gap-16">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex flex-col justify-start items-center">
              <h2 className="text-center justify-center text-zinc-900 text-4xl font-extrabold font-manrope leading-10">
                The Minds Behind Cocokin
              </h2>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-5 text-left hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-inner">
                    <img
                      className="w-full h-full object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-zinc-900 text-lg font-bold font-manrope leading-tight">
                      {member.name}
                    </h4>
                    <span className="text-blue-800 text-xs font-bold font-inter tracking-wide mt-0.5">
                      {member.role}
                    </span>
                    <span className="text-gray-400 text-[10px] font-semibold tracking-wider uppercase mt-0.5">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
