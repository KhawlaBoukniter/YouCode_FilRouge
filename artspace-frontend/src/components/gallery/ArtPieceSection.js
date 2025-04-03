import { ChevronRightIcon, HeartIcon } from "lucide-react";
import React from "react";
import Button from "../ui/button";
import { Card, CardContent } from "../ui/card"

const ArtPieceSection = () => {
    const artworks = [
        {
            id: 1,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-1.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 2,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 3,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-2.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 4,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-3.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 5,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-4.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
        {
            id: 6,
            image: "https://c.animaapp.com/m94sczdf69r2y6/img/img-5.png",
            title: "Abstraction en Mouvement",
            artist: "Par Marie Laurent",
            price: "€2,500",
            featured: true,
        },
    ];

    return (
        <section className="py-16 flex flex-col items-center mx-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artworks.map((artwork) => (
                        <Card
                            key={artwork.id}
                            className="rounded-lg overflow-hidden border-0 shadow-none group transform transition duration-300 hover:scale-105 hover:shadow-[0px_15px_20px_#00000030]"
                        >
                            <CardContent className="p-0 relative">
                                <div
                                    className="h-96 bg-cover bg-center transition-transform duration-300"
                                    style={{ backgroundImage: `url(${artwork.image})` }}
                                />

                                {artwork.featured && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 w-full px-6 py-5">
                                            <h3 className="text-white text-xl font-garamond">{artwork.title}</h3>
                                            <p className="text-gray-300 text-sm font-garamond">{artwork.artist}</p>
                                            <div className="flex items-center justify-between mt-4">
                                                <span className="text-white text-xl font-garamond">{artwork.price}</span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="w-8 h-8 justify-items-center rounded-full bg-white/20 hover:bg-white/30"
                                                    >
                                                        <HeartIcon className="w-4 h-4 text-white" />
                                                    </button>
                                                    <Button className="h-9 rounded-full bg-white hover:bg-white/90 !text-black">
                                                        <span className="font-garamond text-sm">Acheter</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Button
                variant="outline"
                className="mt-16 h-12 rounded-full bg-[#d3bb7538] hover:bg-[#d3bb7560] border-0 text-[#020000] font-garamond"
            >
                <span className="font-normal text-base">Voir Plus</span>
                <ChevronRightIcon className="ml-2 h-4 w-3" />
            </Button>
        </section>
    );
};

export default ArtPieceSection;