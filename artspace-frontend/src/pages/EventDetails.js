import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/event/Header";
import Description from "../components/event/Description";
import Tickets from "../components/event/Tickets";
import api from "../api";
import { useParams } from "react-router-dom";

export default function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(tickets);


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get(`events/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setEvent(res.data.event);
                setTickets(res.data.tickets || []);

                setLoading(false)
            } catch (err) {
                console.log('Erreur: ', err);
                setLoading(false);

            }
        };
        fetchEvents();
    }, [id]);

    if (loading) return <p className="text-center mt-10">Chargement...</p>;
    if (!event) return <p className="text-center mt-10">Evenement introuvable.</p>;


    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <Header event={event} />
                    <Description description={event.description} />
                    <Tickets tickets={tickets} />
                </div>
            </main>

            <Footer />
        </div>
    );
}