import Services from "../components/Services";

export default function ServicesPage() {
    return (
        <div className="bg-white font-sans selection:bg-[#94a84a] selection:text-white">
            {/* Essential Spacer for Global Banner */}
            <div className="h-[104px]"></div>

            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-20">
                        <h1 className="text-sm uppercase tracking-[0.6em] text-[#94a84a] font-bold mb-4">Our Offerings</h1>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-[#1a4332] tracking-tighter italic">Professional Maintenance</h2>
                    </div>
                    
                    {/* This pulls in your existing Services grid component */}
                    <Services />
                    <div className="mt-32 p-12 bg-gray-50 rounded-[3rem] border border-gray-100 text-center">
                        <h3 className="text-2xl font-bold text-[#1a4332] mb-4">Custom Property Needs?</h3>
                        <p className="text-gray-500 font-light mb-8">We offer specialized solutions for estates requiring more than just a weekly mow.</p>
                        <a href="/contact" className="text-[#94a84a] font-bold tracking-widest uppercase text-xs hover:text-[#1a4332] transition-colors">
                            Inquire for Details →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}