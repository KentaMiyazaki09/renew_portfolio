'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Model from './GLTFModel'
import SceneRouter from './SceneRouter'

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 3]} intensity={2.5} />
      <Suspense fallback={null}>
        <Model url="/glb/01_fired_egg.glb" />
        <SceneRouter />
      </Suspense>
    </Canvas>
  )
}
export default Scene