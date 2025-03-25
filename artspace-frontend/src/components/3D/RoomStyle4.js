import React, { useRef } from 'react'
import { Text, MeshReflectorMaterial } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import ClickToMove from './ClickToMove'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export default function RoomStyle4({ position = [0, 0, 0], controlsRef }) {
    const ceilingLights = useRef([])
    const floorRef = useRef()
    const ringRefs = useRef([])

    useFrame((state) => {
        const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
        ceilingLights.current.forEach((ref) => {
            if (ref) ref.material.emissiveIntensity = 1.5 + pulse * 1.5
        })
        ringRefs.current.forEach((ref, i) => {
            if (ref) {
                const angle = Math.sin(state.clock.elapsedTime + i) * 15
                ref.rotation.y = angle * (Math.PI / 340)
            }
        })
    })

    const texture = useLoader(TextureLoader, '/textures/5.jpg')


    return (
        <group position={position}>
            {/* Sol effet miroir clair */}
            <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <MeshReflectorMaterial
                    blur={[300, 300]}
                    resolution={1024}
                    mixBlur={2}
                    mixStrength={30}
                    roughness={0.8}
                    depthScale={1.2}
                    minDepthThreshold={0.7}
                    maxDepthThreshold={1.6}
                    color="#d4d4d4"
                    metalness={0.8}
                />
            </mesh>

            {/* Murs gris clair satinés */}
            {[
                [0, 2.5, -15],
                [0, 2.5, 15],
            ].map(([x, y, z], i) => (
                <mesh key={`wall-${i}`} position={[x, y, z]} receiveShadow>
                    <boxGeometry args={z === 0 ? [0.2, 7, 30] : [30, 7, 0.2]} />
                    <meshStandardMaterial color="#eeeeee" metalness={0.1} roughness={0.3} side={2} />
                </mesh>
            ))}

            {[

                [15, 2.5, 0],
            ].map(([x, y, z], i) => (
                <mesh key={`wall-${i}`} position={[x, y, z]} receiveShadow>
                    <boxGeometry args={z === 0 ? [0.2, 7, 30] : [30, 7, 0.2]} />
                    <meshStandardMaterial color="#eeeeee" side={2} />
                </mesh>
            ))}

            <mesh position={[-15, 2.5, 0]} receiveShadow>
                <boxGeometry args={[0.2, 7, 30]} />
                <meshStandardMaterial map={texture} metalness={0.5} roughness={0.3} side={THREE.DoubleSide} />
            </mesh>


            {/* Plafond avec design LED immersif */}
            <mesh position={[0, 6.05, 0]} rotation={[0, 0, 0]} receiveShadow>
                <boxGeometry args={[30, 0.2, 30]} />
                <MeshReflectorMaterial
                    blur={[100, 100]}
                    resolution={1024}
                    mixBlur={1.35}
                    mixStrength={1}
                    roughness={0.7}
                    depthScale={0.3}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={1.5}
                    color="#9d0404"
                    metalness={0.5}
                />
            </mesh>

            {/* Lustre à anneaux moderne */}
            {[2, 1.5, 1].map((radius, i) => (
                <mesh
                    key={`ring-${i}`}
                    ref={(el) => (ringRefs.current[i] = el)}
                    position={[0, 5.3 - i * 0.5, 0]}
                    rotation={[Math.PI / 2, 2, 2]}
                >
                    <torusGeometry args={[radius, 0.05, 16, 100]} />
                    <meshStandardMaterial
                        color="#f3e3cd"
                        emissive="#f3e3cd"
                        emissiveIntensity={3}
                        clearcoat={1}
                        reflectivity={0.5}
                    />
                </mesh>
            ))}

            {/* Faux tableaux mur arrière */}
            {[[-8, 2.5, -14.8], [-4, 2.5, -14.8], [0, 2.5, -14.8], [4, 2.5, -14.8], [8, 2.5, -14.8]].map(([x, y, z], i) => (
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

            <ClickToMove floorRef={floorRef} controlsRef={controlsRef} />
        </group>
    )
}
