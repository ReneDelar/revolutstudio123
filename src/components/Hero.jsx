'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnimatedCounter from './AnimatedCounter'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen bg-pitch-darkness flex items-center justify-center pt-20 px-6 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rust-accent/10 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-cork-dust/5 rounded-full blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
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
                className="group relative bg-gradient-to-r from-rust-accent to-rust-accent/80 text-pitch-darkness px-8 py-4 rounded-3xl font-semibold text-center hover:shadow-lg hover:shadow-rust-accent/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Начать проект</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rust-accent to-rust-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/portfolio"
                className="group relative bg-gradient-to-r from-faded-bark to-deep-mocha text-cork-dust px-8 py-4 rounded-3xl font-semibold text-center border border-rust-accent/30 hover:border-rust-accent hover:shadow-lg hover:shadow-rust-accent/20 transition-all duration-300"
              >
                <span className="relative z-10">Смотреть портфолио</span>
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="flex gap-12 pt-12">
              <div className="group">
                <div className="text-4xl font-bold text-rust-accent transition-all duration-300 group-hover:text-cork-dust">
                  <AnimatedCounter end={50} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-aged-stone">Проектов завершено</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-rust-accent transition-all duration-300 group-hover:text-cork-dust">
                  <AnimatedCounter end={30} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-aged-stone">Счастливых клиентов</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-rust-accent transition-all duration-300 group-hover:text-cork-dust">
                  <AnimatedCounter end={8} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-aged-stone">Лет опыта</div>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className={`relative h-96 md:h-full min-h-[500px] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Floating background elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-rust-accent/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-cork-dust/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>

            {/* Main card container */}
            <div className="absolute inset-0 bg-gradient-rainbow rounded-2xl opacity-25 blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-rust-accent/20 via-cork-dust/5 to-pitch-darkness rounded-2xl opacity-40"></div>

            <div className="relative bg-gradient-to-br from-faded-bark/80 via-deep-mocha/60 to-pitch-darkness rounded-2xl overflow-hidden h-full flex items-center justify-center border border-rust-accent/30 shadow-2xl shadow-rust-accent/20 hover:shadow-rust-accent/40 transition-all duration-300">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 opacity-50">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-rust-accent/10 rounded-full blur-3xl animate-glow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cork-dust/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Center content with animations */}
              <div className="relative text-center space-y-6 z-10 px-8 animate-slideInUp">
                <div className="inline-block animate-float">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-rust-accent/20 rounded-full blur-2xl animate-glow"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-rust-accent/30 to-cork-dust/10 rounded-full border-2 border-rust-accent/40 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
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
