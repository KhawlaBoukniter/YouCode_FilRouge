import React from 'react'
import { Text } from '@react-three/drei'

export default function RoomStyle4({ position = [0, 0, 0] }) {
    return (
        <group position={position}>
            {/* Sol effet miroir clair */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#f8f8f8" metalness={0.8} roughness={0.05} side={2} />
            </mesh>

            {/* Murs gris clair satinés */}
            <mesh position={[0, 2.5, -15]}>
                <boxGeometry args={[30, 5, 0.2]} />
                <meshStandardMaterial color="#eeeeee" metalness={0.1} roughness={0.3} side={2} />
            </mesh>
            <mesh position={[0, 2.5, 15]}>
                <boxGeometry args={[30, 5, 0.2]} />
                <meshStandardMaterial color="#eeeeee" metalness={0.1} roughness={0.3} side={2} />
            </mesh>
            <mesh position={[-15, 2.5, 0]}>
                <boxGeometry args={[0.2, 5, 30]} />
                <meshStandardMaterial color="#eeeeee" side={2} />
            </mesh>
            <mesh position={[15, 2.5, 0]}>
                <boxGeometry args={[0.2, 5, 30]} />
                <meshStandardMaterial color="#eeeeee" side={2} />
            </mesh>

            {/* Plafond avec design LED immersif */}
            <mesh position={[0, 5, 0]}>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial color="#fefefe" side={2} />
            </mesh>

            {/* Bande LED encastrée cadre plafond */}
            <mesh position={[0, 4.98, 0]}>
                <boxGeometry args={[28, 0.02, 0.3]} />
                <meshStandardMaterial emissive="#ffffff" emissiveIntensity={2.8} color="#ffffff" />
            </mesh>

            {/* Quadrillage LED artistique au plafond */}
            {[-12, 0, 12].map((x, i) => (
                <mesh key={`line-x-${i}`} position={[x, 4.99, 0]}>
                    <boxGeometry args={[0.1, 0.01, 28]} />
                    <meshStandardMaterial emissive="#ffffff" emissiveIntensity={2.4} color="#ffffff" />
                </mesh>
            ))}
            {[-12, 0, 12].map((z, i) => (
                <mesh key={`line-z-${i}`} position={[0, 4.99, z]}>
                    <boxGeometry args={[28, 0.01, 0.1]} />
                    <meshStandardMaterial emissive="#ffffff" emissiveIntensity={2.4} color="#ffffff" />
                </mesh>
            ))}

            {/* Faux tableaux mur arrière */}
            {[[-8, 2.5, -14.9], [-4, 2.5, -14.9], [0, 2.5, -14.9], [4, 2.5, -14.9], [8, 2.5, -14.9]].map(([x, y, z], i) => (
                <mesh key={i} position={[x, y, z]}>
                    <planeGeometry args={[2.5, 3]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
            ))}

            {/* Éclairage global */}
            <ambientLight intensity={0.85} color="#ffffff" />
            <pointLight position={[0, 5.5, 0]} intensity={1.2} color="#ffffff" />

            {/* Titre mural minimaliste */}
            <Text
                position={[0, 4.6, -14.8]}
                fontSize={0.4}
                color="#444"
                anchorX="center"
                anchorY="middle"
                maxWidth={22}
            >
                MODERN ROOM STYLE 4
            </Text>
        </group>
    )
}
