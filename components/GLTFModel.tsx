'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type ModalProps = {
  url: string
}

const Model: React.FC<ModalProps> = ({ url }) => {
  const [model, setModel] = useState<THREE.Group | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      url,
      (gltf) => {
        setModel(gltf.scene)
      },
      undefined,
      (error) => {
        console.error('Error loading glb:', error)
      }
    )
  }, [url])

  if (!model) return null

  return (
    <group position={[0, -1, 0]} rotation={[Math.PI / 5.0, -0.8, 0]}>
      <primitive object={model} />
    </group>
  )
}

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 3]} intensity={2.5} />
      <Suspense fallback={null}>
        <Model url="/glb/01_fired_egg.glb" />
      </Suspense>
    </Canvas>
  )
}
export default Scene