import React, { useRef, Suspense, useState } from 'react'
import { Text, Environment, useGLTF, Html } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import ClickToMove from './ClickToMove'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import api from '../../api'

export default function RoomStyle1({ position = [0, 0, 0], controlsRef, artistId, user, roomId, artworksInRoom = [] }) {
    const ceilingLights = useRef([])
    const floorRef = useRef()

    useFrame((state) => {
        const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
        ceilingLights.current.forEach((ref) => {
            if (ref) ref.material.emissiveIntensity = 1.5 + pulse * 1.5
        })
    })

    const texture1 = useLoader(TextureLoader, '/textures/2.jpg')
    const texture2 = useLoader(TextureLoader, '/textures/zecca.jpg')

    const artworkMap = {}
    artworksInRoom.forEach(entry => {
        artworkMap[entry.position_key] = entry.artwork
    })

    const FrameSlot = ({ position, rotation, user, artistId, roomId, slotKey, initialArtwork }) => {
        const { scene: frameModel } = useGLTF('/models/artwork_frame.glb')

        const isOwner = user.role_id === 2 && user?.artist?.id === artistId
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
        const frames = []
        for (let i = 0; i < 3; i++) {
            frames.push(
                <FrameSlot key={`left-${i}`} slotKey={`left-${i}`} position={[-14.9, 1.5, -10 + i * 10]} rotation={[0, Math.PI / 2, 0]} user={user} artistId={artistId} roomId={roomId} initialArtwork={artworkMap[`left-${i}`]} />
            )
            frames.push(
                <FrameSlot key={`right-${i}`} slotKey={`right-${i}`} position={[14.9, 1.5, 10 - i * 10]} rotation={[0, -Math.PI / 2, 0]} user={user} artistId={artistId} roomId={roomId} initialArtwork={artworkMap[`right-${i}`]} />
            )
            frames.push(
                <FrameSlot key={`back-${i}`} slotKey={`back-${i}`} position={[-10 + i * 10, 1.5, -15]} rotation={[0, 0, 0]} user={user} artistId={artistId} roomId={roomId} initialArtwork={artworkMap[`back-${i}`]} />
            )
        }
        return frames
    }

    return (
        <group position={position}>
            <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#cfc9bd" roughness={0.3} metalness={0.1} />
            </mesh>

            {[[-15, 2.5, 0], [15, 2.5, 0]].map(([x, y, z], i) => (
                <mesh key={`wall-side-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[0.2, 7, 30]} />
                    <meshStandardMaterial map={texture1} side={THREE.DoubleSide} roughness={0.4} metalness={0.2} />
                </mesh>
            ))}
            <mesh position={[0, 2.5, -15]}>
                <planeGeometry args={[30, 7]} />
                <meshStandardMaterial map={texture1} roughness={0.9} metalness={0.5} />
            </mesh>
            {[0, 2.5, 15].map((val, i) => (
                <mesh key={`wall-front-${i}`} position={[val, 2.5, 15]}>
                    <boxGeometry args={[30, 7, 0.2]} />
                    <meshStandardMaterial map={texture2} side={THREE.DoubleSide} roughness={0.4} metalness={0.2} />
                </mesh>
            ))}

            <mesh position={[0, 6.05, 0]} receiveShadow>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial color="#b8b3a9" />
            </mesh>

            {[[-11, 5.5, -11], [11, 5.5, -11], [-11, 5.5, 11], [11, 5.5, 11]].map(([x, y, z], i) => (
                <group key={`chandelier-${i}`} position={[x, y, z]}>
                    <mesh position={[0, 0.3, 0]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
                        <meshStandardMaterial color="#d8b98c" metalness={1} roughness={0.3} />
                    </mesh>
                    <mesh ref={(el) => (ceilingLights.current[i] = el)} position={[0, -0.2, 0]}>
                        <sphereGeometry args={[0.25, 32, 32]} />
                        <meshStandardMaterial
                            color="#fffbe6"
                            emissive="#fff8e1"
                            emissiveIntensity={1.5}
                            metalness={0.4}
                            roughness={0.2}
                        />
                    </mesh>
                    <pointLight position={[0, -0.5, 0]} intensity={1.8} color="#fff9f2" distance={6} decay={2} />
                </group>
            ))}

            <mesh position={[0, 5.9, 0]}>
                <boxGeometry args={[14, 0.1, 0.5]} />
                <meshStandardMaterial color="#fffbe6" emissive="#ffe" emissiveIntensity={1.5} />
            </mesh>

            <Environment files="/hdri/potsdamer_platz_1k.hdr" background />
            <ambientLight intensity={0.8} color="#eae5dc" />
            <spotLight position={[0, 6, 5]} angle={0.3} penumbra={0.3} intensity={1} castShadow />
            <spotLight position={[0, 6, -5]} angle={0.3} penumbra={0.3} intensity={1} castShadow />

            <Text
                position={[0, 5.5, -14.5]}
                fontSize={0.5}
                color="#333"
                anchorX="center"
                anchorY="middle"
                maxWidth={16}
            >
                ARTSPACE GALLERY
            </Text>

            <Suspense fallback={null}>{renderFrames()}</Suspense>

            <ClickToMove floorRef={floorRef} controlsRef={controlsRef} />
        </group>
    )
}

useGLTF.preload('/models/artwork_frame.glb')