import React from "react";
import FadeIn from "../ui/FadeIn";
import { Card, CardContent } from "../ui/card";

const RevolutionaryFeatures = () => {
    const features = [
        {
            id: 1,
            title: "3D Immersive Exploration",
            description: "Walk through galleries as if you were truly there.",
            icon: "/assets/icons/3d-explore.png",
        },
        {
            id: 2,
            title: "Live Interaction",
            description: "Engage with artists and guides in real-time.",
            icon: "/assets/icons/live-chat.png",
        },
        {
            id: 3,
            title: "Smart Recommendations",
            description: "Discover artwork tailored to your taste and your vibe.",
            icon: "/assets/icons/recommendation.png",
        },
    ];

    return (
        <section className="py-20 ">
            <div className="container max-w-7xl mx-auto px-12">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="font-normal text-3xl mb-6 font-garamond text-black leading-9">
                            Revolutionary Features
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="font-normal text-lg text-gray-600 font-garamond leading-5">
                            Experience art like never before with our cutting-edge technology
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <FadeIn delay={0.4 * i}>
                            <Card
                                key={feature.id}
                                className="p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-[0px_15px_20px_#00000030]"
                            >
                                <CardContent className="p-8">
                                    <div className="flex flex-col space-y-4">
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="mx-auto mb-4 w-16 h-16"
                                        />
                                        <h3 className="text-xl font-semibold text-[#3a6b8f] mb-2 font-garamond">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-base font-garamond">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>

                    ))}

                </div>
            </div>
        </section>
    );
};

export default RevolutionaryFeatures;