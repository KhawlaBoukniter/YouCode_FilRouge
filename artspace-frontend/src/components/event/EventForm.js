import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Button from "../ui/button";
import ImageUpload from "../ui/ImageUpload";
import Toast from "../ui/toast";

export default function EventForm() {

    const [formData, setFormData] = useState({
        title: "",
        lieu: "",
        date: "",
        description: "",
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState(null);
    const imageUploadRef = useRef();

    const handleFileSelect = (file) => {
        handleChange("image", file);
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    }

    const validateForm = () => {
        const newErr = {};
        if (!formData.title.trim()) newErr.title = "Le titre est obligatoire.";
        if (!formData.lieu.trim()) newErr.lieu = "Le lieu est obligatoire.";
        if (!formData.date) newErr.date = "La date est obligatoire.";
        if (!formData.image) newErr.image = "L'affiche de l'événement est obligatoire.";

        if (formData.year && (isNaN(formData.year) || formData.year < 1900 || formData.year > new Date().getFullYear())) {
            newErr.year = "Veuillez entrer une année valide";
        }

        return newErr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Formulaire soumis avec succès :", formData);

            setToast({ message: "Événement enregistré avec succès !", type: "success" });

            if (imageUploadRef.current) {
                imageUploadRef.current.reset();
            }

            setFormData({
                title: "",
                lieu: "",
                date: "",
                description: "",
                image: null,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Nom de l'événement</label>
                        <Input
                            placeholder="Entrez le titre de l'événement"
                            value={formData.title}
                            onChange={(e) => handleChange("title", e.target.value)}
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Lieu</label>
                        <Input
                            placeholder="Entrez le lieu de l'événement"
                            value={formData.lieu}
                            onChange={(e) => handleChange("lieu", e.target.value)}
                        />
                        {errors.lieu && <p className="text-red-500 text-sm">{errors.lieu}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-playfair">Date</label>
                        <Input
                            min="1900"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleChange("date", e.target.value)}
                        />
                        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                    </div>
                </div>

                <div className="pt-7">
                    <ImageUpload ref={imageUploadRef} onFileSelect={handleFileSelect} title="Affiche de l'événement" subtitle="Glissez votre affiche ici ou" />
                    {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-600 font-playfair">Description</label>
                <Textarea
                    placeholder="Décrivez votre événement"
                    className="min-h-[120px]"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
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

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </form>
    );
}