import React, { useState } from "react";
import { Input } from "../ui/input";
import Tags from "../ui/tags";
import { Textarea } from "../ui/textarea";
import { Select, SelectOption } from "../ui/select";
import Button from "../ui/button";
import ImageUpload from "../ui/ImageUpload";
import Toast from "../ui/toast";

export default function ArtworkForm() {
    const dimensionFields = [
        { id: "width", label: "Largeur" },
        { id: "height", label: "Hauteur" },
        { id: "depth", label: "Profondeur" },
    ];

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        width: "",
        height: "",
        depth: "",
        year: "",
        tags: [],
        image: null,
    });

    const [toast, setToast] = useState(null);

    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    }

    const handleFileSelect = (file) => {
        handleChange("image", file);
    };

    const validateForm = () => {
        const newErr = {};

        if (!formData.title.trim()) newErr.title = "Le titre est obligatoire";
        if (!formData.description.trim()) newErr.description = "La description est obligatoire";
        if (!formData.category) newErr.category = "La catégorie est obligatoire";
        if (!formData.image) newErr.image = "L'image  de l'oeuvre est obligatoire";

        ["width", "height", "depth"].forEach(dimension => {
            if (formData[dimension] && (isNaN(formData[dimension]) || formData[dimension] <= 0)) {
                newErr[dimension] = `La ${dimension} doit etre un nombre positif`;
            }
        });

        if (formData.year && (isNaN(formData.year) || formData.year < 1900 || formData.year > new Date().getFullYear())) {
            newErr.year = "Veuillez entrer une année valide";
        }

        return newErr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErr = validateForm();
        if (Object.keys(validationErr).length > 0) {
            setErrors(validationErr);
        } else {
            setErrors({});
            console.log("Form data submitted:", formData);

            setToast({ message: "Œuvre enregistrée avec succès !", type: "success" });

            setFormData({
                title: "",
                description: "",
                category: "",
                width: "",
                height: "",
                depth: "",
                year: "",
                tags: [],
                image: null,
            });
        }
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Titre de l'œuvre</label>
                        <Input placeholder="Entrez le titre" value={formData.title} onChange={(e) => handleChange("title", e.target.value)} />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Description</label>
                        <Textarea placeholder="Décrivez votre œuvre" className="min-h-[120px]" value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Catégorie</label>
                        <Select value={formData.category} onChange={(e) => handleChange("category", e.target.value)} >
                            <SelectOption value="peinture">Peinture</SelectOption>
                            <SelectOption value="illustration">Illustration</SelectOption>
                            <SelectOption value="photographie">Photographie</SelectOption>
                            <SelectOption value="art-numerique">Art numérique</SelectOption>
                        </Select>
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>
                </div>

                <div className="pt-7">
                    <ImageUpload onFileSelect={handleFileSelect} />
                    {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
                </div>
            </div>

            <div className="border-t border-gray-100 pt-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Dimensions</label>
                        <div className="grid grid-cols-3 gap-4">
                            {dimensionFields.map((field) => (
                                <div key={field.id}>
                                    <Input
                                        type="number"
                                        min="0"
                                        placeholder={field.label}
                                        value={formData[field.id]}
                                        onChange={(e) => handleChange(field.id, e.target.value)}
                                    />
                                    {errors[field.id] && <p className="text-red-500 text-sm">{errors[field.id]}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-600 font-cormorant">Année de création</label>
                        <Input type="number" min="1900" placeholder="2025" value={formData.year} onChange={(e) => handleChange("year", e.target.value)} />
                        {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-600 font-cormorant">Tags</label>
                    <Tags placeholder="Ajoutez des tags séparés par des virgules" value={formData.tags} onChange={(tags) => handleChange("tags", tags)} />
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline" className="h-12 px-8">
                    Annuler
                </Button>
                <Button className="h-12 px-8 bg-[#3a6b8f] text-white">
                    Soumettre l'œuvre
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