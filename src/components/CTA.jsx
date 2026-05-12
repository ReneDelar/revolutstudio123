import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pitch-darkness via-deep-mocha to-pitch-darkness relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-rust-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cork-dust/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-cork-dust font-halyard leading-tight">
          Готовы к трансформации вашего бренда?
        </h2>

        <p className="text-xl text-aged-stone max-w-2xl mx-auto">
          Давайте обсудим ваш проект и создадим что-то потрясающее вместе
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="/contact"
            className="bg-rust-accent text-pitch-darkness px-8 py-4 rounded-3xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
          >
            Начать разговор
            <ArrowRight size={20} />
          </Link>
          <Link
            href="mailto:hello@revolyut.ru"
            className="bg-faded-bark text-cork-dust px-8 py-4 rounded-3xl font-semibold border border-rust-accent hover:bg-rust-accent hover:text-pitch-darkness transition-all duration-300"
          >
            hello@revolyut.ru
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="pt-12 border-t border-faded-bark mt-12">
          <p className="text-sm text-aged-stone mb-6">Доверяют нам</p>
          <div className="flex flex-wrap justify-center gap-8 text-aged-stone text-sm">
            <div>✓ Быстрое выполнение</div>
            <div>✓ Гарантированное качество</div>
            <div>✓ Поддержка 24/7</div>
            <div>✓ Экспертность</div>
          </div>
        </div>
      </div>
    </section>
  )
}
