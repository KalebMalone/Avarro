import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1603993097397-89e41fdbf1c0?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
            <div className="h-full flex items-center bg-gradient-to-t from-black/60 to-black/30">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
                        Transforming Outdoor Spaces
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90">
                        Professional, reliable landscaping services you can trust.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-secondary hover:bg-red-700 transition px-10 py-4 rounded-full font-bold text-xl shadow-xl no-underline"
                    >
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}
