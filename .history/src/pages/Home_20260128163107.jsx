import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            {/* Sticky Moving Banner */}
            <div className="sticky top-0 z-[100] bg-[#94a84a] text-white py-2 overflow-hidden shadow-lg border-b border-black/5">
                <div className="flex whitespace-nowrap animate-marquee">
                    {/* flex-shrink-0 is the secret to stop the stretching */}
                    <span className="text-sm md:text-base font-bold px-4 flex-shrink-0">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                    <span className="text-sm md:text-base font-bold px-4 flex-shrink-0">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                </div>
            </div>

            <Hero />

            {/* Core Services Section */}
            <section className="relative py-24 px-6 bg-[url('YOUR_IMAGE_PATH_HERE')] bg-fixed bg-cover bg-[position:center_bottom]">
                <div className="absolute inset-0 bg-white/92"></div>
                <div className="relative max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-16 text-[#1a4332]">
                        Our Core Services
                    </h2>
                    <Services />
                </div>
            </section>

            {/* Custom Requests & Debris Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-[#1a4332] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4 text-white">Need something else?</h2>
                        <p className="text-xl opacity-90 mb-8">
                            From **debris removal** and branch hauling to unique garden projects—we handle custom requests. 
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-[#94a84a] hover:bg-white hover:text-[#1a4332] text-white px-8 py-3 rounded-full font-bold transition-all no-underline"
                        >
                            Get a Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Avarro Standard - 4 Step Process */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4332] mb-16">
                        The Avarro Standard
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-4 group">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity">01</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3">Mowing</h4>
                            <p className="text-gray-600 text-sm">Precision cutting at the ideal height for your lawn's health.</p>
                        </div>
                        <div className="p-4 group">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity">02</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3">Edging</h4>
                            <p className="text-gray-600 text-sm">Clean, vertical lines for all walkways and garden beds.</p>
                        </div>
                        <div className="p-4 group">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity">03</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3">Weeding</h4>
                            <p className="text-gray-600 text-sm">Targeted removal in beds and pavement cracks.</p>
                        </div>
                        <div className="p-4 group">
                            <div className="text-[#94a84a] text-5xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity">04</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3">Blowing</h4>
                            <p className="text-gray-600 text-sm">Leaving your driveways and patios spotless every visit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}