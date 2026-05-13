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
    <nav className="fixed top-0 w-full bg-gradient-to-b from-pitch-darkness via-pitch-darkness/98 to-pitch-darkness/90 backdrop-blur-xl z-50 border-b border-rust-accent/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cork-dust font-literata hover:text-rust-accent transition-colors duration-300">
            Революет
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cork-dust text-sm hover:text-rust-accent transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rust-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-rust-accent to-rust-accent/80 text-pitch-darkness px-6 py-3 rounded-3xl text-sm font-semibold hover:shadow-lg hover:shadow-rust-accent/30 hover:from-rust-accent hover:to-rust-accent transition-all duration-300"
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
