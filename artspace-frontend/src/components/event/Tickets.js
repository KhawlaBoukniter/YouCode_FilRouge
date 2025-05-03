import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Button from "../ui/button";
import api from "../../api";

export default function Tickets({ tickets }) {
    const userId = JSON.parse(localStorage.getItem("user")).artist?.id;

    const handleDelete = async (ticketId) => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer ce ticket ?");
        if (!confirm) return;

        try {
            await api.delete(`/tickets/${ticketId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            window.location.reload();
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    return (
        <section id="tickets">
            <Card className="rounded-2xl shadow-md" >
                <CardHeader className="px-8 pt-8 pb-0">
                    <CardTitle className="text-2xl font-playfair text-gray-800">
                        Billets disponibles
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                        {tickets.map((ticket) => (
                            <div
                                key={ticket.id}
                                className="flex flex-col justify-between bg-gray-100 rounded-lg p-6 md:p-4 hover:shadow transition"
                            >
                                <div className="space-y-2">
                                    <h4 className="text-xl font-playfair text-gray-800">{ticket.type}</h4>
                                    <p className="text-gray-600 text-sm font-playfair">{ticket.description}</p>
                                </div>

                                <div className="mt-6 flex flex-col gap-2">
                                    <p className="text-lg text-[#3a6b8f] font-playfair">{ticket.price}</p>
                                    <a href={`/tickets/${ticket.id}/reserve`}>
                                        <Button
                                            variant="outline"
                                            className="bg-white border-gray-300 hover:bg-gray-100 text-gray-800 font-playfair"
                                            disabled={ticket.status !== "available"}
                                        >
                                            {ticket.status === "available" ? "Réserver" : "Non disponible"}
                                        </Button>
                                    </a>

                                    {ticket.event?.artist_id === userId && (
                                        <Button
                                            onClick={() => handleDelete(ticket.id)}
                                            className="bg-red-100 text-red-700 hover:bg-red-200 mt-2"
                                        >
                                            Supprimer
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}