import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/button";
import logo from "../assets/logos/logo_artspace.png";
import { SearchIcon, MenuIcon, XIcon } from "lucide-react";

const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Galerie", path: "/gallery" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("token");
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="bg-[#ffffff8f] border-b border-gray-100 w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="flex items-center justify-between py-2 relative">

                    {/* Logo */}
                    <Link to="/">
                        <img
                            className="w-14 h-14 object-cover"
                            src={logo}
                            alt="ArtSpace Logo"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`font-garamond text-base transition-all duration-300 ${isActive
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
                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 cursor-pointer">
                                <SearchIcon className="w-5 h-5 text-[#3a6b8f]" />
                            </div>
                        ) : (
                            <>
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
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-700">
                            {menuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="flex flex-col items-start bg-white border-t border-gray-100 py-4 space-y-4 md:hidden animate-fadeIn">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`px-4 py-2 font-garamond text-base w-full ${isActive
                                        ? "text-[#d3bb75] font-bold"
                                        : "text-black hover:text-[#d3bb75]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        <div className="flex flex-col w-full gap-4 px-4 pt-4">
                            {isAuthenticated ? (
                                <div className="flex justify-start">
                                    <SearchIcon className="w-6 h-6 text-[#3a6b8f]" />
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="w-full">
                                        <Button variant="outline" className="w-full h-10 border-[#3a6b8f] text-[#3a6b8f]">
                                            Se connecter
                                        </Button>
                                    </Link>
                                    <Link to="/register" className="w-full">
                                        <Button className="w-full h-10 bg-[#3a6b8f] text-white">
                                            Commencer
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;