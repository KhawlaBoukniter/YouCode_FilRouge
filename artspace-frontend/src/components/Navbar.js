import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/button";
import logo from "../assets/logos/logo_artspace.png";

const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Galerie", path: "/gallery" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    return (
        <div className="w-full h-[73px] bg-[#ffffffe6] border-b border-gray-100">
            <div className="max-w-[1280px] h-[72px] mx-auto px-20">
                <div className="relative h-[57px] py-[7px]">
                    <div className="flex items-center justify-between h-10 mt-[9px]">
                        {/* Logo */}
                        <img
                            className="w-[57px] h-[57px] object-cover"
                            alt="ArtSpace Logo"
                            src={logo}
                        />

                        {/* Navigation Links */}
                        <nav className="flex space-x-7">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="font-garamond text-base leading-4 font-normal text-black hover:text-[#d3bb75] hover:[text-shadow:0px_4px_4px_#5f5e5e94] transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-4">
                            <Link to="/login">
                                <Button
                                    variant="outline"
                                    className="h-[42px] rounded-full border-[#3a6b8f] font-garamond font-normal text-[#3a6b8f] text-base"
                                >
                                    Se connecter
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button className="h-10 rounded-full bg-[#3a6b8f] font-garamond font-normal text-white text-base">
                                    Commencer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;