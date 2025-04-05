import React, { useState, useEffect } from "react";

export default function Tags({ value = [], onChange }) {
    const [tags, setTags] = useState(value);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setTags(value || []);
    }, [value]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            if (!tags.includes(inputValue.trim())) {
                setTags([...tags, inputValue.trim()]);
                onChange([...tags, inputValue.trim()]);
            }
            setInputValue("");
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
        onChange(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-[#3a6b8f] text-white text-sm rounded-full px-3 py-1"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="ml-2 text-white hover:text-gray-300"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ajoutez des tags et appuyez sur Entrée"
                className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-base shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a6b8f]"
            />
        </div>
    );
}