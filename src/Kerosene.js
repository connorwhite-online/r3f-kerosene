import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/kerosene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
      onClick={(e) => console.log('click')}
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Rusty painted metal"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Metal}
        position={[0, 0.85, -0.63]}
        rotation={[-0.88, 0, 0]}
        scale={[0.12, 0.03, 0.12]}
      />
    </group>
  );
}

useGLTF.preload("/kerosene.gltf");
