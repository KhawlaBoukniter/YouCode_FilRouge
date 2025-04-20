import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Button from "../ui/button";

export default function Tickets() {
    const tickets = [
        {
            id: 1,
            type: "Entrée Standard",
            price: "€15",
            description: "Accès général à l'exposition pour toute la journée.",
        },
        {
            id: 2,
            type: "Pass VIP",
            price: "€40",
            description: "Accès prioritaire + visite guidée privée + accès aux coulisses.",
        },
        {
            id: 3,
            type: "Entrée Étudiant",
            price: "€8",
            description: "Billet à tarif réduit pour les étudiants avec carte valide.",
        },
    ];

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
                                        >
                                            Réserver
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}