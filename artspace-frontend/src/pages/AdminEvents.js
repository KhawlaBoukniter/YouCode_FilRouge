import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/admin/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/ui/table";
import Button from "../components/ui/button";

export default function AdminEventsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 5;

    const events = [
        { id: 1, name: "Art Expo 2025", date: "15 Mai 2025", status: "En attente" },
        { id: 2, name: "Nuit des Arts", date: "22 Mai 2025", status: "Validé" },
        { id: 3, name: "VR Immersion", date: "29 Mai 2025", status: "Archivé" },
        { id: 4, name: "Digital Dreams", date: "5 Juin 2025", status: "En attente" },
    ];

    const indexOfLast = currentPage * eventsPerPage;
    const indexOfFirst = indexOfLast - eventsPerPage;
    const currentEvents = events.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(events.length / eventsPerPage);

    return (
        <div className="flex flex-col ml-64 min-h-screen ">
            <div className="flex flex-1 w-full">
                <Sidebar />

                <main className="flex-1 pl-16 p-8 py-20 space-y-10">
                    <Card className="rounded-2xl shadow-md">
                        <CardHeader className="px-8 pb-0">
                            <CardTitle className="text-2xl font-playfair text-gray-800">
                                Gestion des événements
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="p-8 overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-gray-600 font-playfair">Nom</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Date</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Statut</TableHead>
                                        <TableHead className="text-center text-gray-600 font-playfair">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {currentEvents.map((event) => (
                                        <TableRow key={event.id} className="hover:bg-gray-50">
                                            <TableCell className="font-playfair text-gray-800">{event.name}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{event.date}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{event.status}</TableCell>
                                            <TableCell className="text-center flex justify-center gap-2 py-4">
                                                <Button size="sm" className="bg-[#3a6b8f] hover:bg-[#345c78] text-white font-playfair rounded-full px-4">
                                                    Valider
                                                </Button>
                                                <Button size="sm" variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-100 font-playfair rounded-full px-4">
                                                    Archiver
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <div className="flex justify-center gap-6 pt-8">
                                <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    Précédent
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    Suivant
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>

            <Footer />
        </div>
    );
}
