import { Link } from "react-router-dom";
// 1. Import the image from your assets folder
import heroImage from "../assets/hero-lawn.jpg"; 

export default function Hero() {
    return (
        /* 2. Use the imported name in a style object instead of a tailwind class */
        <section 
            className="relative h-[100vh] bg-cover bg-[position:center_bottom] bg-no-repeat -mt-100 md:-mt-20"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="h-full flex items-center bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
                        Avarro Landscaping
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90 font-medium">
                        Professional Lawn Care & Maintenance
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#94a84a] hover:bg-[#1a4332] text-white transition-all px-10 py-4 rounded-full font-bold text-xl shadow-xl no-underline active:scale-95"
                    >
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}