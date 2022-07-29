import React from "react";


export default function Loader() {
    return (
        <mesh>
            <sphereBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial wireframe />
        </mesh>
    )
}