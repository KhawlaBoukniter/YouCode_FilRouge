import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PaymentSuccess() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                const sessionId = new URLSearchParams(location.search).get('session_id');

                if (!sessionId) {
                    setError('Session ID manquant');
                    setLoading(false);
                    return;
                }

                const token = localStorage.getItem('token');
                await api.get(`/api/checkout/success?session_id=${sessionId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Redirection vers la page des réservations après vérification réussie
                navigate('/user/reservations');
            } catch (err) {
                console.error('Erreur lors de la vérification du paiement:', err);
                setError('Impossible de vérifier le paiement');
                setLoading(false);
            }
        };

        verifyPayment();
    }, [location, navigate]);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3a6b8f] mx-auto"></div>
                        <p className="mt-4 text-gray-600">Vérification du paiement...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
                <Navbar />
                <main className="flex-1 py-24 px-6 md:px-12 max-w-xl mx-auto">
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <div className="text-red-500 text-5xl mb-4">❌</div>
                        <h1 className="text-2xl mb-4 font-playfair text-gray-800">Erreur de paiement</h1>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <button
                            onClick={() => navigate('/user-dash')}
                            className="bg-[#3a6b8f] text-white px-4 py-2 rounded hover:bg-[#2c5270]"
                        >
                            Retour au tableau de bord
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return null;
}