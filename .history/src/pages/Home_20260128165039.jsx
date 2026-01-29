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

            {/* LUXURY VALUE SECTION */}
            <section className="py-32 bg-[#1a4332] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-[#94a84a] font-bold mb-6">The Avarro Experience</h2>
                        <p className="text-3xl md:text-6xl font-light italic leading-tight">"Excellence is found in the details."</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <div className="text-center group">
                            <div className="text-5xl mb-8 font-extralight text-[#94a84a] group-hover:scale-110 transition-transform duration-500">01</div>
                            <h3 className="text-xl font-bold mb-4 tracking-widest uppercase">Unmatched Reliability</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-lg">
                                We arrive on the same day, every week. Consistent, professional, and entirely hands-off for you.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl mb-8 font-extralight text-[#94a84a] group-hover:scale-110 transition-transform duration-500">02</div>
                            <h3 className="text-xl font-bold mb-4 tracking-widest uppercase">Bespoke Property Care</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-lg">
                                Every estate has a custom profile. We know your specific needs, your gate codes, and your preferences.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="text-5xl mb-8 font-extralight text-[#94a84a] group-hover:scale-110 transition-transform duration-500">03</div>
                            <h3 className="text-xl font-bold mb-4 tracking-widest uppercase">Elite Execution</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-lg">
                                Using precision equipment and sharpened blades to ensure the cleanest, healthiest cut for your turf.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Requests / CTA */}
            <section className="py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 text-center border border-gray-100 shadow-sm">
                        <h2 className="text-4xl font-bold mb-6 text-[#1a4332]">Beyond the Lawn</h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
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
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-40 grayscale">
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