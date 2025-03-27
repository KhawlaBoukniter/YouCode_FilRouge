import React from "react"
import museum from "../assets/images/museum.png";

export default function Register() {
    return (
        <div className="flex h-screen bg-white overflow-hidden">
            {/* background image */}
            <div className="relative w-1/2 h-full bg-[#f5f2ea]">
                <div className="absolute inset-0 bg-cover bg-center opacity-75"
                    style={{
                        backgroundImage: `url(${museum})`,
                    }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute top-11 left-12">
                    <h1 className="font-playfair text-4xl font-bold text-[#2f5b7b]">ArtSpace</h1>
                    <p className="mt-8 font-playfair text-lg font-bold text-[#36688d]">
                        Experience Art in the Digital Dimension
                    </p>
                </div>
            </div>

            {/* form container */}
            <div className="w-1/2 h-full bg-[#c6c0b0e8] relative flex items-center justify-center">
                <div className="absolute top-[76px] left-[27px] flex items-center">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.48 25.585L6.99998 21.105L11.48 16.625" stroke="#D3BB75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M24.9199 21.105H7.12242" stroke="#D3BB75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.4199 35C29.1549 35 35.4199 29.75 35.4199 21C35.4199 12.25 29.1549 7 21.4199 7" stroke="#D3BB75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="ml-[26px] font-garamond text-[#d3bb75] text-xl">
                        Back to Home page
                    </span>
                </div>

                <div className="w-[448px]">
                    <div className="text-center mb-8">
                        <h2 className="font-garamond text-3xl text-gray-200">Join ArtSpace 3D</h2>
                        <p className="mt-4 font-garamond text-base text-[#8f9aa9]">
                            Create your account to explore virtual galleries
                        </p>
                    </div>

                    <div className="bg-white/5 rounded-lg h-[300px] border border-dashed border-gray-400 flex items-center justify-center text-gray-300 font-garamond">

                    </div>
                </div>
            </div>
        </div>
    )
}