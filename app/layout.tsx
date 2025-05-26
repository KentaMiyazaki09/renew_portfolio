import React from 'react'
import Navigation from '../components/Navigation'

import { AnimatePresence } from 'motion/react'

import './global.scss'
import Logo from '../components/Logo'

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
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}