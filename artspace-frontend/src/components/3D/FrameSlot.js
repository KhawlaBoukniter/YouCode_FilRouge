import React, { useState } from 'react'
import { Html, Text, useGLTF } from '@react-three/drei'
import api from '../../api'

export default function FrameSlot({ position, rotation, user, artistId }) {
    const { scene: frameModel } = useGLTF('/models/artwork_frame.glb')

    const isOwner = user?.role_id === 2 && user?.artist?.id === artistId
    const [showSelector, setShowSelector] = useState(false)
    const [artworks, setArtworks] = useState([])
    const [selectedArtwork, setSelectedArtwork] = useState(null)

    const handleClick = async () => {
        if (!showSelector) {
            try {
                const token = localStorage.getItem("token")
                const res = await api.get(`/my-artworks`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setArtworks(res.data.artworks || [])
            } catch (err) {
                console.error("Erreur lors de la récupération des œuvres :", err)
            }
        }
        setShowSelector(!showSelector)
    }

    const handleSelectArtwork = (artwork) => {
        setSelectedArtwork(artwork)
        setShowSelector(false)
    }

    return (
        <group position={position} rotation={rotation}>
            <primitive object={frameModel.clone()} scale={[20, 20, 20]} />

            {selectedArtwork && (
                <Html center distanceFactor={8}>
                    <div style={{
                        width: '180px',
                        height: '240px',
                        border: '3px solid white',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        boxShadow: '0 0 8px rgba(0,0,0,0.4)',
                        background: 'white',
                    }}>
                        <img
                            src={selectedArtwork.image}
                            alt={selectedArtwork.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </Html>
            )}

            {isOwner && (
                <group position={[0, 1.2, 0.1]}>
                    <mesh onClick={handleClick}>
                        <circleGeometry args={[0.6, 32]} />
                        <meshBasicMaterial color="#d3bb75" />
                    </mesh>
                    <Text
                        fontSize={0.4}
                        color="#fff"
                        anchorX="center"
                        anchorY="middle"
                        position={[0, 0, 0.01]}
                    >
                        +
                    </Text>
                    {showSelector && (
                        <Html center distanceFactor={10}>
                            <div className="bg-white p-2 rounded shadow max-h-40 overflow-y-auto w-44">
                                <h3 className="text-sm font-bold mb-2 text-gray-700">Mes œuvres</h3>
                                {artworks.length === 0 ? (
                                    <p className="text-xs text-gray-500">Aucune œuvre.</p>
                                ) : (
                                    <ul className="space-y-1">
                                        {artworks.map((art) => (
                                            <li
                                                key={art.id}
                                                onClick={() => handleSelectArtwork(art)}
                                                className="cursor-pointer text-xs text-gray-800 hover:text-[#3a6b8f] transition"
                                            >
                                                {art.title}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Html>
                    )}
                </group>
            )}
        </group>
    )
}