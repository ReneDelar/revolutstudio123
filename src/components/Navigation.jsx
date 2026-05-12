'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Портфолио', href: '/portfolio' },
    { label: 'Контакты', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-pitch-darkness/95 backdrop-blur-md z-50 border-b border-faded-bark">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cork-dust font-literata">
            Революет
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cork-dust text-sm hover:text-rust-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-rust-accent text-pitch-darkness px-6 py-3 rounded-3xl text-sm font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Обсудить проект
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cork-dust"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-cork-dust text-sm hover:text-rust-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-rust-accent text-pitch-darkness px-6 py-3 rounded-3xl text-sm font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Обсудить проект
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
