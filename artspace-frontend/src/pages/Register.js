import React from "react";
import museum from "../assets/images/museum.webp";

export default function Register() {
    return (

        <div className="flex flex-col md:flex-row w-full bg-cover bg-center bg-gradient-to-r relative from-black/60 to-transparent"
            style={{ backgroundImage: `url(${museum})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 bg-cover  bg-center" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))' }}></div>
            {/* partie gauche */}
            <div className="relative w-full md:w-3/5 md:h-full h-screen bg-cover inset-0 bg-center pl-20 overflow-x-hidden ">

                <h1 className="font-playfair text-7xl font-bold mt-48"
                    style={

                        {
                            background: 'linear-gradient(90deg, #DEBB21, #FAFAFA)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',

                        }

                    }>ArtSpace</h1>
                <p className="mt-8 font-playfair text-lg font-bold text-white">
                    L'art à portée de clic, en immersion totale
                </p>
            </div>

            {/* formulaire */}
            <div className="w-full md:w-1/3 my-8 z-20 bg-[#bdb6a0e8] rounded-xl">
                <div className="bg-[#0707076c] px-8 py-2 flex flex-col justify-center rounded-xl">
                    <div className="flex items-center mb-4">
                        <svg width="30" height="30" fill="none" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.48 25.585L6.99998 21.105L11.48 16.625" stroke="#D3BB75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24.9199 21.105H7.12242" stroke="#D3BB75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.4199 35C29.1549 35 35.4199 29.75 35.4199 21C35.4199 12.25 29.1549 7 21.4199 7" stroke="#D3BB75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="ml-4 font-garamond text-[#d3bb75] text-l">
                            Retour à l’accueil
                        </span>
                    </div>

                    <div className="w-full mx-auto">
                        <div className="text-center mb-4">
                            <h2 className="font-garamond text-2xl text-gray-200">Rejoindre ArtSpace 3D</h2>
                            <p className="font-garamond text-base text-[#3f3f3e]">
                                Créez votre compte pour explorer les galeries virtuelles
                            </p>
                        </div>

                        <div className="flex justify-center gap-4 mb-8">
                            <button className="w-24 h-10 rounded-full font-playfair text-base text-gray-400 bg-transparent border border-gray-500">
                                Connexion
                            </button>
                            <button className="w-24 h-10 rounded-full font-playfair text-base text-white bg-[#3a6b8f] shadow-md">
                                Inscription
                            </button>
                        </div>

                        <form className="space-y-6 pb-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Prénom"
                                        className="h-10 w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-sm"
                                    />
                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="18" height="21" fill="none" viewBox="0 0 21 21">
                                        <path d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z" stroke="#949191" strokeWidth="2" />
                                        <path d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5M14.5 20L19.5 15L17.5 13L12.5 18V20H14.5Z" stroke="#949191" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Nom"
                                        className="h-10 w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-sm"
                                    />
                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="18" height="21" fill="none" viewBox="0 0 21 21">
                                        <path d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z" stroke="#949191" strokeWidth="2" />
                                        <path d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5M14.5 20L19.5 15L17.5 13L12.5 18V20H14.5Z" stroke="#949191" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>

                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder="Adresse e-mail"
                                    className="h-10 w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-sm"
                                />
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M2 3.5C1.725 3.5 1.5 3.725 1.5 4V4.69063L6.89062 9.11563C7.5375 9.64688 8.46562 9.64688 9.1125 9.11563L14.5 4.69063V4C14.5 3.725 14.275 3.5 14 3.5H2Z" fill="#9CA3AF" />
                                    <path d="M1.5 6.63125V12C1.5 12.275 1.725 12.5 2 12.5H14C14.275 12.5 14.5 12.275 14.5 12V6.63125L10.0625 10.275C8.8625 11.2594 7.13438 11.2594 5.9375 10.275L1.5 6.63125Z" fill="#9CA3AF" />
                                </svg>
                            </div>

                            <div className="relative w-full">
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    className="h-10 w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-sm"
                                />
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="7" stroke="#9CA3AF" strokeWidth="2" />
                                    <circle cx="8" cy="8" r="2" fill="#9CA3AF" />
                                </svg>
                            </div>

                            <div className="relative w-full">
                                <select
                                    className="h-10 w-full rounded-lg pl-10 pr-10 bg-[#1f293780] border border-gray-700 text-[#adaebc] font-playfair text-sm appearance-none"
                                >
                                    <option value="" className="text-black">Choisissez votre role</option>
                                    <option value="artist" className="text-black">Artiste</option>
                                    <option value="visitor" className="text-black">Visiteur / Amateur d’art</option>
                                </select>
                                <svg
                                    className="absolute left-3 top-1/2 -translate-y-1/2"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#BDBABA"
                                        d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
                                    />
                                </svg>
                                <svg className="absolute right-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path d="M6 8L10 12L14 8H6Z" fill="#BDBABA" />
                                </svg>
                            </div>

                            <button
                                type="button"
                                className="w-full h-10 bg-[#3a6b8f] rounded-lg hover:bg-[#2f5b7b] font-garamond text-white text-base transition mt-8"
                            >
                                Créer un compte
                            </button>

                            <div className="flex items-center my-6">
                                <div className="flex-grow h-px bg-gray-600" />
                                <span className="px-3 text-sm text-gray-400 font-playfair">Ou continuer avec</span>
                                <div className="flex-grow h-px bg-gray-600" />
                            </div>

                            {/* Boutons sociaux */}
                            <div className="flex justify-center gap-6">
                                <button
                                    type="button"
                                    className="flex items-center justify-center gap-2 w-[140px] h-[38px] rounded-md border border-gray-700 bg-transparent hover:bg-white/10 transition text-white"
                                >
                                    <img
                                        src="https://c.animaapp.com/m94tpkob79QlTu/img/frame-2.svg"
                                        alt="Google icon"
                                        className="w-[16px] h-[16px]"
                                    />
                                    <span className="font-playfair text-sm">Google</span>
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center gap-2 w-[140px] h-[38px] rounded-md border border-gray-700 bg-transparent hover:bg-white/10 transition text-white"
                                >
                                    <img
                                        src="https://c.animaapp.com/m94tpkob79QlTu/img/frame-5.svg"
                                        alt="Facebook icon"
                                        className="w-[16px] h-[16px]"
                                    />
                                    <span className="font-playfair text-sm">Facebook</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}
