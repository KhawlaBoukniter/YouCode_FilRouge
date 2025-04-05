import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function UserPurchaseHistoryPage() {
    const purchases = [
        {
            id: 1,
            artwork: "Abstract Harmony",
            artist: "Jean Dubois",
            date: "Mar 15, 2025",
            price: "€2,400",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-4.png",
        },
        {
            id: 2,
            artwork: "Portrait of Elegance",
            artist: "Maria Silva",
            date: "Feb 28, 2025",
            price: "€3,800",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-5.png",
        },
        {
            id: 3,
            artwork: "Geometric Dreams",
            artist: "Alex Chen",
            date: "Jan 10, 2025",
            price: "€1,900",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-6.png",
        },
        {
            id: 4,
            artwork: "Mystic River",
            artist: "Clara Fontaine",
            date: "Jan 20, 2025",
            price: "€2,100",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-1.png",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <h1 className="text-4xl font-playfair text-gray-800 mb-8">
                        Mon historique d'achats
                    </h1>

                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-8 overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-gray-600 font-playfair">Œuvre</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Artiste</TableHead>
                                        <TableHead className="text-gray-600 font-playfair">Date</TableHead>
                                        <TableHead className="text-right text-gray-600 font-playfair">Prix</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {purchases.map((purchase) => (
                                        <TableRow key={purchase.id} className="hover:bg-gray-50">
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="w-12 h-12 rounded bg-cover bg-center"
                                                        style={{ backgroundImage: `url(${purchase.image})` }}
                                                    ></div>
                                                    <span className="font-playfair text-gray-800">{purchase.artwork}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-playfair text-gray-600">{purchase.artist}</TableCell>
                                            <TableCell className="font-playfair text-gray-600">{purchase.date}</TableCell>
                                            <TableCell className="text-right font-playfair text-gray-800">{purchase.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}