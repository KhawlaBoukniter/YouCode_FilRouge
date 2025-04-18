import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";
import Button from "../ui/button";

export default function ValidateEventsSection() {
    const pendingEvents = [
        { id: 1, title: "Art Expo 2025", date: "15 Mai 2025", organizer: "Claire Dubois" },
        { id: 2, title: "Digital Night", date: "20 Juin 2025", organizer: "Amine Rahmani" },
        { id: 3, title: "Virtual Sculpture", date: "2 Juillet 2025", organizer: "Sara Lemrani" },
    ];

    return (
        <section className="pb-20 px-4 md:px-20 bg-[#f8f7f4]">
            <div className="max-w-[1280px] mx-auto">
                <Card className="rounded-2xl shadow-md">
                    <CardHeader className="px-8 pb-0 flex flex-row justify-between items-center">
                        <CardTitle className="text-2xl font-playfair text-gray-800">
                            Validation des événements
                        </CardTitle>
                        <Button
                            variant="link"
                            className="text-[#3a6b8f] font-playfair text-base p-0"
                        >
                            Voir tout
                        </Button>
                    </CardHeader>

                    <CardContent className="p-8 overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-gray-600 font-playfair">Titre</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Date</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Organisateur</TableHead>
                                    <TableHead className="text-center text-gray-600 font-playfair">Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {pendingEvents.map((event) => (
                                    <TableRow key={event.id} className="hover:bg-gray-50">
                                        <TableCell className="font-playfair text-gray-800">{event.title}</TableCell>
                                        <TableCell className="font-playfair text-gray-600">{event.date}</TableCell>
                                        <TableCell className="font-playfair text-gray-600">{event.organizer}</TableCell>
                                        <TableCell className="text-center flex justify-center gap-4 py-4">
                                            <Button
                                                size="sm"
                                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-playfair rounded-full px-4"
                                            >
                                                Valider
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-red-500 text-red-500 hover:bg-red-50 font-playfair rounded-full px-4"
                                            >
                                                Refuser
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