import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Museum3D() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#e0e0e0" />
                </mesh>

                <mesh position={[0, 2.5, -10]} receiveShadow>
                    <boxGeometry args={[20, 5, 0.2]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
                <mesh position={[0, 2.5, 10]} receiveShadow>
                    <boxGeometry args={[20, 5, 0.2]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
                <mesh position={[-10, 2.5, 0]} receiveShadow>
                    <boxGeometry args={[0.2, 5, 20]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
                <mesh position={[10, 2.5, 0]} receiveShadow>
                    <boxGeometry args={[0.2, 5, 20]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>

                <mesh position={[0, 0.5, 0]} castShadow>
                    <boxGeometry />
                    <meshStandardMaterial color="royalblue" />
                </mesh>

                <OrbitControls />
            </Canvas>
        </div>
    )
}