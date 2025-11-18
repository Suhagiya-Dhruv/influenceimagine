import { useState } from "react";
import contactImg from "../../images/banner/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Popup Modal State
  const [popup, setPopup] = useState({
    open: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.influenceimagine.com/api/contact/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setPopup({
        open: true,
        success: true,
        message: "Inquiry Sent Successfully!",
      });
    } else {
      setPopup({
        open: true,
        success: false,
        message: "Failed to send inquiry!",
      });
    }
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-4 text-white">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl pt-24 font-bold text-[#ffce1b] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's build something great. Share your project — we'll help bring it to life.
          </p>
        </div>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={contactImg}
              alt="Contact Section"
              className="w-[900px] lg:w-[950px] rounded-sm shadow-lg"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-black rounded-lg p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(255,206,27,0.1)]"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 tracking-wide">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl
                  text-white placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent 
                  transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl
                  text-white placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent 
                  transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl
                  text-white placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent 
                  transition-all duration-300"
                  placeholder="+91 1234567890"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 tracking-wide">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl
                  text-white placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent 
                  transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 mt-2 rounded-xl text-lg font-semibold 
                bg-[#ffce1b] text-black
                hover:bg-[#e0b718] transition-all duration-300
                shadow-[0_0_20px_rgba(255,206,27,0.4)]
                hover:shadow-[0_0_30px_rgba(255,206,27,0.7)]"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

          {/* LEFT CONTACT INFO */}
          <div>
            <div className="bg-black/40 rounded-lg p-8 mb-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div>
                  <p className="text-gray-300">
                    <b> Address:</b> Pragati IT Park, C2-413, opp. AR mall, 
                    Mota Varachha, Surat, Gujarat 394105.
                  </p>
                  <p className="text-gray-300 mt-2">
                    <b> Address:</b> Canada Kitchenr.
                  </p>
                  <a
                    href="https://share.google/l3Tzi4mJJu0w5L4Vu"
                    target="_blank"
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    View on Map →
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:9023989489" className="text-gray-300 hover:text-primary transition-colors">
                    +91 90239 89489
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <a
                    href="mailto:influenceimagine@gmail.com"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    influenceimagine@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Working Hours</h3>
                  <p className="text-gray-300">Mon–Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7345.5908093536095!2d72.879!3d21.239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzIxLjAiTiA3MsKwNTInNDQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="465"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

      {/* POPUP MODAL */}
      {popup.open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-[#111] border border-white/20 p-8 rounded-2xl shadow-xl text-center max-w-sm w-full animate-scaleIn">
            <h2
              className={`text-2xl font-semibold mb-3 ${
                popup.success ? "text-[#ffce1b]" : "text-red-500"
              }`}
            >
              {popup.success ? "Success!" : "Error"}
            </h2>

            <p className="text-gray-300 mb-6">{popup.message}</p>

            <button
              onClick={() => setPopup({ ...popup, open: false })}
              className="px-6 py-3 rounded-xl font-semibold bg-[#ffce1b] text-black hover:bg-[#e0b718] transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contact;


// import { useState } from "react";
// import contactImg from "../../images/banner/contact.png"; 

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const res = await fetch("http://localhost:5000/api/contact/send", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData),
//   });

//   const data = await res.json();

//   if (data.success) alert("Inquiry Sent Successfully!");
//   else alert("Failed to send inquiry!");
// };


//   return (
//     <div className="bg-black min-h-screen pt-32 pb-20 px-4 text-white">
//       <div className="container mx-auto">
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl pt-24 font-bold text-[#ffce1b] mb-4">
//             Contact Us
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Let's build something great. Share your project — we'll help bring it to life.
//           </p>
//         </div>

//         {/* ================= TOP SECTION ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT IMAGE */}
//           <div>
//             <img
//               src={contactImg}
//               alt="Contact Section"
//               className="w-[900px] lg:w-[950px] rounded-sm shadow-lg "
//             />
//           </div>

//           {/* RIGHT FORM */}
//           <div className="bg-black rounded-lg p-8">
            

//             <form
//   onSubmit={handleSubmit}
//   className="space-y-6 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(255,206,27,0.1)]"
// >
//   <h2 className="text-2xl font-bold text-white mb-6">
//               Send us a Message
//             </h2>
//   {/* Name */}
//   <div className="space-y-2">
//     <label className="text-sm font-medium text-gray-300 tracking-wide">
//       Name *
//     </label>
//     <input
//       type="text"
//       name="name"
//       required
//       value={formData.name}
//       onChange={handleChange}
//       className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl 
//         text-white placeholder-gray-500 
//         focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent
//         transition-all duration-300"
//       placeholder="Your Name"
//     />
//   </div>

//   {/* Email */}
//   <div className="space-y-2">
//     <label className="text-sm font-medium text-gray-300 tracking-wide">
//       Email *
//     </label>
//     <input
//       type="email"
//       name="email"
//       required
//       value={formData.email}
//       onChange={handleChange}
//       className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl 
//         text-white placeholder-gray-500 
//         focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent
//         transition-all duration-300"
//       placeholder="your.email@example.com"
//     />
//   </div>

//   {/* Phone */}
//   <div className="space-y-2">
//     <label className="text-sm font-medium text-gray-300 tracking-wide">
//       Phone Number
//     </label>
//     <input
//       type="tel"
//       name="phone"
//       value={formData.phone}
//       onChange={handleChange}
//       className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl 
//         text-white placeholder-gray-500 
//         focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent
//         transition-all duration-300"
//       placeholder="+91 1234567890"
//     />
//   </div>

//   {/* Message */}
//   <div className="space-y-2">
//     <label className="text-sm font-medium text-gray-300 tracking-wide">
//       Message *
//     </label>
//     <textarea
//       name="message"
//       required
//       rows="5"
//       value={formData.message}
//       onChange={handleChange}
//       className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl 
//         text-white placeholder-gray-500 
//         focus:outline-none focus:ring-2 focus:ring-[#ffce1b] focus:border-transparent
//         transition-all duration-300 resize-none"
//       placeholder="Tell us about your project..."
//     ></textarea>
//   </div>

//   {/* Submit Button */}
//   <button
//     type="submit"
//     className="w-full py-4 mt-2 rounded-xl text-lg font-semibold 
//       bg-[#ffce1b] text-black
//       hover:bg-[#e0b718] transition-all duration-300
//       shadow-[0_0_20px_rgba(255,206,27,0.4)]
//       hover:shadow-[0_0_30px_rgba(255,206,27,0.7)]"
//   >
//     Send Message
//   </button>
// </form>

//           </div>
//         </div>

//         {/* ================= BOTTOM SECTION ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

//           {/* LEFT CONTACT INFO */}
//           <div>
//             <div className="bg-black/40 rounded-lg p-8 mb-6 border border-gray-800">
//               <h2 className="text-2xl font-bold text-white mb-6">
//                 Contact Information
//               </h2>

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="font-semibold text-white mb-2"></h3>
//                   <p className="text-gray-300">
//                   <b> Address:</b>  Pragati IT Park, C2-413, opp. AR mall,  
//                     Mota Varachha, Surat, Gujarat 394105.
//                   </p>
//                   <h3 className="font-semibold text-white mb-2"></h3>
//                   <p className="text-gray-300">
//                    <b> Address:</b> Canada Kitchenr.
//                   </p>
//                   <a
//                     href="https://share.google/l3Tzi4mJJu0w5L4Vu"
//                     target="_blank"
//                     className="text-primary hover:underline text-sm mt-2 inline-block"
//                   >
//                     View on Map →
//                   </a>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-white mb-2">Phone</h3>
//                   <a
//                     href="tel:9023989489"
//                     className="text-gray-300 hover:text-primary transition-colors"
//                   >
//                    +91 90239 89489
//                   </a>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-white mb-2">Email</h3>
//                   <a
//                     href="mailto:influenceimagine@gmail.com"
//                     className="text-gray-300 hover:text-primary transition-colors"
//                   >
//                     influenceimagine@gmail.com
//                   </a>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-white mb-2">Working Hours</h3>
//                   <p className="text-gray-300">Mon–Sat: 9:00 AM – 7:00 PM</p>
//                   <p className="text-gray-300">Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT GOOGLE MAP */}
//           <div className="rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               title="Location Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7345.5908093536095!2d72.879!3d21.239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzIxLjAiTiA3MsKwNTInNDQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
//               width="100%"
//               height="465"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

          

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
