import React, { useRef } from 'react'
import { Text, Environment } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import ClickToMove from './ClickToMove'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export default function RoomStyle3({ position = [0, 0, 0], controlsRef }) {
    const ceilingLights = useRef([])
    const floorRef = useRef()

    useFrame((state) => {
        const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
        ceilingLights.current.forEach((ref) => {
            if (ref) ref.material.emissiveIntensity = 1.5 + pulse * 1.5
        })
    })

    const chandelierRefs = useRef([])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        chandelierRefs.current.forEach((ref, i) => {
            if (ref?.material) {
                ref.material.emissiveIntensity = 0.25 + Math.sin(t * 4 + i) * 0.05
            }
        })
    })

    const texture = useLoader(TextureLoader, '/textures/8.jpg')

    return (
        <group position={position}>
            {/* Sol effet marbre clair brillant avec réflexions */}
            <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial map={texture} side={THREE.DoubleSide} metalness={0.1} roughness={0.2} />
            </mesh>

            {/* Murs beiges lumineux texturés satinés */}
            {[
                [0, 2.5, -15],
                [0, 2.5, 15],
                [-15, 2.5, 0],
                [15, 2.5, 0]
            ].map(([x, y, z], i) => (
                <mesh key={`wall-${i}`} position={[x, y, z]} receiveShadow>
                    <boxGeometry args={z === 0 ? [0.2, 7, 30] : [30, 7, 0.2]} />
                    <meshStandardMaterial color="#f0e8dd" roughness={0.25} metalness={0.2} />
                </mesh>
            ))}

            {/* Plafond élégant avec luminaires encastrés en V */}
            <mesh position={[0, 6.05, 0]} receiveShadow>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial color="#e5dcd2" roughness={1} metalness={0.2} />
            </mesh>

            {/* Lignes LED décoratives au plafond couleur chaude */}
            {[[-13, 6, -10], [13, 6, -10], [-13, 6, 10], [13, 6, 10]].map(([x, y, z], i) => (
                <mesh key={`ceiling-light-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[6, 0.04, 0.1]} />
                    <meshStandardMaterial color="#ffd89b" metalness={0.5} roughness={0.4} />
                </mesh>
            ))}

            {/* Lustres modernes suspendus au plafond couleur dorée douce */}
            {[
                [-10, 5.7, -10],
                [10, 5.7, -10],
                [-10, 5.7, 10],
                [10, 5.7, 10]
            ].map(([x, y, z], i) => (
                <group key={`lustre-${i}`} position={[x, y, z]}>
                    {/* Câble d'accroche */}
                    <mesh position={[0, 0.3, 0]}>
                        <cylinderGeometry args={[0.02, 0.06, 0.6, 16]} />
                        <meshStandardMaterial color="#ffd89b" metalness={1} roughness={0.4} />
                    </mesh>

                    {/* Corps du lustre */}
                    <mesh
                        ref={(el) => (chandelierRefs.current[i] = el)}
                        position={[0, -0.5, 0]}
                    >
                        <cylinderGeometry args={[0.2, 0.2, 1.1, 32]} />
                        <meshStandardMaterial
                            color="#d4af37"
                            emissive="#fff5cc"
                            emissiveIntensity={0.3}
                            metalness={1}
                            roughness={0.1}
                            clearcoat={1}
                            clearcoatRoughness={0.05}
                            reflectivity={1}
                            envMapIntensity={2}
                        />
                    </mesh>

                    {/* Lumière interne */}
                    <pointLight position={[0, -0.5, 0]} intensity={2.5} distance={8} decay={2} color="#fff8e7" />

                    {/* Spot lumineux de côté */}
                    <spotLight position={[x, y + 1, z + 2]} angle={0.3} penumbra={0.4} intensity={1.5} castShadow />

                </group>
            ))}

            <Environment preset="city" />

            {/* Bandes LED intégrées dans les coins du sol en doré clair */}
            {[
                [-15, 0.01, -15],
                [-15, 0.01, 15],
                [15, 0.01, -15],
                [15, 0.01, 15]
            ].map(([x, y, z], i) => (
                <mesh key={`floor-led-${i}`} position={[x, y, z]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[6, 0.05]} />
                    <meshStandardMaterial emissive="#ffdead" emissiveIntensity={2.5} color="#f8d8aa" />
                </mesh>
            ))}

            {/* Faux cadres d’exposition rétroéclairés artistiques */}
            {[[-9, 2.5, -14.9], [0, 2.5, -14.9], [9, 2.5, -14.9]].map(([x, y, z], i) => (
                <group key={`art-frame-${i}`} position={[x, y, z]}>
                    <mesh position={[0, 0, 0.01]}>
                        <planeGeometry args={[5, 3.4]} />
                        <meshStandardMaterial emissive="#ffe4b5" emissiveIntensity={2} color="#f6dec4" />
                    </mesh>
                    <mesh>
                        <planeGeometry args={[4.6, 3]} />
                        <meshStandardMaterial color="#2e2e2e" />
                    </mesh>
                </group>
            ))}

            {/* Éclairage ambiant et directionnel */}
            <ambientLight intensity={0.95} color="#fff8dc" />
            <pointLight position={[0, 6, 0]} intensity={1.8} color="#ffe4b5" />

            {/* Titre mural stylisé */}
            <Text
                position={[0, 4.7, -14.7]}
                fontSize={0.5}
                color="#4b3c2f"
                anchorX="center"
                anchorY="middle"
                maxWidth={20}
            >
                GOLDEN ROOM — MODERN STYLE
            </Text>

            <ClickToMove floorRef={floorRef} controlsRef={controlsRef} />
        </group>
    )
}