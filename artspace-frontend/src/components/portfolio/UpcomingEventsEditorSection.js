import React from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { TrashIcon } from "lucide-react";

export default function UpcomingEventsEditorSection({ events = [], onChange }) {

    const handleUpdate = (index, field, value) => {
        const updated = [...events];
        updated[index][field] = value;
        onChange(updated);
    };

    const handleAdd = () => {
        const updated = [...events, { title: "", dateLocation: "", status: "" }];
        onChange(updated);
    };

    const handleDelete = (index) => {
        const updated = events.filter((_, i) => i !== index);
        onChange(updated);
    };

    return (
        <section className="w-full py-16 px-6 bg-white">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6 text-center">
                Événements à venir
            </h2>

            <div className="max-w-5xl mx-auto space-y-6">
                {events.map((event, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-[#f9f9f9] p-4 rounded-md border shadow-sm relative">
                        <Input
                            placeholder="Titre de l’événement"
                            value={event.title}
                            onChange={(e) => handleUpdate(index, "title", e.target.value)}
                        />
                        <Input
                            placeholder="Date et lieu (ex: 15 Mars 2025 - Paris)"
                            value={event.dateLocation}
                            onChange={(e) => handleUpdate(index, "dateLocation", e.target.value)}
                        />
                        <Input
                            placeholder="Statut (ex: À venir)"
                            value={event.status}
                            onChange={(e) => handleUpdate(index, "status", e.target.value)}
                        />

                        <button
                            onClick={() => handleDelete(index)}
                            className="text-red-500 hover:text-red-700 absolute top-3 right-3"
                            title="Supprimer"
                        >
                            <TrashIcon size={18} />
                        </button>
                    </div>
                ))}

                <div className="flex justify-center">
                    <Button variant="outline" onClick={handleAdd}>
                        Ajouter un événement
                    </Button>
                </div>
            </div>
        </section>
    );
}