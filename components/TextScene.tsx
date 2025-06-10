'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { useLoader } from '@react-three/fiber'

export  default function TextScene({ text }: { text: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const font = useLoader(FontLoader, '/font/Cormorant Garamond_Regular.json') // jsonファイルのみ

  const geometry = new TextGeometry(text, {
    font,
    size: 0.3,
    depth: 0.1,
  })

  return (
    <mesh castShadow ref={meshRef} geometry={geometry} position={[1, 0.1, 0]}>
      <meshStandardMaterial color="White" />
    </mesh>
  )
}