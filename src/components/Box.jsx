export default function Box({ color, ...props }) {
    return (
        <mesh {...props}>
            <boxGeometry />
            <meshBasicMaterial
                wireframe
                color={color}
            />
        </mesh>
    )
}
