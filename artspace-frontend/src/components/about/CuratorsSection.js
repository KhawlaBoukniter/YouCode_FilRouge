import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import FadeIn from "../ui/FadeIn";

const CuratorsSection = () => {
    const curators = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Conservatrice en chef",
            image: "https://c.animaapp.com/m94ra950i1wJy8/img/img-2.png",
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Spécialiste art numérique",
            image: "https://c.animaapp.com/m94ra950i1wJy8/img/img-3.png",
        },
        {
            id: 3,
            name: "Emma Davis",
            role: "Designer VR immersif",
            image: "https://c.animaapp.com/m94ra950i1wJy8/img/img-4.png",
        },
        {
            id: 4,
            name: "David Kim",
            role: "Directeur technologique",
            image: "https://c.animaapp.com/m94ra950i1wJy8/img/img-5.png",
        },
    ];

    return (
        <section className="w-full py-14 bg-gray-50">
            <div className="container max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col items-center mb-10">
                    <FadeIn>
                        <h2 className="font-normal text-3xl text-center mb-6 font-garamond">
                            Découvrez nos conservateurs
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="max-w-[580px] text-base text-center text-gray-600 font-garamond">
                            Une équipe alliant expertise historique et technologies immersives.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {curators.map((curator, i) => (
                        <FadeIn delay={0.4 * i}>
                            <Card key={curator.id} className="border-0 bg-transparent">
                                <CardContent className="flex flex-col items-center py-6">
                                    <Avatar className="rounded-full">
                                        <AvatarImage
                                            src={curator.image}
                                            alt={curator.name}
                                            className="object-cover"
                                        />
                                    </Avatar>
                                    <h3 className="mt-6 font-normal text-black text-base text-center font-garamond">
                                        {curator.name}
                                    </h3>
                                    <p className="mt-2 text-gray-600 text-base text-center font-garamond">
                                        {curator.role}
                                    </p>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuratorsSection;