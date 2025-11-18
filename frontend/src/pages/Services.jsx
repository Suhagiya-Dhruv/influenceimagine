import { Link } from 'react-router-dom';
import bannerImage from "../../images/image-2.png";

const Services = () => {
  return (
    <div className="bg-black min-h-screen pb-20 px-4 text-white">

      {/* Hero Section */}
      <div className="bg-black text-white w-full overflow-hidden">
        <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-[90rem] mx-auto px-6 lg:px-20 pt-32">

          {/* LEFT CONTENT */}
          <div className="z-10 text-left space-y-6 max-w-xl">
            <h1 className="font-mont text-white font-semibold 
               text-[58px] leading-[66px]">
              Let Us Give Your Brand an {" "}<br />
              <span className="font-mont text-[#ffce1b]">Unbeatable Reputation.</span><br />
            </h1>

            <p className="text-lg text-gray-300 font-bevn leading-relaxed">
              In the current era, the presentation can either make or break a brand's image. Your brainchild needs premium services. And a powerful team that puts quality on priority & delivers results without a miss.
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

      {/* Extra Service Highlight Section */}
      <section className="bg-[#ffce1b] py-24 px-6">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="font-mont text-3xl lg:text-5xl font-bold text-black">
            Our Services
          </h1>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">

            <h2 className="font-mont text-4xl md:text-5xl font-bold text-black">
              Graphic Design
            </h2>

            <p className="text-xl text-black font-semibold">
              Visual Communication That Drives Engagement.
            </p>

            <p className="text-black leading-relaxed max-w-xl">
              We translate complex ideas into clear, high-impact visuals that resonate deeply with your audience. Our focus is on creating cohesive design assets—from branding collateral to digital marketing graphics—that ensure visual consistency and strategically enhance your message across every touchpoint.
            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-black text-[#ffce1b] 
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>

          {/* Right Side Icon / Image */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/images/Graphic design.png"
              alt="Service Icon"
              className="w-[200px] md:w-[300px] lg:w-[300px]"
            />
          </div>

        </div>
      </section>

      <section className="bg-black py-24 px-6">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/social media mangment.png" // 👉 Your 3D icon here
              alt="Digital Marketing"
              className="w-[260px] md:w-[330px] lg:w-[380px]"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-5 text-white">
            <h2 className="font-mont text-4xl md:text-5xl font-bold">
              Social Media Management
            </h2>

            <p className="text-[#ffce1b] text-lg font-semibold">
              Building and Sustaining Digital Presence.
            </p>

            <p className="text-white/80 leading-relaxed max-w-xl">
              We handle the complexities of your social media ecosystem, focusing on audience growth, brand voice consistency, and meaningful engagement. Our management strategies are built to translate social activity into measurable business outcomes, ensuring your presence is both reliable and results-driven.
            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-[#ffce1b]  text-black
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>

        </div>

        {/* Divider Line */}
        <div className="max-w-7xl mx-auto my-16 border-t border-white/20"></div>

        {/* SECOND BLOCK — Alternate Layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-10">

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/Video- reels editing ma.png" // 👉 Your 3D icon here
              alt="Social Media Marketing"
              className="w-[260px] md:w-[330px] lg:w-[380px]"
            />
          </div>

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-5 text-white">
            <h2 className="font-mont text-4xl md:text-5xl font-bold">
              Video & Reels Editing
            </h2>

            <p className="text-[#ffce1b] text-lg font-semibold">
              Crafting High-Impact Digital Stories.
            </p>

            <p className="text-white/80 leading-relaxed max-w-xl">
              We specialize in transforming raw footage into polished, high-engagement visual narratives. Our editing process is focused on optimizing content for audience retention, platform performance (Reels/Shorts), and clear communication, ensuring every video delivers professional quality and measurable results.

            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-[#ffce1b]  text-black
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>

        </div>

      </section>

      <section className="bg-[#ffce1b] py-24 px-6">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">


          {/* Left Side Icon / Image */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/images/web and app devlopment.png"
              alt="Service Icon"
              className="w-[270px] md:w-[330px] lg:w-[380px]"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-6">

            <h2 className="font-mont text-4xl md:text-5xl font-bold text-black">
              Web and App<br /> Development
            </h2>

            <p className="text-xl text-black font-semibold">
              Expert Engineering for Enduring Stability.
            </p>

            <p className="text-black leading-relaxed max-w-xl">
              We specialize in building robust, scalable, and high-performance web and app platforms. Our engineering focus ensures reliable execution, stable performance, and a strong digital foundation designed to support your long-term business objectives. We deliver dependable technology built for sustained success.
            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-black  text-[#ffce1b]
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>



        </div>
      </section>

      <section className="bg-black py-24 px-6">

        {/* SECOND BLOCK — Alternate Layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-10">

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/01 ui ux design.png" // 👉 Your 3D icon here
              alt="Social Media Marketing"
              className="w-[260px] md:w-[330px] lg:w-[380px]"
            />
          </div>

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-5 text-white">
            <h2 className="font-mont text-4xl md:text-5xl font-bold">
              UI/UX Design
            </h2>

            <p className="text-[#ffce1b] text-lg font-semibold">
              Crafting Intuitive Digital Experiences.
            </p>

            <p className="text-white/80 leading-relaxed max-w-xl">
              We go beyond aesthetics to create deeply intuitive and seamless user experiences. Our design philosophy is focused on enhancing product usability, driving engagement, and ensuring every interaction aligns strategically with your business goals. We deliver user-centric design that provides tangible business value.

            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-[#ffce1b]  text-black
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>

        </div>

        {/* Divider Line */}
        <div className="max-w-7xl mx-auto my-16 border-t border-white/20"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/jhgyu.png" // 👉 Your 3D icon here
              alt="Digital Marketing"
              className="w-[260px] md:w-[330px] lg:w-[380px]"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-5 text-white">
            <h2 className="font-mont text-4xl md:text-5xl font-bold">
              Branding Design and Development
            </h2>

            <p className="text-[#ffce1b] text-lg font-semibold">
              Strategic Design, Definitive Digital Execution.
            </p>

            <p className="text-white/80 leading-relaxed max-w-xl">
              We shape more than just aesthetics; we design and develop the entire digital identity that drives genuine market influence. Our approach ensures that your brand is not only visually brilliant but also technically robust and seamlessly integrated across all digital platforms. We build identities that last.
            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-[#ffce1b]  text-black
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>

        </div>

          {/* Divider Line */}
        <div className="max-w-7xl mx-auto my-16 border-t border-white/20"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-5 text-white">
            <h2 className="font-mont text-4xl md:text-5xl font-bold">
              Digital Marketing
            </h2>

            <p className="text-[#ffce1b] text-lg font-semibold">
              The Essential Engine for Sustained Growth.
            </p>

            <p className="text-white/80 leading-relaxed max-w-xl">
              We are the strategic partners you need to navigate the digital future. We specialize in measured campaigns designed to boost brand awareness, drive quality traffic, generate qualified leads, and significantly increase your ROI. We provide the essential strategies for sustained market performance.
            </p>

            <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-[#ffce1b]  text-black
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>

          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/Digital marketing.png" // 👉 Your 3D icon here
              alt="Digital Marketing"
              className="w-[260px] md:w-[330px] lg:w-[380px]"
            />
          </div>

          

        </div>

      </section>

      <section className="bg-[#ffce1b] py-24 px-6">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">


          {/*Right  Side Icon / Image */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src="/images/3D  Architectural Design Interior and Exterior.png"
              alt="Service Icon"
              className="w-[200px] md:w-[300px] lg:w-[300px]"
            />
          </div>

        {/*  Left Content */}
          <div className="lg:w-1/2 space-y-6">

            <h2 className="font-mont text-4xl md:text-5xl font-bold text-black">
               3D & Architectural Design (Interior and Exterior)
            </h2>

            <p className="text-xl text-black font-semibold">
              Realizing Visionary Spaces with Precision.
            </p>

            <p className="text-black leading-relaxed max-w-xl">
              We transform conceptual ideas into photorealistic environments. Our expertise covers detailed 3D modeling, strategic interior design, and impactful exterior architectural visualization, ensuring your spatial vision is executed with technical precision and compelling realism.
            </p>

           <Link
              to="/contact"
              className="
    inline-flex items-center 
    bg-black  text-[#ffce1b]
    px-8 py-4 
    rounded-2xl 
    text-base font-semibold
    shadow-md
    transition-all duration-300 
    hover:scale-105"
            >
              More
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
