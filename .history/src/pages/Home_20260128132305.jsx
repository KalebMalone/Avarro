import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="py-24 bg-gray-50">
                <h2 className="text-4xl font-extrabold text-center mb-16">
                    Our Services
                </h2>
                <div className="max-w-6xl mx-auto px-6">
                    <Services />
                </div>

                <div className="text-center mt-14">
                    <Link
                        to="/contact"
                        /* Using HEX code to ensure the color shows up regardless of config */
                        className="inline-block bg-[#1a4332] hover:bg-[#0f291e] text-white px-10 py-4 rounded-lg font-bold text-xl shadow-xl no-underline transition-transform active:scale-95"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>

            <section className="py-24 bg-[#0f291e] text-white text-center">
                <h2 className="text-4xl font-extrabold mb-6">
                    Why Choose Avarro?
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto px-6">
                    Locally owned. Detail-focused. Built on reliability and results.
                </p>
            </section>
        </>
    );
}