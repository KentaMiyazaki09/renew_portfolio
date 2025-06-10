import React from 'react'
import Navigation from '../components/Navigation'

import { AnimatePresence } from 'motion/react'

import './global.scss'
import Logo from '../components/Logo'

import CanvasWrapper from '../components/CanvasWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Logo />
        <Navigation />
        <CanvasWrapper />
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}