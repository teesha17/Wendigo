import { useState } from "react";


export default function HomePage() {
    const [activeNav, setActiveNav] = useState("Services");

    return (
        <div className="min-h-screen bg-grid font-sans">
            {/* Top Navigation */}
            <header className="flex justify-center pt-6">
                <div className="w-[92%] max-w-7xl bg-gradient-to-r from-[#061a2e] to-[#0b2a4a] rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-lg">🦌</span>
                        </div>

                        <div className="flex flex-col leading-[1.05]">
                            <span className="text-white font-semibold tracking-[0.32em] text-sm">
                                WENDIGO
                            </span>
                            <span className="text-white/70 font-normal tracking-[0.2em] text-[10px] mt-1">
                                ADVISORS
                            </span>
                        </div>

                    </div>


                    <nav className="hidden md:flex items-center gap-2 text-sm text-white/80">
                        {["Services", "Pricing", "About Us", "Testimonials", "Resources"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveNav(item)}
                                    className={`px-4 py-2 rounded-full transition-all duration-200
                                            ${activeNav === item
                                            ? "bg-white/10 text-white shadow-inner"
                                            : "hover:bg-white/5"
                                        }`}
                                >
                                    {item}
                                    {(item === "Services" || item === "Resources") && (
                                        <span className="ml-1">▾</span>
                                    )}
                                </button>
                            )
                        )}
                    </nav>


                    <button className="bg-gradient-to-r from-[#4da3ff] to-[#2f7cf6] text-white text-sm font-medium px-5 py-2 rounded-full shadow">
                        Contact Us for Free
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="mt-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <div className="text-sm text-[#7aa6d8] mb-4">Services <span className="text-[#000000] font-medium">&gt; IT Health Check</span></div>

                    <span className="inline-block mb-6 px-4 py-1 rounded-full 
  bg-[#e8f1ff] 
  text-[#2f7cf6] 
  text-xs font-semibold tracking-wide
  border border-[#2f7cf6]/30">
                        IT HEALTH CHECK
                    </span>


                    <h1 className="text-5xl font-extrabold leading-tight text-[#020617]">
                        <span className="relative inline-block">
                            <span className="relative z-10">Know Exactly</span>
                            <span className="absolute left-0 right-0 bottom-1 h-[6px] bg-[#9ec5ff]/80 blur-[0.5px] rounded-sm"></span>
                        </span>
                        <br />

                        <span className="relative inline-block">
                            <span className="relative z-10">Where Your IT</span>
                            <span className="absolute left-0 right-0 bottom-1 h-[6px] bg-[#9ec5ff]/80 blur-[0.5px] rounded-sm"></span>
                        </span>
                        <br />

                        <span className="relative inline-block">
                            <span className="relative z-10">Stands.</span>
                            <span className="absolute left-0 right-0 bottom-1 h-[6px] bg-[#9ec5ff]/80 blur-[0.5px] rounded-sm"></span>
                        </span>
                    </h1>


                    <p className="mt-6 max-w-[400px] text-[#334155] leading-relaxed text-justify">
                        A <strong>2–3 week assessment</strong> giving <strong>healthcare leaders clear,
                            actionable insight</strong> into <strong>their technology—minus the jargon.</strong>
                    </p>


                    <button className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#4da3ff] to-[#2f7cf6] text-white px-6 py-3 rounded-full font-medium shadow-lg">
                        Take Assessment
                        <span className="w-5 h-5 rounded-full 
  bg-white/20 
  border border-white/70
  flex items-center justify-center 
  text-white text-sm leading-none">
                            →
                        </span>

                    </button>
                </div>

                {/* Right Image Card */}
                <div className="flex justify-center">
                    <div className="relative bg-[#dbeafe] rounded-[32px] p-6">
                        <div className="bg-white rounded-[24px] overflow-hidden shadow-xl">
                            <img
                                src="https://tse4.mm.bing.net/th/id/OIP.L_MX7MWzLMNdTAMFiF9XggHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
                                alt="IT Health Check"
                                className="w-[420px] h-[420px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
