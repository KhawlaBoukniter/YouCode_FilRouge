import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroEditorSection from "../components/portfolio/HeroEditorSection";
import AboutEditorSection from "../components/portfolio/AboutEditorSection";
import TimelineEditorSection from "../components/portfolio/TimelineEditorSection";
import GalleryEditorSection from "../components/portfolio/GalleryEditorSection";
import UpcomingEventsEditorSection from "../components/portfolio/UpcomingEventsEditorSection";
import Button from "../components/ui/button";
import api from "../api";

export default function ArtistPortfolioEditor() {
    const [heroData, setHeroData] = useState({
        name: "",
        email: "",
        avatar: null,
    });

    const [aboutText, setAboutText] = useState("");
    const [timelines, setTimelines] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [events, setEvents] = useState([]);

    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        try {
            const formData = new FormData();
            formData.append("name", heroData.name);
            formData.append("email", heroData.email);
            formData.append("bio", aboutText);
            if (heroData.avatar) formData.append("avatar", heroData.avatar);

            const token = localStorage.getItem("token");

            for (let [key, value] of formData.entries()) {
                console.log(`${key}:`, value);
            }

            await api.post("/my-profile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                },
            });

            for (let t of timelines) {
                await api.post("/my-timelines", t);
            }

            alert("Portfolio enregistré avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'enregistrement du portfolio :", error);
            if (error.response?.data?.errors) {
                alert("Erreur : " + JSON.stringify(error.response.data.errors, null, 2));
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1 w-full py-12 px-4 md:px-12 space-y-20">
                <HeroEditorSection data={heroData} onChange={setHeroData} />
                <AboutEditorSection data={aboutText} onChange={setAboutText} />
                <TimelineEditorSection data={timelines} onChange={setTimelines} />
                <GalleryEditorSection artworks={gallery} onChange={setGallery} />
                <UpcomingEventsEditorSection events={events} onChange={setEvents} />

                <div className="flex justify-center">
                    <Button onClick={handleSave} disabled={saving}>
                        {saving ? "Enregistrement..." : "Enregistrer le Portfolio"}
                    </Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}