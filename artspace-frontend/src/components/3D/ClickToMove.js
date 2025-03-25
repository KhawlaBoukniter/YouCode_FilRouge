import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ClickToMove({ floorRef }) {
    const { camera, gl } = useThree()
    const [target, setTarget] = useState(null)
    const markerRef = useRef()
    const raycaster = useRef(new THREE.Raycaster())
    const mouse = useRef(new THREE.Vector2())

    useEffect(() => {
        const onClick = (event) => {
            const rect = gl.domElement.getBoundingClientRect()
            mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
            mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

            raycaster.current.setFromCamera(mouse.current, camera)
            if (!floorRef.current) return

            const intersects = raycaster.current.intersectObject(floorRef.current)
            if (intersects.length > 0) {
                const point = intersects[0].point
                const destination = new THREE.Vector3(point.x, 5, point.z + 10)
                setTarget(destination)

                if (markerRef.current) {
                    markerRef.current.position.set(point.x, 0.1, point.z)
                    markerRef.current.visible = true
                }
            }
        }

        gl.domElement.addEventListener('click', onClick)
        return () => gl.domElement.removeEventListener('click', onClick)
    }, [camera, gl, floorRef])

    useFrame(() => {
        if (target) {
            const currentPos = camera.position
            const dist = currentPos.distanceTo(target)

            if (dist < 0.1) {
                setTarget(null)
                if (markerRef.current) markerRef.current.visible = false
                return
            }

            camera.position.lerp(target, 0.05)

            camera.lookAt(target.x, 2.5, target.z - 10)
        }
    })

    return (
        <mesh ref={markerRef} visible={false} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.5, 32]} />
            <meshStandardMaterial color="skyblue" transparent opacity={0.6} />
        </mesh>
    )
}