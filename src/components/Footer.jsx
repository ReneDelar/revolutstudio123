'use client'

import Link from 'next/link'
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-pitch-darkness border-t border-faded-bark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cork-dust font-literata">
              Революет
            </h3>
            <p className="text-aged-stone text-sm leading-relaxed">
              Студия цифрового дизайна, создающая инновационные решения для современного бизнеса
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cork-dust font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-aged-stone text-sm">
              <li><Link href="/" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">Главная</Link></li>
              <li><Link href="/about" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">О нас</Link></li>
              <li><Link href="/portfolio" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">Портфолио</Link></li>
              <li><Link href="/contact" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">Контакты</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cork-dust font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-aged-stone text-sm">
              <li><a href="#" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">Брендинг</a></li>
              <li><a href="#" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">UI/UX Дизайн</a></li>
              <li><a href="#" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">Веб-дизайн</a></li>
              <li><a href="#" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">Маркетинг</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cork-dust font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-aged-stone text-sm">
              <li>
                <a href="mailto:hello@revolyut.ru" className="flex items-center gap-2 hover:text-rust-accent hover:translate-x-1 transition-all duration-300">
                  <Mail size={16} />
                  hello@revolyut.ru
                </a>
              </li>
              <li>
                <a href="tel:+79991234567" className="hover:text-rust-accent hover:translate-x-1 transition-all duration-300 inline-block">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="text-xs">
                Москва, Россия
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-faded-bark py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-aged-stone text-sm">
              © {currentYear} Революет. Все права защищены.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-aged-stone hover:text-rust-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-aged-stone hover:text-rust-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-aged-stone hover:text-rust-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
