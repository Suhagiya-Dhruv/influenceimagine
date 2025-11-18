import { Link } from "react-router-dom";
import bannerImage from "../../images/banner/About2.png";
import {
  Users,
  Smile,
  ShieldCheck,
  Flame,
  Eye,
  Leaf,
  Briefcase,
  Handshake,
  Repeat,
  Heart,
} from "lucide-react";



const About = () => {
  const coreValues = [
    { name: "Team-Work", icon: <Users /> },
    { name: "Positivity", icon: <Smile /> },
    { name: "Honesty", icon: <ShieldCheck /> },
    { name: "Dedication", icon: <Flame /> },
    { name: "Clarity", icon: <Eye /> },
    { name: "Authenticity", icon: <Leaf /> },
    { name: "Professionalism", icon: <Briefcase /> },
    { name: "Commitment", icon: <Handshake /> },
    { name: "Flexibility", icon: <Repeat /> },
    { name: "Passion", icon: <Heart /> },
  ];


  return (
    <div className="bg-black min-h-screen pt-18 pb-20 px-4 text-white">

      {/* Hero Section */}
      <div className="bg-black text-white w-full overflow-hidden">
        <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-[90rem] mx-auto px-6 lg:px-20 pt-32">

          {/* LEFT CONTENT */}
          <div className="z-10 text-left space-y-6 max-w-xl">
            <h1 className="font-mont text-white font-semibold 
               text-[58px] leading-[66px]">
              The Power of Imagination{" "}<br />
              <span className="font-mont text-[#ffce1b]">The Force of Influence</span><br />
            </h1>

            <p className="font-bevn text-lg text-gray-300 font-bevn leading-relaxed">
              We are India’s next generation creative agency where innovation meets global results.
            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-[#ffce1b] text-black 
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105
  "
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
      </div>

     {/* Our Vision */}
<div className="bg-[#ffce1b] w-full relative text-black py-24 px-6 overflow-hidden">

  <div className="absolute max-w-[90rem] inset-0 -z-10">
    <div className="absolute w-[420px] h-[420px] bg-[#ffce1b] opacity-30 blur-[150px] animate-pulse-slow rounded-full -top-10 left-0"></div>
    <div className="absolute w-[380px] h-[380px] bg-[#ffce1b] opacity-20 blur-[150px] animate-pulse-slow rounded-full bottom-0 right-0"></div>
  </div>

  {/* 2 Columns */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* Our Vision */}
    <div>
      <h2 className="text-4xl font-bold mb-4 text-black">Our Vision</h2>
      <p className="text-lg leading-relaxed text-black">
        To empower brands with creative excellence, innovative design, and impactful
        digital presence that inspires audiences and drives lasting impressions.
      </p>
    </div>

    {/* Our Mission */}
    <div>
      <h2 className="text-4xl font-bold mb-4 text-black">Our Mission</h2>
      <p className="text-lg leading-relaxed text-black">
        Our mission is to deliver high-quality creative solutions with a focus on
        consistency, branding precision, and customer-centric design that elevates
        every business.
      </p>
    </div>

  </div>
</div>


      {/* Our Philosophy */}
      <section className="w-full bg-black text-white py-24 pb-8 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[420px] h-[420px] bg-[#ffce1b] opacity-20 blur-[150px] rounded-full top-0 left-0"></div>
          <div className="absolute w-[380px] h-[380px] bg-[#ffce1b] opacity-10 blur-[150px] rounded-full bottom-0 right-0"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">

          {/* Title */}
          <div className="text-center space-y-4">
            <h2 className="font-mont text-4xl md:text-5xl font-bold leading-tight">
              Our Philosophy: <span className="text-[#ffce1b]">The INFI Advantage</span>
            </h2>
            <p className="text-gray-300 text-lg italic">
              Laying the Foundation, Growing Digi-Tall.
            </p>
          </div>

          {/* Main Intro Text */}
          <div className="text-center space-y-6">
            <p className="text-gray-300 md:text-lg leading-relaxed max-w-3xl mx-auto">
              We don't just build brands; <span className="font-semibold text-[#ffce1b]">We Lay Strong Foundations for your Brand & Help it Grow Digi-tall.</span>
            </p>

            <p className="text-gray-400 md:text-lg leading-relaxed max-w-3xl mx-auto">
              At Influence Imagine, we are driven by the principle of
              <span className="text-[#ffce1b] font-semibold"> INFI The Cheetah</span>—a rare combination of speed, strategy, and creative instinct.
              Our approach blends modern mastery with time-tested strategy and experimental imagination, ensuring your brand is always ahead of the pack.
              Show us your vision, and we’ll transform it into a global phenomenon.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-[#ffce1b]/40 mx-auto rounded-full"></div>

          {/* How We Are Different */}
          <div className="text-center space-y-6">
            <h3 className="font-mont text-3xl font-bold">
              How We Are <span className="text-[#ffce1b]">Different</span> From Other Agencies
            </h3>

            <p className="text-gray-300 md:text-lg leading-relaxed max-w-3xl mx-auto">
              We are guided by <span className="text-[#ffce1b] font-semibold">INFI The Cheetah</span> —
              and true to his nature, we see angles, market opportunities, and
              <span className="font-semibold text-[#ffce1b]"> Your Story</span> better than anyone else.
            </p>

            <p className="text-gray-400 md:text-lg leading-relaxed max-w-3xl mx-auto">
              Influence Imagine doesn’t just place you in the market;
              <span className="font-semibold text-[#ffce1b]"> we position you right in the spotlight where you truly belong.</span>
            </p>

            <p className="text-gray-400 md:text-lg leading-relaxed max-w-3xl mx-auto">
              With a 360° vision powered by strategic insight, our eyes are always on the tools, trends, and moments that can
              truly market your brand and make your business boom —
              <span className="font-semibold text-[#ffce1b]"> quickly and precisely.</span>
            </p>
          </div>

        </div>

      </section>

      {/* Journy */}
      <section className="w-full bg-[#ffce1b] text-white py-24 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[420px] h-[420px] bg-[#ffce1b] opacity-30 blur-[150px] animate-pulse-slow rounded-full -top-10 left-0"></div>
          <div className="absolute w-[380px] h-[380px] bg-[#ffce1b] opacity-20 blur-[150px] animate-pulse-slow rounded-full bottom-0 right-0"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">

          <h2 className="font-mont text-4xl md:text-5xl font-bold leading-tight text-black drop-shadow-[0_0_20px_rgba(255,206,27,0.3)]">
            The Journey From Freelancing to Global Influence
          </h2>

          <p className="text-black md:text-lg leading-relaxed">
            <strong className="text-[#ffce1b]">The Foundation & Growth (2022)</strong><br />
            Our journey began in 2022 when our founders <strong>Harshil</strong> and
            <strong> Yash</strong> started from a simple home-office freelancing model.
            With dedication and rising client demand, we experienced remarkable early success.
          </p>

          <p className="text-black md:text-lg leading-relaxed">
            As our work expanded, so did our vision. We transitioned into a fully
            equipped professional office located in a major <strong>IT Park in Surat</strong>.
            This evolution from a home setup to a high-end workspace reflects our belief
            in growth, consistency, and world-class service delivery.
          </p>
        </div>

      </section>

      <style>
        {`
  @keyframes pulse-slow {
    0% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.35; transform: scale(1.08); }
    100% { opacity: 0.2; transform: scale(1); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 6s infinite ease-in-out;
  }
`}
      </style>

      {/* Our Chapter */}
      <section className="w-full bg-black text-white py-24 pb-8 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="p-7 bg-black/40 backdrop-blur-xl h-full
      border border-[#ffce1b]/20 rounded-2xl 
      shadow-[0_0_25px_rgba(255,206,27,0.15)]
      transition-all duration-300">

            <h3 className="text-xl font-bold text-[#ffce1b] mb-3">Global Expansion</h3>
            <p className="text-gray-300">
              Today, we collaborate with clients across the <strong>US, UK, Canada, and Australia</strong>.
              Our official registration in <strong>Canada</strong> strengthens our global presence.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-7 bg-black/40 backdrop-blur-xl h-full
      border border-[#ffce1b]/20 rounded-2xl 
      shadow-[0_0_25px_rgba(255,206,27,0.15)]
      transition-all duration-300">

            <h3 className="text-xl font-bold text-[#ffce1b] mb-3">Our Team Structure</h3>
            <p className="text-gray-300">
              We are a team of <strong>15+ professionals</strong>—a blend of in-office staff, remote experts,
              and international freelancers powering innovation at scale.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-7 bg-black/40 backdrop-blur-xl h-full
      border border-[#ffce1b]/20 rounded-2xl 
      shadow-[0_0_25px_rgba(255,206,27,0.15)]
      transition-all duration-300">

            <h3 className="text-xl font-bold text-[#ffce1b] mb-3">Rebranding for the World Stage</h3>
            <p className="text-gray-300">
              Our rebranding initiative reflects our evolving identity and global vision.
            </p>
            <p className="mt-3 font-semibold text-[#ffce1b]">
              The work is real. The vision is global. Let’s create beyond boundaries.
            </p>
          </div>

        </div>

      </section>

      {/* Core Values Section */}
      <section className="w-full bg-black text-white py-24 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">
          <h2 className="font-mont text-4xl font-bold text-white mb-12 text-center">
            We <span style={{ color: "#ffce1b" }}>Believe</span> In
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-black rounded-xl p-8 text-center border border-gray-800 
          transition-all duration-300 hover:border-gray-700"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl 
              bg-gray-900 border border-gray-800 group-hover:border-[#ffce1b] transition-all"
                  >
                    <div className="text-4xl" style={{ color: "#ffce1b" }}>
                      {value.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {value.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* CTA Section */}
<section className="bg-black py-18 px-6 lg:px-20">
  <div className="max-w-[100rem] mx-auto">
    <div className="lg:w-1/2 flex justify-center mx-auto">
      <img
        src="/images/imfluence-banner.jpg"
        alt="Branding CTA"
        className="w-full rounded-2xl"
      />
    </div>
  </div>
</section>


    </div>
  )
}

export default About

