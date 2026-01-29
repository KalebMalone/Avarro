import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            {/* STICKY BANNER 
               'sticky top-0' keeps it at the top.
               'z-[999]' ensures it floats above the Nav and Hero.
            */}
            <div className="sticky top-0 z-[999] bg-[#94a84a] text-white py-2 shadow-xl marquee-container border-b border-black/10">
                <div className="animate-marquee-custom">
                    <span className="text-sm md:text-base font-bold px-4">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL —
                    </span>
                    <span className="text-sm md:text-base font-bold px-4">
                        🚀 NOW ACCEPTING 2026 PRE-SEASON APPLICATIONS — SECURE YOUR WEEKLY SPOT TODAY — PROFESSIONAL MOWING, EDGING & DEBRIS REMOVAL —
                    </span>
                </div>
            </div>

            {/* The rest of your content starts here */}
            <Hero />

            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-16 text-[#1a4332]">
                        Our Core Services
                    </h2>
                    <Services />
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-[#1a4332] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">Need something else?</h2>
                        <p className="text-xl opacity-90 mb-8">
                            From **debris removal** and branch hauling to unique garden projects—we handle custom requests.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#94a84a] hover:bg-white hover:text-[#1a4332] text-white px-8 py-3 rounded-full font-bold transition-all no-underline">
                            Get a Custom Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}