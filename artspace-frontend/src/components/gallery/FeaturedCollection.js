import React from "react";
import { Card, CardContent } from "../ui/card";

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
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl text-center mb-24 font-garamond text-black leading-9">
                    Featured Collection
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredArtworks.map((artwork) => (
                        <Card key={artwork.id} className="shadow-none p-4 transform transition duration-300 hover:scale-105 hover:shadow-[0_1rem_2rem_#00000030]">
                            <CardContent className="p-0">
                                <div className="flex flex-col gap-4">
                                    <img
                                        src={artwork.image}
                                        alt={artwork.title}
                                        className="w-full h-[300px] object-cover rounded-xl"
                                    />
                                    <div className="mt-4">
                                        <h3 className="font-garamond text-black text-xl leading-5">
                                            {artwork.title}
                                        </h3>
                                        <p className="font-garamond text-gray-600 text-base mt-2">
                                            {artwork.artist}, {artwork.year}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;