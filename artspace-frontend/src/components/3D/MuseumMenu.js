import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MapPinned } from 'lucide-react'

const MuseumMenu = () => {
    const { roomId } = useParams()
    const [open, setOpen] = useState(false)

    const links = [
        { name: 'Trends', to: 'trending' },
        { name: 'Room', to: 'room1' },
        { name: 'Room', to: 'room2' },
        { name: 'Room', to: 'room3' },
        { name: 'Room', to: 'room4' }
    ]

    return (
        <div className="fixed top-6 left-6 z-50">
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

                    {[...Array(12)].map((_, i) => (
                        <div
                            key={`v-${i}`}
                            className="absolute w-px h-full bg-white/10"
                            style={{
                                left: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 30 - 15}deg)`
                            }}
                        />
                    ))}

                    {[...Array(12)].map((_, i) => (
                        <div
                            key={`h-${i}`}
                            className="absolute h-px w-full bg-white/10"
                            style={{
                                top: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 30 - 15}deg)`
                            }}
                        />
                    ))}

                    <div className="relative z-10 grid grid-cols-2 gap-3 px-4 pt-2">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                to={`/museum/${link.to}`}
                                className={`px-3 py-1.5 text-xs rounded-full text-center transition-all duration-200
                  ${roomId === link.to
                                        ? 'bg-[#3a6b8f] text-white shadow-md'
                                        : 'bg-white/80 hover:bg-[#f0f0f0] text-gray-700'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MuseumMenu
