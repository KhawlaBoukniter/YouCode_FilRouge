import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const styles = [
    { id: 1, name: "Style Classique", image: "/images/style1.png" },
    { id: 2, name: "Light Gallery", image: "/images/style2.png" },
    { id: 3, name: "Golden Room", image: "/images/style3.png" },
    { id: 4, name: "Modern Style", image: "/images/style4.png" },
];

export default function ChooseRoomStyle({ artist }) {
    const [loadingId, setLoadingId] = useState(null);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleChooseStyle = async (styleId) => {
        setLoadingId(styleId);
        try {
            const token = localStorage.getItem("token");
            const res = await api.post(
                "/rooms",
                {
                    name: `Salle de ${user?.name || "Artiste"}`,
                    style_id: styleId,
                    is_public: true,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const newRoom = res.data.room;
            alert("Salle créée avec succès !");
            navigate(`/museum/${newRoom.id}`);
        } catch (err) {
            console.error(err);
            alert("Erreur lors de la création de la salle.");
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6">
                Choisissez le style de votre salle 3D
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {styles.map((style) => (
                    <div
                        key={style.id}
                        className="border rounded-xl shadow-sm overflow-hidden bg-white"
                    >
                        <img
                            src={style.image}
                            alt={style.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-800">
                                {style.name}
                            </h3>
                            <button
                                onClick={() => handleChooseStyle(style.id)}
                                disabled={loadingId === style.id}
                                className="mt-3 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
                            >
                                {loadingId === style.id ? "Création..." : "Choisir ce style"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}