"use client";

export default function Home() {
  const user = {
    name: "Tamar Weiler",
    title: "DCM & Consul",
    embassy: "Embassy of Israel",
    address: "Abdulla Kahar St. 3, Tashkent, Republic of Uzbekistan",
    website: "http://new.embassies.gov.il",
    phoneDisplay: "+998-78-1407500",
    phoneCall: "+998781407500",
    email: "DCM@tashkent.mfa.gov.il"
  };

  return (
    <main className="min-h-screen bg-[#eef1f5] flex items-center justify-center p-4 font-sans text-gray-800" dir="ltr">
      <div className="w-full max-w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col p-6">
        
        {/* Header: State Emblem */}
        <div className="flex justify-center mb-4">
          <img 
            src="/emblem.jpg" 
            alt="State of Israel Emblem" 
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Identity Section */}
        <div className="text-center mb-5 pb-4 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            {user.name}
          </h1>
          <p className="text-sm font-semibold text-blue-900 mt-0.5">
            {user.title}
          </p>
          <p className="text-xs text-gray-500 font-medium mt-1">
            {user.embassy}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
            {user.address}
          </p>
        </div>

        {/* Save Contact Button */}
        <a
          href="/contact.vcf"
          download="contact.vcf"
          className="w-full py-3 bg-[#134383] hover:bg-[#0e3264] text-white rounded-xl font-medium text-sm transition-all duration-200 shadow-md text-center mb-5 block"
        >
          Save Contact (vCard)
        </a>

        {/* Action Links */}
        <div className="space-y-2.5 mb-6 text-sm">
          <a
            href={`tel:${user.phoneCall}`}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Phone</span>
              <span className="font-semibold text-gray-800 text-xs">{user.phoneDisplay}</span>
            </div>
            <span className="text-xs font-semibold text-blue-700">Call</span>
          </a>

          <a
            href={`mailto:${user.email}`}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors"
          >
            <div className="flex flex-col truncate pr-2">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Email</span>
              <span className="font-semibold text-gray-800 text-xs truncate">{user.email}</span>
            </div>
            <span className="text-xs font-semibold text-blue-700 shrink-0">Send</span>
          </a>

          <a
            href={user.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors"
          >
            <div className="flex flex-col truncate pr-2">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Website</span>
              <span className="font-semibold text-gray-800 text-xs truncate">new.embassies.gov.il</span>
            </div>
            <span className="text-xs font-semibold text-blue-700 shrink-0">Visit</span>
          </a>
        </div>

        {/* Footer: Israel Colorful Logo */}
        <div className="pt-3 border-t border-gray-100 flex justify-center items-center">
          <img 
            src="/israel-logo.jpg" 
            alt="ISRAEL" 
            className="h-9 w-auto object-contain"
          />
        </div>

      </div>
    </main>
  );
}