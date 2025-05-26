'use client'

import { motion } from 'motion/react'

export default function WorksPage() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <h1>Works</h1>
        <ul>
          <li>hoge</li>
          <li>fuga</li>
          <li>piyo</li>
        </ul>
      </main>
    </motion.div>
  )
}