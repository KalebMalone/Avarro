const services = [
    {
        title: "Lawn Maintenance",
        desc: "Weekly & bi-weekly mowing, edging, trimming, and cleanup.",
        icon: "🌿",
    },
    {
        title: "Thatch & Aerate",
        desc: "Seasonal dethatching and aeration for healthier grass.",
        icon: "🍃",
    },
    {
        title: "Clean Ups",
        desc: "Spring and fall debris removal and property refresh.",
        icon: "🧹",
    },
    {
        title: "Irrigation Winterizing",
        desc: "Protect your irrigation system from freeze damage.",
        icon: "💧",
    },
];

export default function Services() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
                <div
                    key={i}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition"
                >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-4">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
            ))}
        </div>
    );
}
