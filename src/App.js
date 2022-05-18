import './App.css';
import React, { Suspense } from 'react';
import { OrbitControls, Stats, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';

// import jsx module like so after converting your GLTF at https://gltf.pmnd.rs/ and put the .gltf file in the public folder
import Kerosene from './Kerosene';

function App() {
  return (
    <div id='webgl'>
      <Suspense>
        <Canvas camera={{ position: [10, 5, 5], fov: 20 }}>
          <spotLight 
            intensity={1}
            angle={0.25}
            position={[10, 10, 1]} 
          />
          {/* Add converted jsx components to the canvas */} 
          <Kerosene />
          {/* Zoom, panning, and rotation controls for the scene */}
          <OrbitControls 
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom
            maxDistance={20}
            minDistance={5}
            zoomSpeed={0.75} 
          />
          {/* Stats is a time-based log of the renderer's frame-rate */}
          <Stats />
        </Canvas>
      </Suspense>
    </div>
   
  );
}

export default App;
