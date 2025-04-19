import React, { useRef } from 'react'
import { Text, MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import ClickToMove from './ClickToMove'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export default function RoomStyleTrending({ position = [0, 0, 0], controlsRef }) {
    const ceilingLights = useRef([])
    const floorRef = useRef()
    const { scene: sculpture } = useGLTF('/models/horse_sculpture.glb')
    const { scene: sculpture1 } = useGLTF('/models/sheep_sculpture.glb')
    const { scene: barrier } = useGLTF('/models/vip_rope_barrier.glb')

    useFrame((state) => {
        const pulse = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2
        ceilingLights.current.forEach((ref) => {
            if (ref) ref.material.emissiveIntensity = 1.5 + pulse * 1.5
        })
    })

    const texture = useLoader(TextureLoader, '/textures/45.jpg')
    const glb_horse = useLoader(TextureLoader, '/textures/glb_horse7.jpg')
    const glb_horse1 = useLoader(TextureLoader, '/textures/glb_horse8.jpg')

    return (
        <group position={position}>
            {/* Sol marbré lumineux effet miroir réaliste */}
            <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[40, 40]} />
                <MeshReflectorMaterial
                    blur={[400, 100]}
                    resolution={1024}
                    mixBlur={8}
                    mixStrength={10}
                    roughness={0.1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.5}
                    color="#fefefe"
                    metalness={0.5}
                />
            </mesh>

            {/* Murs extérieurs espacés */}
            {[[0, 2.5, 20], [0, 2.5, -20]].map(([x, y, z], i) => (
                <mesh key={`outer-wall-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[z === 0 ? 0.2 : 40, 7, z === 0 ? 40 : 0.2]} />
                    <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
                </mesh>
            ))}

            {[[20, 2.5, 0], [-20, 2.5, 0]].map(([x, y, z], i) => (
                <mesh key={`outer-wall-${i}`} position={[x, y, z]}>
                    <boxGeometry args={[z === 0 ? 0.2 : 40, 7, z === 0 ? 40 : 0.2]} />
                    <meshStandardMaterial color="#b1bfb1" />
                </mesh>
            ))}

            {/* Sculpture centrale */}

            <primitive
                object={sculpture}
                scale={2}
                position={[-2, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                onUpdate={(self) => {
                    self.traverse((child) => {
                        if (child.isMesh) {
                            child.material = new THREE.MeshStandardMaterial({
                                map: glb_horse,
                                metalness: 0.5,
                                roughness: 0.3,
                            })
                            child.castShadow = true
                            child.receiveShadow = true
                        }
                    })
                }}
            />

            <primitive
                object={sculpture1}
                scale={2}
                position={[2, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                onUpdate={(self) => {
                    self.traverse((child) => {
                        if (child.isMesh) {
                            child.material = new THREE.MeshStandardMaterial({
                                map: glb_horse1,
                                metalness: 0.5,
                                roughness: 0.3,
                            })
                            child.castShadow = true
                            child.receiveShadow = true
                        }
                    })
                }}
            />

            {/* Barrières autour de la première sculpture */}
            <primitive object={barrier} position={[-0, -0.1, 1.2]} scale={0.02} />
            <primitive object={barrier.clone()} scale={0.02} position={[8, -0.1, 0.5]} rotation={[0, -Math.PI / 2, 0]} />
            <primitive object={barrier.clone()} scale={0.02} position={[-1, -0.1, 0.5]} rotation={[0, -Math.PI / 2, 0]} />
            <primitive object={barrier.clone()} position={[-0, -0.1, -8]} scale={0.02} />


            {/* Plafond épuré */}
            <mesh position={[0, 6.05, 0]}>
                <boxGeometry args={[40, 0.1, 40]} />
                <meshStandardMaterial color="#fefefe" />
            </mesh>

            {/* Lustres élégants et sculpturaux */}
            {[[-8, 5.4, -8], [8, 5.3, -8], [0, 5.4, 8]].map(([x, y, z], i) => (
                <group key={`light-${i}`} position={[x, y, z]}>
                    <mesh ref={(el) => (ceilingLights.current[i] = el)}>
                        <torusKnotGeometry args={[0.3, 0.1, 64, 8]} />
                        <meshStandardMaterial
                            color="#fff6e0"
                            emissive="#fcd2a0"
                            emissiveIntensity={2.5}
                            metalness={0.9}
                            roughness={0.1}
                        />
                    </mesh>
                    <pointLight position={[0, 0, 0]} intensity={3} distance={10} decay={2} color="#fcd2a0" />
                </group>
            ))}

            {/* Titre mural */}
            <Text
                position={[0, 4.6, -19.5]}
                fontSize={0.6}
                anchorX="center"
                anchorY="middle"
                maxWidth={30}
            >
                TRENDING ROOM
            </Text>

            <ambientLight intensity={0.8} color="#fff2e6" />
            <pointLight position={[0, 6, 0]} intensity={1.4} color="#ffd6d6" />

            <ClickToMove floorRef={floorRef} controlsRef={controlsRef} />
        </group>
    )
}

useGLTF.preload('/models/horse_sculpture.glb')
useGLTF.preload('/models/vip_rope_barrier.glb')