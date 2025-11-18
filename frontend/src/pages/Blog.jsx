import { Link } from 'react-router-dom';
import bannerImage from "../../images/banner/blog2.png";

const Blog = () => {
  return (
    <div className="bg-black min-h-screen  pb-20 px-4 text-white">
      {/* Hero Section */}
            <div className="bg-black text-white w-full overflow-hidden">
              <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-[90rem] mx-auto px-6 lg:px-20 pt-32">
      
                {/* LEFT CONTENT */}
                <div className="z-10 text-left space-y-6 max-w-xl">
                  <h1 className="font-mont text-white font-semibold 
                     text-[58px] leading-[66px]">
                    Influence Imagine Delivers The  {" "}<br />
                    <span className="font-mont text-[#ffce1b]">Defining Factor.</span><br />
                  </h1>
      
                  <p className="text-lg text-gray-300 font-bevn leading-relaxed">
                    Engage the Influence Imagine team to equip your brand with strategic design and expert execution that ensures your presence commands attention. Mark well: We engineer results.
                  </p>
      
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 font-semibold text-[20px] px-12 py-4 rounded-full transition-all duration-300 bg-[#ffce1b] text-black hover:-translate-y-1 hover:shadow-lg"
                  >
                    View Our Impact
                  </Link>
                </div>
      
                {/* RIGHT IMAGE */}
                <div className="mt-10   lg:w-1/2 flex justify-center relative">
                  {/* Gray Background Blob Shape */}
                  {/* <div className="absolute right-0 top-10 w-[400px] h-[430px] bg-gray-500/40 rounded-[40%] blur-[2px]"></div> */}
      
                  <img
                    src={bannerImage}
                    alt="Creative Gecko"
                    className="relative w-[380px] lg:w-[450px] z-10"
                  />
                </div>
      
              </section>

              {/* 90-Day Market Domination Section */}
                <section className="w-full bg-black text-black py-24 px-6 lg:px-20 relative overflow-hidden">

  {/* Background Blobs */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-[420px] h-[420px] bg-[#ffce1b] opacity-30 blur-[150px] animate-pulse-slow rounded-full -top-10 left-0"></div>
    <div className="absolute w-[380px] h-[380px] bg-[#ffce1b] opacity-20 blur-[150px] animate-pulse-slow rounded-full bottom-0 right-0"></div>
  </div>

  {/* Content */}
  <div className="max-w-5xl mx-auto text-center space-y-10">

    {/* TITLE */}
    <h2 className="font-mont text-4xl md:text-5xl font-bold leading-tight text-[#ffce1b] drop-shadow-[0_0_20px_rgba(255,206,27,0.3)]">
      90-Day Market Domination:<br /> 
      <span className="text-white">How to Overpower Competitors with</span>
      <span className="text-white font-extrabold"> Cheetah Precision</span>
    </h2>

    {/* INTRODUCTION */}
    <div className="space-y-6 text-white md:text-lg leading-relaxed">
      <h3 className="text-2xl font-bold text-white">Introduction: The Clock is Ticking. Slow Marketing is Dead.</h3>

      <p>
        Most agencies promise results in 12 months. That’s for the <em>prey</em>, not the <strong>predator</strong>.
      </p>

      <p>
        At <strong>Influence Imagine</strong>, we believe in the Cheetah philosophy: 
        <strong> Laser Focus, Unrivaled Speed, and Definitive Influence.</strong>
        We don't believe in participation trophies; we believe in <strong>market dominance</strong>.
        If you want to leave your competition chasing dust, you need a 90-day execution plan.
      </p>

      <p>
        This isn't theory — this is the three-phase system we use to position our clients as the 
        <strong> unquestionable market leaders</strong> in just three months.
      </p>
    </div>

    <hr className="border-black/40" />

   {/* PHASE CARDS SECTION */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

  {/* PHASE 1 CARD */}
  <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-[#ffce1b] transition-all duration-300">
    <h3 className="text-3xl font-bold text-[#ffce1b] mb-4">PHASE 1</h3>
    <h4 className="text-xl font-semibold text-white italic mb-4">Laser Target (Days 1–30)</h4>

    <p className="text-white/90 leading-relaxed mb-6">
      The Cheetah identifies the fastest path. Most businesses fail here by targeting everyone.
    </p>

    <ul className="space-y-4 text-white/80">
      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Stop Broad Segmentation:</strong> Identify the exact 5% with highest LTV.</p>
      </li>

      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Competitor Weakness Map:</strong> Find what competitors fail to deliver.</p>
      </li>

      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Single Focus Metric:</strong> One metric drives all decisions.</p>
      </li>
    </ul>
  </div>

  {/* PHASE 2 CARD */}
  <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#ffce1b] transition-all duration-300">
    <h3 className="text-3xl font-bold text-[#ffce1b] mb-4">PHASE 2</h3>
    <h4 className="text-xl font-semibold text-white italic mb-4">Aggressive Execution (Days 31–60)</h4>

    <p className="text-white/90 leading-relaxed mb-6">
      Focus without speed is daydreaming. This phase activates high-impact media presence.
    </p>

    <ul className="space-y-4 text-white/80">
      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Content Blitzkrieg:</strong> 3–5 authority pieces per week.</p>
      </li>

      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Dominant Media Placement:</strong> Saturate social + search feeds.</p>
      </li>

      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Conversion Crucible:</strong> Every content piece must sell.</p>
      </li>
    </ul>
  </div>

  {/* PHASE 3 CARD */}
  <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#ffce1b] transition-all duration-300">
    <h3 className="text-3xl font-bold text-[#ffce1b] mb-4">PHASE 3</h3>
    <h4 className="text-xl font-semibold text-white italic mb-4">Unrivaled Dominance (Days 61–90)</h4>

    <p className="text-white/90 leading-relaxed mb-6">
      This phase turns speed into long-term influence and permanent leadership.
    </p>

    <ul className="space-y-4 text-white/80">
      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Loyalty Lock-In:</strong> Collect testimonials & proof aggressively.</p>
      </li>

      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Data Refinement Loop:</strong> Kill weak campaigns, invest in winners.</p>
      </li>

      <li className="flex gap-3">
        <span className="text-[#ffce1b] mt-1">•</span>
        <p><strong>Maintain the Pace:</strong> Market leaders set the rhythm.</p>
      </li>
    </ul>
  </div>

</div>

    <hr className="border-black/40" />

    {/* CONCLUSION */}
    <div className="space-y-6 text-white md:text-lg leading-relaxed max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-white">Conclusion: Stop Wishing. Start Influencing.</h3>

      <p>
        <strong>The time for slow, safe marketing is over.</strong> Dominance is earned through 
        relentless focus and blistering speed.
      </p>

      <p>
        Are you ready to claim the market leader position in the next 90 days?
      </p>

      <a
        href="/contact"
        className="inline-block bg-[#ffce1b] text-black font-bold text-xl px-10 py-4 rounded shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        Schedule Your 90-Day Dominance Strategy Session Today
      </a>
    </div>

  </div>
                </section>
            </div>
    </div>
  );
};

export default Blog;
