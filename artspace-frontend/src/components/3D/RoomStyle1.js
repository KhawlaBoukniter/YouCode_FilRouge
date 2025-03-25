import React from 'react'
import { Text } from '@react-three/drei'

export default function RoomStyle1({ position = [0, 0, 0], color = "#f5f5f5" }) {
    return (
        <group position={position}>
            {/* Sol en marbre clair */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
            </mesh>

            {/* Murs satinés */}
            <mesh position={[0, 2.5, -10]}>
                <boxGeometry args={[20, 5, 0.2]} />
                <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
            </mesh>
            <mesh position={[0, 2.5, 10]}>
                <boxGeometry args={[20, 5, 0.2]} />
                <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
            </mesh>
            <mesh position={[-10, 2.5, 0]}>
                <boxGeometry args={[0.2, 5, 20]} />
                <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
            </mesh>
            <mesh position={[10, 2.5, 0]}>
                <boxGeometry args={[0.2, 5, 20]} />
                <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
            </mesh>

            {/* Toit de la salle */}
            <mesh position={[0, 5, 0]} rotation={[0, 0, 0]} receiveShadow>
                <boxGeometry args={[20, 0.2, 20]} />
                <meshStandardMaterial color={color} />
            </mesh>

            {/* Lustres dans les 4 coins */}
            <mesh position={[-9, 4.8, -9]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color={'#fffbe6'} emissive={'#ffd'} emissiveIntensity={1.5} />
            </mesh>
            <mesh position={[9, 4.8, -9]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color={'#fffbe6'} emissive={'#ffd'} emissiveIntensity={1.5} />
            </mesh>
            <mesh position={[-9, 4.8, 9]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color={'#fffbe6'} emissive={'#ffd'} emissiveIntensity={1.5} />
            </mesh>
            <mesh position={[9, 4.8, 9]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color={'#fffbe6'} emissive={'#ffd'} emissiveIntensity={1.5} />
            </mesh>

            {/* Éclairage doux */}
            <pointLight position={[0, 4, 0]} intensity={0.9} color={'#fff9f2'} />
            <spotLight position={[0, 6, 5]} angle={0.3} penumbra={0.3} intensity={1} castShadow />
            <spotLight position={[0, 6, -5]} angle={0.3} penumbra={0.3} intensity={1} castShadow />

            {/* Bande lumineuse au plafond */}
            <mesh position={[0, 4.9, 0]} rotation={[0, 0, 0]}>
                <boxGeometry args={[18, 0.1, 0.5]} />
                <meshStandardMaterial color={'#fffbe6'} emissive={'#ffe'} emissiveIntensity={1.5} />
            </mesh>

            {/* Petit texte stylé sur le mur */}
            <Text
                position={[0, 4.5, -9.9]}
                fontSize={0.5}
                color="#333"
                anchorX="center"
                anchorY="middle"
                maxWidth={16}
            >
                ARTSPACE GALLERY
            </Text>
        </group>
    )
}
