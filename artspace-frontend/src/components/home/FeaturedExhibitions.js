import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "../ui/FadeIn";

const exhibitions = [
    {
        id: 1,
        title: "Virtual Renaissance",
        description: "Immersive journey through the golden age of art.",
        image: "/assets/exhibitions/renaissance.png",
        status: "Ongoing",
    },
    {
        id: 2,
        title: "Futuristic Visions",
        description: "Exploring the fusion of technology and creativity.",
        image: "/assets/exhibitions/futurism.png",
        status: "Upcoming",
    },
    {
        id: 3,
        title: "Voices of Nature",
        description: "A digital celebration of the natural world in art.",
        image: "/assets/exhibitions/nature.png",
        status: "Ongoing",
    },
];

const FeaturedExhibitions = () => {
    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-2xl sm:text-3xl font-garamond text-black mb-4">
                            Featured Exhibitions
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-sm sm:text-lg text-gray-600 font-garamond leading-6">
                            Explore our curated collection of digital exhibitions
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {exhibitions.map((exhibition, i) => (
                        <FadeIn key={exhibition.id} delay={0.4 * i}>
                            <div className="rounded-xl overflow-hidden shadow-md bg-white hover:bg-[#f9f9f9] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <div
                                    className="w-full h-48 sm:h-56 md:h-64 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${exhibition.image})` }}
                                />
                                <div className="p-6 flex flex-col justify-between h-full">
                                    <h3 className="font-playfair text-base sm:text-lg text-black mb-3 hover:text-[#3a6b8f] transition-colors duration-300">
                                        {exhibition.title}
                                    </h3>
                                    <p className="font-playfair text-sm sm:text-base text-gray-600 leading-6 mb-6">
                                        {exhibition.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to={`/artworks/${exhibition.id}`}
                                            className="font-playfair font-semibold text-[#d3bb75] text-sm hover:underline"
                                        >
                                            {exhibition.status}
                                        </Link>
                                        <ArrowRight className="w-4 h-4 text-[#d3bb75]" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedExhibitions;