import React, { useEffect, useState } from "react";
import api from "../../api";

export default function Stats({ user }) {
    const [stats, setStats] = useState({
        totalArtworks: 0,
        pendingArtworks: 0,
        totalTickets: 0,
        totalRevenue: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [artworksRes, revenueRes, ticketsRes] = await Promise.all([
                    api.get("/my-artworks"),
                    api.get("/my-stats/revenue"),
                    api.get("/my-stats/tickets"),
                ]);

                const artworks = artworksRes.data.artworks?.data || [];
                setStats({
                    totalArtworks: artworks.length,
                    pendingArtworks: artworks.filter(a => a.status === "pending").length,
                    totalTickets: ticketsRes.data.total_tickets_sold,
                    totalRevenue: +revenueRes.data.total_revenue,
                });


                setLoading(false);
            } catch (err) {
                console.log("erreur: ", err);

                setError('Erreur');
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) return <p>Chargement des stats...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    const formattedRevenue = !isNaN(stats.totalRevenue)
        ? new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
        }).format(stats.totalRevenue)
        : "0 €";

    const data = [
        { label: "Œuvres Totales", value: stats.totalArtworks },
        { label: "En Attente", value: stats.pendingArtworks },
        { label: "Tickets Vendus", value: stats.totalTickets },
        { label: "Revenu", value: formattedRevenue },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-center items-center"
                >
                    <p className="text-gray-600 text-base font-playfair mb-2">
                        {stat.label}
                    </p>
                    <p className="text-3xl text-black font-playfair">{stat.value}</p>
                </div>
            ))}
        </div>
    );
}