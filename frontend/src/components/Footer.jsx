import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-24">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/png-2.png"
                alt="Influence Imagine"
                className="h-10 w-30"
              />
            </div>
            <p className="text-white leading-relaxed mb-4">
              India’s fastest growing design company that cares about your name,
              reputation & profits.
            </p>

            <div className="space-y-2 text-white">
              <p>
                <span className="text-white font-semibold">Address:</span> Pragati IT
                Park, C2-413, opp. AR mall, Mota Varachha, Surat, Gujarat 394105
              </p>
              <p>
                <span className="text-white font-semibold">Phone:</span>{" "}
                <a href="tel:9023989489" className="hover:text-primary">
                  9023989489
                </a>
              </p>
              <p>
                <span className="text-white font-semibold">Email:</span>{" "}
                <a
                  href="mailto:influenceimagine@gmail.com"
                  className="hover:text-primary"
                >
                  influenceimagine@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Pages</h4>
            <ul className="space-y-2">
              {["About", "Portfolio", "Contact","Blog"].map((page) => (
                <li key={page}>
                  <Link
                    to={`/${page.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Graphic Designing",
                "Video Editing",
                "Web Development",
                "Branding",
                "Social Media Management",
                "Marketing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Payments & CTA */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              All Major Cards & Net Banking Accepted
            </h4>

            {/* ✅ Replaced multiple icons with single image */}
            <div className="mb-5">
              <img
                src="/images/Payment.png" // 🔹 Save uploaded image with this name in your public/images folder
                alt="Payment Options"
                className="w-full max-w-[320px] object-contain"
              />
            </div>

            <a
              href="/contact"
              className="inline-block bg-[#ffce1b] hover:bg-[#ffce1b] text-black text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Get Started Now →
            </a>

            <div className="mt-4">
              <a
                href="https://g.page/r/CYlLQjy-anbhEAI/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/GGR.png"
                  alt="Google Rating"
                  className="h-14 cursor-pointer"
                />
              </a>

            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mt-8">
          {[
            { Icon: FaInstagram, link: "https://www.instagram.com/influence_imagine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
            { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61550733066013" },
            { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/influence-imagine-638175290/" },
            { Icon: FaPinterestP, link: "https://in.pinterest.com/influenceimagine" },
            { Icon: FaWhatsapp, link: "https://wa.me/9023989489" }, // replace number
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ffce1b] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>


        {/* Disclaimer */}
        {/* <div className="border-t border-black mt-8 pt-6 text-center text-xs text-white">
          <p>
            This site is not a part of the Facebook website or Facebook Inc. Additionally,
            this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of
            FACEBOOK, Inc.
          </p>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-black mt-4 pt-4 text-center text-xs text-white">
          <p>
            © 2025 Influence Imagine. All Rights Reserved.
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-[#ffce1b]">
              Privacy Policy
            </Link>
            {/* <span className="mx-2">|</span>
            <Link to="/refund" className="hover:text-[#ffce1b]">
              Refund Policy
            </Link> */}
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-[#ffce1b]">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import { Link } from "react-router-dom";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter,
//   FaPinterest,
//   FaBehance,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-black text-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Column 1: Logo and About */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <img
//                 src="/images/png-1.png"
//                 alt="Influence Imagine"
//                 className="h-20 w-30"
//               />
//             </div>
//             <p className="text-black leading-relaxed text-sm mb-4">
//               India’s fastest growing design company that cares about your name,
//               reputation & profits.
//             </p>

//             <div className="space-y-2 text-black text-sm">
//               <p>
//                 <span className="text-black font-semibold">Address:</span> Pragati IT
//                 Park, C2-413, opp. AR mall, Mota Varachha, Surat, Gujarat 394105
//               </p>
//               <p>
//                 <span className="text-black font-semibold">Phone:</span>{" "}
//                 <a href="tel:9023989489" className="hover:text-primary">
//                   9023989489
//                 </a>
//               </p>
//               <p>
//                 <span className="text-black font-semibold">Email:</span>{" "}
//                 <a
//                   href="mailto:influenceimagine@gmail.com"
//                   className="hover:text-primary"
//                 >
//                   influenceimagine@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>

//           {/* Column 2: Pages */}
//           <div>
//             <h4 className="text-lg font-semibold text-black mb-4">Pages</h4>
//             <ul className="space-y-2">
//               {["Home", "About", "Portfolio", "Contact"].map((page) => (
//                 <li key={page}>
//                   <Link
//                     to={`/${page.toLowerCase()}`}
//                     className="hover:text-primary transition-colors"
//                   >
//                     {page}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Services */}
//           <div>
//             <h4 className="text-lg font-semibold text-black mb-4">Services</h4>
//             <ul className="space-y-2">
//               {[
//                 "Graphic Designing",
//                 "Video Editing",
//                 "Web Development",
//                 "Branding",
//                 "Social Media Management",
//                 "Marketing",
//               ].map((service) => (
//                 <li key={service}>
//                   <Link
//                     to="/services"
//                     className="hover:text-primary transition-colors"
//                   >
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Payments & CTA */}
//           <div>
//             <h4 className="text-lg font-semibold text-black mb-4">
//               All Major Cards & Net Banking Accepted
//             </h4>

//             {/* ✅ Replaced multiple icons with single image */}
//             <div className="mb-5">
//               <img
//                 src="/images/Payment.png" // 🔹 Save uploaded image with this name in your public/images folder
//                 alt="Payment Options"
//                 className="w-full max-w-[320px] object-contain"
//               />
//             </div>

//             <a
//               href="/contact"
//               className="inline-block bg-[#deab33] hover:bg-[#c9982d] text-black text-sm font-medium px-4 py-2 rounded-md transition-colors"
//             >
//               Get Started Now →
//             </a>

//             <div className="mt-4">
//               <img
//                 src="/images/GGR.png"
//                 alt="Google Rating"
//                 className="h-14"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center space-x-5 mt-8">
//           {[FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest, FaBehance].map(
//             (Icon, i) => (
//               <Icon
//                 key={i}
//                 className="text-black hover:text-[#deab33] transition-colors cursor-pointer"
//                 size={18}
//               />
//             )
//           )}
//         </div>

//         {/* Disclaimer */}
//         <div className="border-t border-black mt-8 pt-6 text-center text-xs text-black">
//           <p>
//             This site is not a part of the Facebook website or Facebook Inc. Additionally,
//             this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of
//             FACEBOOK, Inc.
//           </p>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-black mt-4 pt-4 text-center text-xs text-black">
//           <p>
//             © 2025 Influence Imagine. All Rights Reserved.
//             <span className="mx-2">|</span>
//             <Link to="/privacy" className="hover:text-[#deab33]">
//               Privacy Policy
//             </Link>
//             <span className="mx-2">|</span>
//             <Link to="/refund" className="hover:text-[#deab33]">
//               Refund Policy
//             </Link>
//             <span className="mx-2">|</span>
//             <Link to="/terms" className="hover:text-[#deab33]">
//               Terms of Service
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
