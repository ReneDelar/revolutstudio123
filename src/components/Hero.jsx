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
                className="bg-gradient-to-r from-rust-accent to-rust-accent/80 text-pitch-darkness px-8 py-4 rounded-3xl font-semibold text-center hover:shadow-lg hover:shadow-rust-accent/30 hover:from-rust-accent hover:to-rust-accent transition-all duration-300"
              >
                Начать проект
              </Link>
              <Link
                href="/portfolio"
                className="bg-gradient-to-r from-faded-bark to-deep-mocha text-cork-dust px-8 py-4 rounded-3xl font-semibold text-center border border-rust-accent/30 hover:border-rust-accent hover:bg-rust-accent/10 hover:text-rust-accent transition-all duration-300"
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
          <div className="relative h-96 md:h-full min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-rainbow rounded-2xl opacity-30 blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-rust-accent/20 via-cork-dust/5 to-pitch-darkness rounded-2xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-faded-bark/80 via-deep-mocha/60 to-pitch-darkness rounded-2xl overflow-hidden h-full flex items-center justify-center border border-rust-accent/30">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 opacity-50">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-rust-accent/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cork-dust/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              <div className="relative text-center space-y-6 z-10 px-8">
                <div className="inline-block">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-rust-accent/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-rust-accent/30 to-cork-dust/10 rounded-full border-2 border-rust-accent/40 flex items-center justify-center">
                      <span className="text-5xl">✨</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-cork-dust text-xl font-literata font-bold">Творчество в каждом пикселе</p>
                  <p className="text-aged-stone text-sm">Инновационные решения для вашего бренда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
