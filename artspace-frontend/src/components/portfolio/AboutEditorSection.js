import React, { useState } from "react";
import { Textarea } from "../ui/textarea";

export default function AboutEditorSection({ data, onChange }) {

    const handleChange = (e) => {
        const value = e.target.value;
        onChange(value);
    };

    return (
        <section className="w-full py-16 px-6 bg-[#f8f7f4b0] border-b border-gray-200">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6 text-center">
                À propos de moi
            </h2>

            <div className="max-w-3xl mx-auto">
                <Textarea
                    rows={8}
                    placeholder="Décrivez votre parcours artistique, vos inspirations, votre vision..."
                    value={data}
                    onChange={handleChange}
                    className="w-full resize-none text-gray-700 font-playfair"
                />
            </div>
        </section>
    );
}