import { Home, Users, Image, Calendar, BarChart3, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
    { name: "Dashboard", to: "/admin-dash", icon: <Home className="w-5 h-5" /> },
    { name: "Utilisateurs", to: "/admin/users", icon: <Users className="w-5 h-5" /> },
    { name: "Artistes", to: "/admin/artists", icon: <Image className="w-5 h-5" /> },
    { name: "Événements", to: "/admin/events", icon: <Calendar className="w-5 h-5" /> },
    { name: "Statistiques", to: "/admin/stats", icon: <BarChart3 className="w-5 h-5" /> },
];

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-72 bg-gradient-to-b from-[#f8f7f4] to-[#f0efea] l-6 py-10 pl-10 rounded-tr-[80px] z-50 shadow-sm">

            <p
                className="text-2xl font-playfair font-semibold px-2 mb-8 tracking-wide bg-gradient-to-r from-[#d3bb75] via-[#3a6b8f] to-[#d3bb75] bg-clip-text text-transparent"
            >
                Pilotez l’avenir d'ArtSpace
            </p>

            <nav className="flex flex-col space-y-2">
                {links.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.to}
                        className="group flex items-center gap-3 px-5 py-3 rounded-l-full hover:bg-white hover:text-[#3a6b8f] text-gray-700 font-playfair transition-all relative"
                    >
                        {link.icon}
                        {link.name}

                        <span className="absolute -top-3 right-0 h-6 w-6 rounded-br-full shadow-[0_20px_0_0_white] group-hover:block hidden"></span>
                        <span className="absolute -bottom-3 right-0 h-6 w-6 rounded-tr-full shadow-[0_-20px_0_0_white] group-hover:block hidden"></span>
                    </Link>
                ))}
            </nav>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <button className="flex items-center gap-2 text-[#d9534f] hover:text-red-600 transition font-playfair text-sm">
                    <LogOut className="w-4 h-4" />
                    Se déconnecter
                </button>
            </div>
        </aside>
    );
}