import React from "react";
import { HeartIcon, BookmarkIcon } from "lucide-react";
import Button from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Header() {
    const artwork = {
        title: "Eternal Dance",
        artist: "Jean-Paul Roux",
        price: "€3,000",
        image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-2.png",
        likes: 124,
        saves: 56,
    };

    return (
        <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg">
                    <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-playfair text-gray-800">{artwork.title}</h1>
                        <h2 className="text-lg font-playfair text-gray-500">by {artwork.artist}</h2>

                        <div className="flex items-center gap-6 mt-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <HeartIcon className="h-5 w-5" />
                                <span className="font-playfair">{artwork.likes}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <BookmarkIcon className="h-5 w-5" />
                                <span className="font-playfair">{artwork.saves}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-2xl font-playfair text-[#3a6b8f]">{artwork.price}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Button className="h-12 w-full md:w-auto bg-[#3a6b8f] text-white rounded-lg font-playfair text-base hover:bg-[#345c78] transition">
                            Acheter / Réserver
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}