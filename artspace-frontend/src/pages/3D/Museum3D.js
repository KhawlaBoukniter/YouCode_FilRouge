import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Museum3D() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color="royalblue" />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    )
}