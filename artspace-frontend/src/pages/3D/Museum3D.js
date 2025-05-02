import React, { useEffect, useState } from 'react'
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
    const { roomId } = useParams()
    const [room, setRoom] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await api.get(`/rooms/${roomId}`)
                setRoom(res.data.room)
            } catch (err) {
                console.error(err)
                setError('Salle introuvable')
            } finally {
                setLoading(false)
            }
        }

        fetchRoom()
    }, [roomId])

    if (loading) return <p>Chargement de la salle...</p>
    if (error || !room) return <p className="text-red-500">{error || 'Erreur'}</p>

    const renderRoom = () => {
        switch (room.style_id) {
            case 1:
                return <RoomStyle1 />
            case 2:
                return <RoomStyle2 />
            case 3:
                return <RoomStyle3 />
            case 4:
                return <RoomStyle4 />
            default:
                return <RoomStyleTrending />
        }
    }

    return (
        <div className="w-full h-screen">
            <MuseumMenu />
            <Canvas shadows camera={{ position: [0, 4, 12], fov: 60 }}>
                <OrbitControls />
                {renderRoom()}
            </Canvas>
        </div>
    )
}