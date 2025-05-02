import React from "react";
import { Card, CardContent } from "../ui/card";
import Badge from "../ui/badge.js";
import { MapPinCheck } from "lucide-react";

export default function UpcomingEventsSection({ events }) {

    return (
        <section className="w-full py-20 px-4 md:px-20">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl text-center font-playfair text-gray-800 leading-[30px] mb-14">
                    Événements à venir
                </h2>

                <div className="max-w-[896px] mx-auto space-y-6 flex flex-col">
                    {events.slice(0, 2).map((event) => (
                        <a key={event.id} href={`/events/${event.id}`}>
                            <Card key={event.id} className="rounded-xl border border-gray-100 hover:shadow-md transition">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-playfair text-gray-800 leading-5 whitespace-nowrap">
                                                {event.title}
                                            </h3>
                                            <p className="mt-3 text-base font-playfair text-gray-600 leading-4">
                                                {event.start_date} To {event.end_date}
                                            </p>
                                        </div>

                                        <Badge className="bg-emerald-100 text-emerald-700 rounded-full px-4 py-1 font-playfair text-sm font-normal">
                                            <MapPinCheck className="m-2 h-4 w-4" /> {event.location}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}