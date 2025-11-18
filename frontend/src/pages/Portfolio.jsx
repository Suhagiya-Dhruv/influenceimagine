import { Link } from 'react-router-dom';
import bannerImage from "../../images/banner/Portfolio2.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen pb-20 px-4 text-white">

      {/* Hero Section */}
      <div className="bg-black text-white w-full overflow-hidden">
        <section className="relative flex flex-col lg:flex-row items-center justify-between max-w-[90rem] mx-auto px-6 lg:px-20 pt-32">

          {/* LEFT CONTENT */}
          <div className="z-10 text-left space-y-6 max-w-xl ">
            <h1 className="font-mont text-white font-semibold 
               text-[58px] leading-[66px]">
              Strategy Executes.{" "}<br />
              <span className="font-mont text-[#ffce1b] gap-2" >Influence Delivers.</span><br />
            </h1>

            <p className="text-lg text-gray-300 font-bevn leading-relaxed">
              Our latest work is live proof of our execution speed. See the direct results of our campaigns on Instagram.
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
                        View Our Impact →
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

     <section className="bg-black text-white py-24 px-6">
  <div className="max-w-[90rem] mx-auto">

    <h2 className="text-4xl text-center md:text-5xl font-bold mb-12">
      Our Work for Your <span className="text-[#ffce1b]">Trust</span>
    </h2>

    <div className="overflow-x-auto rounded-2xl border border-gray-800 shadow-xl bg-white">
      <table className="min-w-full text-white bg-black">
        <thead>
          <tr className="bg-black text-left text-sm md:text-base text-white">
            <th className="py-4 px-6 font-semibold w-[50%]">Made by Influence</th>
            <th className="py-4 px-6 font-semibold w-[25%]">What We Do</th>
            <th className="py-4 px-6 font-semibold w-[25%]">Click Now</th>
          </tr>
        </thead>

        <tbody className="text-white">

          {/* Row 1 */}
          <tr className="border-t border-gray-400">
            <td className="py-5 px-6">
              Portfolio Showcase (@influence_imagine_work)<br />
              <span className="text-gray-200">
                See the live influence of our projects here. Discover the best examples tailored to your industry.
              </span>
            </td>

            <td className="py-5 px-6">
              Explore our latest branding, design, and marketing projects.
              Every reel, post, and campaign is crafted to deliver real results.
            </td>

            <td className="py-5 px-6 font-medium">
              <a
                href="https://instagram.com/influence_imagine_work"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white transition"
              >
                <FaInstagram className="text-2xl" />
                Visit Page
              </a>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="border-t border-gray-200">
            <td className="py-5 px-6">
              Official Brand Insight (@influence_imagine)<br />
              <span className="text-gray-200">
                Learn about our culture, process, and latest news. Understand how we engineer successful outcomes.
              </span>
            </td>

            <td className="py-5 px-6">
              Get a behind-the-scenes look at our process, creativity, and execution.
              See how we build modern, high-performing brands.
            </td>

            <td className="py-5 px-6 font-medium">
              <a
                href="https://instagram.com/influence_imagine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white transition"
              >
                <FaInstagram className="text-2xl" />
                Visit Page
              </a>
            </td>
          </tr>

          {/* Row 3 */}
          <tr className="border-t border-gray-200">
            <td className="py-5 px-6">
              Want a tailored portfolio for your industry?
            </td>

            <td className="py-5 px-6">
              Click the link below and share your business details.
              We will instantly send you a curated portfolio that matches your brand style, goals, and requirements.
            </td>

            <td className="py-5 px-6 font-medium">
              <a
                href="https://wa.me/9023989489?text=Hi!%20I%20want%20a%20custom%20portfolio%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white underline transition"
              >
                Send Details
              </a>
            </td>
          </tr>

          {/* Row 4 */}
          <tr className="border-t border-gray-200">
            <td className="py-5 px-6">WhatsApp: +91 90160 87505</td>

            <td className="py-5 px-6">Must be a clickable link for instant chat.</td>

            <td className="py-5 px-6 font-medium">
              <a
                href="https://wa.me/9023989489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-white transition"
              >
                <FaWhatsapp className="text-2xl" />
                Chat Now
              </a>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>



    </div>
  );
};

export default Portfolio;
