import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import Button from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function PurchaseHistory() {
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
    ];

    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pb-0 flex flex-row justify-between items-center">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    Purchase History
                </CardTitle>
                <Button variant="link" className="text-[#3a6b8f] font-playfair text-base p-0">
                    View All
                </Button>
            </CardHeader>

            <CardContent className="p-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-gray-600 font-playfair">Artwork</TableHead>
                            <TableHead className="text-gray-600 font-playfair">Artist</TableHead>
                            <TableHead className="text-gray-600 font-playfair">Date</TableHead>
                            <TableHead className="text-right text-gray-600 font-playfair">Price</TableHead>
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
                                        />
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
    );
}