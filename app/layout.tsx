import React from 'react'
import Navigation from '../components/Navigation'

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
        {children}
      </body>
    </html>
  )
}