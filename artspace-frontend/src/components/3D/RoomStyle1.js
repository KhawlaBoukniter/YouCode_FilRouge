import React, { useRef } from 'react'
import { Text, Environment } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import ClickToMove from './ClickToMove'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export default function RoomStyle1({ position = [0, 0, 0], controlsRef }) {
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

    return (
        <group position={position}>
            {/* Sol en marbre clair */}
            <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#cfc9bd" roughness={0.3} metalness={0.1} />
            </mesh>

            {/* Murs satinés */}
            {[[-15, 2.5, 0], [15, 2.5, 0]].map(([x, y, z], i) => (
                <mesh key={`wall-side-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[0.2, 7, 30]} />
                    <meshStandardMaterial map={texture1} side={THREE.DoubleSide} roughness={0.4} metalness={0.2} />
                </mesh>
            ))}
            <mesh position={[0, 2.5, -15]} rotation={[0, 0, 0]}>
                <planeGeometry args={[30, 7]} />
                <meshStandardMaterial map={texture1} roughness={0.9} metalness={0.5} />
            </mesh>
            {[[0, 2.5, 15]].map(([x, y, z], i) => (
                <mesh key={`wall-front-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[30, 7, 0.2]} />
                    <meshStandardMaterial map={texture2} side={THREE.DoubleSide} roughness={0.4} metalness={0.2} />
                </mesh>
            ))}

            {/* Toit de la salle */}
            <mesh position={[0, 6.05, 0]} receiveShadow>
                <boxGeometry args={[30, 0.1, 30]} />
                <meshStandardMaterial color="#b8b3a9" />
            </mesh>

            {/* Lustres dans les 4 coins */}
            {[[-11, 5.5, -11], [11, 5.5, -11], [-11, 5.5, 11], [11, 5.5, 11]].map(([x, y, z], i) => (
                <group key={`chandelier-${i}`} position={[x, y, z]}>
                    {/* Suspension */}
                    <mesh position={[0, 0.3, 0]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
                        <meshStandardMaterial color="#d8b98c" metalness={1} roughness={0.3} />
                    </mesh>

                    {/* Corps lumineux */}
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

            {/* Bande lumineuse au plafond */}
            <mesh position={[0, 5.9, 0]}>
                <boxGeometry args={[14, 0.1, 0.5]} />
                <meshStandardMaterial color={'#fffbe6'} emissive={'#ffe'} emissiveIntensity={1.5} />
            </mesh>

            <Environment preset="city" />

            {/* Éclairage global */}
            <ambientLight intensity={0.8} color="#eae5dc" />
            <spotLight position={[0, 6, 5]} angle={0.3} penumbra={0.3} intensity={1} castShadow />
            <spotLight position={[0, 6, -5]} angle={0.3} penumbra={0.3} intensity={1} castShadow />

            {/* Petit texte stylé sur le mur */}
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

            <ClickToMove floorRef={floorRef} controlsRef={controlsRef} />
        </group>
    )
}
