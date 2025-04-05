import React from "react";
import { Eye, Trash2, Edit } from "lucide-react";

export default function RecentArtworks() {
    const artworks = [
        {
            id: 1,
            title: "Néomorphisme #12",
            type: "Sculpture digitale",
            year: 2025,
            views: 234,
            status: "Validée",
            image:
                "https://c.animaapp.com/m9yin6yxq1kM86/img/img-1.png",
        },
        {
            id: 2,
            title: "Géométrie Fluide",
            type: "Installation",
            year: 2025,
            views: 128,
            status: "En attente",
            image:
                "https://c.animaapp.com/m9yin6yxq1kM86/img/img-2.png",
        },
        {
            id: 3,
            title: "Néon Dreams",
            type: "Art numérique",
            year: 2025,
            views: 456,
            status: "Validée",
            image:
                "https://c.animaapp.com/m9yin6yxq1kM86/img/img-3.png",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-playfair text-gray-800">
                    Vos Œuvres Récentes
                </h2>
                <button className="text-[#3a6b8f] font-playfair hover:underline">
                    Voir tout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artworks.map((artwork) => (
                    <div
                        key={artwork.id}
                        className="bg-black/30 rounded-xl overflow-hidden border border-gray-800 flex flex-col justify-between"
                    >
                        <div
                            className="h-64 bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${artwork.image})` }}
                        >
                            <div
                                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                                style={{
                                    backgroundColor:
                                        artwork.status === "Validée" ? "#34d39933" : "#fbbf2433",
                                    color:
                                        artwork.status === "Validée" ? "#10b981" : "#f59e0b",
                                }}
                            >
                                {artwork.status}
                            </div>
                        </div>

                        <div className="p-4 space-y-2">
                            <h3 className="text-gray-200 font-semibold">
                                {artwork.title}
                            </h3>
                            <p className="text-[#374151] text-sm">
                                {artwork.type}, {artwork.year}
                            </p>
                            <div className="flex items-center justify-between text-[#374151] text-sm">
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {artwork.views} vues
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="hover:text-blue-700">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="hover:text-red-500">
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