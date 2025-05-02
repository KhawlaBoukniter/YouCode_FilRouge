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
        shortBio: "",
        contactEmail: "",
        image: null,
    });

    const [aboutText, setAboutText] = useState("");
    const [timelines, setTimelines] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [events, setEvents] = useState([]);

    const handleSave = async () => {
        try {
            const formData = new FormData();
            formData.append("name", heroData.name);
            formData.append("short_bio", heroData.shortBio);
            formData.append("contact_email", heroData.contactEmail);
            if (heroData.image) formData.append("image", heroData.image);

            await api.put("/my-profile", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            for (let t of timelines) {
                await api.post("/my-timelines", t);
            }

            alert("Portfolio enregistré avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'enregistrement du portfolio :", error);
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
                    <Button onClick={handleSave}>Enregistrer le Portfolio</Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}