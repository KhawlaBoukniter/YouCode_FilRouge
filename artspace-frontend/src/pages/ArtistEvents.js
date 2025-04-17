import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import Button from "../components/ui/button";

export default function ArtistEvents() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 2;

    const events = [
        {
            id: 1,
            title: "Art Expo 2025",
            date: "15 Mai 2025",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-4.png",
            description: "Découvrez des œuvres d'art contemporaines innovantes lors de notre exposition annuelle.",
        },
        {
            id: 2,
            title: "Night at the Museum",
            date: "10 Juin 2025",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-2.png",
            description: "Une soirée immersive avec art numérique, installations interactives et performances en direct.",
        },
        {
            id: 3,
            title: "Virtual Reality Art",
            date: "25 Juin 2025",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-5.png",
            description: "Explorez les dernières créations artistiques en réalité virtuelle.",
        },
    ];

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);



    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <h1 className="text-4xl font-playfair text-gray-800 mb-8">
                        Événements à venir
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {currentEvents.map((event) => (
                            <Card key={event.id} className="rounded-2xl shadow-md overflow-hidden group">
                                <CardContent className="h-80 p-0 relative">
                                    <div
                                        className="h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${event.image})` }}
                                    ></div>

                                    <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                                        <h4 className="text-white text-lg font-semibold">{event.title}</h4>
                                        <p className="text-gray-300 text-sm">{event.date}</p>
                                    </div>

                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="bg-white text-gray-800 hover:bg-gray-100 rounded-full p-2"
                                            onClick={() => console.log(`Voir détails de l'événement ID ${event.id}`)}
                                        >
                                            Voir
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
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
            </main>

            <Footer />
        </div>
    );
}