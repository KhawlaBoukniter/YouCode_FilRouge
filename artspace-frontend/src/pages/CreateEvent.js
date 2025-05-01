import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventForm from "../components/event/EventForm";
import { useParams, useLocation } from "react-router-dom";
import api from "../api";

export default function CreateEvent() {
    const { id } = useParams();
    const location = useLocation();
    const isEditMode = location.pathname.includes("/edit");
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (isEditMode && id) {
            api.get(`/events/${id}`)
                .then((res) => setInitialData(res.data.event))
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
                            {isEditMode ? "Modifier l’événement" : "Créer un nouvel événement"}
                        </h1>
                        <p className="text-gray-600 text-base font-playfair mt-2">
                            {isEditMode
                                ? "Mettez à jour les détails de votre événement"
                                : "Partagez votre événement artistique avec le monde"}
                        </p>
                    </div>

                    <EventForm mode={isEditMode ? "edit" : "create"} initialData={initialData} />
                </div>
            </main>
            <Footer />
        </div>
    );
}