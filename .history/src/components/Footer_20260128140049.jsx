export default function Footer() {
    return (
        /* Changed bg-white to #1a4332 to match your bottom section */
        <footer className="bg-[#1a4332] border-t border-white/10 py-10 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="font-bold text-xl mb-2">Avarro Landscaping</p>
                <p className="opacity-70 text-sm">
                    © {new Date().getFullYear()} All rights reserved. Professional Care for Your Property.
                </p>
            </div>
        </footer>
    );
}