import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";
import Button from "../ui/button";

export default function ValidateArtistsSection() {
    const pendingArtists = [
        { id: 1, name: "Claire Dubois", email: "claire@example.com", portfolio: "Voir Portfolio" },
        { id: 2, name: "Amine Rahmani", email: "amine@example.com", portfolio: "Voir Portfolio" },
        { id: 3, name: "Sara Lemrani", email: "sara@example.com", portfolio: "Voir Portfolio" },
    ];

    return (
        <section className="md:py-20 py-10 px-4 bg-[#f8f7f4]">
            <div className="max-w-[1280px] mx-auto">
                <Card className="rounded-2xl shadow-md">
                    <CardHeader className="px-8 pb-0 flex flex-row justify-between items-center">
                        <CardTitle className="text-2xl font-playfair text-gray-800">
                            Validation des artistes
                        </CardTitle>
                        <a href="/admin/artists" className="text-[#3a6b8f] font-playfair text-base hover:underline">
                            Voir tout
                        </a>
                    </CardHeader>

                    <CardContent className="p-8 overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-gray-600 font-playfair">Nom</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Email</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Portfolio</TableHead>
                                    <TableHead className="text-center text-gray-600 font-playfair">Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {pendingArtists.map((artist) => (
                                    <TableRow key={artist.id} className="hover:bg-gray-50">
                                        <TableCell className="font-playfair text-gray-800">{artist.name}</TableCell>
                                        <TableCell className="font-playfair text-gray-600">{artist.email}</TableCell>
                                        <TableCell>
                                            <a
                                                href={`/artist/${artist.id}/portfolio`}
                                                className="font-playfair text-blue-600 hover:underline"
                                            >
                                                Voir Portfolio
                                            </a>
                                        </TableCell>
                                        <TableCell className="text-center flex justify-center gap-4 py-4">
                                            <a href={`/admin/artists/${artist.id}/validate`}>
                                                <Button
                                                    size="sm"
                                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-playfair rounded-full px-4"
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
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}