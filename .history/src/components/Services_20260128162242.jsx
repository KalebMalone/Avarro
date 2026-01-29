import { Link } from "react-router-dom";

const mainServices = [
    {
        title: "Precision Mowing",
        price: "Weekly / Bi-Weekly",
        desc: "Professional-grade mowing at the ideal height for your lawn's health. We follow a strict schedule so you never have to wonder when we're coming.",
        features: ["Healthy grass height", "Clean stripes", "Consistent schedule"],
        icon: "🚜"
    },
    {
        title: "Mechanical Edging",
        price: "Included with Mowing",
        desc: "We don't just mow; we frame your lawn. We create crisp, vertical edges along all lawns, sidewalks, and flower beds.",
        features: ["Clean pavement lines", "Defined flower beds", "Sidewalk clearing"],
        icon: "✂️"
    },
    {
        title: "Power Blowing",
        price: "The Finishing Touch",
        desc: "We clear all clippings and debris from your hard surfaces. Your driveway and patio will be cleaner than when we arrived.",
        features: ["Driveway clearing", "Patio cleanup", "No leftover clippings"],
        icon: "💨"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-32 pb-16 bg-[#1a4332] text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Services</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto px-6">
                    Professional lawn maintenance tailored for the 2026 season.
                </p>
            </section>

            {/* The Big Three - Featured Grid */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1a4332]">The Weekly Standard</h2>
                        <div className="w-20 h-1 bg-[#94a84a] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {mainServices.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:-translate-y-2 transition-all">
                                <div className="text-4xl mb-6">{s.icon}</div>
                                <h3 className="text-2xl font-bold text-[#1a4332] mb-2">{s.title}</h3>
                                <p className="text-[#94a84a] font-bold text-sm mb-4 uppercase tracking-wider">{s.price}</p>
                                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                                <ul className="space-y-2">
                                    {s.features.map((f, j) => (
                                        <li key={j} className="flex items-center text-sm text-gray-500">
                                            <span className="text-[#94a84a] mr-2">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Services - Weeds & Debris */}
            <section className="py-20 bg-gray-50 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a4332] mb-6">Additional Solutions</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Beyond our standard maintenance, we offer specialized care to keep your property looking its best.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex bg-white p-6 rounded-2xl shadow-sm">
                                    <div className="text-3xl mr-6">🌱</div>
                                    <div>
                                        <h4 className="font-bold text-[#1a4332]">Targeted Weed Control</h4>
                                        <p className="text-gray-600 text-sm">Removal of weeds from mulch beds, gravel areas, and pavement cracks.</p>
                                    </div>
                                </div>
                                <div className="flex bg-white p-6 rounded-2xl shadow-sm">
                                    <div className="text-3xl mr-6">🪵</div>
                                    <div>
                                        <h4 className="font-bold text-[#1a4332]">Custom Debris Removal</h4>
                                        <p className="text-gray-600 text-sm">Hauling away fallen branches, storm debris, or old yard waste piles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Call to Action */}
                        <div className="bg-[#1a4332] rounded-3xl p-10 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4 text-white">Need a custom quote?</h3>
                            <p className="opacity-80 mb-8 leading-relaxed">
                                Every property is unique. Whether you have a massive leaf pile or need specialized bed work, we're here to help.
                            </p>
                            <Link to="/contact" className="inline-block bg-[#94a84a] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#1a4332] transition-all no-underline">
                                Request Custom Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Satisfaction Guarantee */}
            <section className="py-20 text-center px-6">
                <div className="max-w-3xl mx-auto bg-[#94a84a]/10 p-12 rounded-3xl border-2 border-dashed border-[#94a84a]">
                    <h2 className="text-3xl font-bold text-[#1a4332] mb-4 text-center">The Avarro Guarantee</h2>
                    <p className="text-gray-700 text-lg text-center">
                        "If you aren't 100% satisfied with the quality of our cut, edging, or cleanup, we will return within 24 hours to make it right. No questions asked."
                    </p>
                </div>
            </section>
        </div>
    );
}