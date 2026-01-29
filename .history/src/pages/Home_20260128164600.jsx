import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { setLoaded(true); }, []);

    return (
        <div className="bg-white font-sans selection:bg-[#94a84a] selection:text-white overflow-x-hidden">
            
            {/* 1. THE MARQUEE - Adjusted to sit perfectly below the Nav */}
            <div className="bg-[#94a84a] text-white py-3 shadow-sm marquee-container border-b border-black/5 mt-[64px]">
                <div className="animate-marquee-custom">
                    {[1, 2, 3].map((i) => (
                        <span key={i} className="text-xs md:text-sm font-bold px-8 tracking-[0.3em] uppercase whitespace-nowrap">
                            🚀 2026 PRE-SEASON APPLICATIONS OPEN — WEEKLY SLOTS IN REDMOND & BEND — PROFESSIONAL MOWING & EDGING — 
                        </span>
                    ))}
                </div>
            </div>

            {/* 2. HERO SECTION */}
            <div className={`transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Hero />
            </div>

            {/* 3. TRUST BAR (The 'Luxury' Stats) */}
            <div className="bg-[#1a4332] py-16 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <p className="text-[#94a84a] text-4xl font-light mb-2 italic">100%</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Reliability</p>
                    </div>
                    <div>
                        <p className="text-[#94a84a] text-4xl font-light mb-2 italic">Redmond</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Primary Route</p>
                    </div>
                    <div>
                        <p className="text-[#94a84a] text-4xl font-light mb-2 italic">2026</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Booking Now</p>
                    </div>
                    <div>
                        <p className="text-[#94a84a] text-4xl font-light mb-2 italic">Elite</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Equipment</p>
                    </div>
                </div>
            </div>

            {/* 4. CORE SERVICES */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-sm uppercase tracking-[0.6em] text-[#94a84a] font-bold mb-6">Service Suite</h2>
                        <h3 className="text-4xl md:text-7xl font-extrabold text-[#1a4332] tracking-tighter italic">The Avarro Standard.</h3>
                    </div>
                    <Services />
                </div>
            </section>

            {/* 5. TEXT-BASED FEATURE GRID (Replaces Gallery) */}
            <section className="py-32 bg-gray-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-[3rem] overflow-hidden shadow-2xl">
                        
                        {/* Box 1: The Quote */}
                        <div className="bg-[#1a4332] p-16 md:p-24 flex flex-col justify-center">
                            <h4 className="text-white text-3xl md:text-5xl font-light italic leading-tight mb-8">
                                "Excellence is not an act, but a habit."
                            </h4>
                            <div className="w-16 h-1 bg-[#94a84a] mb-8"></div>
                            <p className="text-white/60 font-light text-lg tracking-wide">
                                We believe a property’s potential is unlocked through consistent, professional care.
                            </p>
                        </div>

                        {/* Box 2: The Details */}
                        <div className="bg-white p-16 md:p-24 space-y-16">
                            <div>
                                <h5 className="text-[#1a4332] font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Equipment Care</h5>
                                <p className="text-gray-500 font-light text-lg italic leading-relaxed">
                                    Our blades are sharpened every 8 hours. This ensures a surgical cut that prevents turf disease and keeps your lawn vibrant.
                                </p>
                            </div>
                            <div className="pt-12 border-t border-gray-100">
                                <h5 className="text-[#1a4332] font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Client Privacy</h5>
                                <p className="text-gray-500 font-light text-lg italic leading-relaxed">
                                    We respect your estate. Our team operates with discretion, maintaining a clean workspace and secure gates at all times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION */}
            <section className="py-40 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-block border border-[#94a84a] text-[#94a84a] px-8 py-2 rounded-full text-[10px] font-bold tracking-[0.5em] uppercase mb-12">
                        Availability: 2026 Season
                    </div>
                    <h2 className="text-5xl md:text-8xl font-extrabold mb-10 text-[#1a4332] tracking-tighter">Elevate Your Estate.</h2>
                    <p className="text-xl text-gray-400 mb-16 font-light tracking-widest uppercase text-center mx-auto max-w-2xl">
                        Redmond — Bend — Tumalo
                    </p>
                    <Link to="/contact" className="group relative inline-block">
                        <span className="relative z-10 block bg-[#1a4332] text-white px-20 py-6 rounded-full font-bold tracking-[0.3em] uppercase text-xs transition-transform duration-500 group-hover:-translate-y-2 no-underline">
                            Apply for Service
                        </span>
                        <div className="absolute inset-0 bg-[#94a84a] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </Link>
                </div>
            </section>
        </div>
    );
}