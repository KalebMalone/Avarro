import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { setLoaded(true); }, []);

    return (
        <div className="bg-white font-sans selection:bg-[#94a84a] selection:text-white">
            
            {/* 1. SUBTLE MARQUEE
                We keep this because it drives the 'Accepting 2026' urgency.
                It sits naturally below the Nav.
            */}
            <div className="bg-[#94a84a] text-white py-3 marquee-container border-b border-black/5 mt-[64px]">
                <div className="animate-marquee-custom">
                    {[1, 2, 3].map((i) => (
                        <span key={i} className="text-[10px] md:text-xs font-bold px-12 tracking-[0.4em] uppercase whitespace-nowrap opacity-90">
                            🚀 2026 PRE-SEASON APPLICATIONS OPEN — WEEKLY SLOTS IN REDMOND & BEND — PROFESSIONAL MOWING & EDGING — 
                        </span>
                    ))}
                </div>
            </div>

            {/* 2. HERO SECTION */}
            <div className={`transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Hero />
            </div>

            {/* 3. CORE SERVICES
                Massive white space here creates that 'High-End' gallery feel.
            */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-[10px] uppercase tracking-[0.6em] text-[#94a84a] font-bold mb-4">Precision Maintenance</h2>
                        <h3 className="text-4xl md:text-6xl font-light text-[#1a4332] tracking-tighter italic">The Avarro Standard.</h3>
                    </div>
                    <Services />
                </div>
            </section>

            {/* 4. FINAL CALL TO ACTION
                Simplified. Just a clean header and a button.
            */}
            <section className="py-48 bg-gray-50/50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-10 text-[#1a4332] tracking-tighter leading-none">
                        Elevate Your Curb Appeal.
                    </h2>
                    <p className="text-lg text-gray-500 mb-16 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
                        Now accepting premium weekly maintenance applications for the 2026 season in Central Oregon.
                    </p>
                    
                    <Link to="/contact" className="inline-block bg-[#1a4332] text-white px-20 py-6 rounded-full font-bold tracking-[0.3em] uppercase text-[10px] transition-all duration-500 hover:bg-[#94a84a] hover:shadow-2xl hover:-translate-y-1 no-underline">
                        Apply for Service
                    </Link>
                </div>
            </section>

            {/* 5. MINIMAL FOOTER */}
            <footer className="py-12 bg-white border-t border-gray-100 text-center">
                <p className="text-[9px] font-bold tracking-[0.5em] text-gray-300 uppercase">
                    Avarro Landscaping ● Redmond, Oregon ● Est. 2024
                </p>
            </footer>
        </div>
    );
}