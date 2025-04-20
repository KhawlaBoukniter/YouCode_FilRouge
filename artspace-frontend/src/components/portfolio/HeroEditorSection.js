import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Button from "../ui/button";
import ImageUpload from "../ui/ImageUpload";

export default function HeroEditorSection({ data, onChange }) {
    const [localData, setLocalData] = useState(data || {
        name: "",
        shortBio: "",
        contactEmail: "",
        image: null,
    });

    const handleChange = (field, value) => {
        const updated = { ...localData, [field]: value };
        setLocalData(updated);
        onChange(updated);
    };

    const handleImageSelect = (file) => {
        handleChange("image", file);
    };

    return (
        <section className="w-full py-16 px-6 bg-white border-b border-gray-200">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6">Introduction</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Nom</label>
                        <Input
                            placeholder="Claire Dubois"
                            value={localData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Bio courte</label>
                        <Textarea
                            rows={3}
                            placeholder="Artiste contemporaine spécialisée..."
                            value={localData.shortBio}
                            onChange={(e) => handleChange("shortBio", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email de contact</label>
                        <Input
                            type="email"
                            placeholder="claire.dubois@artspace.com"
                            value={localData.contactEmail}
                            onChange={(e) => handleChange("contactEmail", e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Photo de profil</label>
                    <ImageUpload
                        value={localData.image}
                        onFileSelect={handleImageSelect}
                        subtitle="Glissez une image ou cliquez"
                    />
                </div>
            </div>
        </section>
    );
}