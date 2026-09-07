"use client";

export default function Home() {
  const user = {
    name: "Tamar Weiler",
    title: "DCM & Consul",
    bio: "Embassy of Israel, Tashkent",
    displayPhone: "+998-78-1407500",
    callPhone: "+998781407500",
    email: "DCM@tashkent.mfa.gov.il"
  };

  return (
    <main className="min-h-screen bg-[#f3f4f8] flex items-center justify-center p-4 font-sans" dir="ltr">
      <div className="w-full max-w-[390px] bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col items-center p-8 text-center border border-gray-100">
        <div className="w-24 h-24 rounded-full bg-[#8B3A62] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-sm">
          TW
        </div>
        <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1">
          {user.title}
        </span>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {user.name}
        </h1>
        <p className="text-xs leading-relaxed text-gray-500 max-w-[280px] mb-6">
          {user.bio}
        </p>
        <a
          href="/contact.vcf"
          download="contact.vcf"
          className="w-full py-3.5 bg-[#8B3A62] hover:bg-[#732f51] text-white rounded-full font-medium text-sm transition-all duration-200 shadow-md mb-6 inline-block"
        >
          Save Contact
        </a>
        <div className="w-full space-y-3">
          <a
            href={`tel:${user.callPhone}`}
            className="flex items-center justify-between px-4 py-3.5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors text-gray-700 text-sm font-medium"
          >
            <span>Phone: {user.displayPhone}</span>
            <span className="text-xs text-gray-400">Call</span>
          </a>
          <a
            href={`mailto:${user.email}`}
            className="flex items-center justify-between px-4 py-3.5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors text-gray-700 text-sm font-medium"
          >
            <span>Email: {user.email}</span>
            <span className="text-xs text-gray-400">Send</span>
          </a>
        </div>
      </div>
    </main>
  );
}