import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    // This state helps trigger animations when the page loads
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { setLoaded(true); }, []);

    return (
        <div className="bg-white font-sans selection:bg-[#94a84a] selection:text-white overflow-x-hidden">
            
            {/* FIXED INFINITE BANNER */}
            <div className="fixed top-[64px] left-0 w-full z-[999] bg-[#94a84a] text-white py-2 shadow-xl marquee-container border-b border-black/10">
                <div className="animate-marquee-custom">
                    {[1, 2, 3].map((i) => (
                        <span key={i} className="text-sm md:text-base font-bold px-4 tracking-[0.2em] uppercase">
                            🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL — 
                        </span>
                    ))}
                </div>
            </div>

            <div className="h-[104px]"></div>

            {/* HERO SECTION with Fade-In */}
            <div className={`transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Hero />
            </div>

            {/* CORE SERVICES */}
            <section className="relative py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm uppercase tracking-[0.5em] text-[#94a84a] font-bold mb-4">Precision</h2>
                        <h3 className="text-4xl md:text-6xl font-extrabold text-[#1a4332] tracking-tight">The Weekly Standard</h3>
                    </div>
                    <Services />
                </div>
            </section>

            {/* LIFESTYLE GALLERY (Luxury Touch) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-[400px] md:h-[600px] bg-gray-200 rounded-[2rem] overflow-hidden relative group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
                        <img src="https://images.unsplash.com/photo-1558905619-172542632462?auto=format&fit=crop&q=80" alt="Lawn" className="w-full h-full object-cover" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-xs uppercase tracking-widest font-bold mb-2">Portfolio</p>
                            <h4 className="text-2xl font-light italic">Estate Maintenance</h4>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-4">
                        <div className="bg-gray-200 rounded-[2rem] overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1592150621344-82839b6fc236?auto=format&fit=crop&q=80" alt="Detail" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#1a4332]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-white border border-white px-6 py-2 rounded-full uppercase text-xs tracking-widest">View Detail</span>
                            </div>
                        </div>
                        <div className="bg-[#94a84a] rounded-[2rem] p-12 flex flex-col justify-center text-white">
                            <h4 className="text-3xl font-light mb-4 italic">"A clean edge is the signature of a professional."</h4>
                            <p className="opacity-80 font-bold uppercase tracking-widest text-xs">— Avarro Philosophy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE AVARRO EXPERIENCE */}
            <section className="py-32 bg-[#1a4332] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-[#94a84a] font-bold mb-6">Concierge Service</h2>
                        <p className="text-4xl md:text-7xl font-light italic leading-tight tracking-tight">Seamless. Professional. Absolute.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        {experienceData.map((item, idx) => (
                            <div key={idx} className="text-center group cursor-default">
                                <div className="text-6xl mb-8 font-extralight text-[#94a84a]/30 group-hover:text-[#94a84a] transition-colors duration-700 italic">{item.num}</div>
                                <h3 className="text-lg font-bold mb-4 tracking-[0.2em] uppercase">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light text-lg px-4">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
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

const experienceData = [
    { num: "I", title: "Consistency", text: "Your property is serviced on the same day at the same time. Every single week." },
    { num: "II", title: "Communication", text: "Direct access to your pro. No call centers, just personal service." },
    { num: "III", title: "Craftsmanship", text: "We don't just cut grass; we groom your estate with sharpened blades and intent." }
];