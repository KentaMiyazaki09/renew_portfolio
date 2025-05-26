'use client'

import { motion } from 'motion/react'
import { usePathname } from "next/navigation"

import styles from './Logo.module.scss'

export default function Logo() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>
        <p>K.MIYAZAKI</p>
      </div>
    </motion.div>
  )
}