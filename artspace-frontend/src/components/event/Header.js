import React from "react";
import { Card, CardContent } from "../ui/card";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Button from "../ui/button";

export default function Header() {
    const event = {
        title: "Art Expo 2025",
        date: "15 Mai 2025",
        location: "Musée d'Art Moderne, Paris",
        image: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img-4.png",
    };

    return (
        <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-playfair text-gray-800">{event.title}</h1>

                        <div className="flex items-center gap-2 text-gray-600 font-playfair">
                            <CalendarIcon className="h-5 w-5" />
                            <span>{event.date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-600 font-playfair">
                            <MapPinIcon className="h-5 w-5" />
                            <span>{event.location}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <a href="#tickets">
                            <Button className="h-12 w-full md:w-auto bg-[#3a6b8f] text-white rounded-lg font-playfair hover:bg-[#345c78] transition">
                                Réserver un ticket
                            </Button>
                        </a>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}