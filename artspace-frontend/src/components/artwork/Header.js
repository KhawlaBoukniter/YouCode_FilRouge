import React, { useState } from "react";
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

    const [likes, setLikes] = useState(artwork.initialLikes);
    const [saves, setSaves] = useState(artwork.initialSaves);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
        setLikes((prev) => prev + (liked ? -1 : 1));
    };

    const toggleSave = () => {
        setSaved(!saved);
        setSaves((prev) => prev + (saved ? -1 : 1));
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
                            <button
                                onClick={toggleLike}
                                className={`flex items-center gap-2 font-playfair transition-colors ${liked ? "text-[#e63946]" : "text-gray-600 hover:text-[#e63946]"}`}
                            >
                                <HeartIcon className="h-5 w-5" />
                                <span>{artwork.likes}</span>
                            </button>
                            <button
                                onClick={toggleSave}
                                className={`flex items-center gap-2 font-playfair transition-colors ${saved ? "text-[#f4a261]" : "text-gray-600 hover:text-[#f4a261]"}`}
                            >
                                <BookmarkIcon className="h-5 w-5" />
                                <span>{artwork.saves}</span>
                            </button>
                        </div>

                        <div className="mt-6">
                            <p className="text-2xl font-playfair text-[#3a6b8f]">{artwork.price}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <a href="/artworks/edit/1">
                            <Button className="bg-[#3a6b8f] hover:bg-[#345c78] text-white rounded-lg font-playfair px-6 py-2 text-base transition">
                                Modifier
                            </Button>
                        </a>
                        <a href="/artworks/delete/1">
                            <Button variant="destructive" className="rounded-lg font-playfair px-6 py-2 text-base transition">
                                Supprimer
                            </Button>
                        </a>
                    </div>

                    <div className="mt-6">
                        <a href="/checkout/1">
                            <Button className="h-12 w-full md:w-auto bg-[#3a6b8f] text-white rounded-lg font-playfair text-base hover:bg-[#345c78] transition">
                                Acheter
                            </Button>
                        </a>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}