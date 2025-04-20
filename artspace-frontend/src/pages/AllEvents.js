import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import Button from "../components/ui/button";

const allEvents = [
    {
        id: 1,
        title: "Événement 1",
        artist: "Artiste C",
        location: "Lieu 1",
        date: "08 Mars 2025",
        image: "https://via.placeholder.com/400x250?text=Event+1"
    },
    {
        id: 2,
        title: "Événement 2",
        artist: "Artiste A",
        location: "Lieu 1",
        date: "15 Mars 2025",
        image: "https://via.placeholder.com/400x250?text=Event+2"
    },
    {
        id: 3,
        title: "Événement 3",
        artist: "Artiste C",
        location: "Lieu 1",
        date: "22 Mars 2025",
        image: "https://via.placeholder.com/400x250?text=Event+3"
    },
    {
        id: 4,
        title: "Événement 4",
        artist: "Artiste C",
        location: "Lieu 3",
        date: "29 Mars 2025",
        image: "https://via.placeholder.com/400x250?text=Event+4"
    },
    {
        id: 5,
        title: "Événement 5",
        artist: "Artiste C",
        location: "Lieu 1",
        date: "05 Avril 2025",
        image: "https://via.placeholder.com/400x250?text=Event+5"
    },
    {
        id: 6,
        title: "Événement 6",
        artist: "Artiste A",
        location: "Lieu 3",
        date: "12 Avril 2025",
        image: "https://via.placeholder.com/400x250?text=Event+6"
    },
    {
        id: 7,
        title: "Événement 7",
        artist: "Artiste B",
        location: "Lieu 3",
        date: "19 Avril 2025",
        image: "https://via.placeholder.com/400x250?text=Event+7"
    },
    {
        id: 8,
        title: "Événement 8",
        artist: "Artiste A",
        location: "Lieu 2",
        date: "26 Avril 2025",
        image: "https://via.placeholder.com/400x250?text=Event+8"
    },
    {
        id: 9,
        title: "Événement 9",
        artist: "Artiste A",
        location: "Lieu 1",
        date: "03 Mai 2025",
        image: "https://via.placeholder.com/400x250?text=Event+9"
    },
    {
        id: 10,
        title: "Événement 10",
        artist: "Artiste A",
        location: "Lieu 2",
        date: "10 Mai 2025",
        image: "https://via.placeholder.com/400x250?text=Event+10"
    },
    {
        id: 11,
        title: "Événement 11",
        artist: "Artiste B",
        location: "Lieu 2",
        date: "17 Mai 2025",
        image: "https://via.placeholder.com/400x250?text=Event+11"
    },
    {
        id: 12,
        title: "Événement 12",
        artist: "Artiste C",
        location: "Lieu 1",
        date: "24 Mai 2025",
        image: "https://via.placeholder.com/400x250?text=Event+12"
    },
    {
        id: 13,
        title: "Événement 13",
        artist: "Artiste A",
        location: "Lieu 3",
        date: "31 Mai 2025",
        image: "https://via.placeholder.com/400x250?text=Event+13"
    },
    {
        id: 14,
        title: "Événement 14",
        artist: "Artiste C",
        location: "Lieu 1",
        date: "07 Juin 2025",
        image: "https://via.placeholder.com/400x250?text=Event+14"
    },
    {
        id: 15,
        title: "Événement 15",
        artist: "Artiste A",
        location: "Lieu 3",
        date: "14 Juin 2025",
        image: "https://via.placeholder.com/400x250?text=Event+15"
    },
];

export default function AllEvents() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;

    const indexOfLast = currentPage * eventsPerPage;
    const indexOfFirst = indexOfLast - eventsPerPage;
    const currentEvents = allEvents.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(allEvents.length / eventsPerPage);

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-6 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-12">
                    <h1 className="text-4xl font-playfair text-gray-800 text-center">
                        Tous les événements
                    </h1>

                    <div className="flex flex-wrap justify-center gap-4">
                        <input type="text" placeholder="Filtrer par artiste" className="px-4 py-2 border rounded-lg" />
                        <input type="text" placeholder="Filtrer par lieu" className="px-4 py-2 border rounded-lg" />
                        <input type="date" className="px-4 py-2 border rounded-lg" />
                        <Button className="bg-[#3a6b8f] text-white px-6 rounded-lg">Filtrer</Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentEvents.map(event => (
                            <Card key={event.id} className="overflow-hidden rounded-xl shadow-md">
                                <div
                                    className="h-56 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${event.image})` }}
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-playfair text-gray-800 mb-1">{event.title}</h3>
                                    <p className="text-sm text-gray-600 font-playfair">{event.artist}</p>
                                    <p className="text-sm text-gray-500 font-playfair mt-1">{event.location} – {event.date}</p>
                                    <a href={`/events/${event.id}`}>
                                        <Button
                                            variant="outline"
                                            className="mt-3  w-fit text-sm font-playfair bg-white border-gray-300 hover:bg-gray-100 text-gray-800"
                                        >
                                            Voir détails
                                        </Button>
                                    </a>
                                </CardContent>

                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                        <Button
                            variant="outline"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        >
                            Précédent
                        </Button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <Button
                                key={i}
                                variant={i + 1 === currentPage ? "default" : "outline"}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </Button>
                        ))}
                        <Button
                            variant="outline"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        >
                            Suivant
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}