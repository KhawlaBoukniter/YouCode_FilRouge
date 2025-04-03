import React from "react";
import Button from "../ui/button";

const CategoriesSection = () => {

    const categories = [
        { id: 1, name: "All", active: true },
        { id: 2, name: "Paintings", active: false },
        { id: 3, name: "Digital Art", active: false },
        { id: 4, name: "Photography", active: false },
        { id: 5, name: "Modern Art", active: false },
        { id: 6, name: "Contemporary", active: false },
    ];

    return (
        <div className="max-w-7xl mx-auto my-14">
            <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                    <Button
                        key={category.id}
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
                ))}
            </div>
        </div>
    );
};

export default CategoriesSection;