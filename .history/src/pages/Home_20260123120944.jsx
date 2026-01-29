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
                        className="inline-block bg-primary hover:bg-darkgreen text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg no-underline"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>

            {/* Contrast section */}
            <section className="py-24 bg-darkgreen text-white text-center">
                <h2 className="text-4xl font-extrabold mb-6">
                    Why Choose Avarro?
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Locally owned. Detail-focused. Built on reliability and results.
                </p>
            </section>
        </>
    );
}
