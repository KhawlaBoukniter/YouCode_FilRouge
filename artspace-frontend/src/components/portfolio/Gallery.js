import React from "react";
import { Card, CardContent } from "../ui/card";
import Button from "../ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function GallerySection({ artworks }) {

    const imageUrl = (image) => {
        return image.startsWith("http")
            ? image
            : `http://localhost:8000${image}`;
    };

    return (
        <section className="w-full py-20 bg-[#f8f7f4b0] p-10" id="artworks">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex justify-between items-center mb-14">
                    <h2 className="text-3xl text-center font-playfair text-gray-800">
                        Mes Œuvres
                    </h2>

                    <a href={`/gallery?artist=Claire%20Dubois`}>
                        <Button
                            variant="ghost"
                            className="bg-[#d3bb7538] rounded-full h-12 px-8 hover:bg-[#d3bb7560] flex items-center"
                        >
                            <span className="font-playfair text-[#020000] text-base">
                                Voir Plus
                            </span>
                            <ChevronRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artworks.map((work) => (
                        <Card
                            key={work.id}
                            className="rounded-xl overflow-hidden shadow-[0px_1px_2px_#0000000d]"
                        >
                            <div
                                className="h-64 w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${imageUrl(work.image)})` }}
                            />
                            <CardContent className="p-6">
                                <h3 className="text-xl font-playfair text-black mb-4 leading-5">
                                    {work.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}