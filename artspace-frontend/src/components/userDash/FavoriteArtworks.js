import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Button from "../ui/button";
import { EyeIcon } from "lucide-react";
import api from "../../api";

export default function FavoriteArtworks({ user }) {

    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get("/artworks/saved", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setArtworks(res.data || []);
            } catch (error) {
                console.error("Erreur lors du chargement des œuvres favorites :", error);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <Card className="rounded-2xl shadow-md">
            <CardHeader className="px-8 pb-0 flex flex-row justify-between items-center">
                <CardTitle className="text-2xl font-playfair text-gray-800">
                    Favorite Artworks
                </CardTitle>
                <a href="/user/artworks/saved" className="text-[#3a6b8f] font-playfair text-base hover:underline">
                    View All
                </a>
            </CardHeader>

            <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {artworks.map((artwork) => (
                        <div
                            key={artwork.id}
                            className="relative h-64 rounded-lg overflow-hidden group"
                            style={{
                                backgroundImage: `url(${artwork.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="p-4">
                                    <h4 className="text-white text-base font-semibold">
                                        {artwork.title}
                                    </h4>
                                    <p className="text-gray-300 text-sm mt-1">{artwork.artist}</p>
                                </div>

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href={`/artworks/${artwork.id}`}>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="!bg-transparent text-gray-300 hover:text-white transform transition duration-300 hover:scale-105 border-none p-2"
                                        >
                                            <EyeIcon className="h-5 w-5" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}