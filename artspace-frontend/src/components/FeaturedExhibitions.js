import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const exhibitions = [
    {
        id: 1,
        title: "Virtual Renaissance",
        description: "An immersive journey through the golden age of art.",
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
            <div className="max-w-[1280px] mx-auto px-12">
                <div className="text-center mb-16">
                    <h2 className="font-normal text-4xl mb-6 [font-family:'Cormorant_Garamond',Helvetica] text-black leading-9">
                        Featured Exhibitions
                    </h2>
                    <p className="font-normal text-xl text-gray-600 [font-family:'Cormorant_Garamond',Helvetica] leading-5">
                        Explore our curated collection of digital exhibitions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {exhibitions.map((exhibition) => (
                        <div
                            key={exhibition.id}
                            className="rounded-xl overflow-hidden shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border-0 bg-white transform transition duration-300 hover:scale-105 hover:shadow-[0px_15px_20px_#00000030]"
                        >
                            <div
                                className="h-64 w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${exhibition.image})` }}
                            />
                            <div className="p-6">
                                <h3 className="font-playfair text-lg text-black mb-4 transition duration-300 hover:text-[#3a6b8f]">
                                    {exhibition.title}
                                </h3>
                                <p className="font-playfair font-normal text-gray-600 text-sm leading-6 mb-6">
                                    {exhibition.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <Link
                                        to={`/artworks/${exhibition.id}`}
                                        className="font-playfair font-bold text-[#d3bb75] text-base transition"
                                    >
                                        {exhibition.status}
                                    </Link>
                                    <ChevronRight className="w-3.5 h-4 text-black" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedExhibitions;