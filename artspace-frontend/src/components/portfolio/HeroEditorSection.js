import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ImageUpload from "../ui/ImageUpload";

export default function HeroEditorSection({ data, onChange }) {

    const handleChange = (field, value) => {
        const updated = { ...data, [field]: value };
        onChange(updated);
    };

    const handleImageSelect = (file) => {
        handleChange("avatar", file);
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
                            value={data.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email de contact</label>
                        <Input
                            type="email"
                            placeholder="claire.dubois@artspace.com"
                            value={data.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Photo de profil</label>
                    <ImageUpload
                        value={data.avatar}
                        onFileSelect={handleImageSelect}
                        title={"image"}
                        subtitle="Glissez une image ou cliquez"
                    />
                </div>
            </div>
        </section>
    );
}