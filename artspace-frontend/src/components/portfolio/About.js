import React from "react";
import { Card, CardContent } from "../ui/card";

export default function About() {
    return (
        <section className="w-full py-20 bg-[#f8f7f4b0]">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <Card className="border-0 !bg-transparent rounded-none shadow-none">
                    <CardContent className="p-0 ">
                        <div className="flex flex-col items-center max-w-[768px] mx-auto text-center">
                            <h2 className="text-3xl font-playfair text-gray-800 mb-7">
                                À propos
                            </h2>

                            <p className="text-base text-gray-600 leading-relaxed font-playfair">
                                Passionnée par l'art numérique depuis plus de 15 ans, je crée des expériences immersives
                                qui fusionnent le réel et le virtuel. Mon travail explore les thèmes de la conscience
                                collective, de la technologie et de la nature humaine.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}