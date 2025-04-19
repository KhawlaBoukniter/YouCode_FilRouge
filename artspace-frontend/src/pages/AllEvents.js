import React, { useState } from "react";

export default function AllEvents() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 2;

    const events = [
        {
            id: 1,
            title: "Exposition Moderne",
            lieu: "Paris",
            date: "2025-05-20",
        },
        {
            id: 2,
            title: "Sculpture et Lumière",
            lieu: "Londres",
            date: "2025-06-15",
        },
    ];

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);


    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-playfair font-bold text-gray-700">Mes événements</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentEvents.map(event => (
                    <div key={event.id} className="border rounded-md p-6 shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                        <p className="text-gray-600 mb-1">Lieu : {event.lieu}</p>
                        <p className="text-gray-600">Date : {event.date}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8 space-x-4">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                    Précédent
                </button>

                {Array.from({ length: Math.ceil(events.length / eventsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(events.length / eventsPerPage)))}
                    disabled={currentPage === Math.ceil(events.length / eventsPerPage)}
                    className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
}