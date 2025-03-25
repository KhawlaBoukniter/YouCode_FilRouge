import React, { useRef } from 'react'
import { Text, Environment, MeshReflectorMaterial } from '@react-three/drei'
import ClickToMove from './ClickToMove'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export default function RoomStyle2({ position = [0, 0, 0], controlsRef }) {
    const ceilingLights = useRef([])
    const floorRef = useRef()

    useFrame((state) => {
        const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
        ceilingLights.current.forEach((ref) => {
            if (ref) ref.material.emissiveIntensity = 1.5 + pulse * 1.5
        })
    })

    const texture = useLoader(TextureLoader, '/textures/19.jpg')

    return (
        <group position={position}>
            {/* Sol blanc lumineux */}
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
                    maxDepthThreshold={2} />
            </mesh>

            {/* Murs blanc cassé */}
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

            {/* Plafond blanc pur */}
            <mesh position={[0, 6.05, 0]} receiveShadow>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
            </mesh>

            {/* Lumières encastrées modernes */}
            {[-10, 0, 10].map((x, i) => (
                <group key={i} position={[x, 6.05, 0]}>
                    {/* Encastrement physique */}
                    <mesh position={[0, -0.05, 0]}>
                        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
                        <meshStandardMaterial color="#5a5958" metalness={1} roughness={0.1} clearcoat={1} clearcoatRoughness={0.05} reflectivity={1} emissive="#fff5cc" emissiveIntensity={0.3} envMapIntensity={2} />
                    </mesh>

                    {/* Source de lumière réelle */}
                    <pointLight
                        position={[0, -0.02, 0]}
                        intensity={2.5}
                        distance={8}
                        decay={2}
                        color="#ffffff"
                    />

                    {/* Effet lumineux émissif visuel */}
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

            {/* Éclairage ambiant et spot */}
            {/* <ambientLight intensity={1} color="#ebe7e5" />
            <pointLight position={[0, 5, 0]} intensity={1.2} color="#fefefe" /> */}

            {/* Titre mural sobre */}
            <Text
                position={[0, 4.5, -14.8]}
                fontSize={0.5}
                color="#3a3a3a"
                anchorX="center"
                anchorY="middle"
                maxWidth={20}
            >
                Light Gallery
            </Text>

            <ClickToMove floorRef={floorRef} controlsRef={controlsRef} />
        </group>
    )
}