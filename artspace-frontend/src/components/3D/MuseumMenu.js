import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { MapPinned, LogOut, UserRound } from 'lucide-react'
import api from '../../api'

const MuseumMenu = () => {
    const { roomId } = useParams()
    const [open, setOpen] = useState(false)
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();
    const [artistId, setArtistId] = useState(null);

    useEffect(() => {
        api.get('/rooms/public')
            .then((res) => setRooms(res.data.rooms || []))
            .catch((err) => console.error(err));

        api.get(`/rooms/${roomId}`)
            .then((res) => {
                const room = res.data.room;
                if (room?.artist_id) setArtistId(room.artist_id);
                console.log(room.artist_id);

            })
            .catch((err) => console.error(err));
    }, [roomId]);

    const allLinks = rooms.map((r) => ({
        name: r.name,
        to: r.id
    }));

    return (
        <div className="fixed top-6 left-6 z-50">
            <div className="flex gap-2 mb-3">
                {artistId && (
                    <button
                        onClick={() => navigate(`/artist/${artistId}/portfolio`)}
                        className="bg-white/80 hover:bg-white text-gray-700 border border-gray-300 px-3 py-2 rounded-full shadow-md transition"
                        title="Voir le portfolio de l'artiste"
                    >
                        <UserRound className="w-5 h-5" />
                    </button>
                )}

                <button
                    onClick={() => navigate("/")}
                    className="bg-white/80 hover:bg-white text-gray-700 border border-gray-300 px-3 py-2 rounded-full shadow-md transition"
                    title="Sortir du musée"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
            <button
                className="flex items-center gap-2 text-sm bg-white/70 hover:bg-white shadow-md rounded-full px-4 py-2 border border-gray-300 backdrop-blur-md transition-all duration-300"
                onClick={() => setOpen(!open)}
            >
                <MapPinned className="w-4 h-4 text-gray-700" />
                <span className="text-gray-800 font-medium">Map</span>
            </button>

            {open && (
                <div className="relative mt-3 w-[320px] h-[220px] p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl overflow-hidden">
                    <h2 className="relative z-10 text-md font-semibold text-white tracking-wide mb-3">
                        🧭 Interactive Map
                    </h2>

                    {allLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={`/museum/${link.to}`}
                            className={`px-3 py-1.5 text-xs rounded-full text-center transition-all duration-200
                            ${roomId === link.to.toString()
                                    ? 'bg-[#3a6b8f] text-white shadow-md'
                                    : 'bg-white/80 hover:bg-[#f0f0f0] text-gray-700'}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>
            )}
        </div>
    )
}

export default MuseumMenu
