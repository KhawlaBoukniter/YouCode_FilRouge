import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function Description({ description }) {

    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pt-8 pb-0">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    À propos de l'événement
                </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
                <p className="text-base text-gray-600 leading-relaxed font-playfair whitespace-pre-line">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}