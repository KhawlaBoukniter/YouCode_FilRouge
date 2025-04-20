import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import api from "../../api";

export default function Stats({ user }) {
    const [stats, setStats] = useState({
        favorites: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await api.get(`/users/${user.id}/stats`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setStats((prev) => ({
                    ...prev,
                    favorites: res.data.favorites || 0,
                }));
            } catch (error) {
                console.error("Erreur lors du chargement des stats :", error);
            }
        };

        if (user) {
            fetchStats();
        }
    }, [user]);

    const statItems = [
        { title: "Œuvres favorites", count: stats.favorites },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {statItems.map((stat, index) => (
                <Card
                    key={index}
                    className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                    <CardContent className="flex flex-col justify-center items-center p-6">
                        <h3 className="text-lg font-playfair text-gray-800 mb-2">{stat.title}</h3>
                        <span className="text-3xl font-playfair text-[#3a6b8f]">{stat.count}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}