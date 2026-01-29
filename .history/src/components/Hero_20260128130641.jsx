export default function Hero() {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1603993097397-89e41fdbf1c0?auto=format&fit=crop&w=1950&q=80" 
                    className="w-full h-full object-cover"
                    alt="Landscaping Background"
                />
                <div className="absolute inset-0 bg-black/40" /> 
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <span className="uppercase tracking-[0.3em] text-secondary font-bold text-sm mb-4 block">Central Oregon's Finest</span>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                    Crafting Nature's <br/> Finest Canvas
                </h1>
                <Link
                    to="/contact"
                    className="inline-block bg-secondary hover:bg-white hover:text-primary transition-all duration-300 px-12 py-5 rounded-full font-bold text-lg shadow-2xl no-underline"
                >
                    Request a Free Quote
                </Link>
            </div>
        </section>
    );
}