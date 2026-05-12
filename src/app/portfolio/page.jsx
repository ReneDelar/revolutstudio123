'use client'

import { useState } from 'react'
import { ChevronRight, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Портфолио | Революет',
  description: 'Лучшие работы студии дизайна Революет - брендинг, UI/UX, веб-дизайн и маркетинг'
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'TechFlow Mobile App',
      category: 'ui-ux',
      description: 'Полный редизайн мобильного приложения для управления проектами',
      fullDescription: 'Переработали интуитивный интерфейс приложения для управления проектами, улучшили пользовательский опыт и ускорили выполнение задач. Результат: увеличение активных пользователей на 45%.',
      image: '🎯',
      tags: ['iOS', 'Android', 'Design System'],
      results: ['45% рост активных пользователей', '+200% увеличение рецензий', '4.8 звёзд в AppStore']
    },
    {
      id: 2,
      title: 'Nova Brand Identity',
      category: 'branding',
      description: 'Создание целостной идентичности для стартапа в сфере AI',
      fullDescription: 'Разработали полную систему идентичности для стартапа в сфере искусственного интеллекта, включая логотип, палитру цветов, типографию и гайдлайны.',
      image: '✨',
      tags: ['Brand', 'Logo', 'Guidelines'],
      results: ['Увеличение узнаваемости на 60%', 'Привлечение инвесторов', 'Успешный запуск бренда']
    },
    {
      id: 3,
      title: 'Digital Agency Website',
      category: 'web',
      description: 'Современный веб-сайт с интерактивными элементами и анимациями',
      fullDescription: 'Создали современный веб-сайт цифрового агентства с интерактивными элементами, плавными анимациями и оптимизацией для поисковых систем.',
      image: '🌐',
      tags: ['Web', 'Frontend', 'Interactive'],
      results: ['95/100 PageSpeed Insights', '+30% конверсия', '2 место в лучших сайтах года']
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'ui-ux',
      description: 'Дизайн платформы для онлайн-торговли с фокусом на конверсию',
      fullDescription: 'Спроектировали интуитивный интерфейс платформы для онлайн-торговли с фокусом на увеличение конверсии и удобство покупателей.',
      image: '🛍️',
      tags: ['E-commerce', 'UX', 'Mobile'],
      results: ['35% увеличение конверсии', 'Снижение карзин на 25%', '4.9 рейтинг UX']
    },
    {
      id: 5,
      title: 'Marketing Campaign',
      category: 'branding',
      description: 'Визуальные активы для масштабной маркетинговой кампании',
      fullDescription: 'Создали всю систему визуальных активов для масштабной маркетинговой кампании, включая социальные медиа, баннеры и видеоконтент.',
      image: '📱',
      tags: ['Social', 'Campaign', 'Branding'],
      results: ['5M+ impressions', '12% CTR', '3x ROI']
    },
    {
      id: 6,
      title: 'Dashboard Design',
      category: 'web',
      description: 'Интуитивная система аналитики и визуализации данных',
      fullDescription: 'Разработали сложную систему панели аналитики с красивой визуализацией данных и интуитивным интерфейсом для работы с большими объёмами информации.',
      image: '📊',
      tags: ['Dashboard', 'Analytics', 'UI'],
      results: ['Сокращение времени анализа на 50%', 'Улучшение читаемости на 80%', 'Стандартизованный UI']
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
    <main className="bg-pitch-darkness">
      {/* Hero Section */}
      <section className="py-24 px-6 pt-32 bg-pitch-darkness border-b border-faded-bark">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-cork-dust font-halyard">
            Портфолио Революет
          </h1>
          <p className="text-xl text-aged-stone max-w-2xl mx-auto">
            Лучшие работы, которые принесли результаты нашим клиентам
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-pitch-darkness">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group bg-faded-bark border border-deep-mocha rounded-xl overflow-hidden hover:border-rust-accent transition-all duration-300 flex flex-col"
              >
                {/* Image Area */}
                <div className="h-64 bg-gradient-to-br from-deep-mocha to-pitch-darkness flex items-center justify-center overflow-hidden relative">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-rust-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-cork-dust mb-2 font-halyard">
                    {project.title}
                  </h3>
                  <p className="text-sm text-aged-stone mb-4">
                    {project.description}
                  </p>

                  <p className="text-aged-stone leading-relaxed mb-6 flex-grow">
                    {project.fullDescription}
                  </p>

                  {/* Results */}
                  <div className="mb-6 space-y-2">
                    <p className="text-xs uppercase tracking-wide text-rust-accent font-semibold">
                      Результаты
                    </p>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-cork-dust flex items-start gap-2">
                          <ChevronRight size={14} className="flex-shrink-0 mt-1 text-rust-accent" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-pitch-darkness text-cork-dust px-3 py-1 rounded-full border border-deep-mocha"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-deep-mocha border-t border-faded-bark">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-cork-dust font-halyard">
            Интересует вас проект?
          </h2>
          <p className="text-lg text-cork-dust opacity-90">
            Давайте обсудим, как мы можем помочь вашему бизнесу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="/contact"
              className="bg-rust-accent text-pitch-darkness px-8 py-4 rounded-3xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
            >
              Начать разговор
              <ChevronRight size={20} />
            </a>
            <a
              href="mailto:hello@revolyut.ru"
              className="bg-pitch-darkness text-cork-dust px-8 py-4 rounded-3xl font-semibold border border-rust-accent hover:bg-rust-accent hover:text-pitch-darkness transition-all duration-300 flex items-center justify-center gap-2"
            >
              Написать нам
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
