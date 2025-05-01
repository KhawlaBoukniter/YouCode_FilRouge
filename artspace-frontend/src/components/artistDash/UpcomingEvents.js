import React, { useEffect, useState } from "react";
import { CalendarIcon, ClockIcon, UsersIcon } from "lucide-react";
import api from "../../api";

export default function UpcomingEvents({ user }) {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get("/my-events", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                const now = new Date();
                const filtered = res.data.events?.filter(event =>
                    new Date(event.start_date) >= now
                ).slice(0, 2);

                setEvents(filtered);
                setLoading(false);
            } catch (err) {
                console.error("Erreur:", err);
                setError("Erreur lors du chargement des événements.");
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) return <p>Chargement des événements...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="space-y-6 mt-12">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-playfair text-gray-800">
                    Événements à venir
                </h2>
                <a href="/events/create" className="text-[#3a6b8f] font-playfair hover:underline">
                    Créer un événement
                </a>
                <a href="/artist/events" className="text-[#3a6b8f] font-playfair hover:underline">
                    Voir tout
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.length > 0 ? events.map((event) => (
                    <a
                        href={`/events/${event.id}`}
                        className="bg-black/30 rounded-xl p-6 border border-gray-800 block hover:shadow-lg transition"
                    >
                        <h3 className="text-gray-200 font-bold text-xl">{event.title}</h3>
                        <p className="text-[#374151] text-base mt-2">{event.description}</p>
                        <div className="flex items-center gap-4 mt-4 text-[#374151] text-sm">
                            <div className="flex items-center gap-1">
                                <CalendarIcon size={16} className="text-[#374151]" />
                                <span>{new Date(event.start_date).toLocaleDateString("fr-FR")}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ClockIcon size={16} className="text-[#374151]" />
                                <span>{new Date(event.start_date).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <UsersIcon size={16} className="text-[#374151]" />
                                <span>{event.reservations_count} inscrits</span>
                            </div>
                        </div>
                    </a>
                )) : (
                    <p className="text-gray-600">Aucun événement à venir</p>
                )}
            </div>
        </div>
    );
}