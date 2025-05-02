import React from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { TrashIcon } from "lucide-react";

export default function GalleryEditorSection({ artworks = [], onChange }) {

    const handleUpdate = (index, field, value) => {
        const updated = [...artworks];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleAdd = () => {
        const updated = [...artworks, { title: "", description: "", imageUrl: "" }];
        setGallery(updated);
        onChange(updated);
    };

    const handleDelete = (index) => {
        const updated = artworks.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <section className="w-full py-16 px-6 bg-[#f8f7f4b0] border-b border-gray-200">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6 text-center">
                Mes Œuvres
            </h2>

            <div className="max-w-5xl mx-auto space-y-6">
                {artworks.map((artwork, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-white p-4 rounded-md shadow-sm border relative">
                        <Input
                            placeholder="Titre de l'œuvre"
                            value={artwork.title}
                            onChange={(e) => handleUpdate(index, "title", e.target.value)}
                        />
                        <Input
                            placeholder="Description courte (ex: Installation 2025)"
                            value={artwork.description}
                            onChange={(e) => handleUpdate(index, "description", e.target.value)}
                        />
                        <Input
                            placeholder="URL de l'image"
                            value={artwork.imageUrl}
                            onChange={(e) => handleUpdate(index, "imageUrl", e.target.value)}
                        />

                        <button
                            onClick={() => handleDelete(index)}
                            className="text-red-500 hover:text-red-700 absolute top-3 right-3"
                            title="Supprimer"
                        >
                            <TrashIcon size={18} />
                        </button>
                    </div>
                ))}

                <div className="flex justify-center">
                    <Button variant="outline" onClick={handleAdd}>
                        Ajouter une œuvre
                    </Button>
                </div>
            </div>
        </section>
    );
}