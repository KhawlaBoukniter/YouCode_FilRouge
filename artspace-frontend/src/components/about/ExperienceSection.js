import React from "react";
import { Card, CardContent } from "../ui/card";

const ExperienceSection = () => {
    const experienceCards = [
        {
            id: 1,
            icon: "https://c.animaapp.com/m94ra950i1wJy8/img/frame-14.svg",
            title: "Collaborations artistiques",
            description:
                "Découvrez des installations numériques exclusives créées par des artistes contemporains.",
        },
        {
            id: 2,
            icon: "https://c.animaapp.com/m94ra950i1wJy8/img/frame.svg",
            title: "Visualisation 3D",
            description:
                "Examinez les œuvres sous tous les angles grâce à notre technologie immersive.",
        },
        {
            id: 3,
            icon: "https://c.animaapp.com/m94ra950i1wJy8/img/frame-2.svg",
            title: "Sessions interactives",
            description:
                "Participez à des discussions en temps réel avec artistes et conservateurs.",
        },
    ];

    return (
        <section className="w-full py-24">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center mb-16">
                    <h2 className="text-3xl text-center font-normal font-garamond leading-9 mb-6">
                        Une nouvelle dimension artistique
                    </h2>
                    <p className="text-base text-center text-gray-600 font-normal font-garamond leading-4">
                        Notre technologie de pointe donne vie à l’art comme jamais auparavant.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-6">
                    {experienceCards.map((card) => (
                        <Card
                            key={card.id}
                            className="rounded-2xl border border-solid border-gray-100"
                        >
                            <CardContent className="p-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center justify-start h-[30px]">
                                        <img
                                            className="w-[30px] h-[30px]"
                                            alt={card.title}
                                            src={card.icon}
                                        />
                                    </div>
                                    <h3 className="text-xl font-normal [font-family:'Cormorant_Garamond',Helvetica] text-black leading-5">
                                        {card.title}
                                    </h3>
                                    <p className="text-base font-normal [font-family:'Cormorant_Garamond',Helvetica] text-gray-600 leading-4">
                                        {card.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;