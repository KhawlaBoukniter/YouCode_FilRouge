import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from '../components/contact/ContactForm';
import ContactInfoCards from '../components/contact/ContactInfoCards';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className="flex w-full flex-col relative min-h-screen bg-[#706F68] overflow-hidden pt-16">
                <img
                    src="../assets/images/cta-bg.png"
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-fill opacity-20 z-0"
                />

                <div className="relative z-10">
                    <div className="my-10 mx-auto px-4 text-center">
                        <h2
                            className="font-playfair text-3xl sm:text-4xl font-normal"
                            style={{
                                background: "linear-gradient(90deg, rgba(22, 84, 128, 0.77) 0%, rgba(207, 229, 239, 0.77) 53.24%, rgba(246, 239, 220, 0.77) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                            }}
                        >
                            Let's Create Together
                        </h2>
                        <p className="font-playfair text-xl text-[#D1D5DB] mt-4">
                            Connect with ArtSpace and be part of our creative universe where imagination knows no bounds.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 px-4 sm:px-6 lg:px-10 my-10">
                        <ContactForm />
                        <ContactInfoCards />
                    </div>

                    <Footer />
                </div>
            </main>
        </div>
    );
}