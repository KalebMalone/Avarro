import Services from "../components/Services";

export default function ServicesPage() {
    return (
        <section className="py-24 bg-gray-50">
            <h1 className="text-5xl font-extrabold text-center mb-16">
                Our Full Services
            </h1>
            <div className="max-w-6xl mx-auto px-6">
                <Services />
            </div>
        </section>
    );
}
