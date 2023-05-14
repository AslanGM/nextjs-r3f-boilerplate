import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { useMemo } from 'react'
import Box from './Box'

export default function App() {
    const options = useMemo(() => {
        return {
            x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            visible: true,
            color: { value: 'lime' }
        }
    }, [])

    const box = useControls('Box', options)
    return (
        <Canvas camera={{ position: [0, 0, 2] }}>
            <Box
                rotation={[box.x, box.y, box.z]}
                visible={box.visible}
                color={box.color}
            />
            <OrbitControls />
            <axesHelper args={[5]} />
            <gridHelper args={[20, 20, 0xffff00, 'teal']} />
            {/* <Stats /> */}
        </Canvas>
    )
}
