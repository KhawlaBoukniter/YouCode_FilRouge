import React, { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function RoomStyleTrending({ position = [0, 0, 0] }) {
    const ceilingLights = useRef([])

    useFrame((state) => {
        const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
        ceilingLights.current.forEach((ref) => {
            if (ref) ref.material.emissiveIntensity = 1.5 + pulse * 1.5
        })
    })

    return (
        <group position={position}>
            {/* Sol clair chaleureux effet terrazzo pastel */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#fff1e6" metalness={0.1} roughness={0.2} />
            </mesh>

            {/* Murs pastel vifs et joyeux */}
            {[[-15, 2.5, 0], [15, 2.5, 0]].map(([x, y, z], i) => (
                <mesh key={`wall-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[0.2, 5, 30]} />
                    <meshStandardMaterial color={i === 0 ? "#ffd6d6" : "#d0eaff"} />
                </mesh>
            ))}
            {[[-0, 2.5, -15], [0, 2.5, 15]].map(([x, y, z], i) => (
                <mesh key={`wall-${i + 2}`} position={[x, y, z]}>
                    <boxGeometry args={[30, 5, 0.2]} />
                    <meshStandardMaterial color={i === 0 ? "#fff9dc" : "#e0ffd8"} />
                </mesh>
            ))}

            {/* Plafond blanc lumineux avec LED colorées en halo doux */}
            <mesh position={[0, 5.05, 0]}>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial color="#fdf5ff" />
            </mesh>

            {[[-10, 5.2, 0], [10, 5.2, 0], [0, 5.2, -10], [0, 5.2, 10]].map(([x, y, z], i) => (
                <mesh
                    key={`ceiling-light-${i}`}
                    ref={(el) => (ceilingLights.current[i] = el)}
                    position={[x, y, z]}
                >
                    <ringGeometry args={[1.2, 1.6, 32]} />
                    <meshStandardMaterial
                        emissive={['#ffb347', '#99e2b4', '#ffec99', '#b9fbc0'][i]}
                        emissiveIntensity={2.5}
                        color="#eeeeee"
                    />
                </mesh>
            ))}

            {/* Cadres pastel rétroéclairés */}
            {[[-8, 2.5, -14.9], [-2.5, 2.5, -14.9], [3, 2.5, -14.9], [8, 2.5, -14.9]].map(([x, y, z], i) => (
                <group key={`frame-${i}`} position={[x, y, z]}>
                    <mesh position={[0, 0, 0.01]}>
                        <planeGeometry args={[4, 2.8]} />
                        <meshStandardMaterial
                            emissive={["#ffccd5", "#cce5ff", "#fff3bf", "#d8f3dc"][i]}
                            emissiveIntensity={1.8}
                            color="#fafafa"
                        />
                    </mesh>
                    <mesh>
                        <planeGeometry args={[3.7, 2.5]} />
                        <meshStandardMaterial color="#3a3a3a" />
                    </mesh>
                </group>
            ))}

            {/* Éclairage chaleureux immersif */}
            <ambientLight intensity={0.85} color="#fff2e6" />
            <pointLight position={[0, 6, 0]} intensity={1.4} color="#ffd6d6" />

            {/* Titre mural joyeux */}
            <Text
                position={[0, 4.7, -14.7]}
                fontSize={0.55}
                color="#fa4a7c"
                anchorX="center"
                anchorY="middle"
                maxWidth={22}
            >
                ✨ ART TRENDS — COLORFUL EDITION ✨
            </Text>
        </group>
    )
}
