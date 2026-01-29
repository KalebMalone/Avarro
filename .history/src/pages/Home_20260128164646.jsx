import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { setLoaded(true); }, []);

    return (
        <div className="bg-white font-sans selection:bg-[#94a84a] selection:text-white overflow-x-hidden">
            
            {/* FIXED INFINITE BANNER 
                top-[80px] ensures it sits below the Navbar links without covering them.
                z-[998] keeps it below the Nav dropdowns but above the page content.
            */}
            <div className="fixed top-[80px] left-0 w-full z-[998] bg-[#94a84a] text-white py-2 shadow-xl marquee-container border-b border-black/10">
                <div className="animate-marquee-custom">
                    <span className="text-sm md:text-base font-bold px-4 tracking-[0.2em] uppercase flex-shrink-0">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                    <span className="text-sm md:text-base font-bold px-4 tracking-[0.2em] uppercase flex-shrink-0">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                    <span className="text-sm md:text-base font-bold px-4 tracking-[0.2em] uppercase flex-shrink-0">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                    </span>
                </div>
            </div>

            {/* Spacer: Combined height of Navbar + Banner */}
            <div className="h-[120px]"></div>

            {/* Hero Section */}
            <div className={`transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Hero />
            </div>

            {/* Core Services Section */}
            <section className="relative py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm uppercase tracking-[0.5em] text-[#94a84a] font-bold mb-4">Precision</h2>
                        <h3 className="text-4xl md:text-6xl font-extrabold text-[#1a4332] tracking-tight">The Weekly Standard</h3>
                    </div>
                    <Services />
                </div>
            </section>

            {/* LIFESTYLE GALLERY 
                Uses high-quality stock images and deep rounding for a premium look.
            */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Main Portfolio Card */}
                    <div className="h-[500px] md:h-[750px] bg-gray-100 rounded-[3rem] overflow-hidden relative group shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1974&auto=format&fit=crop" 
                            alt="Luxury Lawn" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 text-white">
                            <p className="text-xs uppercase tracking-[0.4em] font-bold mb-3 opacity-80">Portfolio</p>
                            <h4 className="text-3xl font-light italic tracking-wide">Estate Maintenance</h4>
                        </div>
                    </div>

                    {/* Side Column Cards */}
                    <div className="grid grid-rows-2 gap-8">
                        {/* Detail Image Card */}
                        <div className="bg-gray-100 rounded-[3rem] overflow-hidden relative group shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1592150621344-82839b6fc236?q=80&w=1000&auto=format&fit=crop" 
                                alt="Edging Detail" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-[#1a4332]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Philosophy Box */}
                        <div className="bg-[#94a84a] rounded-[3rem] p-12 flex flex-col justify-center text-white shadow-xl">
                            <h4 className="text-3xl md:text-4xl font-light mb-8 italic leading-tight">
                                "A clean edge is the signature of a professional."
                            </h4>
                            <div className="w-16 h-[1px] bg-white/40 mb-8"></div>
                            <p className="opacity-80 font-bold uppercase tracking-[0.3em] text-[10px]">
                                — Avarro Philosophy
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Avarro Experience (Luxury Value) */}
            <section className="py-32 bg-[#1a4332] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-[#94a84a] font-bold mb-6">Concierge Service</h2>
                        <p className="text-4xl md:text-7xl font-light italic leading-tight tracking-tight">Seamless. Professional. Absolute.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <div className="text-center group">
                            <div className="text-6xl mb-8 font-extralight text-[#94a84a]/30 group-hover:text-[#94a84a] transition-colors duration-700 italic">I</div>
                            <h3 className="text-lg font-bold mb-4 tracking-[0.2em] uppercase">Consistency</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-lg">Your property is serviced on the same day at the same time. Every single week.</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-6xl mb-8 font-extralight text-[#94a84a]/30 group-hover:text-[#94a84a] transition-colors duration-700 italic">II</div>
                            <h3 className="text-lg font-bold mb-4 tracking-[0.2em] uppercase">Communication</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-lg">Direct access to your pro. No call centers, just personal service.</p>
                        </div>
                        <div className="text-center group">
                            <div className="text-6xl mb-8 font-extralight text-[#94a84a]/30 group-hover:text-[#94a84a] transition-colors duration-700 italic">III</div>
                            <h3 className="text-lg font-bold mb-4 tracking-[0.2em] uppercase">Craftsmanship</h3>
                            <p className="text-gray-400 leading-relaxed font-light text-lg">We groom your estate with sharpened blades and professional intent.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-40 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-[#1a4332] tracking-tighter">Reserve Your Season.</h2>
                    <p className="text-xl text-gray-500 mb-12 font-light tracking-wide">Limited weekly spots available for the 2026 Redmond & Bend routes.</p>
                    <Link to="/contact" className="inline-block bg-[#1a4332] text-white px-16 py-6 rounded-full font-bold tracking-[0.2em] uppercase text-xs transition-all duration-500 hover:bg-[#94a84a] hover:shadow-2xl hover:-translate-y-2 no-underline">
                        Apply Now
                    </Link>
                </div>
            </section>
        </div>
    );
}