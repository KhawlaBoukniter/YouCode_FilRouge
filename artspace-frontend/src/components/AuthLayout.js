import React from "react";
import museum from "../assets/images/museum.webp";
import { Link } from "react-router-dom";

export default function AuthLayout({ title, subtitle, activeTab = 'register', children }) {
    return (
        <div
            className="flex flex-col md:flex-row w-full bg-cover bg-center relative from-black/60 to-transparent min-h-screen"
            style={{ backgroundImage: `url(${museum})` }}
        >
            {/* overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 bg-cover bg-center"
                style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))" }}
            ></div>

            {/* left side */}
            <div className="relative w-full md:w-3/5 md:h-full h-screen bg-cover inset-0 bg-center pl-20 overflow-x-hidden z-10">
                <h1
                    className="font-playfair text-7xl font-bold mt-52"
                    style={{
                        background: "linear-gradient(90deg, #DEBB21, #FAFAFA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        display: "inline-block",
                    }}
                >
                    ArtSpace
                </h1>
                <p className="mt-8 font-playfair text-lg font-bold text-white">
                    L'art à portée de clic, en immersion totale
                </p>
            </div>

            {/* form side */}
            <div className="w-full md:w-1/3 my-8 z-20 bg-[#bdb6a0e8] rounded-xl">
                <div className="bg-[#0707076c] w-full h-full px-8 py-4 flex flex-col justify-center rounded-xl">
                    {/* back button */}
                    <div className="flex items-center mb-4">
                        <svg width="30" height="30" fill="none" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.48 25.585L6.99998 21.105L11.48 16.625"
                                stroke="#D3BB75"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M24.9199 21.105H7.12242"
                                stroke="#D3BB75"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21.4199 35C29.1549 35 35.4199 29.75 35.4199 21C35.4199 12.25 29.1549 7 21.4199 7"
                                stroke="#D3BB75"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="ml-4 font-garamond text-[#d3bb75] text-l">Retour à l’accueil</span>
                    </div>

                    <div className="w-full mx-auto">
                        <div className="text-center mb-4">
                            <h2 className="font-garamond text-2xl text-gray-200">{title}</h2>
                            <p className="font-garamond text-base text-[#3f3f3e]">{subtitle}</p>
                        </div>

                        {/* tabs */}
                        <div className="flex justify-center gap-4 mb-8">
                            <Link to='/login'>
                                <button
                                    className={`w-24 h-10 rounded-full font-playfair text-base border border-gray-500 ${activeTab === 'login' ? 'text-white bg-[#3a6b8f]' : 'text-gray-400 bg-transparent'
                                        }`}
                                >
                                    Connexion
                                </button>
                            </Link>
                            <Link to='/register'>
                                <button
                                    className={`w-24 h-10 rounded-full font-playfair text-base border border-gray-500 ${activeTab === 'register' ? 'text-white bg-[#3a6b8f]' : 'text-gray-400 bg-transparent'
                                        }`}
                                >
                                    Inscription
                                </button>
                            </Link>
                        </div>

                        {/* dynamic content */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}