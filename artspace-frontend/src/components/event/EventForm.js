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

    const [ticketData, setTicketData] = useState([
        {
            ticketName: "",
            ticketPrice: "",
            ticketQuantity: ""
        }
    ]);

    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState(null);
    const imageUploadRef = useRef();
    const [step, setStep] = useState(1);

    const handleFileSelect = (file) => {
        handleChange("image", file);
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    }

    const handleTicketChange = (i, field, value) => {
        const updatedTickets = [...ticketData];
        updatedTickets[i][field] = value;
        setTicketData(updatedTickets);
    };

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

    const validateTicketForm = () => {
        const newErr = {};

        ticketData.forEach((ticket, index) => {
            if (!ticket.ticketName.trim()) {
                newErr[`ticketName_${index}`] = "Le nom du billet est obligatoire.";
            }
            if (!ticket.ticketPrice || isNaN(ticket.ticketPrice) || ticket.ticketPrice <= 0) {
                newErr[`ticketPrice_${index}`] = "Le prix doit être un nombre positif.";
            }
            if (!ticket.ticketQuantity || isNaN(ticket.ticketQuantity) || ticket.ticketQuantity <= 0) {
                newErr[`ticketQuantity_${index}`] = "La quantité doit être un nombre positif.";
            }
        });

        return newErr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setStep(2);
        }
    };

    const handleTicketSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateTicketForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Événement complet :", { formData, ticketData });

            setToast({ message: "Événement et billets enregistrés avec succès !", type: "success" });

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
            setTicketData([
                {
                    ticketName: "",
                    ticketPrice: "",
                    ticketQuantity: "",
                }
            ]);
            setStep(1);
        }
    };

    return (
        <form onSubmit={step === 1 ? handleSubmit : handleTicketSubmit} className="space-y-10">
            {step === 1 && (
                <>
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
                        <Button className="h-12 px-8 bg-[#3a6b8f] text-white" type="submit">
                            Suivant
                        </Button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="space-y-6">
                        <h2 className="text-xl font-playfair font-semibold text-gray-700">Ajouter un billet</h2>

                        {ticketData.map((ticket, i) => (
                            <div key={i} className="space-y-4 border p-4 rounded-md shadow-sm bg-gray-50">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 font-playfair">Nom du billet</label>
                                    <Input
                                        placeholder="Ex: Entrée standard"
                                        value={ticket.ticketName}
                                        onChange={(e) => handleTicketChange(i, "ticketName", e.target.value)}
                                    />
                                    {errors[`ticketName_${i}`] && <p className="text-red-500 text-sm">{errors[`ticketName_${i}`]}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 font-playfair">Prix du billet (€)</label>
                                    <Input
                                        type="number"
                                        min="0"
                                        placeholder="Ex: 20"
                                        value={ticket.ticketPrice}
                                        onChange={(e) => handleTicketChange(i, "ticketPrice", e.target.value)}
                                    />
                                    {errors[`ticketPrice_${i}`] && <p className="text-red-500 text-sm">{errors[`ticketPrice_${i}`]}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 font-playfair">Quantité disponible</label>
                                    <Input
                                        type="number"
                                        min="1"
                                        placeholder="Ex: 100"
                                        value={ticket.ticketQuantity}
                                        onChange={(e) => handleTicketChange(i, "ticketQuantity", e.target.value)}
                                    />
                                    {errors[`ticketQuantity_${i}`] && <p className="text-red-500 text-sm">{errors[`ticketQuantity_${i}`]}</p>}
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-start">
                            <Button
                                type="button"
                                variant="outline"
                                className="h-10 px-6 mt-6"
                                onClick={() =>
                                    setTicketData([
                                        ...ticketData,
                                        { ticketName: "", ticketPrice: "", ticketQuantity: "" }
                                    ])
                                }
                            >
                                Ajouter un billet
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <Button variant="outline" className="h-12 px-8" onClick={() => setStep(1)}>
                            Retour
                        </Button>
                        <Button className="h-12 px-8 bg-[#3a6b8f] text-white" type="submit">
                            Soumettre l'événement
                        </Button>
                    </div>
                </>
            )}

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