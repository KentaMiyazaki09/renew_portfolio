'use client'

import React, { useEffect, useState } from 'react'
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
        gltf.scene.traverse(child => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true
          }
        })
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
    <group position={[0, 0.7, 0]} rotation={[Math.PI / 5.0, -0.8, 0]}>
      <primitive object={model} />
    </group>
  )
}

export default Model