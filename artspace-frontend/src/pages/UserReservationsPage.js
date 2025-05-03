import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../api';

export default function UserReservationsPage() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/my-reservations', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setReservations(response.data.reservations.data);
                setLoading(false);
            } catch (err) {
                console.error('Erreur lors de la récupération des réservations:', err);
                setError('Impossible de charger vos réservations');
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3a6b8f]"></div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
                <Navbar />
                <main className="flex-1 py-24 px-6 md:px-12 max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <p className="text-red-600">{error}</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 py-24 px-6 md:px-12 max-w-6xl mx-auto">
                <h1 className="text-2xl mb-6 font-playfair text-gray-800">Mes réservations</h1>

                {reservations.length === 0 ? (
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <p className="text-gray-600">Vous n'avez pas encore de réservations.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reservations.map(reservation => (
                            <div key={reservation.id} className="bg-white rounded-lg shadow overflow-hidden">
                                <div className="p-6">
                                    <h2 className="text-xl font-playfair text-gray-800 mb-2">
                                        {reservation.ticket?.event?.title || 'Événement'}
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        <span className="font-medium">Type de billet:</span> {reservation.ticket?.type}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-medium">Quantité:</span> {reservation.quantity}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-medium">Prix unitaire:</span> {reservation.ticket?.price} €
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        <span className="font-medium">Total:</span> {reservation.ticket?.price * reservation.quantity} MAD
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}