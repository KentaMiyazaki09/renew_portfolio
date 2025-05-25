'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from './Navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/skill', label: 'Skill' },
  ]

  return (
    <nav className={styles.nav}>
      {links.map(link => (
      <li
        key={link.href}
        className={`${
          pathname === link.href ? styles.active : ''
        }`}
      >
        <Link
          href={link.href}
        >
        {link.label}
        </Link>
      </li>
      ))}
    </nav>
  )
}