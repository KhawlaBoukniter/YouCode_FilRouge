import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Button from "../ui/button";
import ImageUpload from "../ui/ImageUpload";

export default function EventForm() {

    const [formData, setFormData] = useState({
        title: "",
        lieu: "",
        date: "",
        description: "",
        image: null,
    });

    const imageUploadRef = useRef();

    const handleFileSelect = (file) => {
        handleChange("image", file);
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    }

    return (
        <form className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Nom de l'événement</label>
                        <Input placeholder="Entrez le titre de l'événement" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Lieu</label>
                        <Input placeholder="Entrez le lieu de l'événement" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Date</label>
                        <Input type="date" />
                    </div>
                </div>

                <div className="pt-7">
                    <ImageUpload onFileSelect={handleFileSelect} title="Affiche de l'événement" subtitle="Glissez votre affiche ici ou" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-600 font-playfair">Description</label>
                <Textarea
                    placeholder="Décrivez votre événement"
                    className="min-h-[120px]"
                />
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline" className="h-12 px-8">
                    Annuler
                </Button>
                <Button className="h-12 px-8 bg-[#3a6b8f] text-white">
                    Soumettre l'événement
                </Button>
            </div>
        </form>
    );
}