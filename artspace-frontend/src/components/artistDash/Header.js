import React from "react";

export default function Header({ user, artist }) {
    const artistId = artist?.id;
    console.log(artistId);


    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
                <h1 className="text-3xl font-playfair text-gray-800 mb-2 md:mb-0">
                    Bienvenue, {user?.name ?? "Artiste"}
                </h1>
                <p className="text-gray-600 font-playfair text-base">
                    Gérez vos œuvres et événements
                </p>
            </div>
            <div className="flex flex-wrap gap-4">
                <a href={`/artist/${artistId}/portfolio`}>
                    <button className="flex items-center gap-2 border border-gray-800 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                        🎨 Voir mon portfolio
                    </button>
                </a>

                <a href="/artworks/create">
                    <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Nouvelle Œuvre
                    </button>
                </a>
            </div>
        </div>
    );
}