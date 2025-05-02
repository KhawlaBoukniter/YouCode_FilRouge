import React from "react";
import { Card, CardContent } from "../ui/card";
import { TrashIcon } from "lucide-react";

export default function GalleryEditorSection({ artworks, onChange }) {
    const handleRemove = (index) => {
        const updated = artworks.filter((_, i) => i !== index);
        onChange(updated);
    };



    const imageUrl = (image) => {
        if (!image) return "/default-artwork.jpg";
        if (image.startsWith("http")) return image;
        return `http://localhost:8000${image}`;
    };

    return (
        <section className="w-full py-20 bg-[#f8f7f4b0] p-10">
            <div className="max-w-[1280px] mx-auto px-6">
                <h2 className="text-3xl font-playfair text-gray-800 mb-14 text-center">
                    Mes Œuvres
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artworks.map((artwork, index) => (
                        <Card
                            key={artwork.id || index}
                            className="rounded-xl overflow-hidden relative shadow"
                        >
                            <div
                                className="h-64 w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${imageUrl(artwork.image)})` }}
                            />
                            <CardContent className="p-6">
                                <h3 className="text-xl font-playfair text-black mb-4 leading-5">
                                    {artwork.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}