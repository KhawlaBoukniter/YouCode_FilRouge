import React, { useRef, Suspense, useState } from 'react'
import { Text, Environment, Html, MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import ClickToMove from './ClickToMove'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import api from '../../api'

export default function RoomStyle2({ position = [0, 0, 0], controlsRef, artistId, user, roomId, artworksInRoom = [] }) {
    const ceilingLights = useRef([])
    const floorRef = useRef()

    useFrame((state) => {
        const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
        ceilingLights.current.forEach((ref) => {
            if (ref) ref.material.emissiveIntensity = 1.5 + pulse * 1.5
        })
    })

    const texture = useLoader(TextureLoader, '/textures/19.jpg')


    const artworkMap = {}
    artworksInRoom.forEach(entry => {
        artworkMap[entry.position_key] = entry.artwork
    })

    const FrameSlot = ({ position, rotation, user, artistId, roomId, slotKey, initialArtwork }) => {
        const { scene: frameModel } = useGLTF('/models/artwork_frame.glb')

        const isOwner = user?.role_id === 2 && user?.artist?.id === artistId
        const [showSelector, setShowSelector] = useState(false)
        const [artworks, setArtworks] = useState([])
        const [selectedArtwork, setSelectedArtwork] = useState(initialArtwork || null)

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

        const handleSelectArtwork = async (artwork) => {
            setSelectedArtwork(artwork)
            setShowSelector(false)
            try {
                const token = localStorage.getItem("token")
                await api.post(`/rooms/${roomId}/assign-artwork`, {
                    artwork_id: artwork.id,
                    position_key: slotKey,
                }, {
                    headers: { Authorization: `Bearer ${token}` }
                })
            } catch (err) {
                console.error("Erreur d’enregistrement:", err)
            }
        }

        const imageUrl = (image) => {
            return image.startsWith("http")
                ? image
                : `http://localhost:8000${image}`
        }

        return (
            <group position={position} rotation={rotation}>
                <primitive object={frameModel.clone()} scale={[20, 20, 20]} />
                {selectedArtwork && (
                    <Html center position={[0, 1.5, 0.1]} distanceFactor={8}>
                        <div style={{
                            width: '180px',
                            height: '290px',
                            border: '3px solid white',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            boxShadow: '0 0 8px rgba(0,0,0,0.4)',
                            background: 'white',
                        }}>
                            <img
                                src={imageUrl(selectedArtwork.image)}
                                alt={selectedArtwork.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
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
                                            {artworks.data.map((art) => (
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

    const renderFrames = () => {
        const positions = []

        // left/right/back/front
        for (let i = 0; i < 3; i++) {
            positions.push({ key: `left-${i}`, pos: [-14.9, 1.5, -10 + i * 10], rot: [0, Math.PI / 2, 0] })
            positions.push({ key: `right-${i}`, pos: [14.9, 1.5, 10 - i * 10], rot: [0, -Math.PI / 2, 0] })
            positions.push({ key: `back-${i}`, pos: [-10 + i * 9, 1.5, -14.9], rot: [0, 0, 0] })
            positions.push({ key: `front-${i}`, pos: [-10 + i * 10, 1.5, 14.9], rot: [0, Math.PI, 0] })
        }

        return positions.map(({ key, pos, rot }) => (
            <FrameSlot
                key={key}
                slotKey={key}
                position={pos}
                rotation={rot}
                user={user}
                artistId={artistId}
                roomId={roomId}
                initialArtwork={artworkMap[key]}
            />
        ))
    }

    return (
        <group position={position}>
            <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <MeshReflectorMaterial
                    color="#e4ded0"
                    metalness={0.8}
                    roughness={0.2}
                    blur={[300, 300]}
                    resolution={1024}
                    mixBlur={2}
                    depthScale={1.2}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={2}
                />
            </mesh>

            {[
                [0, 2.5, -15],
                [0, 2.5, 15],
                [-15, 2.5, 0],
                [15, 2.5, 0],
            ].map(([x, y, z], i) => (
                <mesh key={i} position={[x, y, z]} receiveShadow>
                    <boxGeometry args={z === 0 ? [0.2, 7, 30] : [30, 7, 0.2]} />
                    <meshStandardMaterial color="#f5f4ef" metalness={0.2} roughness={0.2} />
                </mesh>
            ))}

            <mesh position={[0, 6.05, 0]} receiveShadow>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
            </mesh>

            {[-10, 0, 10].map((x, i) => (
                <group key={i} position={[x, 6.05, 0]}>
                    <mesh position={[0, -0.05, 0]}>
                        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
                        <meshStandardMaterial
                            color="#5a5958"
                            metalness={1}
                            roughness={0.1}
                            clearcoat={1}
                            clearcoatRoughness={0.05}
                            reflectivity={1}
                            emissive="#fff5cc"
                            emissiveIntensity={0.3}
                            envMapIntensity={2}
                        />
                    </mesh>
                    <pointLight position={[0, -0.02, 0]} intensity={2.5} distance={8} decay={2} color="#ffffff" />
                    <mesh ref={(el) => (ceilingLights.current[i] = el)} position={[0, -0.01, 0]}>
                        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
                        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={1.5} color="#fefefe" />
                    </mesh>
                </group>
            ))}

            <Environment preset="dawn" />
            <ambientLight intensity={0.2} color="#eae5dc" />
            <spotLight position={[0, 6, 5]} angle={0.3} penumbra={0.3} intensity={0.7} castShadow />
            <spotLight position={[0, 6, -5]} angle={0.3} penumbra={0.3} intensity={0.7} castShadow />

            <Suspense fallback={null}>{renderFrames()}</Suspense>

            <ClickToMove floorRef={floorRef} controlsRef={controlsRef} />
        </group>
    )
}

useGLTF.preload('/models/artwork_frame.glb')