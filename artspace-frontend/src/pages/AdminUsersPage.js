import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/admin/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/ui/table";
import Button from "../components/ui/button";

export default function AdminUsersPage() {
    const users = [
        { id: 1, name: "Jean Dupont", email: "jean@example.com", role: "Utilisateur", status: "Actif" },
        { id: 2, name: "Claire Dubois", email: "claire@example.com", role: "Artiste", status: "En attente" },
        { id: 3, name: "Mohamed Amrani", email: "mohamed@example.com", role: "Utilisateur", status: "Suspendu" },
    ];

    return (
        <div className="flex flex-col md:ml-64 ml-4">

            <div className="flex-1">
                <Sidebar />

                <main className="flex-1 pl-16 p-8 md:py-20 py-10 space-y-10">
                    <Card className="rounded-2xl shadow-md">
                        <CardHeader className="px-8 pb-0">
                            <CardTitle className="text-2xl font-playfair text-gray-800">
                                Gestion des utilisateurs
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="p-8 overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-gray-600 font-playfair">Nom</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Email</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Rôle</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Statut</TableHead>
                                        <TableHead className="text-center text-gray-600 font-playfair">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow key={user.id} className="hover:bg-gray-50">
                                            <TableCell className="font-playfair text-gray-800">{user.name}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{user.email}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{user.role}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{user.status}</TableCell>
                                            <TableCell className="text-center flex justify-center gap-2 py-4">
                                                <Button
                                                    size="sm"
                                                    className="bg-[#3a6b8f] hover:bg-[#345c78] text-white font-playfair rounded-full px-4"
                                                >
                                                    Activer
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
                </main>
            </div>

            <Footer />
        </div>
    );
}