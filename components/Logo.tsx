'use client'

import { usePathname } from "next/navigation"

export default function Logo() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <div>
      <p>K.MIYAZAKI</p>
    </div>
  )
}