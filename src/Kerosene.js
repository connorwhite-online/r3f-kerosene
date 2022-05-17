import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/kerosene.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["rusty painted metal"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 0.85, -0.63]}
        rotation={[-0.88, 0, 0]}
        scale={[0.12, 0.03, 0.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 0.88, -0.66]}
        rotation={[-0.87, 0, 0]}
        scale={[0.06, 0.04, 0.06]}
      />
    </group>
  );
}

useGLTF.preload("/kerosene.glb");