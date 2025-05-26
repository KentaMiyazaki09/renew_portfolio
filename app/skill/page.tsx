'use client'

import { motion } from 'motion/react'

export default function SkillPage() {
  return (
     <motion.div
      key="home"
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <h1>Skill</h1>
        <ul>
          <li>HTML, CSS</li>
          <li>Wordpress</li>
          <li>JS Next.js Three.js Blender</li>
          <li>Tools</li>
        </ul>
      </main>
    </motion.div>
  )
}