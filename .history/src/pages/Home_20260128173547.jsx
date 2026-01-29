import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
    return (
        <div className="bg-white font-sans selection:bg-[#94a84a] selection:text-white">
            <div className="h-[104px]"></div>
            <Hero />
            <section className="relative py-32 px-6 bg-white">
                <div className="relative max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-[#94a84a] font-bold mb-4">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a4332]">Core Maintenance</h3>
                    </div>
                    <Services />
                </div>
            </section>
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