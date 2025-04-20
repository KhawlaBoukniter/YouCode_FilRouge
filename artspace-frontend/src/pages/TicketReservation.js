import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TicketReservationForm from "../components/tickets/TicketReservationForm";

export default function TicketReservation() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[768px] mx-auto">
                    <h1 className="text-3xl font-playfair text-gray-800 mb-6">
                        Réservation de billet
                    </h1>
                    <TicketReservationForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}