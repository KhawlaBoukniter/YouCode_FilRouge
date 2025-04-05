import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtworkForm from "../components/artwork/ArtworkForm";

export default function CreateArtwork() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <div>
                        <h1 className="text-3xl font-playfair text-gray-800">
                            Soumettre une nouvelle œuvre
                        </h1>
                        <p className="text-gray-600 text-base font-playfair mt-2">
                            Partagez votre création avec notre communauté artistique
                        </p>
                    </div>

                    <ArtworkForm />
                </div>
            </main>

            <Footer />
        </div>
    );
}