export default function ContactForm() {
    return (
        <section className="py-24 bg-accent">
            <div className="max-w-xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-primary mb-4">Start Your Project</h2>
                    <p className="text-gray-600 font-medium">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form className="grid gap-5 p-10 bg-white rounded-3xl shadow-xl border border-gray-100">
                    {["Full Name", "Phone Number", "Email Address"].map((p) => (
                        <div key={p} className="flex flex-col gap-1">
                            <label className="text-xs font-bold uppercase text-gray-400 ml-1">{p}</label>
                            <input
                                placeholder={p}
                                className="border border-gray-200 p-4 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                            />
                        </div>
                    ))}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase text-gray-400 ml-1">Project Details</label>
                        <textarea
                            rows="4"
                            placeholder="Tell us about your yard..."
                            className="border border-gray-200 p-4 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none resize-none transition-all"
                        />
                    </div>

                    <button className="bg-primary hover:bg-darkgreen text-white py-5 rounded-xl font-bold text-lg transition shadow-lg active:scale-95 mt-4">
                        Send Request
                    </button>
                </form>
            </div>
        </section>
    );
}