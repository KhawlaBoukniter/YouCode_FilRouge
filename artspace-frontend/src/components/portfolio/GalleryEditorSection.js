import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { TrashIcon } from "lucide-react";
import api from "../../api";

export default function GalleryEditorSection({ artworks = [], onChange }) {
    const [gallery, setGallery] = useState(artworks);
    const [artworkOptions, setArtworkOptions] = useState([]);

    useEffect(() => {
        api.get("/my-artworks").then(res => {
            setArtworkOptions(res.data.artworks.data);
            console.log("Résultat de /my-artworks :", res.data.artworks.data);
        });
    }, []);

    const handleAddFromList = (artworkId) => {
        const selected = artworkOptions.find(a => a.id === parseInt(artworkId));
        if (!selected || gallery.some(a => a.id === selected.id)) return;

        const newGallery = [...gallery, {
            id: selected.id,
            title: selected.title,
            description: selected.description || "",
            imageUrl: selected.image || selected.image || ""
        }];
        setGallery(newGallery);
        onChange(newGallery);
    };

    const handleDelete = (index) => {
        const updated = gallery.filter((_, i) => i !== index);
        setGallery(updated);
        onChange(updated);
    };

    return (
        <section className="w-full py-16 px-6 bg-[#f8f7f4b0] border-b border-gray-200">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6 text-center">Mes Œuvres</h2>

            <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <select
                        className="border p-2 rounded w-full sm:w-auto"
                        onChange={(e) => handleAddFromList(e.target.value)}
                        defaultValue=""
                    >
                        <option value="" disabled>Ajouter une œuvre existante</option>
                        {artworkOptions.map(a => (
                            <option key={a.id} value={a.id}>
                                {a.title}
                            </option>
                        ))}
                    </select>
                </div>

                {gallery.map((artwork, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-sm border relative">
                        <Input value={artwork.title} disabled />
                        <Input value={artwork.description} disabled />
                        <Input value={artwork.imageUrl} disabled />

                        <button
                            onClick={() => handleDelete(index)}
                            className="text-red-500 hover:text-red-700 absolute top-3 right-3"
                        >
                            <TrashIcon size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}