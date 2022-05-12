import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/helper-bot.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Metal scratched"]}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lightbar_1.geometry}
        material={nodes.Lightbar_1.material}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lightbar_2.geometry}
        material={nodes.Lightbar_2.material}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lightbar_3.geometry}
        material={nodes.Lightbar_3.material}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lightbar_4.geometry}
        material={nodes.Lightbar_4.material}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials["Screen low pitch procedural"]}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottom_Speaker.geometry}
        material={nodes.Bottom_Speaker.material}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Speaker.geometry}
        material={nodes.Top_Speaker.material}
        position={[0, 1, 0]}
      />
    </group>
  );
}

useGLTF.preload("/helper-bot.gltf");
