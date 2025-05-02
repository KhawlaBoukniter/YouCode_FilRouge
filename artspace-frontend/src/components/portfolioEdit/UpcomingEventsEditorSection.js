import React from "react";
import { Card, CardContent } from "../ui/card";
import { TrashIcon } from "lucide-react";
import { MapPin } from "lucide-react";

export default function UpcomingEventsEditorSection({ events, onChange }) {
    const handleRemove = (index) => {
        const updated = events.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <section className="w-full py-20 px-4 md:px-20">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl text-center font-playfair text-gray-800 mb-14">
                    Événements à venir
                </h2>

                <div className="max-w-[896px] mx-auto space-y-6 flex flex-col">
                    {events.slice(0, 2).map((event, index) => (
                        <Card
                            key={event.id || index}
                            className="rounded-xl border border-gray-100 hover:shadow-md transition relative"
                        >
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-playfair text-gray-800 leading-5">
                                            {event.title}
                                        </h3>
                                        <p className="mt-3 text-base font-playfair text-gray-600">
                                            {event.start_date} → {event.end_date}
                                        </p>
                                        <p className="flex items-center mt-1 gap-2 text-gray-600 font-playfair text-sm">
                                            <MapPin className="w-4 h-4" />
                                            {event.location}
                                        </p>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}