import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black min-h-screen  pb-20 px-4 text-white">
      <div className="max-w-5xl mx-auto pt-32 space-y-16">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl pt-10 font-bold font-mont text-center text-[#ffce1b] drop-shadow-[0_0_20px_rgba(255,206,27,0.3)]">
        Privacy Policy Overview
    </h2>

  {/* SECTION 1 */}
  <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 md:p-10 space-y-6 shadow-lg">
    <h3 className="text-2xl md:text-3xl font-semibold text-white">
      Our Commitment and Data Collection
    </h3>

    <p className="text-white/85 leading-relaxed md:text-lg">
      At <strong>Influence Imagine</strong>, the confidentiality and security of your information 
      are paramount. We collect Personal Information, such as your name, email, phone number, 
      and address, primarily when you create an account, make a purchase, or communicate with us.
      We also use cookies and Google Analytics to automatically gather non-personal data 
      (IP address, browser type) to enhance site performance and security.  
      <br /><br />
      We only collect data necessary to fulfill the purpose of your interaction with us.
    </p>
  </div>

  {/* SECTION 2 */}
  <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 md:p-10 space-y-6 shadow-lg">
    <h3 className="text-2xl md:text-3xl font-semibold text-white">
      How We Use Your Data & Security
    </h3>

    <p className="text-white/85 leading-relaxed md:text-lg">
      We use your collected information strictly to deliver our core services, process your 
      transactions, respond to your inquiries, and provide essential service-related communications.
      <br /><br />
      We are committed to protecting the security of your Personal Information using 
      industry-standard security technologies such as SSL encryption.  
      <br /><br />
      We maintain a strict policy:  
      <strong>We do not sell your personal information to third parties.</strong>
    </p>
  </div>

  {/* SECTION 3 */}
  <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 md:p-10 space-y-6 shadow-lg">
    <h3 className="text-2xl md:text-3xl font-semibold text-white">
      Your Control and Contact Information
    </h3>

    <p className="text-white/85 leading-relaxed md:text-lg">
      You have the right to change, update, or request the deletion of your Personal Information 
      at any time. We will consider all such requests and respond within the time stated by 
      applicable law.  
      <br /><br />
      For full legal details, to understand your complete rights, or to submit a data request, 
      please refer to the 
      <Link 
        to="/privacy" 
        className="text-[#ffce1b] underline underline-offset-4 hover:text-white transition"
      >
        {" "}
        Full Privacy Policy
      </Link>
      {" "}or contact us directly at  
      <span className="text-[#ffce1b]"> info@InfluenceImagine.com</span>.
    </p>
  </div>

</div>

    </div>
  );
};

export default PrivacyPolicy;
