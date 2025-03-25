import React from 'react'
import { Text } from '@react-three/drei'

export default function RoomStyle2({ position = [0, 0, 0], baseColor = "#ececec" }) {
    return (
        <group position={position}>
            {/* Sol beige élégant */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[22, 22]} />
                <meshStandardMaterial color="#f5f0e6" roughness={0.4} metalness={0.2} side={2} />
            </mesh>

            {/* Murs crème texturés visibles des deux côtés */}
            <mesh position={[0, 2.5, -11]}>
                <boxGeometry args={[22, 5, 0.2]} />
                <meshStandardMaterial color="#fff7ed" metalness={0.15} roughness={0.5} side={2} />
            </mesh>
            <mesh position={[0, 2.5, 11]}>
                <boxGeometry args={[22, 5, 0.2]} />
                <meshStandardMaterial color="#fff7ed" metalness={0.15} roughness={0.5} side={2} />
            </mesh>
            <mesh position={[-11, 2.5, 0]}>
                <boxGeometry args={[0.2, 5, 22]} />
                <meshStandardMaterial color="#fff7ed" metalness={0.15} roughness={0.5} side={2} />
            </mesh>
            <mesh position={[11, 2.5, 0]}>
                <boxGeometry args={[0.2, 5, 22]} />
                <meshStandardMaterial color="#fff7ed" metalness={0.15} roughness={0.5} side={2} />
            </mesh>

            {/* Toit flottant doux */}
            <mesh position={[0, 5, 0]}>
                <boxGeometry args={[22, 0.1, 22]} />
                <meshStandardMaterial color="#f2efe9" side={2} />
            </mesh>

            {/* Luminaires design suspendus plus doux */}
            {[[-7, -7], [7, -7], [-7, 7], [7, 7]].map(([x, z], i) => (
                <mesh key={i} position={[x, 4.8, z]}>
                    <cylinderGeometry args={[0.06, 0.06, 1.5, 20]} />
                    <meshStandardMaterial color={'#fdf5e6'} emissive={'#f8e6c1'} emissiveIntensity={1.2} side={2} />
                </mesh>
            ))}

            {/* Éclairage doux ambré */}
            <pointLight position={[0, 4, 0]} intensity={1.1} color={'#fff0dd'} />

            {/* Titre mural épuré */}
            <Text
                position={[0, 4.5, -10.9]}
                fontSize={0.5}
                color="#F8F7F7"
                anchorX="center"
                anchorY="middle"
                maxWidth={16}
            >
                ROOM STYLE 2
            </Text>
        </group>
    )
}
