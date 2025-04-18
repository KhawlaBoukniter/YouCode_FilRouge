import React from "react";

export default function StatsSection() {
    const stats = [
        { label: "Utilisateurs", value: 230 },
        { label: "Artistes", value: 58 },
        { label: "Œuvres", value: 870 },
        { label: "Événements", value: 15 },
        { label: "Réservations", value: 340 },
    ];

    return (
        <section className="py-28 px-4 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-playfair text-gray-800 text-center mb-14">
                    Statistiques générales
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-4 shadow-md flex flex-col justify-center items-center"
                        >
                            <p className="text-gray-600 text-base font-playfair mb-2">
                                {stat.label}
                            </p>
                            <p className="text-3xl text-black font-playfair">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}