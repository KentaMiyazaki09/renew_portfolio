import React from 'react'
import Navigation from '../components/Navigation'

import { AnimatePresence } from 'motion/react'

import style from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={style.layout}>
        <Navigation />
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}