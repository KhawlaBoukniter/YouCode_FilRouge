import React from "react";
import { Card, CardContent } from "../ui/card";
import Button from "../ui/button";
import { TrashIcon } from "lucide-react";

export default function TimelineEditorSection({ data, onChange }) {
    const handleChange = (index, field, value) => {
        const updated = [...data];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleAdd = () => {
        onChange([...data, { year: "", title: "", location: "" }]);
    };

    const handleRemove = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <section className="py-20 w-full max-w-[1440px] mx-auto">
            <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                    <div className="flex flex-col items-center max-w-7xl mx-auto">
                        <h2 className="text-3xl font-playfair text-gray-800 text-center mb-12">
                            Mon Parcours
                        </h2>

                        <div className="w-full max-w-4xl mx-auto space-y-6">
                            {data.map((event, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <input
                                        type="text"
                                        value={event.year}
                                        onChange={(e) => handleChange(index, "year", e.target.value)}
                                        placeholder="Année"
                                        className="w-1/6 p-2 border rounded-md font-playfair"
                                    />
                                    <input
                                        type="text"
                                        value={event.title}
                                        onChange={(e) => handleChange(index, "title", e.target.value)}
                                        placeholder="Titre"
                                        className="w-2/5 p-2 border rounded-md font-playfair"
                                    />
                                    <input
                                        type="text"
                                        value={event.location}
                                        onChange={(e) => handleChange(index, "location", e.target.value)}
                                        placeholder="Lieu"
                                        className="w-2/5 p-2 border rounded-md font-playfair"
                                    />
                                    <button onClick={() => handleRemove(index)} title="Supprimer">
                                        <TrashIcon className="text-red-500 w-5 h-5 mt-2" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Button onClick={handleAdd} className="bg-[#3a6b8f] text-white">
                                Ajouter une étape
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}