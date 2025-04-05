import React from "react";

export default function Stats() {
    const stats = [
        { label: "Œuvres Totales", value: 24 },
        { label: "En Attente", value: 3 },
        { label: "Événements", value: 8 },
        { label: "Vues", value: "1.2k" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center items-center"
                >
                    <p className="text-gray-600 text-base font-playfair mb-2">
                        {stat.label}
                    </p>
                    <p className="text-3xl text-black font-playfair">{stat.value}</p>
                </div>
            ))}
        </div>
    );
}