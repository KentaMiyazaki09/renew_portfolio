'use client'

import { motion } from 'motion/react'
import { usePathname } from "next/navigation"

import styles from './Logo.module.scss'

export default function Logo() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <div className={styles.logo}>
      <motion.div
        key="home"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.5,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
        }}
      >
        <p>K.MIYAZAKI</p>
      </motion.div>
    </div>
  )
}