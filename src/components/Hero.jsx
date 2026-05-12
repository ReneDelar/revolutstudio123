import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen bg-pitch-darkness flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-6xl xl:text-7xl font-bold text-cork-dust font-halyard leading-tight">
                Дизайн, который говорит громче слов
              </h1>
              <p className="text-xl text-aged-stone max-w-md leading-relaxed">
                Мы создаём инновационные визуальные решения, которые трансформируют бренды и вдохновляют аудиторию
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-rust-accent text-pitch-darkness px-8 py-4 rounded-3xl font-semibold text-center hover:opacity-90 transition-opacity duration-300"
              >
                Начать проект
              </Link>
              <Link
                href="/portfolio"
                className="bg-faded-bark text-cork-dust px-8 py-4 rounded-3xl font-semibold text-center border border-rust-accent hover:bg-rust-accent hover:text-pitch-darkness transition-all duration-300"
              >
                Смотреть портфолио
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-12">
              <div>
                <div className="text-4xl font-bold text-rust-accent">50+</div>
                <div className="text-sm text-aged-stone">Проектов завершено</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-rust-accent">30+</div>
                <div className="text-sm text-aged-stone">Счастливых клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-rust-accent">8+</div>
                <div className="text-sm text-aged-stone">Лет опыта</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-rainbow rounded-xl opacity-20 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-faded-bark to-pitch-darkness rounded-xl overflow-hidden h-full flex items-center justify-center border border-aged-stone">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎨</div>
                <p className="text-cork-dust text-lg font-literata">Творчество в каждом пикселе</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
