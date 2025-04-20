import React, { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import Button from "../components/ui/button";

export default function AdminArtistsPage() {
    const [filter, setFilter] = useState("Tous");
    const [currentPage, setCurrentPage] = useState(1);
    const artistsPerPage = 5;

    const artists = [
        { id: 1, name: "Claire Dubois", email: "claire@example.com", status: "En attente" },
        { id: 2, name: "Youssef Karim", email: "youssef@example.com", status: "Validé" },
        { id: 3, name: "Sarah Benali", email: "sarah@example.com", status: "Refusé" },
        { id: 4, name: "Amine Ouali", email: "amine@example.com", status: "Validé" },
        { id: 5, name: "Nora Elbaz", email: "nora@example.com", status: "En attente" },
        { id: 6, name: "Léo Dubois", email: "leo@example.com", status: "Validé" },
    ];

    const filteredArtists = filter === "Tous" ? artists : artists.filter(artist => artist.status === filter);

    const indexOfLastArtist = currentPage * artistsPerPage;
    const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
    const currentArtists = filteredArtists.slice(indexOfFirstArtist, indexOfLastArtist);

    const totalPages = Math.ceil(filteredArtists.length / artistsPerPage);

    return (
        <div className="flex flex-col md:ml-64 ml-4">
            <div className="flex-1">
                <Sidebar />

                <main className="flex-1 pl-16 p-8 md:py-20 py-10 space-y-10">
                    <Card className="rounded-2xl shadow-md">
                        <CardHeader className="px-8 flex flex-col pb-0 gap-4 justify-between items-center">
                            <CardTitle className="text-2xl font-playfair text-gray-800">
                                Validation des artistes
                            </CardTitle>

                            <div className="flex md:gap-4 gap-1">
                                {["Tous", "En attente", "Validé", "Refusé"].map((status) => (
                                    <Button
                                        key={status}
                                        variant={filter === status ? "default" : "outline"}
                                        onClick={() => { setFilter(status); setCurrentPage(1); }}
                                        className="rounded-full text-sm py-0"
                                    >
                                        {status}
                                    </Button>
                                ))}
                            </div>
                        </CardHeader>

                        <CardContent className="p-8 overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-gray-600 font-playfair">Nom</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Email</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Statut</TableHead>
                                        <TableHead className="text-center text-gray-600 font-playfair">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {currentArtists.map((artist) => (
                                        <TableRow key={artist.id} className="hover:bg-gray-50">
                                            <TableCell className="font-playfair text-gray-800">{artist.name}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{artist.email}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{artist.status}</TableCell>
                                            <TableCell className="text-center flex justify-center gap-2 py-4">
                                                <a href={`/admin/artists/${artist.id}/validate`}>
                                                    <Button
                                                        size="sm"
                                                        className="bg-[#3a6b8f] hover:bg-[#345c78] text-white font-playfair rounded-full px-4"
                                                    >
                                                        Valider
                                                    </Button>
                                                </a>
                                                <a href={`/admin/artists/${artist.id}/refuse`}>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="border-red-500 text-red-500 hover:bg-red-50 font-playfair rounded-full px-4"
                                                    >
                                                        Refuser
                                                    </Button>
                                                </a>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <div className="flex justify-center mt-6 space-x-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="rounded-full font-playfair"
                                >
                                    Précédent
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="rounded-full font-playfair"
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
