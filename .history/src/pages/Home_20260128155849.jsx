import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            {/* 2026 Pre-Season Banner */}
            <div className="bg-[#94a84a] text-white py-3 px-6 text-center font-bold text-sm md:text-base sticky top-0 z-50 shadow-md">
                🚀 Now accepting 2026 Pre-Season applications! Secure your spot on our weekly route today.
            </div>

            <Hero />

            {/* Services Section */}
            <section className="relative py-24 px-6 bg-[url('YOUR_IMAGE_PATH_HERE')] bg-fixed bg-cover bg-[position:center_bottom]">
                <div className="absolute inset-0 bg-white/92"></div>
                <div className="relative max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-16 text-[#1a4332]">
                        Our Core Services
                    </h2>
                    <Services />
                </div>
            </section>

            {/* The Avarro Standard - 3 Step Process */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4332] mb-4">
                        The Avarro Standard
                    </h2>
                    <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
                        We don't just cut grass. We provide a complete property refresh every single visit.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-6">
                            <div className="text-[#94a84a] text-6xl font-black mb-4 opacity-20">01</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3">Precision Mowing</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Professional-grade equipment set to the perfect height for your specific grass type.
                            </p>
                        </div>

                        <div className="p-6">
                            <div className="text-[#94a84a] text-6xl font-black mb-4 opacity-20">02</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3">String Edging</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Defining every walkway, driveway, and flower bed with a crisp, clean vertical line.
                            </p>
                        </div>

                        <div className="p-6">
                            <div className="text-[#94a84a] text-6xl font-black mb-4 opacity-20">03</div>
                            <h4 className="text-xl font-bold text-[#1a4332] mb-3">Thorough Blowing</h4>
                            <p className="text-gray-600 leading-relaxed">
                                We clear all clippings from your hard surfaces, leaving your property spotless.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16">
                        <Link
                            to="/contact"
                            className="bg-[#1a4332] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#94a84a] transition-all shadow-lg no-underline"
                        >
                            Apply For 2026 Season
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}