import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtworkForm from "../components/artwork/ArtworkForm";
import { useParams, useLocation } from "react-router-dom";
import api from "../api";

export default function CreateArtwork() {
    const { id } = useParams();
    const location = useLocation();
    const isEditMode = location.pathname.includes("/edit");
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (isEditMode && id) {
            api.get(`/artworks/${id}`)
                .then((res) => setInitialData(res.data.artwork))
                .catch((err) => console.error("Erreur: ", err));
        }
    }, [id, isEditMode]);
    return (
        <div className="flex flex-col min-h-screen bg-[#ffffff]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <div>
                        <h1 className="text-3xl font-playfair text-gray-800">
                            {isEditMode ? "Modifier l’œuvre" : "Soumettre une nouvelle œuvre"}
                        </h1>
                        <p className="text-gray-600 text-base font-playfair mt-2">
                            {isEditMode
                                ? "Mettez à jour votre création existante"
                                : "Partagez votre création avec notre communauté artistique"}
                        </p>
                    </div>

                    <ArtworkForm mode={isEditMode ? "edit" : "create"} initialData={initialData} />
                </div>
            </main>

            <Footer />
        </div>
    );
}