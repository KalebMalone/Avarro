export default function Footer() {
    return (
        <footer className="bg-[#1a4332] py-10 text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="font-bold text-xl mb-2">Avarro Landscaping</p>
                <div className="flex justify-center space-x-6 mb-4 opacity-80 text-sm">
                    <span>Licensed & Insured</span>
                    <span>•</span>
                    <span>Free Estimates</span>
                </div>
                <p className="opacity-50 text-xs">
                    © {new Date().getFullYear()} Avarro Landscaping. All rights reserved.
                </p>
            </div>
        </footer>
    );
}