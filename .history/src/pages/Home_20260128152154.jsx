import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            <Hero />

            {/* Increased padding (py-32) to show more of the background image */}
            <section className="relative py-32 px-6 bg-[url('YOUR_IMAGE_URL_HERE')] bg-fixed bg-cover bg-[position:center_bottom]">
                {/* Overlay: 92% white keeps the grass visible but text readable */}
                <div className="absolute inset-0 bg-white/92"></div>

                <div className="relative max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-16 text-[#1a4332]">
                        Our Services
                    </h2>
                    
                    <Services />

                    <div className="text-center mt-14">
                        <Link
                            to="/contact"
                            className="inline-block bg-[#94a84a] hover:bg-[#1a4332] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-xl no-underline transition active:scale-95"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bottom Branding Section */}
            <section className="py-24 bg-[#1a4332] text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold mb-6">
                        Why Choose Avarro?
                    </h2>
                    <p className="text-xl opacity-90 leading-relaxed">
                        Locally owned and detail-focused. We aren't just mowing lawns; 
                        we're building a reputation for reliability and elite results 
                        across our community.
                    </p>
                </div>
            </section>
        </div>
    );
}