import React from "react";
import museum from "../assets/images/museum.png";

export default function Register() {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-white overflow-hidden">
            {/* Left side */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-full bg-[#f5f2ea]">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-75"
                    style={{ backgroundImage: `url(${museum})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute top-11 left-12">
                    <h1 className="font-playfair text-4xl font-bold text-[#2f5b7b]">ArtSpace</h1>
                    <p className="mt-8 font-playfair text-lg font-bold text-[#36688d]">
                        Experience Art in the Digital Dimension
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-1/2 h-full bg-[#c6c0b0e8] relative px-6 py-10 flex flex-col justify-center">
                <div className="absolute top-[30px] left-[27px] flex items-center">
                    <svg width="42" height="42" fill="none" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.48 25.585L6.99998 21.105L11.48 16.625" stroke="#D3BB75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.9199 21.105H7.12242" stroke="#D3BB75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.4199 35C29.1549 35 35.4199 29.75 35.4199 21C35.4199 12.25 29.1549 7 21.4199 7" stroke="#D3BB75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-[26px] font-garamond text-[#d3bb75] text-xl">
                        Back to Home page
                    </span>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-[448px] mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="font-garamond text-3xl text-gray-200">Join ArtSpace 3D</h2>
                        <p className="mt-4 font-garamond text-base text-[#8f9aa9]">
                            Create your account to explore virtual galleries
                        </p>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        <button className="w-[99px] h-10 rounded-full font-playfair text-base text-gray-400 bg-transparent border border-gray-500">
                            Sign In
                        </button>
                        <button className="w-[104px] h-10 rounded-full font-playfair text-base text-white bg-[#3a6b8f] shadow-md">
                            Sign Up
                        </button>
                    </div>

                    <form className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="h-[50px] w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-base"
                                />
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="18" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z" stroke="#949191" strokeWidth="2" />
                                    <path d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5M14.5 20L19.5 15L17.5 13L12.5 18V20H14.5Z" stroke="#949191" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="h-[50px] w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-base"
                                />
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="18" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z" stroke="#949191" strokeWidth="2" />
                                    <path d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5M14.5 20L19.5 15L17.5 13L12.5 18V20H14.5Z" stroke="#949191" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="h-[50px] w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-base"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3.5C1.725 3.5 1.5 3.725 1.5 4V4.69063L6.89062 9.11563C7.5375 9.64688 8.46562 9.64688 9.1125 9.11563L14.5 4.69063V4C14.5 3.725 14.275 3.5 14 3.5H2Z" fill="#9CA3AF" />
                                <path d="M1.5 6.63125V12C1.5 12.275 1.725 12.5 2 12.5H14C14.275 12.5 14.5 12.275 14.5 12V6.63125L10.0625 10.275C8.8625 11.2594 7.13438 11.2594 5.9375 10.275L1.5 6.63125Z" fill="#9CA3AF" />
                            </svg>
                        </div>

                        <div className="relative w-full">
                            <input
                                type="password"
                                placeholder="Password"
                                className="h-[50px] w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-base"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="7" stroke="#9CA3AF" strokeWidth="2" />
                                <circle cx="8" cy="8" r="2" fill="#9CA3AF" />
                            </svg>
                        </div>

                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Role"
                                className="h-[50px] w-full rounded-lg pl-10 pr-4 bg-[#1f293780] border border-gray-700 text-[#adaebc] placeholder:text-[#adaebc] font-playfair text-base"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path fill="#BDBABA" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                            </svg>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}