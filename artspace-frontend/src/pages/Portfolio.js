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

    useEffect(() => {
        async function fetchPortfolio() {
            try {
                const res = await api.get(`artist/${id}/portfolio`);
                setPortfolio(res.data);
                console.log(res.data);

                setLoading(false);
            } catch (err) {
                navigate("/artist/portfolio/editor");
                console.log("Erreur: ", err);
                setLoading(false);
            }
        }
        fetchPortfolio();
    }, [id, navigate]);

    if (loading) return <div className="p-10 text-center text-gray-600">Chargement...</div>;

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-1 w-full">
                <HeroSection data={portfolio.artist} />
                <About description={portfolio.artist.bio} />
                <Timeline timelines={portfolio.timelines} />
                <Gallery artworks={portfolio.artworks} />
                <UpcomingEvents events={portfolio.events} />
            </main>

            <Footer />
        </div>
    );
}