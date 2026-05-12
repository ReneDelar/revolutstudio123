'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'TechFlow Mobile App',
      category: 'ui-ux',
      description: 'Полный редизайн мобильного приложения для управления проектами',
      image: '🎯',
      tags: ['iOS', 'Android', 'Design System']
    },
    {
      id: 2,
      title: 'Nova Brand Identity',
      category: 'branding',
      description: 'Создание целостной идентичности для стартапа в сфере AI',
      image: '✨',
      tags: ['Brand', 'Logo', 'Guidelines']
    },
    {
      id: 3,
      title: 'Digital Agency Website',
      category: 'web',
      description: 'Современный веб-сайт с интерактивными элементами и анимациями',
      image: '🌐',
      tags: ['Web', 'Frontend', 'Interactive']
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'ui-ux',
      description: 'Дизайн платформы для онлайн-торговли с фокусом на конверсию',
      image: '🛍️',
      tags: ['E-commerce', 'UX', 'Mobile']
    },
    {
      id: 5,
      title: 'Marketing Campaign',
      category: 'branding',
      description: 'Визуальные активы для масштабной маркетинговой кампании',
      image: '📱',
      tags: ['Social', 'Campaign', 'Branding']
    },
    {
      id: 6,
      title: 'Dashboard Design',
      category: 'web',
      description: 'Интуитивная система аналитики и визуализации данных',
      image: '📊',
      tags: ['Dashboard', 'Analytics', 'UI']
    },
  ]

  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'branding', label: 'Брендинг' },
    { id: 'ui-ux', label: 'UI/UX' },
    { id: 'web', label: 'Веб-дизайн' },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 px-6 bg-pitch-darkness">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-cork-dust mb-6 font-halyard">
            Наше портфолио
          </h2>
          <p className="text-xl text-aged-stone max-w-2xl mx-auto mb-12">
            Лучшие работы, которые принесли результаты
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-3xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-rust-accent text-pitch-darkness'
                    : 'bg-faded-bark text-cork-dust border border-rust-accent hover:bg-rust-accent hover:text-pitch-darkness'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="bg-faded-bark border border-deep-mocha rounded-xl overflow-hidden hover:border-rust-accent transition-all duration-300 h-full flex flex-col">
                {/* Image Area */}
                <div className="h-48 bg-gradient-to-br from-deep-mocha to-pitch-darkness flex items-center justify-center overflow-hidden relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-rust-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-cork-dust mb-2 font-halyard">
                    {project.title}
                  </h3>
                  <p className="text-sm text-aged-stone mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-pitch-darkness text-cork-dust px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Link */}
                  <div className="flex items-center gap-2 text-rust-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Смотреть проект
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-rust-accent text-pitch-darkness px-8 py-4 rounded-3xl font-semibold hover:opacity-90 transition-opacity duration-300"
          >
            Смотреть все проекты
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
