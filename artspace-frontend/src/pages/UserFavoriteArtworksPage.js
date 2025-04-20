import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { EyeIcon, TrashIcon } from "lucide-react";
import Button from "../components/ui/button";
import api from "../api";

export default function UserFavoriteArtworksPage() {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get("/artworks/saved", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const list = res.data.saved_artworks?.data || res.data.saved_artworks || [];
                setArtworks(list);
            } catch (error) {
                console.error("Erreur chargement favoris :", error);
                setArtworks([]);
            }
        };

        fetchFavorites();
    }, []);

    const handleRemove = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await api.post(`/artworks/${id}/save`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setArtworks((prev) => prev.filter((art) => art.id !== id));
        } catch (error) {
            console.error("Erreur suppression favori :", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <h1 className="text-4xl font-playfair text-gray-800 mb-8">
                        Mes œuvres favorites
                    </h1>

                    <div className="">
                        {artworks.length === 0 ? (
                            <p className="text-center text-gray-500 font-playfair">Aucune œuvre sauvegardée.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {artworks.map((artwork) => (
                                    <Card
                                        key={artwork.id}
                                        className="relative h-80 rounded-lg overflow-hidden group md:h-72"
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
                                                <p className="text-gray-300 text-sm">{artwork.artist?.user?.name || "Artiste inconnue"}</p>
                                            </div>

                                            <div className="absolute top-4 right-4 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <a href={`/artworks/${artwork.id}`}>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className=" text-black border-none transform transition duration-300 hover:scale-105 p-2"
                                                    >
                                                        <EyeIcon className="h-5 w-5" />
                                                    </Button>
                                                </a>
                                                <Button
                                                    onClick={() => handleRemove(artwork.id)}
                                                    className="rounded-full p-2 text-gray-300 hover:text-red-500 transform transition duration-300 hover:scale-105"
                                                    aria-label="Retirer des favoris"
                                                >
                                                    <TrashIcon className="w-5 h-5" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}