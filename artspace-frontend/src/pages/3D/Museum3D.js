import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useParams } from 'react-router-dom'

import ClickToMove from '../../components/3D/ClickToMove'
import RoomStyle1 from '../../components/3D/RoomStyle1'
import RoomStyle2 from '../../components/3D/RoomStyle2'
import RoomStyle3 from '../../components/3D/RoomStyle3'
import RoomStyle4 from '../../components/3D/RoomStyle4'
import RoomTD from '../../components/3D/RoomStyleTrending'
import MuseumMenu from '../../components/3D/MuseumMenu'

function Controls({ controlsRef }) {
    const { camera } = useThree()

    return (
        <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableZoom={true}
            maxDistance={15}
            minDistance={0.1}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={0}
            enableDamping={true}
            dampingFactor={0.1}
        />
    )
}

export default function Museum3D() {
    const floorRef = useRef()
    const { roomId } = useParams()
    const controlsRef = useRef()
    const [activeRoom, setActiveRoom] = useState('center')

    const renderRoom = () => {
        switch (roomId) {
            case 'room1': return <RoomStyle1 controlsRef={controlsRef} />
            case 'room2': return <RoomStyle2 controlsRef={controlsRef} />
            case 'room3': return <RoomStyle3 controlsRef={controlsRef} />
            case 'room4': return <RoomStyle4 controlsRef={controlsRef} />
            case 'trending': default: return <RoomTD controlsRef={controlsRef} />
        }
    }

    return (
        <div className='relative w-full h-screen'>
            <MuseumMenu />
            <Canvas shadows camera={{ position: [0, 5, 15], fov: 60 }}>
                <ambientLight intensity={0.3} />
                <spotLight position={[5, 10, 5]} angle={0.5} penumbra={0.2} intensity={1.5} castShadow />

                {renderRoom()}

                <ClickToMove floorRef={floorRef} controlsRef={controlsRef} isActive={activeRoom === 'center'} />

                <Controls controlsRef={controlsRef} />
            </Canvas>
        </div>
    )
}