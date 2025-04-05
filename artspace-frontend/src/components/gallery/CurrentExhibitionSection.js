import React from "react";
import { Card, CardContent } from "../ui/card";
import FadeIn from "../ui/FadeIn";

const CurrentExhibitionSection = () => {
    const exhibitions = [
        {
            id: 1,
            title: "Masters of Impressionism",
            date: "Until August 30, 2025",
            description: [
                "Experience the revolutionary art movement that captured light, color, and modern life through the eyes of the greatest Impressionist painters.",
            ],
            icon: "https://c.animaapp.com/m94sczdf69r2y6/img/frame-1.svg",
        },
        {
            id: 2,
            title: "Digital Art Revolution",
            date: "September 15 - December 31, 2025",
            description: [
                "Discover how technology is reshaping the art world through immersive installations and digital masterpieces.",
            ],
            icon: "https://c.animaapp.com/m94sczdf69r2y6/img/frame-1.svg",
        },
    ];

    return (
        <div className="max-w-7xl flex flex-col items-center my-10 mx-8">
            <h2 className="font-normal text-4xl text-center mb-12 font-garamond text-black leading-9">
                Current Exhibitions
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {exhibitions.map((exhibition, i) => (
                    <FadeIn delay={0.3 * i}>
                        <Card
                            key={exhibition.id}
                            className="h-52 bg-white rounded-xl  transform transition duration-300 hover:scale-105 hover:shadow-[0_1rem_2rem_#00000030]"
                        >
                            <CardContent className="p-8">
                                <div className="flex items-start mb-8">
                                    <div className="w-16 h-16 bg-[#c8deef] rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                                        <img
                                            className="w-5 h-6"
                                            alt="Exhibition icon"
                                            src={exhibition.icon}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-garamond font-normal text-black text-xl leading-5">
                                            {exhibition.title}
                                        </h3>
                                        <p className="font-garamond font-normal text-gray-600 text-base leading-4 mt-2">
                                            {exhibition.date}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    {exhibition.description.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="font-garamond font-normal text-gray-700 text-base leading-normal"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
};

export default CurrentExhibitionSection;