'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', lable: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/skill', label: 'Skill' },
  ]

  return (
    <nav>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href ? 'font-bold underline' : ''
          } hover: opacity-70`}
        >
        {link.label}
        </Link>
      ))}
    </nav>
  )
}