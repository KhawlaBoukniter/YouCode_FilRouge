import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";
import Button from "../ui/button";

export default function ManageEventsSection() {
    const events = [
        { id: 1, title: "Art Expo 2025", date: "15 Mai 2025", status: "Actif" },
        { id: 2, title: "Digital Dreams", date: "20 Juin 2025", status: "Archivé" },
        { id: 3, title: "Virtual Visions", date: "5 Juillet 2025", status: "Actif" },
    ];

    return (
        <section className="md:py-20 py-10 px-4 bg-[#f8f7f4]">
            <div className="max-w-[1280px] mx-auto">
                <Card className="rounded-2xl shadow-md">
                    <CardHeader className="px-8 pb-0 flex flex-row justify-between items-center">
                        <CardTitle className="text-2xl font-playfair text-gray-800">
                            Gestion des événements
                        </CardTitle>
                        <Button
                            variant="link"
                            className="text-[#3a6b8f] font-playfair text-base p-0"
                        >
                            Créer un événement
                        </Button>
                    </CardHeader>

                    <CardContent className="p-8 overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-gray-600 font-playfair">Titre</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Date</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Statut</TableHead>
                                    <TableHead className="text-center text-gray-600 font-playfair">Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {events.map((event) => (
                                    <TableRow key={event.id} className="hover:bg-gray-50">
                                        <TableCell className="font-playfair text-gray-800">{event.title}</TableCell>
                                        <TableCell className="font-playfair text-gray-600">{event.date}</TableCell>
                                        <TableCell className="font-playfair text-gray-600">{event.status}</TableCell>
                                        <TableCell className="text-center flex justify-center gap-4 py-4">
                                            <Button
                                                size="sm"
                                                className="bg-[#3a6b8f] hover:bg-[#345c78] text-white font-playfair rounded-full px-4"
                                            >
                                                Éditer
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-red-500 text-red-500 hover:bg-red-50 font-playfair rounded-full px-4"
                                            >
                                                Supprimer
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}