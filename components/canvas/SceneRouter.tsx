'use client'

import TextScene from '../TextScene'

import { usePathname } from "next/navigation"

export default function SceneRouter() {
  const pathname = usePathname()

  const textMap: Record<string, string> = {
    '/': 'K.MIYAZAKI',
    '/works': 'WORKS',
    '/skill': 'SKILL',
  }

  const text = textMap[pathname] ?? ''

  return <TextScene text={text} />
}