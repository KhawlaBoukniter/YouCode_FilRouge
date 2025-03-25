import { PointerLockControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function PlayerControls() {
    const { camera, gl } = useThree()
    const direction = useRef(new THREE.Vector3())
    const velocity = useRef(new THREE.Vector3())
    const keys = useRef({})

    useEffect(() => {
        const onKeyDown = (e) => (keys.current[e.code] = true)
        const onKeyUp = (e) => (keys.current[e.code] = false)
        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('keyup', onKeyUp)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('keyup', onKeyUp)
        }
    }, [])

    useFrame((_, delta) => {
        direction.current.set(0, 0, 0)
        if (keys.current['KeyW'] || keys.current['ArrowUp']) direction.current.z -= 1
        if (keys.current['KeyS'] || keys.current['ArrowDown']) direction.current.z += 1
        if (keys.current['KeyA'] || keys.current['ArrowLeft']) direction.current.x -= 1
        if (keys.current['KeyD'] || keys.current['ArrowRight']) direction.current.x += 1

        direction.current.normalize()
        direction.current.applyEuler(camera.rotation)

        velocity.current.copy(direction.current).multiplyScalar(5 * delta)

        const nextX = camera.position.x + velocity.current.x
        const nextZ = camera.position.z + velocity.current.z

        if (Math.abs(nextX) < 30 && Math.abs(nextZ) < 10) {
            camera.position.x = nextX
            camera.position.z = nextZ
        }
    })

    return <PointerLockControls args={[camera, gl.domElement]} />
}