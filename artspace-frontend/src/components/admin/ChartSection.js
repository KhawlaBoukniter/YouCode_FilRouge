import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function ChartSection() {
    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pb-0">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    Statistiques des événements
                </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
                <div className="w-full h-[400px] flex items-center justify-center text-gray-400 bg-gray-50 border border-dashed rounded-xl">
                    Graphique à venir (Recharts ou autre)
                </div>
            </CardContent>
        </Card>
    );
}