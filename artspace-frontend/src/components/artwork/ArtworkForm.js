import React, { useState, useEffect, useRef } from "react";
import { Input } from "../ui/input";
import Tags from "../ui/tags";
import { Textarea } from "../ui/textarea";
import { Select, SelectOption } from "../ui/select";
import Button from "../ui/button";
import ImageUpload from "../ui/ImageUpload";
import Toast from "../ui/toast";

export default function ArtworkForm({ mode = "create", initialData = null }) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        image: null,
    });

    const [toast, setToast] = useState(null);

    const [errors, setErrors] = useState({});

    const imageUploadRef = useRef();

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

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
        if (!formData.price || isNaN(formData.price) || +formData.price < 0) newErr.price = "Prix invalide";
        if (!formData.image) newErr.image = "L'image  de l'oeuvre est obligatoire";
        return newErr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErr = validateForm();
        if (Object.keys(validationErr).length > 0) {
            setErrors(validationErr);
        } else {
            setErrors({});
            console.log(mode === "edit" ? "Updating" : "Submitting", formData);

            setToast({
                message:
                    mode === "edit"
                        ? "Œuvre mise à jour avec succès !"
                        : "Œuvre enregistrée avec succès !",
                type: "success",
            });

            if (mode === "create") {
                setFormData({
                    title: "",
                    description: "",
                    price: "",
                    image: null,
                });

                if (imageUploadRef.current) {
                    imageUploadRef.current.reset();
                }
            }
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
                        <label className="text-sm text-gray-600 font-cormorant">Prix (€)</label>
                        <Input type="number" step="0.01" min="0" placeholder="0.00" value={formData.price} onChange={(e) => handleChange("price", e.target.value)} />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                    </div>
                </div>

                <div className="pt-7">
                    <ImageUpload ref={imageUploadRef} onFileSelect={handleFileSelect} />
                    {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline" className="h-12 px-8">
                    Annuler
                </Button>
                <Button className="h-12 px-8 bg-[#3a6b8f] text-white">
                    {mode === "edit" ? "Mettre à jour" : "Soumettre l'œuvre"}
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