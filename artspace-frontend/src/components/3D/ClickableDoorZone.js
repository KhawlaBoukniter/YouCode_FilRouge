import React from 'react'

export default function ClickableDoorZone({ position = [10, 2.5, 0], onClick }) {
    return (
        <mesh position={position} onClick={onClick}>
            <boxGeometry args={[0.2, 5, 4]} />
            <meshStandardMaterial color="limegreen" opacity={0.5} transparent />
        </mesh>
    )
}