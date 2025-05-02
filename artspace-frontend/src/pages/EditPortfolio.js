import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroEditorSection from "../components/portfolioEdit/HeroEditorSection";
import AboutEditorSection from "../components/portfolioEdit/AboutEditorSection";
import TimelineEditorSection from "../components/portfolioEdit/TimelineEditorSection";
import GalleryEditorSection from "../components/portfolioEdit/GalleryEditorSection";
import UpcomingEventsEditorSection from "../components/portfolioEdit/UpcomingEventsEditorSection";
import Button from "../components/ui/button";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function EditPortfolio() {
    const [heroData, setHeroData] = useState({
        name: "",
        email: "",
        avatar: null,
    });

    const [aboutText, setAboutText] = useState("");
    const [timelines, setTimelines] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await api.get("/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const { user, artist } = res.data;
                setHeroData({
                    name: user.name,
                    email: user.email,
                    avatar: artist?.avatar ?? null,
                });
                setAboutText(artist?.bio ?? "");

                const [timelineRes, artworksRes, eventsRes] = await Promise.all([
                    api.get("/my-timelines", { headers: { Authorization: `Bearer ${token}` } }),
                    api.get("/my-artworks", { headers: { Authorization: `Bearer ${token}` } }),
                    api.get("/my-events", { headers: { Authorization: `Bearer ${token}` } }),
                ]);

                setTimelines(timelineRes.data);
                setGallery(artworksRes.data.artworks.data);
                console.log("Artworks data:", artworksRes.data.artworks.data);
                setEvents(eventsRes.data.events);
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors du chargement :", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            const formData = new FormData();
            formData.append("name", heroData.name || "");
            formData.append("email", heroData.email || "");
            formData.append("bio", aboutText || "");
            if (heroData.avatar instanceof File) {
                formData.append("avatar", heroData.avatar);
            }

            const token = localStorage.getItem("token");

            await api.post("/my-profile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            for (let timeline of timelines) {
                if (timeline.id) {
                    await api.put(`/my-timelines/${timeline.id}`, timeline, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                } else {
                    await api.post("/my-timelines", timeline, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                }
            }

            alert("Portfolio mis à jour !");

            const artistId = user?.artist?.id;
            if (artistId) {
                navigate(`/artist/${artistId}/portfolio`);
            }
            setSaving(false);
        } catch (error) {
            console.error("Erreur :", error);
            alert("Erreur lors de l'enregistrement.");
            setSaving(false);
        }
    };

    if (loading) return <p className="p-10 text-center text-gray-500">Chargement du portfolio...</p>;

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1 w-full py-12 px-4 md:px-12 space-y-20">
                <HeroEditorSection data={heroData} onChange={setHeroData} />
                <AboutEditorSection data={aboutText} onChange={setAboutText} />
                <TimelineEditorSection data={timelines} onChange={setTimelines} />
                <GalleryEditorSection artworks={Array.isArray(gallery) ? gallery : []} onChange={setGallery} />
                <UpcomingEventsEditorSection events={events} onChange={setEvents} />

                <div className="flex justify-center">
                    <Button onClick={handleSave} disabled={saving}>
                        {saving ? "Enregistrement en cours..." : "Enregistrer le portfolio"}
                    </Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}