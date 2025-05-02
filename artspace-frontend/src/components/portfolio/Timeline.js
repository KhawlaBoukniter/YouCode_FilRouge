import React from "react";
import { Card, CardContent } from "../ui/card";

export default function TimelineSection({ timelines }) {
    return (
        <section className="py-20 w-full max-w-[1440px] mx-auto">
            <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                    <div className="flex flex-col items-center max-w-7xl mx-auto">
                        <h2 className="text-3xl font-playfair text-gray-800 text-center mb-16">
                            Mon Parcours
                        </h2>

                        <div className="w-full max-w-4xl mx-auto">
                            {timelines.map((event, index) => (
                                <div key={index} className="flex mb-8 last:mb-0">
                                    <div className="w-32 flex justify-end pr-4">
                                        <span className="font-playfair text-gray-800 text-base text-right mt-0.5">
                                            {event.year}
                                        </span>
                                    </div>

                                    <div className="relative flex-1 pl-8 border-l-2 border-[#c8c09db2] min-h-20">
                                        <div className="absolute w-3 h-3 top-2 left-[-7px] bg-[#bca263] rounded-full" />

                                        <h3 className="font-playfair text-gray-800 text-lg leading-tight">
                                            {event.title}
                                        </h3>
                                        <p className="font-playfair text-gray-600 text-base mt-2">
                                            {event.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}