import React from "react";
import image from '../../assets/images/mission-section.png'
import FadeIn from "../ui/FadeIn";

const MissionSection = () => {
    const stats = [
        { value: "50K+", label: "Visiteurs mensuels" },
        { value: "1000+", label: "Œuvres d'art" },
        { value: "120+", label: "Artistes" },
    ];

    return (
        <section className="w-full py-24 bg-gray-50 md:px-12">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row justify-around items-center">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <FadeIn>
                                <h2 className="text-3xl md:justify-self-center text-black font-garamond mb-6 leading-9">
                                    Notre mission
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <h3 className="text-2xl md:justify-self-center text-slate-900 leading-9 font-garamond">
                                    Créer un pont entre l’art traditionnel et numérique
                                </h3>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <p className="text-base text-gray-600 leading-relaxed mt-6 font-garamond">
                                    ArtSpace a été fondé avec la volonté de rendre l'art accessible à tous,
                                    partout dans le monde. Notre musée 3D offre une expérience immersive
                                    qui dépasse les frontières géographiques et donne vie aux chefs-d'œuvre.
                                </p>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.6}>
                            <div className="flex flex-wrap md:justify-self-center gap-8 ">
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
                        </FadeIn>
                    </div>

                    <div className="w-full sm:w-[400px] md:w-[500px] aspect-square shadow-2xl rounded-2xl mt-10 lg:mt-0">
                        <div
                            className="w-full h-full rounded-2xl bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default MissionSection;