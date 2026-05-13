'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sectionRef, sectionVisible] = useScrollAnimation()

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
    <section ref={sectionRef} className="py-24 px-6 bg-pitch-darkness relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-rust-accent/5 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-cork-dust/5 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                sectionVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: sectionVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rust-accent/15 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur-xl -z-10"></div>
                <div className="bg-gradient-to-br from-faded-bark/90 via-deep-mocha/70 to-pitch-darkness border border-rust-accent/20 group-hover:border-rust-accent/50 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 backdrop-blur-sm">
                  {/* Image Area */}
                  <div className="h-56 bg-gradient-to-br from-rust-accent/10 via-deep-mocha to-pitch-darkness flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-rust-accent/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cork-dust/5 rounded-full blur-2xl"></div>
                    </div>
                    <div className="text-7xl group-hover:scale-125 transition-transform duration-300 relative z-10">
                      {project.image}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-pitch-darkness/40 to-transparent group-hover:from-rust-accent/20 group-hover:to-transparent transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-cork-dust mb-2 font-halyard group-hover:text-rust-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-aged-stone mb-4 flex-grow group-hover:text-light-cork transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-rust-accent/10 text-cork-dust px-3 py-1.5 rounded-full border border-rust-accent/20 group-hover:bg-rust-accent/20 group-hover:border-rust-accent/40 transition-all duration-300"
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
