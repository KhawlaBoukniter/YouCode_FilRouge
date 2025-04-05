import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function Description() {
    const description = `
    "Eternal Dance" capture l'essence du mouvement fluide à travers des lignes abstraites 
    et des couleurs vibrantes. L'œuvre explore la connexion émotionnelle entre l'espace, 
    la forme et l'énergie, créant une expérience immersive pour le spectateur. 
    Une pièce parfaite pour ceux qui apprécient l'art contemporain expressif.
  `;

    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pt-8 pb-0">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    Description
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