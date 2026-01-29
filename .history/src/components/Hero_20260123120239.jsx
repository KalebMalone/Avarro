export default function Hero() {
    return (
        // ACTION: pt-32 class removed. Spacing now handled by App.jsx <main> tag.
        <section 
            className="bg-[url('https://images.unsplash.com/photo-1603993097397-89e41fdbf1c0?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center h-[90vh] flex items-center"
        >
            {/* Sleek Overlay: subtle black to transparent gradient */}
            <div className="w-full h-full flex items-center bg-gradient-to-t from-black/50 to-black/20">
                <div className="max-w-4xl mx-auto px-6 text-white text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 leading-tight tracking-tight drop-shadow-2xl">
                        Transforming Your Outdoor Spaces
                    </h1>
                    <p className="text-xl sm:text-2xl mb-10 font-light drop-shadow-xl">
                        Professional, reliable, and high-quality landscaping services for lawns, gardens, and yards.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-secondary hover:bg-red-700 active:bg-red-800 transition-all duration-300 
                                   px-10 py-4 rounded-full font-bold text-xl shadow-2xl shadow-secondary/50 
                                   transform hover:scale-[1.03] hover:shadow-3xl no-underline"
                    >
                        Request a Free Quote
                    </a>
                </div>
            </div>
        </section>
    );
}