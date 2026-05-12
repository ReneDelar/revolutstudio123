import { Palette, Lightbulb, Zap, Globe } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Брендинг',
      description: 'Создание уникальной идентичности, которая отличает вас от конкурентов и остаётся в памяти'
    },
    {
      icon: Lightbulb,
      title: 'UI/UX Дизайн',
      description: 'Интуитивные и красивые интерфейсы, которые улучшают пользовательский опыт'
    },
    {
      icon: Globe,
      title: 'Веб-дизайн',
      description: 'Современные веб-сайты, которые работают на результат и конвертируют посетителей в клиентов'
    },
    {
      icon: Zap,
      title: 'Цифровой маркетинг',
      description: 'Визуальные кампании и контент, которые привлекают и удерживают внимание вашей аудитории'
    },
  ]

  return (
    <section className="py-24 px-6 bg-pitch-darkness">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-cork-dust mb-6 font-halyard">
            Наши услуги
          </h2>
          <p className="text-xl text-aged-stone max-w-2xl mx-auto">
            Полный спектр дизайн-решений для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rust-accent/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-faded-bark/90 to-deep-mocha/60 border border-rust-accent/20 group-hover:border-rust-accent/50 p-8 rounded-2xl transition-all duration-300 h-full backdrop-blur-sm">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-rust-accent/20 to-rust-accent/5 rounded-xl group-hover:from-rust-accent/40 group-hover:to-rust-accent/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-rust-accent group-hover:text-cork-dust transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-cork-dust mb-3 font-halyard">
                    {service.title}
                  </h3>
                  <p className="text-aged-stone leading-relaxed group-hover:text-light-cork transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
