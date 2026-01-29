export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center overflow-hidden">
            {/* Background with Parallax effect */}
            <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603993097397-89e41fdbf1c0?auto=format&fit=crop&w=1950&q=80')] 
                bg-cover bg-center bg-fixed scale-105"
            />
            
            {/* Better Overlay - more contrast for text */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 text-white w-full">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
                        Lush Lawns. <br/>
                        <span className="text-green-400">Zero Stress.</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-100 font-medium max-w-lg">
                        Central Oregon's premier choice for expert lawn care and landscape transformation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 text-center">
                            Request Free Quote
                        </a>
                        <a href="/services" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all text-center">
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}