import React from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { TrashIcon } from "lucide-react";

export default function TimelineEditorSection({ data = [], onChange }) {

    const handleUpdate = (index, field, value) => {
        const updated = [...data];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleAdd = () => {
        const updated = [...data, { year: "", title: "", location: "" }];
        onChange(updated);
    };

    const handleDelete = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <section className="w-full py-16 px-6 bg-white border-b border-gray-200">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6 text-center">
                Mon Parcours
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 items-start border p-4 rounded-md shadow-sm bg-gray-50">
                        <Input
                            placeholder="Année"
                            type="date"
                            value={item.year}
                            onChange={(e) => handleUpdate(index, "year", e.target.value)}
                            className="md:w-1/4"
                        />
                        <Input
                            placeholder="Titre"
                            value={item.title}
                            onChange={(e) => handleUpdate(index, "title", e.target.value)}
                            className="md:w-1/3"
                        />
                        <Input
                            placeholder="Lieu"
                            value={item.location}
                            onChange={(e) => handleUpdate(index, "location", e.target.value)}
                            className="md:w-1/3"
                        />
                        <button
                            onClick={() => handleDelete(index)}
                            className="text-red-500 hover:text-red-700 mt-2"
                            title="Supprimer"
                        >
                            <TrashIcon size={18} />
                        </button>
                    </div>
                ))}

                <div className="flex justify-center">
                    <Button variant="outline" onClick={handleAdd}>
                        Ajouter une étape
                    </Button>
                </div>
            </div>
        </section>
    );
}