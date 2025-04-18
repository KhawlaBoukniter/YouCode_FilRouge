import React from "react";
import { HomeIcon, UsersIcon, CalendarIcon, ImageIcon, BarChart3Icon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const links = [
        { name: "Dashboard", to: "/admin-dash", icon: <HomeIcon className="h-5 w-5" /> },
        { name: "Utilisateurs", to: "/admin/users", icon: <UsersIcon className="h-5 w-5" /> },
        { name: "Artistes", to: "/admin/artists", icon: <ImageIcon className="h-5 w-5" /> },
        { name: "Événements", to: "/admin/events", icon: <CalendarIcon className="h-5 w-5" /> },
        { name: "Statistiques", to: "/admin/stats", icon: <BarChart3Icon className="h-5 w-5" /> },
    ];

    return (
        <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-[#f8f7f4] border-r border-gray-200 px-6 py-10 z-40">
            <div className="text-2xl font-playfair text-gray-800 mb-12 text-center">
                Admin Panel
            </div>

            <nav className="flex flex-col gap-4">
                {links.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.to}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-[#3a6b8f] transition-colors duration-300 font-playfair text-lg"
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}