import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="h-[100vh] bg-[url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg')] bg-cover bg-center -mt-32 md:-mt-20">
            <div className="h-full flex items-center bg-gradient-to-t from-black/60 to-black/30">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
                        Transforming Outdoor Spaces
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90">
                        Professional, reliable landscaping services you can trust.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#94a84a] hover:bg-[#1a4332] text-white transition px-10 py-4 rounded-full font-bold text-xl shadow-xl no-underline active:scale-95"
                    >
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}