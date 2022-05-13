import './App.css';
import React from 'react';
import { OrbitControls, Stats, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';

// import jsx module like so after converting your GLTF at https://gltf.pmnd.rs/
import HelperBot from './HelperBot';

function App() {
  return (
    <div id='webgl'>
       <Canvas>
         <pointLight position={[10, 10, 10]} />
        {/* Add converted jsx components to the canvas */} 
        <HelperBot />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
   
  );
}

export default App;
