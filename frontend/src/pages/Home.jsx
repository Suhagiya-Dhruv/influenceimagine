import { Link } from "react-router-dom";
import { useState } from "react";
import bannerImage from "../../images/banner/Services2.png";
import LogoSlider from "../components/Logoslider";
import { Briefcase, Globe, PenTool, Layers, Monitor, LineChart } from "lucide-react";

import {
  FaPalette,
  FaVideo,
  FaGlobe,
  FaTags,
  FaChartBar,
  FaBuilding,
  FaLightbulb,
  FaMobileAlt
} from "react-icons/fa";

const brandingServices = {
  "Brand Identity": [
    "Logo Design",
    "Color Palette",
    "Typography (Fonts)",
    "Brand Style Guide / Brand Book",
    "Icon Set",
    "Brand Patterns & Motifs",
  ],
  "Business & Stationery": [
    "Business Card Design",
    "Letterhead Design",
    "Envelope Design",
    "ID Card Design",
    "Invoice / Quotation Design",
    "Notepad / Folder Design",
  ],
  "Packaging & Labels": [
    "Product Label Design",
    "Box Packaging Design",
    "Bottle/Jar Label",
    "Pouch Packaging",
    "Sleeve, Tag, Sticker Design",
    "3D Mockups",
  ],
  "Marketing & Print Materials": [
    "Brochure / Catalogue",
    "Flyers / Pamphlets",
    "Menu Design",
    "Posters & Banners",
    "Roll-up Standee",
    "Hoarding / Billboard Design",
  ],
  " Digital Branding": [
    "Social Media Branding (DP, Cover, Templates)",
    "Social Media Post/Ads Design",
    "Highlight Covers",
    "WhatsApp Marketing Kit",
    "Digital Flyers / e-Brochure",
  ],
  "Product & Company Branding": [
    "Product Branding",
    "Uniform Branding",
    "Vehicle Branding",
    "Storefront / Signboard Design",
    "Brand Collateral Design",
  ],
};

const Home = () => { 
  const [openDropdown, setOpenDropdown] = useState(null); 
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <div className="bg-black text-white w-full overflow-hidden">
        <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-[90rem] mx-auto px-6 lg:px-20 pt-32">

          {/* LEFT CONTENT */}
          <div className="z-10 text-left space-y-6 max-w-xl">
            <h1 className="font-mont text-white font-semibold 
               text-[58px] leading-[66px]">

              Indulge in endless{" "}<br />
              <span className="text-[#ffce1b]">Turn your vision into </span>limitless influence<br />
            </h1>


            <p className="text-lg text-gray-300 font-bevn leading-relaxed">
              We design the stories and strategies that help your brand connect, grow, and dominate the digital landscape.
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
              See How →
            </Link>



          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-10   lg:w-1/2 flex justify-center relative">
            {/* Gray Background Blob Shape */}
            {/* <div className="absolute right-0 top-10 w-[400px] h-[430px] bg-gray-500/40 rounded-[40%] blur-[2px]"></div> */}

            <img
              src={bannerImage}
              alt="Creative Gecko"
              className="relative w-[480px] lg:w-[650px] z-10"
            />
          </div>

        </section>
      </div>


      {/* Logo Slider */}
      <LogoSlider />

      {/* Empower Brand Section */}
      <section className="text-center flex flex-col items-center justify-center px-6"
        style={{ backgroundColor: "#ffce1b", minHeight: "50vh" }}
      >
        <h2 className="font-mont text-3xl md:text-4xl font-bold text-black mb-6">
          Energize Your Brand
        </h2>
        <p className="max-w-5xl mx-auto md:text-2xl text-black leading-relaxed">
          We are your Brand Vision and Digital Growth agency. Our core services are focused on powerfully presenting your brand's story through Video Editing, effective Social Media Management/Marketing, and creative Graphic/Branding Design. With expertise in Visual Mastery and Market Reach, we transform your online presence into customer engagement.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24 px-6 text-white">
        <div className="max-w-[90rem] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-mont text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#ffce1b]">Services</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore the creative and digital solutions we offer to help your brand grow.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service Card */}
            {[
              { icon: <FaPalette />, title: "Graphic Design", desc: "Crafting visually stunning designs that communicate your brand's message effectively across all platforms.", cta: "Explore Design →" },
              { icon: <FaVideo />, title: "Video & Reels Editing", desc: "Transforming raw footage into polished, engaging video content for marketing, social media, and internal use.", cta: "Start Project →" },
              { icon: <FaGlobe />, title: "Web and App Development", desc: "Building responsive, fast, and user-friendly websites that serve as your 24/7 business asset.", cta: "Build My Site →" },
            ].map((item, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-white/10 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 text-3xl text-[#ffce1b]">{item.icon}</div>
                <h3 className="font-mont text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <Link to="/services">
                  <button className="text-[#ffce1b] font-semibold">
                    {item.cta}
                  </button>
                </Link>

              </div>
            ))}

            {/* Branding & Identity Large Card */} 
<div className="bg-[#0f0f0f] border border-white/10 text-white rounded-2xl p-8 shadow-xl col-span-1 sm:col-span-2 lg:col-span-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

  <div className="mb-6 text-3xl text-[#ffce1b]"><FaTags /></div>

  <h3 className="font-mont text-2xl font-bold mb-3">Branding Design and Development</h3>

  <p className="text-gray-400 mb-6">
    We Create Everything Your Brand Needs — Logo, Identity, Packaging, Marketing & Digital Presence.
  </p>

  {/* Dropdown Logic */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {Object.keys(brandingServices).map((title, index) => (
      <div key={index} className="relative group">
        
        {/* Button */}
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === title ? null : title)
          }
          className="bg-white/10 border border-white/10 text-white py-3 rounded-lg text-sm font-medium w-full"
        >
          {title}
        </button>

        {/* Dropdown */}
        {openDropdown === title && (
          <div className="absolute left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl z-20 p-2">
            {brandingServices[title].map((sub, i) => (
              <div
                key={i}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md cursor-pointer"
              >
                {sub}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>

</div>


            {/* The rest service cards */}
            {[
              { icon: <FaChartBar />, title: "Social Media Management", desc: "Growing your online presence with strategic content planning, engagement, and performance analysis.", cta: "Grow My Socials →" },
              { icon: <FaBuilding />, title: "3D & Architectural Design (Interior and Exterior)", desc: "Realistic interior/exterior modeling and rendering for architectural and product visualization.", cta: "View 3D Options →" },
              { icon: <FaLightbulb />, title: "Digital Marketing", desc: "Comprehensive digital marketing solutions, including SEO, paid ads, and brand strategy.", cta: "Start Strategy →" },
              { icon: <FaMobileAlt />, title: "UI/UX Design", desc: "Designing seamless and delightful user experiences for web platforms and mobile apps.", cta: "Optimize Experience →" },
            ].map((item, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-white/10 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 text-3xl text-[#ffce1b]">{item.icon}</div>
                <h3 className="font-mont text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <Link to="/services">
                  <button className="text-[#ffce1b] font-semibold">
                    {item.cta}
                  </button>
                </Link>

              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-20">

            <Link
              to="/services"
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
              View All Services
            </Link>
          </div>

        </div>
      </section>


      {/* Mantras We Preach Section - Same background as services */}
      <section className="bg-black py-18 px-6 text-white relative overflow-hidden">
        {/* Background glow - Same as services section */}
        {/* <div className="pointer-events-none absolute inset-0 opacity-30">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
            style={{ backgroundColor: "#ffce1b", filter: "blur(140px)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
            style={{ backgroundColor: "#ffce1b", filter: "blur(120px)" }}
          ></div>
        </div> */}

        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          {/* Left Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-8">
            <h2 className="font-mont text-2xl md:text-4xl  font-extrabold leading-snug">
              <span className="text-[#ffce1b]">Creative Visual Mastery</span>,
              <span className="text-white inline-block">Strategic Digital Reach</span>
              & <span className="text-[#ffce1b]">Measurable Growth Impact</span>
            </h2>


            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              We don't just manage campaigns we build legacies. <br />
              Our design, video, and social strategies merge seamlessly
              to craft powerful brand narratives and measurable success.
            </p>

            <Link
              to="/about"
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
              See How →
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Animated glow ring */}
            <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-[#ffce1b]/40 to-transparent rounded-full blur-[120px] animate-pulse-slow"></div>

            {/* Image with hover lighting */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#ffce1b]/30 to-transparent rounded-3xl blur-3xl opacity-40 group-hover:opacity-80 transition-all duration-500"></div>
              <img
                src="/images/graphics.png"
                alt="Creative Visual"
              // className="w-[520px] max-w-full rounded-3xl border border-[#2a2a2a] shadow-[0_0_50px_rgba(222,171,51,0.15)] group-hover:shadow-[0_0_70px_rgba(222,171,51,0.3)] transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section - Same background as services */}
      {/* FAQ Section - Box Premium Design */}
<section className="bg-black text-white py-24 px-6 flex justify-center relative">
  <div
    className="relative container mx-auto max-w-5xl bg-[#0a0a0a]/70 
    backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 
    shadow-[0_0_40px_-10px_rgba(255,206,27,0.2)] overflow-hidden"
  >

    {/* Soft glow inside */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#ffce1b]/10 to-transparent blur-3xl rounded-3xl -z-10"></div>

    {/* Title */}
    <h2 className="font-mont text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
      Frequently Asked <span className="text-[#ffce1b]">Questions</span>
    </h2>

    {/* FAQ Accordion */}
    <div className="space-y-4 md:space-y-2">
      {[
        {
          question: "What is Influence Imagine?",
          answer:
            "Influence Imagine is your dedicated partner in Creative Design, Video Editing, and Digital Marketing. We craft powerful brand narratives and strategic content to drive measurable growth. Our mission is to build lasting influence and sustainable success for your brand in the digital age.",
        },
        {
          question: "What services does Influence Imagine provide?",
          answer:
            "Influence Imagine delivers next-level creative and digital solutions including: Branding, Graphic Design, Social Media Marketing, Web & App Development, High-Impact Video Production, 3D & Architectural Visualization, Content Strategy, Digital Consulting, and more.",
        },
        {
          question: "What is Digital Marketing? How does it work at Influence Imagine?",
          answer:
            "Marketing to consumers who use Internet-connected electronic devices, such as computers, smartphones, and tablets, is known as digital marketing. Digital marketing at Influence Imagine concentrates on connecting with prospects and customers through visually compelling content, strategic social media campaigns, web platforms, and precision targeting. Influence Imagine leverages its expertise in Creative Design, Video Production, and Advanced Digital Strategy to transform your digital presence into measurable market growth and influence globally."
        },
        {
          question: "How does Influence Imagine differentiate my brand?",
          answer:
            "The key is transforming your vision into unmissable digital influence. We don't just locate an emotional promise; we engineer your brand's dominance using Creative Visual Mastery and Advanced Strategic Reach. We convert passive viewers into active customers by creating content that achieves both visual magnetism and measurable market growth.",
        },
        {
          question: "How quickly does Influence Imagine deliver results?",
          answer:
            "Our time-to-impact depends entirely on the chosen strategy. Visual Campaigns (like Paid Social Media and High-Impact Video releases) often show significant engagement and reach within the first few weeks. However, building genuine Brand Influence and SEO Authority requires strategic patience; these efforts, involving consistent content and web platform optimization, typically begin yielding substantial, sustainable growth after 3 to 6 months. Let's schedule a call to discuss your specific timeline.",
        },
        {
          question: "What client support can I expect?",
          answer:
            "We believe in building true partnerships, not just vendor relationships. You'll receive a dedicated Brand Strategist and direct access to your Creative Lead (Design/Video). We provide regular performance insights and are committed to continuous strategy adaptation to ensure your brand maintains its influence and achieves long-term growth. Let's discuss how our team can become an extension of yours.",
        },
      ].map((item, index) => (
        <details
          key={index}
          className="group bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 md:p-7 transition-all hover:border-[#ffce1b]/40"
        >
          <summary className="flex justify-between items-center cursor-pointer text-lg md:text-xl font-semibold list-none">
            <span>
              {index + 1}. {item.question}
            </span>
            <span className="text-3xl transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>


      {/* HOW IT WORKS Section */}
      <section className="bg-black py-18 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="font-mont text-3xl md:text-4xl font-bold text-white">
            How It <span className="text-[#ffce1b]">Work</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm transition shadow-lg">
            <div className="flex flex-col items-center space-y-6">

              {/* Step Number */}
              <div className="w-12 h-12 rounded-full bg-[#ffce1b] text-black font-bold flex items-center justify-center text-xl">
                1
              </div>

              {/* Icon */}
              <div className="p-4 bg-white/10 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffce1b"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h18M3 12h18M3 19h18"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white">
                Tell us what you need
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Fill out a simple brief to help designers understand your design needs.
              </p>

            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm transition shadow-lg">
            <div className="flex flex-col items-center space-y-6">

              <div className="w-12 h-12 rounded-full bg-[#ffce1b] text-black font-bold flex items-center justify-center text-xl">
                2
              </div>

              <div className="p-4 bg-white/10 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffce1b"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h10M4 18h7"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white">
                Give feedback & get revisions
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Tell us about the changes you need.
              </p>

            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm transition shadow-lg">
            <div className="flex flex-col items-center space-y-6">

              <div className="w-12 h-12 rounded-full bg-[#ffce1b] text-black font-bold flex items-center justify-center text-xl">
                3
              </div>

              <div className="p-4 bg-white/10 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffce1b"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2l4 -4m-7 9h8a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white">
                Approve & download
              </h3>
              <p className="text-gray-300 text-sm text-center">
                Approve the design you love and get all source files delivered.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#ffce1b] rounded-3xl pl-10 border border-white/10 p-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

            <div className="text-center lg:text-left lg:w-1/2 space-y-6">
              <h2 className="font-mont text-3xl md:text-4xl font-bold text-black">
                Ready for Influence? Let’s Build Your Global Edge.
              </h2>
              <p className="text-black text-lg max-w-md mx-auto lg:mx-0">
                We blend creativity and precision for lasting impact.
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
    hover:scale-105
  "
              >
                Get Started Now →
              </Link>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <img src="/images/b2.png" alt="Branding CTA" className="w-full max-w-md rounded-2xl" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
