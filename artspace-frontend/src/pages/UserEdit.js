import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/button";
import { Input } from "../components/ui/input";
import api from "../api";

export default function UserEdit() {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get("/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const user = res.data.user;
                console.log(user);

                setName(user.name || "");
                setPreview(user.avatar || "");
                localStorage.setItem("user_id", JSON.stringify(user.id));
            } catch (error) {
                console.error("Erreur récupération user :", error);
            }
        };

        fetchUser();
    }, []);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const token = localStorage.getItem("token");
            const formData = new FormData();
            formData.append("name", name);
            if (avatar) formData.append("avatar", avatar);

            await api.post("/me/avatar", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Profil mis à jour !");
        } catch (error) {
            console.error("Erreur mise à jour :", error);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[600px] mx-auto space-y-8">
                    <h1 className="text-3xl font-playfair text-gray-800">Modifier mon profil</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-playfair text-gray-600">Nom complet *</label>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-playfair text-gray-600">Photo de profil</label>
                            <input type="file" accept="image/*" onChange={handleAvatarChange} />
                            {preview && (
                                <img src={preview} alt="Aperçu" className="w-20 h-20 mt-2 rounded-full object-cover" />
                            )}
                        </div>
                        <Button type="submit" className="bg-[#3a6b8f] text-white rounded-lg px-6 py-2 font-playfair">
                            Enregistrer
                        </Button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}