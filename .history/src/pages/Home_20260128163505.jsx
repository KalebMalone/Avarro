import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            {/* FIXED INFINITE BANNER */}
            <div className="fixed top-0 left-0 w-full z-[1000] bg-[#94a84a] text-white py-2 shadow-xl marquee-container border-b border-black/10">
                <div className="animate-marquee-custom">
                    {/* Triple the text for a seamless loop */}
                    <span className="text-sm md:text-base font-bold px-4">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                    <span className="text-sm md:text-base font-bold px-4">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                    <span className="text-sm md:text-base font-bold px-4">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                </div>
            </div>

            {/* Spacer to account for the fixed banner height */}
            <div className="h-[40px]"></div>

            <Hero />

            {/* Services Section */}
            <section className="relative py-24 px-6 bg-white">
                <div className="relative max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-16 text-[#1a4332]">
                        Our Core Services
                    </h2>
                    <Services />
                </div>
            </section>

            {/* Custom Requests Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-[#1a4332] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4 text-white">Need something else?</h2>
                        <p className="text-xl opacity-90 mb-8">
                            From **debris removal** and branch hauling to unique garden projects—we handle custom requests. 
                        </p>
                        <Link to="/contact" className="inline-block bg-[#94a84a] hover:bg-white hover:text-[#1a4332] text-white px-8 py-3 rounded-full font-bold transition-all no-underline">
                            Get a Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Avarro Standard */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4332] mb-16 text-center">
                        The Avarro Standard
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-4">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 italic">01</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3 text-center">Mowing</h4>
                            <p className="text-gray-600 text-sm text-center">Precision cutting at the ideal height for your lawn's health.</p>
                        </div>
                        <div className="p-4">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 italic">02</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3 text-center">Edging</h4>
                            <p className="text-gray-600 text-sm text-center">Clean, vertical lines for all walkways and garden beds.</p>
                        </div>
                        <div className="p-4">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 italic">03</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3 text-center">Weeding</h4>
                            <p className="text-gray-600 text-sm text-center">Targeted removal in beds and pavement cracks.</p>
                        </div>
                        <div className="p-4">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 italic">04</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3 text-center">Blowing</h4>
                            <p className="text-gray-600 text-sm text-center">Leaving your driveways and patios spotless every visit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}