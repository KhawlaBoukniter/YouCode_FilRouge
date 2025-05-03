import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import RoomStyle1 from '../../components/3D/RoomStyle1'
import RoomStyle2 from '../../components/3D/RoomStyle2'
import RoomStyle3 from '../../components/3D/RoomStyle3'
import RoomStyle4 from '../../components/3D/RoomStyle4'
import RoomStyleTrending from '../../components/3D/RoomStyleTrending'
import api from '../../api'
import MuseumMenu from '../../components/3D/MuseumMenu'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Museum3D() {
    const [artworksInRoom, setArtworksInRoom] = useState([])
    const { roomId } = useParams()
    const [room, setRoom] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const controlsRef = useRef();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await api.get(`/rooms/${roomId}`)
                setRoom(res.data.room)

                const artRes = await api.get(`/rooms/${roomId}/assigned-artworks`)
                setArtworksInRoom(artRes.data)
                setLoading(false)

            } catch (err) {
                console.error(err)
                setError('Salle introuvable')
                setLoading(false)
            }
        }
        fetchRoom()
    }, [roomId])

    if (loading) return <p>Chargement de la salle...</p>
    if (error || !room) return <p className="text-red-500">{error || 'Erreur'}</p>

    return (
        <div className="w-full h-screen">
            <MuseumMenu />
            <Canvas shadows camera={{ position: [0, 4, 12], fov: 60 }}>
                <OrbitControls ref={controlsRef} />
                {room.style_id === 1 && (
                    <RoomStyle1
                        controlsRef={controlsRef}
                        position={[0, 0, 0]}
                        artistId={room.artist_id}
                        user={user}
                        roomId={room.id}
                        artworksInRoom={artworksInRoom}
                    />
                )}
                {room.style_id === 2 && (
                    <RoomStyle2
                        controlsRef={controlsRef}
                        position={[0, 0, 0]}
                        artistId={room.artist_id}
                        user={user}
                    />
                )}
                {room.style_id === 3 && (
                    <RoomStyle3
                        controlsRef={controlsRef}
                        position={[0, 0, 0]}
                        artistId={room.artist_id}
                        user={user}
                    />
                )}
                {room.style_id === 4 && (
                    <RoomStyle4
                        controlsRef={controlsRef}
                        position={[0, 0, 0]}
                        artistId={room.artist_id}
                        user={user}
                    />
                )}
                {room.style_id !== 1 && room.style_id !== 2 && room.style_id !== 3 && room.style_id !== 4 && (
                    <RoomStyleTrending />
                )}
            </Canvas>
        </div>
    )
}