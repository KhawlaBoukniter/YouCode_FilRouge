import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/button";
import logo from "../assets/logos/logo_artspace.png";
import { SearchIcon } from "lucide-react";

const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Galerie", path: "/gallery" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("token");

    return (
        <div className=" bg-[#ffffff8f] border-b border-gray-100">
            <div className=" mx-auto px-20">
                <div className="relative py-2">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <img
                            className="w-14 h-14 object-cover"
                            alt="ArtSpace Logo"
                            src={logo}
                        />

                        {/* Navigation Links */}
                        <nav className="flex space-x-7">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;

                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`font-garamond text-base leading-4 transition-all duration-300
                      ${isActive
                                                ? "text-[#d3bb75] [text-shadow:0px_4px_4px_#5f5e5e94] font-bold"
                                                : "text-black hover:text-[#d3bb75] hover:[text-shadow:0px_4px_4px_#5f5e5e94]"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Auth Buttons */}
                        {isAuthenticated ? (
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 cursor-pointer">
                                <SearchIcon className="w-5 h-5 text-[#3a6b8f]" />
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login">
                                    <Button
                                        variant="outline"
                                        className="h-10 rounded-full border-[#3a6b8f] font-garamond font-normal text-[#3a6b8f] text-base"
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;