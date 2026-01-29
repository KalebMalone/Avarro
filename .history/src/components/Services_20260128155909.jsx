const services = [
    {
        title: "Weekly Mowing",
        desc: "Consistent, scheduled mowing that keeps your lawn looking sharp and staying healthy all summer long.",
        icon: "🚜",
    },
    {
        title: "Clean Edging",
        desc: "Vertical string edging along all concrete and beds to give your lawn that professional 'frame'.",
        icon: "✂️",
    },
    {
        title: "Power Blowing",
        desc: "High-velocity debris clearing of driveways and patios so you never have to sweep up after us.",
        icon: "💨",
    },
    {
        title: "Spring/Fall Cleanup",
        desc: "Complete removal of leaves, branches, and winter debris to prep your yard for the season.",
        icon: "🍂",
    },
];

export default function Services() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {services.map((service, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                    text-center flex flex-col items-center w-full h-full"
                >
                    <div className="w-16 h-16 rounded-full bg-[#94a84a]/10 
                        flex items-center justify-center text-3xl mb-6 border border-[#94a84a]/20">
                        {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[#1a4332] mb-3">
                        {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                        {service.desc}
                    </p>
                </div>
            ))}
        </div>
    );
}