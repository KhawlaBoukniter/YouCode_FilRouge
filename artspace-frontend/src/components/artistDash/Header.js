import React from "react";

export default function Header() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
                <h1 className="text-3xl font-playfair text-gray-800 mb-2 md:mb-0">
                    Bienvenue, Artiste
                </h1>
                <p className="text-gray-600 font-playfair text-base">
                    Gérez vos œuvres et événements
                </p>
            </div>
            <button className="mt-4 md:mt-0 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
                Nouvelle Œuvre
            </button>
        </div>
    );
}