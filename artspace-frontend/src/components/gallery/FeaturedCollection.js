import React from "react";
import { Card, CardContent } from "../ui/card";
import FadeIn from "../ui/FadeIn";

const FeaturedCollection = () => {
    const featuredArtworks = [
        {
            id: 1,
            title: "The Lady in Pearl",
            artist: "Leonardo da Vinci",
            year: "1495",
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-6.png",
            price: "€3,000",
        },
        {
            id: 2,
            title: "Garden of Dreams",
            artist: "UX Pilot Monet",
            year: "1876",
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-7.png",
            price: "€2,700",
        },
        {
            id: 3,
            title: "Harmony in Blue",
            artist: "Wassily Kandinsky",
            year: "1925",
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-8.png",
            price: "€1,800",
        },
    ];

    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12 sm:mb-24 font-garamond text-black leading-snug">
                    Featured Collection
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {featuredArtworks.map((artwork, i) => (
                        <FadeIn key={artwork.id} delay={0.3 * i}>
                            <Card className="shadow-none p-4 transform transition duration-300 hover:scale-105 hover:shadow-[0_1rem_2rem_#00000030] text-center max-w-sm mx-auto">
                                <CardContent className="p-0">
                                    <div className="flex flex-col gap-4">
                                        <img
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="w-full h-48 sm:h-60 md:h-64 object-cover rounded-xl"
                                        />
                                        <div className="mt-2">
                                            <h3 className="font-garamond text-black text-lg sm:text-xl">
                                                {artwork.title}
                                            </h3>
                                            <p className="font-garamond text-gray-600 text-sm sm:text-base mt-1">
                                                {artwork.artist}, {artwork.year}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;