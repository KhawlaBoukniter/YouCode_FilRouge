import AuthLayout from "../components/AuthLayout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role_id, setRole] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const response = await api.post("/register", {
                name: `${firstName} ${lastName}`.trim(),
                email,
                password,
                role_id,
            });

            console.log("RAW RESPONSE:", response);

            const data = response.data;
            console.log(data);


            setSuccessMessage("Inscription réussie ! Redirection...");

            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setErrorMessage("Erreur : " + error.message);
        }
    };

    return (
        <AuthLayout
            title="Rejoindre ArtSpace 3D"
            subtitle="Créez votre compte pour explorer les galeries virtuelles"
            activeTab="register"
        >
            <form className="space-y-6 pb-6" onSubmit={handleSubmit}>
                {successMessage && (
                    <div className="text-green-400 font-playfair text-sm text-center mt-4">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="text-red-400 font-playfair text-sm text-center mt-4">
                        {errorMessage}
                    </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Prénom"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
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
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-10 w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-sm"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#9CA3AF" strokeWidth="2" />
                        <circle cx="8" cy="8" r="2" fill="#9CA3AF" />
                    </svg>
                </div>

                <div className="relative w-full">
                    <select
                        value={role_id}
                        onChange={(e) => setRole(e.target.value)}
                        className="h-10 w-full rounded-lg pl-10 pr-10 bg-[#1f293780] border border-gray-700 text-[#adaebc] font-playfair text-sm appearance-none"
                    >
                        <option value="" className="text-black">Choisissez votre rôle</option>
                        <option value="2" className="text-black">Artiste</option>
                        <option value="3" className="text-black">Visiteur / Amateur d’art</option>
                    </select>
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path fill="#BDBABA" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                    </svg>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M6 8L10 12L14 8H6Z" fill="#BDBABA" />
                    </svg>
                </div>

                <button
                    type="submit"
                    className="w-full h-10 bg-[#3a6b8f] rounded-lg hover:bg-[#2f5b7b] font-garamond text-white text-base transition mt-8"
                >
                    Créer un compte
                </button>

                <div className="text-center mt-4">
                    <span className="text-sm text-gray-400 font-playfair">
                        Vous avez déjà un compte ?{" "}
                        <a href="/login" className="text-blue-400 hover:underline">
                            Se connecter
                        </a>
                    </span>
                </div>

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
        </AuthLayout>
    );
}