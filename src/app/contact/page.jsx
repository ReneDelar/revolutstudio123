'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('mailto:hello@revolyut.ru', {
        method: 'POST'
      })
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        project: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-pitch-darkness">
      {/* Hero Section */}
      <section className="py-24 px-6 pt-32 bg-pitch-darkness border-b border-faded-bark">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-cork-dust font-halyard">
            Давайте поговорим
          </h1>
          <p className="text-xl text-aged-stone max-w-2xl mx-auto">
            Есть проект? Хотите узнать больше? Свяжитесь с нами
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-pitch-darkness">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-cork-dust mb-6 font-halyard">
                  Контакты
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-rust-accent mt-1" />
                    </div>
                    <div>
                      <p className="text-sm text-aged-stone uppercase tracking-wide mb-1">Email</p>
                      <a href="mailto:hello@revolyut.ru" className="text-cork-dust font-semibold hover:text-rust-accent transition-colors">
                        hello@revolyut.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-rust-accent mt-1" />
                    </div>
                    <div>
                      <p className="text-sm text-aged-stone uppercase tracking-wide mb-1">Телефон</p>
                      <a href="tel:+79991234567" className="text-cork-dust font-semibold hover:text-rust-accent transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-rust-accent mt-1" />
                    </div>
                    <div>
                      <p className="text-sm text-aged-stone uppercase tracking-wide mb-1">Адрес</p>
                      <p className="text-cork-dust font-semibold">
                        Москва, Россия
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-faded-bark border border-deep-mocha p-6 rounded-xl">
                <h4 className="text-cork-dust font-semibold mb-3">Режим работы</h4>
                <ul className="text-aged-stone text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span className="font-semibold text-cork-dust">9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Сб-Вс:</span>
                    <span className="font-semibold text-cork-dust">По запросу</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cork-dust font-semibold mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-faded-bark border border-deep-mocha rounded-lg px-4 py-3 text-cork-dust placeholder-aged-stone focus:outline-none focus:border-rust-accent transition-colors"
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div>
                    <label className="block text-cork-dust font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-faded-bark border border-deep-mocha rounded-lg px-4 py-3 text-cork-dust placeholder-aged-stone focus:outline-none focus:border-rust-accent transition-colors"
                      placeholder="ivan@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cork-dust font-semibold mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-faded-bark border border-deep-mocha rounded-lg px-4 py-3 text-cork-dust placeholder-aged-stone focus:outline-none focus:border-rust-accent transition-colors"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-cork-dust font-semibold mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-faded-bark border border-deep-mocha rounded-lg px-4 py-3 text-cork-dust placeholder-aged-stone focus:outline-none focus:border-rust-accent transition-colors"
                      placeholder="Название компании"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cork-dust font-semibold mb-2">
                    Тип проекта
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full bg-faded-bark border border-deep-mocha rounded-lg px-4 py-3 text-cork-dust focus:outline-none focus:border-rust-accent transition-colors"
                  >
                    <option value="">Выберите тип проекта</option>
                    <option value="branding">Брендинг</option>
                    <option value="ui-ux">UI/UX Дизайн</option>
                    <option value="web">Веб-дизайн</option>
                    <option value="marketing">Цифровой маркетинг</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cork-dust font-semibold mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-faded-bark border border-deep-mocha rounded-lg px-4 py-3 text-cork-dust placeholder-aged-stone focus:outline-none focus:border-rust-accent transition-colors resize-none"
                    placeholder="Расскажите нам о вашем проекте..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-rust-accent text-pitch-darkness px-8 py-4 rounded-3xl font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
                >
                  {loading ? 'Отправка...' : 'Отправить'}
                  <Send size={20} />
                </button>

                {submitted && (
                  <div className="bg-green-900 bg-opacity-20 border border-green-700 text-green-400 px-4 py-3 rounded-lg">
                    Спасибо! Мы получили вашу заявку и свяжемся с вами в скором времени.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-deep-mocha border-t border-faded-bark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-cork-dust mb-12 text-center font-halyard">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Сколько времени занимает проект?',
                a: 'Сроки зависят от сложности проекта. Обычно брендинг - 2-4 недели, веб-дизайн - 3-8 недель. Обсудим детали на встрече.'
              },
              {
                q: 'Какова стоимость услуг?',
                a: 'Цены варьируются в зависимости от объёма и сложности работ. Мы предоставляем индивидуальные предложения после обсуждения ваших потребностей.'
              },
              {
                q: 'Как проходит процесс работы?',
                a: 'Процесс включает: брифинг, исследование, концепт, рефайн, финальная версия. Вы участвуете на каждом этапе.'
              },
              {
                q: 'Какие сроки доработок?',
                a: 'Мы включаем 2-3 раунда правок в стоимость проекта. Дополнительные изменения обсуждаются отдельно.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-faded-bark border border-deep-mocha p-6 rounded-xl">
                <h3 className="text-lg font-bold text-cork-dust mb-3">
                  {item.q}
                </h3>
                <p className="text-cork-dust opacity-90">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
