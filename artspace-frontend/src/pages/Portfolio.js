import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/portfolio/HeroSection";
import About from "../components/portfolio/About";
import Timeline from "../components/portfolio/Timeline";
import Gallery from "../components/portfolio/Gallery";
import UpcomingEvents from "../components/portfolio/UpcomingEvents";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

export default function Portfolio() {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        let isMounted = true;

        async function fetchPortfolio() {
            try {
                const token = localStorage.getItem("token");

                const artistId = user?.artist?.id;

                if (!artistId) return;

                const res = await api.get(`/artist/${artistId}/portfolio`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (isMounted) {
                    setPortfolio(res.data);
                    setLoading(false);
                }
            } catch (err) {
                console.log("Erreur: ", err);
                if (isMounted) {
                    setPortfolio({
                        artist: {
                            name: user?.name,
                            bio: "Aucune biographie pour le moment.",
                            avatar: null
                        },
                        timelines: [],
                        artworks: [],
                        events: []
                    });
                    setLoading(false);
                }
            }
        }
        fetchPortfolio();

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) return <div className="p-10 text-center text-gray-600">Chargement...</div>;

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1 w-full">
                <HeroSection data={{
                    name: user?.name,
                    email: portfolio.user?.email || "Email non défini",
                    avatar: portfolio.artist?.avatar || null,
                }} />
                <About description={portfolio.artist.bio || "Biographie non disponible"} />
                <Timeline timelines={portfolio.timelines || []} />
                <Gallery artworks={portfolio.artworks || []} />
                <UpcomingEvents events={portfolio.events || []} />
            </main>

            <Footer />
        </div>
    );
}