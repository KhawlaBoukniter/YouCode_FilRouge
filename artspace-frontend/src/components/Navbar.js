import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/button";
import logo from "../assets/logos/logo_artspace.png";
import { MenuIcon, XIcon } from "lucide-react";
import api from "../api";

const navItems = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Galerie", path: "/gallery" },
    { name: "Evenements", path: "/events" },
    { name: "Musée 3D", path: "/museum/trending" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("token");
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const res = await api.get('/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(res.data.user);
            } catch (err) {
                console.log('Erreur: ', err);

            }
        };
        fetchUser();
    }, []);

    const dashRoute = () => {
        if (!user) return "/";
        if (user.role_id == 1) return "/admin-dash";
        if (user.role_id == 2) return "/artist-dash";
        return "/user-dash";
    }

    return (
        <div className="bg-[#ffffff8f] border-b border-gray-100 w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto md:px-4">
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
                        {isAuthenticated && user ? (
                            <Link to={dashRoute()}>
                                <img
                                    src={user.avatar || "/default-avatar.png"}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full object-cover border border-gray-300 hover:shadow-md transition"
                                />
                            </Link>
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
                            {isAuthenticated && user ? (
                                <Link to={dashRoute()} className="w-full">
                                    <img
                                        src={user.avatar || "/default-avatar.png"}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover border border-gray-300 hover:shadow-md transition"
                                    />
                                </Link>
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