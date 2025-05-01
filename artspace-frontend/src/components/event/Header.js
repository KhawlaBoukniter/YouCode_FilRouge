import React from "react";
import { Card, CardContent } from "../ui/card";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Button from "../ui/button";
import api from "../../api";

export default function Header({ event }) {
    const userId = JSON.parse(localStorage.getItem("user")).artist.id;

    const handleDelete = async () => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer cet événement ?");
        if (!confirm) return;

        try {
            await api.delete(`/events/${event.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            window.location.href = "/artist/events";
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };

    const imageUrl = (image) => {
        return image.startsWith("http")
            ? image
            : `http://localhost:8000${image}`;
    };


    return (
        <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg">
                    <img
                        src={imageUrl(event.poster)}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-playfair text-gray-800">{event.title}</h1>

                        <div className="flex items-center gap-2 text-gray-600 font-playfair">
                            <CalendarIcon className="h-5 w-5" />
                            <span>{event.start_date}</span> To <span>{event.end_date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-600 font-playfair">
                            <MapPinIcon className="h-5 w-5" />
                            <span>{event.location}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-4 flex-wrap">
                        {event.artist_id === userId ? (
                            <>
                                <a href={`/events/${event.id}/edit`}>
                                    <Button className="text-white">Modifier</Button>
                                </a>
                                <Button onClick={handleDelete} className="bg-white !text-black border">Supprimer</Button>
                            </>
                        ) : (
                            <a href="#tickets">
                                <Button className="h-12 w-full md:w-auto bg-[#3a6b8f] text-white rounded-lg font-playfair hover:bg-[#345c78] transition">
                                    Réserver un ticket
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}