import logo from './logo.svg';
import './App.css';
import React from 'react';
import { OrbitControls, Stats, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from 'react-three/fiber';


function App() {
  return (
    <div className='web-gl'>
       <Canvas>
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
   
  );
}

export default App;
