import React from "react";
import Button from "../ui/button";

export default function HeroEditorSection({ data, onChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onChange({ ...data, avatar: file });
        }
    };

    const imageUrl = () => {
        if (data.avatar instanceof File) {
            return URL.createObjectURL(data.avatar);
        }
        if (!data.avatar) return "/default-avatar.png";
        return data.avatar.startsWith("http")
            ? data.avatar
            : `http://localhost:8000/storage/${data.avatar}`;
    };

    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto max-w-5xl px-4 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Nom complet"
                        className="w-full p-3 border rounded-md font-playfair text-lg"
                    />

                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Adresse e-mail"
                        className="w-full p-3 border rounded-md font-playfair text-lg"
                    />

                    <div>
                        <label className="block mb-2 font-playfair text-gray-700">Changer l’avatar</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="block w-full"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <div
                        className="aspect-square w-full rounded-2xl bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${imageUrl()})`,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}