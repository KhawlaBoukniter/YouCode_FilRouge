import React, { useRef, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Controls() {
    const controls = useRef()
    const { camera } = useThree()

    useEffect(() => {
        // Centrer la rotation sur la salle du milieu
        controls.current.target.set(0, 2.5, 0)
        controls.current.update()
    }, [])

    return (
        <OrbitControls
            ref={controls}
            enablePan={false}
            enableZoom={true}
            maxDistance={15}
            minDistance={6}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={0}
        />
    )
}

function Room({ position = [0, 0, 0], color = "#ffffff", floorColor = "#e0e0e0", withLeftDoor = false, withRightDoor = false }) {
    return (
        <group position={position}>
            {/* Sol */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color={floorColor} />
            </mesh>

            {/* Mur arrière */}
            <mesh position={[0, 2.5, -10]}>
                <boxGeometry args={[20, 5, 0.2]} />
                <meshStandardMaterial color={color} />
            </mesh>

            {/* Mur avant */}
            <mesh position={[0, 2.5, 10]}>
                <boxGeometry args={[20, 5, 0.2]} />
                <meshStandardMaterial color={color} />
            </mesh>

            {/* Mur gauche */}
            {withLeftDoor ? (
                <>
                    <mesh position={[-10, 2.5, -6.5]}>
                        <boxGeometry args={[0.2, 5, 7]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                    <mesh position={[-10, 2.5, 6.5]}>
                        <boxGeometry args={[0.2, 5, 7]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                </>
            ) : (
                <mesh position={[-10, 2.5, 0]}>
                    <boxGeometry args={[0.2, 5, 20]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            )}

            {/* Mur droit */}
            {withRightDoor ? (
                <>
                    <mesh position={[10, 2.5, -6.5]}>
                        <boxGeometry args={[0.2, 5, 7]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                    <mesh position={[10, 2.5, 6.5]}>
                        <boxGeometry args={[0.2, 5, 7]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                </>
            ) : (
                <mesh position={[10, 2.5, 0]}>
                    <boxGeometry args={[0.2, 5, 20]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            )}
        </group>
    )
}

export default function Museum3D() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Canvas shadows camera={{ position: [0, 5, 15], fov: 60 }}>
                <ambientLight intensity={0.3} />
                <spotLight position={[5, 10, 5]} angle={0.4} penumbra={0.2} intensity={1.5} castShadow />

                {/* Salles alignées et connectées */}
                <Room position={[-20, 0, 0]} color="#fce4ec" withRightDoor />
                <Room position={[0, 0, 0]} color="#ffffff" withLeftDoor withRightDoor />
                <Room position={[20, 0, 0]} color="#e3f2fd" withLeftDoor />

                {/* Caméra contrôlée */}
                <Controls />
            </Canvas>
        </div>
    )
}