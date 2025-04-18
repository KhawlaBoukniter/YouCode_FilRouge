import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";
import Button from "../ui/button";

export default function ManageUsersSection() {
    const users = [
        { id: 1, name: "Amine El Khatib", email: "amine@example.com", role: "Visiteur" },
        { id: 2, name: "Khawla Boukniter", email: "khawla@example.com", role: "Artiste" },
        { id: 3, name: "Sara Bensalah", email: "sara@example.com", role: "Visiteur" },
        { id: 4, name: "Yassine Malki", email: "yassine@example.com", role: "Artiste" },
    ];

    return (
        <section className="py-20 px-4 md:px-20 bg-[#f8f7f4]">
            <div className="max-w-[1280px] mx-auto">
                <Card className="rounded-2xl shadow-md">
                    <CardHeader className="px-8 pb-0 flex flex-row justify-between items-center">
                        <CardTitle className="text-2xl font-playfair text-gray-800">
                            Gestion des utilisateurs
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
                                    <TableHead className="text-gray-600 font-playfair">Nom</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Email</TableHead>
                                    <TableHead className="text-gray-600 font-playfair">Rôle</TableHead>
                                    <TableHead className="text-center text-gray-600 font-playfair">Action</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id} className="hover:bg-gray-50">
                                        <TableCell className="font-playfair text-gray-800">{user.name}</TableCell>
                                        <TableCell className="font-playfair text-gray-600">{user.email}</TableCell>
                                        <TableCell className="font-playfair text-gray-600">{user.role}</TableCell>
                                        <TableCell className="text-center">
                                            <button className="text-red-500 hover:underline font-playfair">
                                                Suspendre
                                            </button>
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