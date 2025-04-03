import React from "react";
import { Card, CardContent } from "../ui/card";

const MissionSection = () => {
    const stats = [
        { value: "50K+", label: "Visiteurs mensuels" },
        { value: "1000+", label: "Œuvres d'art" },
        { value: "120+", label: "Artistes" },
    ];

    return (
        <section className="w-full py-24 bg-gray-50">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row justify-around items-center">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl text-black font-garamond mb-6 leading-9">
                                Notre mission
                            </h2>

                            <h3 className="text-2xl text-slate-900 leading-9 font-garamond">
                                Créer un pont entre l’art traditionnel et numérique
                            </h3>

                            <p className="text-base text-gray-600 leading-relaxed mt-6 font-garamond">
                                ArtSpace a été fondé avec la volonté de rendre l'art accessible à tous,
                                partout dans le monde. Notre musée 3D offre une expérience immersive
                                qui dépasse les frontières géographiques et donne vie aux chefs-d'œuvre.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 ">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-4xl text-[#3a6b8f] font-garamond">
                                        {stat.value}
                                    </p>
                                    <p className="text-base text-gray-600 font-garamond">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Card className=" border-0 rounded-2xl overflow-hidden">
                        <CardContent className="p-0">
                            <img
                                src="https://c.animaapp.com/m94ra950i1wJy8/img/img-1.png"
                                alt="Galerie"
                                className="h-[500px] object-cover"
                            />
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default MissionSection;