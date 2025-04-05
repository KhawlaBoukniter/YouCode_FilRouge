import React from "react";
import { Card, CardContent } from "../ui/card";

export default function Stats() {
    const stats = [
        { title: "Favorite Artworks", count: 24 },
        { title: "Virtual Visits", count: 156 },
        { title: "Collections", count: 8 },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
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