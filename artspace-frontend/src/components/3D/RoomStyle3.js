import React from 'react'
import { Text } from '@react-three/drei'

export default function RoomStyle5({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            {/* Sol effet marbre clair brillant avec réflexions */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#eae4dc" metalness={0.3} roughness={0.05} />
            </mesh>

            {/* Murs beiges lumineux texturés satinés */}
            {[
                [0, 2.5, -15],
                [0, 2.5, 15],
                [-15, 2.5, 0],
                [15, 2.5, 0]
            ].map(([x, y, z], i) => (
                <mesh key={`wall-${i}`} position={[x, y, z]}>
                    <boxGeometry args={z === 0 ? [0.2, 5, 30] : [30, 5, 0.2]} />
                    <meshStandardMaterial color="#f0e8dd" roughness={0.25} metalness={0.2} />
                </mesh>
            ))}

            {/* Plafond élégant avec luminaires encastrés en V */}
            <mesh position={[0, 5.05, 0]}>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial color="#f5f2ec" />
            </mesh>

            {/* Lignes LED décoratives au plafond couleur chaude */}
            {[[-12, 5.2, -10], [12, 5.2, -10], [-12, 5.2, 10], [12, 5.2, 10]].map(([x, y, z], i) => (
                <mesh key={`ceiling-light-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[6, 0.01, 0.15]} />
                    <meshStandardMaterial emissive="#ffdab9" emissiveIntensity={5} color="#fcebd9" />
                </mesh>
            ))}

            {/* Lustres modernes suspendus au plafond couleur dorée douce */}
            {[
                [-10, 5, -10],
                [10, 5, -10],
                [-10, 5, 10],
                [10, 5, 10]
            ].map(([x, y, z], i) => (
                <mesh key={`modern-chandelier-${i}`} position={[x, y - 0.5, z]}>
                    <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
                    <meshStandardMaterial emissive="#ffe4b5" emissiveIntensity={4} color="#ffd89b" metalness={1} roughness={0.2} />
                </mesh>
            ))}

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
        </group>
    )
}