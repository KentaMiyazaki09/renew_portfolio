'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Model from './canvas/GLTFModel'
import SceneRouter from './canvas/SceneRouter'
import Floor from './canvas/Floor'

import { OrbitControls } from '@react-three/drei'

const Scene: React.FC = () => {
  return (
    <Canvas shadows camera={{ position: [5, 8, 18], fov: 45 } }>
      <directionalLight
        position={[5, 10, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>
        <Model url="/glb/01_fired_egg.glb" />
        <SceneRouter />
        <Floor />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
export default Scene