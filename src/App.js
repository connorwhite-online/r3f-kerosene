import './App.css';
import React from 'react';
import { OrbitControls, Stats, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';

// import jsx module like so after converting your GLTF at https://gltf.pmnd.rs/ and put the .gltf file in the public folder
import HelperBot from './HelperBot';

function App() {
  return (
    <div id='webgl'>
       <Canvas>
         <PerspectiveCamera position={[10, 10, 10]} />
         <spotLight position={[10, 10, 10]} />
        {/* Add converted jsx components to the canvas */} 
        <HelperBot />
        {/* Add any Canvas controls here */}
        <OrbitControls enableZoom="false" />
        <Stats />
      </Canvas>
    </div>
   
  );
}

export default App;
