import React, { useEffect, useState } from "react";
import { Eye, Trash2, Edit } from "lucide-react";
import api from "../../api";

export default function RecentArtworks({ user }) {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const imageUrl = (image) => {
        return image.startsWith("http")
            ? image
            : `http://localhost:8000${image}`;
    };

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const res = await api.get("/my-artworks");
                setArtworks(res.data.artworks?.data || []);
                setLoading(false);
            } catch (err) {
                console.error("Erreur:", err);
                setError("Erreur");
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    const handleDeleteArtwork = async (id) => {
        const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?");
        if (!confirm) return;

        try {
            const token = localStorage.getItem("token");
            await api.delete(`/artworks/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setArtworks(artworks.filter((artwork) => artwork.id !== id));
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    if (loading) return <p>Chargement des œuvres récentes...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-playfair text-gray-800">
                    Vos Œuvres Récentes
                </h2>
                <a href="/artist/artworks" className="text-[#3a6b8f] font-playfair hover:underline">
                    Voir tout
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artworks.slice(0, 3).map((artwork) => (
                    <div
                        key={artwork.id}
                        className="bg-black/30 rounded-xl overflow-hidden border border-gray-800 flex flex-col justify-between"
                    >
                        <div
                            className="h-64 bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${imageUrl(artwork.image)})` }}
                        >
                        </div>

                        <div className="p-4 space-y-2">
                            <h3 className="text-gray-200 font-semibold">
                                {artwork.title}
                            </h3>
                            <div className="flex items-center justify-between text-[#374151] text-sm">
                                <div className="flex items-center gap-2">
                                    <a href={`/artworks/${artwork.id}`} className="hover:text-green-600">
                                        <Eye className="w-4 h-4" />
                                    </a>
                                    <a href={`/artworks/edit/${artwork.id}`} className="hover:text-blue-700">
                                        <Edit className="w-4 h-4" />
                                    </a>
                                    <button onClick={() => handleDeleteArtwork(artwork.id)} className="hover:text-red-500">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}