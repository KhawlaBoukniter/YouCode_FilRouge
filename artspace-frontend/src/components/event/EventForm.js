import React, { useRef, useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Button from "../ui/button";
import ImageUpload from "../ui/ImageUpload";
import Toast from "../ui/toast";
import { TrashIcon } from 'lucide-react';
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function EventForm({ mode = "create", initialData = [] }) {

    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState(null);
    const imageUploadRef = useRef();
    const [step, setStep] = useState(1);
    const [eventId, setEventId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (initialData) {
            const formatDate = (dateStr) => {
                return dateStr ? new Date(dateStr).toISOString().split("T")[0] : "";
            };

            setFormData({
                title: initialData.title || "",
                location: initialData.location || "",
                start_date: formatDate(initialData.start_date),
                end_date: formatDate(initialData.end_date),
                description: initialData.description || "",
                is_online: initialData.is_online || false,
                image: initialData.poster || null,
            });
            setEventId(initialData.id);
        }
    }, [initialData]);

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        start_date: "",
        end_date: "",
        description: "",
        is_online: false,
        image: null,
    });

    const [ticketData, setTicketData] = useState([
        {
            ticketType: "",
            ticketPrice: "",
            ticketQuantity: "",
            description: "",
        }
    ]);

    const validateForm = () => {
        const newErr = {};
        if (!formData.title.trim()) newErr.title = "Le titre est obligatoire.";
        if (!formData.location.trim()) newErr.location = "Le lieu est obligatoire.";
        if (!formData.start_date) newErr.start_date = "La date de début est obligatoire.";
        if (!formData.end_date) newErr.end_date = "La date de fin est obligatoire.";

        const today = new Date();
        const startDate = new Date(formData.start_date);

        today.setHours(0, 0, 0, 0);
        startDate.setHours(0, 0, 0, 0);

        if (startDate < today) {
            newErr.start_date = "La date de début de l'événement ne peut pas etre au passé";
        }

        if (!formData.image) newErr.image = "L'affiche de l'événement est obligatoire.";

        if (formData.start_date && formData.end_date) {
            const start = new Date(formData.start_date);
            const end = new Date(formData.end_date);
            if (end < start) newErr.end_date = "La date de fin doit être postérieure à la date de début.";
        }

        return newErr;
    };

    const validateTicketForm = () => {
        const newErr = {};

        ticketData.forEach((ticket, index) => {
            if (!ticket.ticketType.trim()) {
                newErr[`ticketType_${index}`] = "Le type du billet est obligatoire.";
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

            return;
        }

        try {
            const token = localStorage.getItem("token");
            const artistId = JSON.parse(localStorage.getItem("user"))?.artist?.id;

            const eventFormData = new FormData();
            eventFormData.append("title", formData.title);
            eventFormData.append("location", formData.location);
            eventFormData.append("description", formData.description);
            if (formData.image instanceof File) {
                eventFormData.append("poster", formData.image);
            }
            eventFormData.append("start_date", formData.start_date);
            eventFormData.append("end_date", formData.end_date);
            eventFormData.append("is_online", formData.is_online ? 1 : 0);
            eventFormData.append("artist_id", artistId);

            if (mode === "edit" && initialData?.id) {
                await api.post(`/events/${initialData.id}?_method=PUT`, eventFormData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                setToast({ message: "Événement mis à jour avec succès !", type: "success" });
                navigate(`/events/${initialData.id}`);
            } else {
                const res = await api.post("/events", eventFormData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                setEventId(res.data.event.id);
                setStep(2);
                setErrors({});
            }
        } catch (error) {
            const messages = error.response?.data?.errors;
            if (messages) setErrors(messages);
            setToast({ message: error.response?.data?.message || "Erreur lors de la création de l’événement", type: "error" });
        }

    };

    const handleTicketSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateTicketForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const token = localStorage.getItem("token");

            if (mode === "edit") {
                await api.delete(`/events/${eventId}/tickets`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            }

            await Promise.all(
                ticketData.map((ticket) => {
                    const payload = {
                        event_id: eventId,
                        type: ticket.ticketType,
                        price: ticket.ticketPrice,
                        quantity: +ticket.ticketQuantity,
                        description: ticket.description,
                        status: "available",
                    };

                    return api.post("/tickets", payload, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                })
            );

            setToast({
                message:
                    mode === "edit"
                        ? "Billets mis à jour avec succès !"
                        : "Événement et billets enregistrés avec succès !",
                type: "success",
            });

            navigate(`/events/${eventId}`);
        } catch (err) {
            const messages = err.response?.data?.errors;
            if (messages) {
                setErrors(messages);
            }

            setToast({
                message: "Une erreur est survenue.",
                type: "error",
            });
        }
    };

    const handleRemoveTicket = (i) => {
        if (ticketData.length > 1) {
            const updatedTickets = [...ticketData];
            updatedTickets.splice(i, 1);
            setTicketData(updatedTickets);

            setToast({ message: "Billet supprimé avec succès !", type: "success" });
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
                                    value={formData.location}
                                    onChange={(e) => handleChange("location", e.target.value)}
                                />
                                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-600 font-playfair">Date de début</label>
                                <Input
                                    type="date"
                                    value={formData.start_date}
                                    onChange={(e) => handleChange("start_date", e.target.value)}
                                />
                                {errors.start_date && <p className="text-red-500 text-sm">{errors.start_date}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-600 font-playfair">Date de fin</label>
                                <Input
                                    type="date"
                                    value={formData.end_date}
                                    onChange={(e) => handleChange("end_date", e.target.value)}
                                />
                                {errors.end_date && <p className="text-red-500 text-sm">{errors.end_date}</p>}
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

                    <div className="flex items-center gap-4 mt-4">
                        <label className="text-sm font-playfair text-gray-700">Événement en ligne</label>
                        <button
                            type="button"
                            onClick={() => handleChange("is_online", !formData.is_online)}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${formData.is_online ? "bg-[#e4d9b1]" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${formData.is_online ? "translate-x-6" : ""
                                    }`}
                            />
                        </button>
                        <span className="text-sm text-gray-600">{formData.is_online ? "Oui" : "Non"}</span>
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
                            <div key={i} className="space-y-4 border p-4 rounded-md shadow-sm bg-gray-50 relative">
                                {ticketData.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTicket(i)}
                                        className="absolute top-2 right-2 p-4 text-red-500 hover:text-red-700"
                                    >
                                        <TrashIcon size={18} />
                                    </button>
                                )}

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 font-playfair">Type du billet</label>
                                    <select
                                        className="w-full border rounded-md px-3 py-2"
                                        value={ticket.ticketType || ""}
                                        onChange={(e) => handleTicketChange(i, "ticketType", e.target.value)}
                                    >
                                        <option value="">-- Sélectionnez un type --</option>
                                        <option value="standard">Standard</option>
                                        <option value="vip">VIP</option>
                                        <option value="free">Gratuit</option>
                                    </select>
                                    {errors[`ticketType_${i}`] && (
                                        <p className="text-red-500 text-sm">{errors[`ticketType_${i}`]}</p>
                                    )}
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

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-600 font-playfair">Description du billet</label>
                                    <Textarea
                                        placeholder="Par exemple : Accès à la zone VIP, boissons incluses..."
                                        value={ticket.description || ""}
                                        onChange={(e) => handleTicketChange(i, "description", e.target.value)}
                                        className="min-h-[80px]"
                                    />
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
                                        { ticketType: "", ticketPrice: "", ticketQuantity: "" }
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