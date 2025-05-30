'use client'

import { motion } from 'motion/react'

import styles from './home.module.scss'

export default function Page() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      transition={{ duration: 0.5 }}
      className={styles.home}
    >
      <main>
        <h1>K.MIYAZAKI</h1>
      </main>
    </motion.div>
  )
}