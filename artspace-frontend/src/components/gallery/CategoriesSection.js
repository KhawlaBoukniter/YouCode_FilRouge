import React, { useState } from "react";
import Button from "../ui/button";
import FadeIn from "../ui/FadeIn";
import { ChevronDown, ChevronUp } from "lucide-react";

const CategoriesSection = () => {

    const categories = [
        { id: 1, name: "All", active: true },
        { id: 2, name: "Paintings", active: false },
        { id: 3, name: "Digital Art", active: false },
        { id: 4, name: "Photography", active: false },
        { id: 5, name: "Modern Art", active: false },
        { id: 6, name: "Contemporary", active: false },
        { id: 7, name: "Sculpture", active: false },
        { id: 8, name: "Illustration", active: false },
    ];

    const [showAll, setShowAll] = useState(false);

    const displayedCategories = showAll ? categories : categories.slice(0, 5);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="max-w-7xl mx-auto my-14">
            <div className="flex flex-wrap gap-4 justify-center">
                {displayedCategories.map((category, i) => (
                    <FadeIn delay={0.2 * i} key={category.id}>
                        <Button
                            variant={category.active ? "default" : "secondary"}
                            className={`rounded-full px-6 h-10 hover:text-white hover:bg-black ${category.active
                                ? "bg-black text-white"
                                : "bg-gray-100 text-black"
                                }`}
                        >
                            <span className="font-normal font-playfair text-base">
                                {category.name}
                            </span>
                        </Button>
                    </FadeIn>
                ))}

                {categories.length > 5 && (
                    <button
                        onClick={toggleShowAll}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
                    >
                        {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default CategoriesSection;