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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {services.map((service, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                    text-center flex flex-col items-center w-full h-full"
                >
                    {/* Icon Bubble - Slightly darker background to make it visible */}
                    <div className="w-16 h-16 rounded-full bg-[#94a84a]/20 
                        flex items-center justify-center text-3xl mb-6 shadow-inner">
                        {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[#1a4332] mb-3">
                        {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow">
                        {service.desc}
                    </p>
                </div>
            ))}
        </div>
    );
}