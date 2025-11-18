import { Link } from 'react-router-dom';

const TermsofService = () => {
  return (
    <div className="bg-black min-h-screen pb-20 px-4 text-white">
      <div className="max-w-5xl mx-auto pt-32 space-y-16">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl pt-10 font-bold font-mont text-center text-[#ffce1b] drop-shadow-[0_0_18px_rgba(255,206,27,0.35)]">
          Terms of Service
        </h2>

        {/* INTRO SECTION */}
        <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 md:p-10 shadow-xl space-y-6">
          <p className="text-white/85 leading-relaxed md:text-lg">
            The website <em>InfluenceImagine.com</em> belongs to 
            <strong> Influence Imagine</strong>, which is a registered brand and 
            powered by <strong>Influence Imagine Indian Company</strong> (“Influence Imagine”, 
            “us”, and “we”).
            <br /><br />
            These Terms of Use (“Agreement”) define the legally binding terms for your use 
            of our Site and the Services delivered to you as a <strong>Client</strong>. 
            Influence Imagine operates as a full-service creative and digital agency, 
            executing customized <strong>Service Projects</strong> through our in-house 
            and contracted <strong>Service Providers</strong>.
            <br /><br />
            By registering for Services, you agree to this Agreement and confirm that you 
            have the authority and legal capacity to do so. You must be at least 18 years old 
            to access the Site or Services. If you do not agree with these terms, you may not 
            use the Services.
          </p>
        </div>

        {/* SECTION 1 – SERVICE */}
        <div className="space-y-10">

          {/* HEADING */}
          <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 md:p-10 shadow-xl space-y-6">
            <h3 className="text-3xl font-semibold text-white">1. Service</h3>

            {/* 1.1 GENERAL */}
            <h4 className="text-2xl font-semibold text-[#ffce1b]">1.1 General</h4>
            <p className="text-white/85 leading-relaxed md:text-lg">
              Influence Imagine provides an online platform for <strong>Clients</strong> 
              who purchase customized creative or digital services, and 
              <strong> Service Providers</strong> (employees or contractors) who execute those 
              services.  
              <br /><br />
              “Final Deliverable(s)” refers to the completed work purchased under a Service 
              Project—such as branding, web development, video production, or marketing 
              campaigns.  
              <br /><br />
              “IPR” includes all intellectual property rights such as copyrights, 
              trademarks, patents, trade secrets, or proprietary design rights.
            </p>

            {/* 1.2 SERVICE PROJECT */}
            <h4 className="text-2xl font-semibold text-[#ffce1b]">1.2 Service Project</h4>

            <p className="text-white/85 leading-relaxed md:text-lg">
              (a) A Client may create a <strong>Service Project</strong> by submitting a 
              Project Brief, making the required payment, and following the Site instructions. 
              The Project Brief must clearly define requirements so Service Providers can 
              create valid deliverables.
              <br /><br />
              (b) The Client must select a winning Project Concept by the deadline. If no winner 
              is selected, Influence Imagine retains the Client's advance payment with no refund 
              rights.
              <br /><br />
              (c) Service Project timeline rules:
            </p>

            <ul className="list-disc list-inside space-y-2 text-white/85 md:text-lg pl-3">
              <li>10 days submission + 5 days selection round</li>
              <li>After 15 days, the project auto-holds; Client must request reactivation</li>
              <li>Reactivation adds 3 more days per request</li>
              <li>If incomplete after 45 days, Client must clear due payments for reactivation</li>
              <li>After 90 days without completion, project closes permanently</li>
            </ul>

            <p className="text-white/85 leading-relaxed md:text-lg pt-4">
              (d) Clients may only use the <strong>Final Deliverables</strong>, not any 
              Project Concepts. Clients may not run duplicate projects on other platforms, 
              collude with providers, or avoid Influence Imagine fees.
              <br /><br />
              (e) Mandatory statutory rights granted in certain jurisdictions remain unaffected.
            </p>
          </div>
        </div>

        {/* SECTION 2 – PAYMENT TERMS */}
        <div className="bg-black/40 backdrop-blur-lg border border-[#ffce1b]/20 rounded-2xl p-8 md:p-10 shadow-xl space-y-6">
          <h3 className="text-3xl font-semibold text-white">2. Payment Terms</h3>

          <h4 className="text-2xl font-semibold text-[#ffce1b]">2.1 Payment and Delivery</h4>

          <p className="text-white/85 leading-relaxed md:text-lg">
            The Client agrees to pay all required payments to <strong>Influence Imagine</strong> 
            and clear all outstanding dues.  
            <br /><br />
            The Service Provider will upload the deliverables in the specified format. The 
            Client must complete all payments before selecting the final deliverable.
            <br /><br />
            “Client Payment” includes:
          </p>

          <ul className="list-disc list-inside space-y-2 text-white/85 md:text-lg pl-3">
            <li>The price selected by the Client when creating the Service Project</li>
            <li>Any addon prices selected during or after project creation</li>
            <li>The invoiced price for Bulk Project Requests</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TermsofService;
