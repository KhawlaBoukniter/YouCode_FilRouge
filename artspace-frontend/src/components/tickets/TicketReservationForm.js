import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Button from "../ui/button";
import Toast from "../ui/toast";
import { Select, SelectOption } from "../ui/select";

export default function TicketReservationForm({ defaultTicketId = null }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        quantity: 1,
        ticketType: defaultTicketId || "",
        message: "",
    });

    const [toast, setToast] = useState(null);
    const [errors, setErrors] = useState({});

    const ticketOptions = [
        { id: 1, type: "Entrée Standard", price: "€15" },
        { id: 2, type: "Pass VIP", price: "€40" },
        { id: 3, type: "Entrée Étudiant", price: "€8" },
    ];

    useEffect(() => {
        if (defaultTicketId) {
            setFormData((prev) => ({ ...prev, ticketType: defaultTicketId }));
        }
    }, [defaultTicketId]);

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.ticketType) {
            setErrors({
                name: !formData.name.trim() && "Nom requis",
                email: !formData.email.trim() && "Email requis",
                ticketType: !formData.ticketType && "Type de billet requis",
            });
            return;
        }

        setErrors({});
        console.log("Réservation envoyée :", formData);

        setToast({ message: "Réservation envoyée avec succès !", type: "success" });

        setFormData({
            name: "",
            email: "",
            quantity: 1,
            ticketType: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-playfair text-gray-800 mb-4">Réserver votre ticket</h2>

            <Input
                placeholder="Nom complet"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <Input
                placeholder="Adresse e-mail"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <Select value={formData.ticketType} onChange={(e) => handleChange("ticketType", e.target.value)}>
                <SelectOption value="">Choisir un type de billet</SelectOption>
                {ticketOptions.map((ticket) => (
                    <SelectOption key={ticket.id} value={ticket.id}>
                        {ticket.type} – {ticket.price}
                    </SelectOption>
                ))}
            </Select>
            {errors.ticketType && <p className="text-red-500 text-sm">{errors.ticketType}</p>}

            <Input
                type="number"
                placeholder="Quantité"
                min={1}
                value={formData.quantity}
                onChange={(e) => handleChange("quantity", parseInt(e.target.value))}
            />

            <Textarea
                placeholder="Message (optionnel)"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
            />

            <Button type="submit" className="bg-[#3a6b8f] text-white h-12 rounded-lg">
                Réserver
            </Button>

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