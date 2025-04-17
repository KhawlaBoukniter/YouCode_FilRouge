import React from "react";
import { Card, CardContent } from "../ui/card";
import Button from "../ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function GallerySection() {
    const artworks = [
        {
            id: 1,
            title: "Conscience Numérique",
            description: "Installation interactive, 2025",
            imageUrl: "https://c.animaapp.com/ma1evbt5xp47Lo/img/img-2.png",
        },
        {
            id: 2,
            title: "Métavers Poétique",
            description: "VR Experience, 2024",
            imageUrl: "https://c.animaapp.com/ma1evbt5xp47Lo/img/img-3.png",
        },
        {
            id: 3,
            title: "Résonance",
            description: "Sculpture numérique, 2023",
            imageUrl: "https://c.animaapp.com/ma1evbt5xp47Lo/img/img-4.png",
        },
    ];

    return (
        <section className="w-full py-20 bg-[#f8f7f4b0] p-10">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex justify-between items-center mb-14">
                    <h2 className="text-3xl text-center font-playfair text-gray-800">
                        Mes Œuvres
                    </h2>

                    <Button
                        variant="ghost"
                        className="bg-[#d3bb7538] rounded-full h-12 px-8 hover:bg-[#d3bb7560] flex items-center"
                    >
                        <span className="font-playfair text-[#020000] text-base">
                            Voir Plus
                        </span>
                        <ChevronRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artworks.map((work) => (
                        <Card
                            key={work.id}
                            className="rounded-xl overflow-hidden shadow-[0px_1px_2px_#0000000d]"
                        >
                            <div
                                className="h-64 w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${work.imageUrl})` }}
                            />
                            <CardContent className="p-6">
                                <h3 className="text-xl font-playfair text-black mb-4 leading-5">
                                    {work.title}
                                </h3>
                                <p className="text-base font-playfair text-gray-600 leading-4">
                                    {work.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}