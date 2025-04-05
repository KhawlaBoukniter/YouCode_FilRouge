import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function Description() {
    const description = `
    Rejoignez-nous pour l'édition 2025 de l'Art Expo, un événement international mettant en avant des artistes contemporains du monde entier.
    Vous découvrirez des œuvres numériques, des installations interactives, et des performances en direct.
    Un moment unique pour les amateurs d'art moderne et de nouvelles technologies.
  `;

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