import React from "react";
import { CalendarIcon, ClockIcon, UsersIcon } from "lucide-react";

export default function UpcomingEvents() {
    const events = [
        {
            id: 1,
            title: "Exposition Virtuelle: Métamorphoses",
            description: "Une exploration des transformations digitales",
            date: "15 Mars 2025",
            time: "19:00",
            attendees: 45,
        },
        {
            id: 2,
            title: "Workshop: Création 3D",
            description: "Techniques avancées de modélisation",
            date: "22 Mars 2025",
            time: "14:00",
            attendees: 28,
        },
    ];

    return (
        <div className="space-y-6 mt-12">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-playfair text-gray-800">
                    Événements à venir
                </h2>
                <button className="text-[#3a6b8f] font-playfair hover:underline">
                    Créer un événement
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-black/30 rounded-xl p-6 border border-gray-800"
                    >
                        <h3 className="text-gray-200 font-bold text-xl">{event.title}</h3>
                        <p className="text-[#374151] text-base mt-2">{event.description}</p>
                        <div className="flex items-center gap-4 mt-4 text-[#374151] text-sm">
                            <div className="flex items-center gap-1">
                                <CalendarIcon size={16} className="text-[#374151]" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ClockIcon size={16} className="text-[#374151]" />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <UsersIcon size={16} className="text-[#374151]" />
                                <span>{event.attendees} inscrits</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}