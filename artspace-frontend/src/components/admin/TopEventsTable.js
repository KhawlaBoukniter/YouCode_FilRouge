import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";

export default function TopEventsTable() {
    const topEvents = [
        { id: 1, title: "Art Expo Paris", date: "15 Mai 2025", ticketsSold: 340 },
        { id: 2, title: "Immersion Numérique", date: "02 Avril 2025", ticketsSold: 285 },
        { id: 3, title: "Résonance Digitale", date: "21 Mars 2025", ticketsSold: 203 },
    ];

    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pb-0">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    Événements les plus populaires
                </CardTitle>
            </CardHeader>

            <CardContent className="p-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-gray-600 font-playfair">Titre</TableHead>
                            <TableHead className="text-gray-600 font-playfair">Date</TableHead>
                            <TableHead className="text-gray-600 font-playfair text-right">Billets vendus</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {topEvents.map((event) => (
                            <TableRow key={event.id} className="hover:bg-gray-50">
                                <TableCell className="font-playfair text-gray-800">{event.title}</TableCell>
                                <TableCell className="font-playfair text-gray-600">{event.date}</TableCell>
                                <TableCell className="text-right font-playfair text-gray-800">{event.ticketsSold}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}