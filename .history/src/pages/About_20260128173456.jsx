import { Link } from "react-router-dom";
// 1. Import your downloaded image here
import aboutImage from "../assets/hero-lawn.jpg"; 

export default function About() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="pt-32 pb-16 bg-[#1a4332] text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">The Avarro Story</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto px-6">
                    Built on hard work, powered by precision, and dedicated to our local community.
                </p>
            </section>
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Image Side - Using your downloaded photo */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden shadow-2xl border-8 border-white">
                            <img 
                                src={aboutImage} 
                                alt="Avarro Landscaping Owner" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[#94a84a] text-white p-8 rounded-xl shadow-xl hidden md:block">
                            <p className="text-2xl font-bold">2026</p>
                            <p className="text-sm uppercase tracking-widest">Est. Season</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a4332] mb-4 text-left">Local. Driven. Detailed.</h2>
                            <p className="text-gray-600 leading-relaxed text-lg text-left">
                                Avarro Landscaping was founded with a simple goal: to provide the most reliable lawn care service in the area. We noticed that many big companies rush through jobs, leaving messy edges and missed weeds. 
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#94a84a] text-left">
                            <h4 className="font-bold text-[#1a4332] mb-2 italic text-left">"We treat every yard as if it were our own."</h4>
                            <p className="text-gray-600 text-sm italic">— The Avarro Mission</p>
                        </div>

                        <div className="space-y-4 text-left">
                            <h3 className="text-xl font-bold text-[#1a4332] text-left">Why choose a new local business?</h3>
                            <ul className="space-y-3 p-0">
                                <li className="flex items-center text-gray-700 list-none">
                                    <span className="text-[#94a84a] mr-3 font-bold">✓</span> 
                                    Personalized attention to every detail.
                                </li>
                                <li className="flex items-center text-gray-700 list-none">
                                    <span className="text-[#94a84a] mr-3 font-bold">✓</span> 
                                    Consistent weekly scheduling you can count on.
                                </li>
                                <li className="flex items-center text-gray-700 list-none">
                                    <span className="text-[#94a84a] mr-3 font-bold">✓</span> 
                                    Direct communication with the owner.
                                </li>
                            </ul>
                        </div>

                        <div className="text-left">
                            <Link 
                                to="/contact" 
                                className="inline-block bg-[#1a4332] text-white px-8 py-4 rounded-full font-bold hover:bg-[#94a84a] transition-all no-underline"
                            >
                                Work With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Section */}
            <section className="py-20 bg-[#1a4332] text-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-white">The Three Pillars of Avarro</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <h4 className="text-[#94a84a] text-xl font-bold mb-2">Reliability</h4>
                            <p className="opacity-80">If we are on the schedule, we show up. Period.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="text-[#94a84a] text-xl font-bold mb-2">Precision</h4>
                            <p className="opacity-80">Clean stripes and crisp edges aren't optional—they're the standard.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="text-[#94a84a] text-xl font-bold mb-2">Integrity</h4>
                            <p className="opacity-80">Fair pricing and honest work. No hidden fees or "halfway" jobs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}