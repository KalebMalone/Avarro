import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white font-sans selection:bg-[#94a84a] selection:text-white">
            {/* FIXED INFINITE BANNER */}
            <div className="fixed top-[64px] left-0 w-full z-[999] bg-[#94a84a] text-white py-2 shadow-xl marquee-container border-b border-black/10">
                <div className="animate-marquee-custom">
                    <span className="text-sm md:text-base font-bold px-4 tracking-wider">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                    <span className="text-sm md:text-base font-bold px-4 tracking-wider">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                    <span className="text-sm md:text-base font-bold px-4 tracking-wider">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                </div>
            </div>

            {/* Spacer to push content below the fixed Navbar + Banner */}
            <div className="h-[104px]"></div>

            <Hero />

            {/* Core Services Section */}
            <section className="relative py-32 px-6 bg-white">
                <div className="relative max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-[#94a84a] font-bold mb-4">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a4332]">Core Maintenance</h3>
                    </div>
                    <Services />
                </div>
            </section>

            {/* Custom Requests / CTA - Simplified Transition */}
            <section className="py-32 bg-gray-50/50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-[4rem] p-12 md:p-20 text-center border border-gray-100 shadow-sm">
                        <h2 className="text-4xl font-bold mb-6 text-[#1a4332]">Beyond the Lawn</h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            From debris removal to specialized seasonal projects, we offer custom solutions tailored to your property’s unique requirements.
                        </p>
                        <Link 
                            to="/contact" 
                            className="inline-block bg-[#1a4332] hover:bg-[#94a84a] text-white px-12 py-5 rounded-full font-bold tracking-widest uppercase text-sm transition-all duration-500 shadow-xl hover:-translate-y-1 no-underline"
                        >
                            Request A Consult
                        </Link>
                    </div>
                </div>
            </section>

            {/* Small Footer/Trust Section */}
            <section className="py-16 bg-white border-t border-gray-50">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-30 grayscale">
                    <span className="font-bold tracking-[0.2em] text-[#1a4332]">LICENSED & INSURED</span>
                    <span className="font-bold tracking-[0.2em] text-[#1a4332] hidden md:block">●</span>
                    <span className="font-bold tracking-[0.2em] text-[#1a4332]">2026 PRE-SEASON BOOKING</span>
                    <span className="font-bold tracking-[0.2em] text-[#1a4332] hidden md:block">●</span>
                    <span className="font-bold tracking-[0.2em] text-[#1a4332]">EST. 2024</span>
                </div>
            </section>
        </div>
    );
}