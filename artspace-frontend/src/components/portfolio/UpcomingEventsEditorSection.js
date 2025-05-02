import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { TrashIcon } from "lucide-react";
import api from "../../api";

export default function UpcomingEventsEditorSection({ events = [], onChange }) {

    const [eventList, setEventList] = useState(events);
    const [eventOptions, setEventOptions] = useState([]);

    useEffect(() => {
        api.get("/my-events").then(res => {
            const allEvents = res.data.events || [];
            setEventOptions(allEvents);
        });
    }, []);

    // const handleUpdate = (index, field, value) => {
    //     const updated = [...eventList];
    //     updated[index][field] = value;
    //     setEventList(updated);
    //     onChange(updated);
    // };

    // const handleAdd = () => {
    //     const updated = [...eventList, { title: "", start_date: "", end_date: "", location: "" }];
    //     setEventList(updated);
    //     onChange(updated);
    // };

    const handleAddFromList = (eventId) => {
        const formatDate = (dateStr) => {
            return dateStr ? new Date(dateStr).toISOString().split("T")[0] : "";
        };

        const selected = eventOptions.find(e => e.id === +eventId);
        if (!selected || eventList.some(e => e.id === selected.id)) return;

        const newList = [...eventList, {
            id: selected.id,
            title: selected.title,
            start_date: formatDate(selected.start_date),
            end_date: formatDate(selected.end_date),
            location: selected.location || "",
        }];
        setEventList(newList);
        onChange(newList);
    };

    const handleDelete = (index) => {
        const updated = eventList.filter((_, i) => i !== index);
        setEventList(updated);
        onChange(updated);
    };

    return (
        <section className="w-full py-16 px-6 bg-white">
            <h2 className="text-2xl font-playfair text-gray-800 mb-6 text-center">
                Événements à venir
            </h2>

            <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <select
                        className="border p-2 rounded w-full sm:w-auto"
                        onChange={(e) => handleAddFromList(e.target.value)}
                        defaultValue=""
                    >
                        <option value="" disabled>Ajouter un événement existant</option>
                        {eventOptions.map(ev => (
                            <option key={ev.id} value={ev.id}>
                                {ev.title}
                            </option>
                        ))}
                    </select>
                </div>

                {eventList.map((event, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-[#f9f9f9] p-4 rounded-md border shadow-sm relative">
                        <Input
                            value={event.title}
                            disabled
                        />
                        <Input
                            value={event.start_date}
                            disabled
                        />
                        <Input
                            value={event.end_date}
                            disabled
                        />
                        <Input
                            value={event.location}
                            disabled
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

            </div>
        </section>
    );
}