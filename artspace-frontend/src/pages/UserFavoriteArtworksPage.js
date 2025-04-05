import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { EyeIcon } from "lucide-react";
import Button from "../components/ui/button";

export default function UserFavoriteArtworksPage() {
    const artworks = [
        {
            id: 1,
            title: "Abstract Harmony",
            artist: "by Marie Dubois",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-3.png",
        },
        {
            id: 2,
            title: "Eternal Dance",
            artist: "by Jean-Paul Roux",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-2.png",
        },
        {
            id: 3,
            title: "Digital Dreams",
            artist: "by Alex Chen",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-1.png",
        },
        {
            id: 4,
            title: "Sunset Memories",
            artist: "by Lea Moreau",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-4.png",
        },
        {
            id: 5,
            title: "Urban Jungle",
            artist: "by Hugo Martin",
            image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-5.png",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <h1 className="text-4xl font-playfair text-gray-800 mb-8">
                        Mes œuvres favorites
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {artworks.map((artwork) => (
                            <Card
                                key={artwork.id}
                                className="relative h-80 rounded-lg overflow-hidden group"
                            >
                                <CardContent className="h-full p-0">
                                    <div
                                        className="h-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${artwork.image})`,
                                        }}
                                    ></div>

                                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                                        <h4 className="text-white text-lg font-semibold">
                                            {artwork.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm">{artwork.artist}</p>
                                    </div>

                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="!bg-transparent hover:text-white text-gray-300 border-none transform transition duration-300 hover:scale-105 p-2"
                                            onClick={() => console.log(`Voir détails de l'œuvre ID ${artwork.id}`)}
                                        >
                                            <EyeIcon className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}