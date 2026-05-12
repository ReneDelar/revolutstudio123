import { CheckCircle, Award, Users, Zap } from 'lucide-react'

export const metadata = {
  title: 'О нас | Революет',
  description: 'Узнайте о студии дизайна Революет, нашей команде и подходе к работе'
}

export default function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Качество',
      description: 'Каждый проект выполняется с максимальной ответственностью и вниманием к деталям'
    },
    {
      icon: Users,
      title: 'Сотрудничество',
      description: 'Мы работаем вместе с клиентами, чтобы достичь наилучших результатов'
    },
    {
      icon: Zap,
      title: 'Инновация',
      description: 'Постоянно ищем новые решения и подходы в дизайне и креативности'
    },
    {
      icon: Award,
      title: 'Результаты',
      description: 'Наша главная цель - помочь вашему бизнесу расти и развиваться'
    }
  ]

  const team = [
    {
      name: 'Александр Волков',
      role: 'Основатель и креативный директор',
      description: 'Дизайнер с 8+ лет опыта, специалист по брендингу и айдентике'
    },
    {
      name: 'Мария Сергеева',
      role: 'Старший UI/UX дизайнер',
      description: 'Создатель интуитивных интерфейсов, фокусируется на пользовательском опыте'
    },
    {
      name: 'Иван Петров',
      role: 'Веб-дизайнер',
      description: 'Специалист по современному веб-дизайну и адаптивным решениям'
    },
    {
      name: 'Елена Морозова',
      role: 'Дизайнер по маркетингу',
      description: 'Создатель визуальных кампаний, которые привлекают внимание и продают'
    }
  ]

  return (
    <main className="bg-pitch-darkness">
      {/* Hero Section */}
      <section className="py-24 px-6 pt-32 bg-pitch-darkness border-b border-faded-bark">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-cork-dust font-halyard">
            О студии Революет
          </h1>
          <p className="text-xl text-aged-stone max-w-2xl mx-auto">
            Мы создаём дизайн, который трансформирует бренды и вдохновляет аудиторию
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-pitch-darkness">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-cork-dust font-halyard">
                Наша история
              </h2>
              <div className="space-y-4 text-aged-stone leading-relaxed">
                <p>
                  Революет была основана в 2016 году с простой идеей: создавать дизайн, который действительно работает. За годы работы мы помогли более чем 50 компаниям преобразить свой образ и достичь своих целей.
                </p>
                <p>
                  Наша команда состоит из талантливых дизайнеров, которые объединяют креативность с стратегическим подходом. Мы верим, что хороший дизайн - это не просто красота, это результат, который приносит реальную пользу для вашего бизнеса.
                </p>
                <p>
                  Каждый проект для нас уникален, и мы подходим к нему с полным вниманием и ответственностью. Ваш успех - это наш успех.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-faded-bark to-pitch-darkness rounded-xl overflow-hidden h-full flex items-center justify-center border border-aged-stone">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📖</div>
                  <p className="text-cork-dust text-lg font-literata">Восемь лет творчества</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-pitch-darkness border-t border-faded-bark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-cork-dust mb-6 font-halyard">
              Наши ценности
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-faded-bark border border-deep-mocha p-8 rounded-xl hover:border-rust-accent transition-colors duration-300"
                >
                  <div className="mb-6 inline-block p-4 bg-pitch-darkness rounded-lg">
                    <Icon className="w-6 h-6 text-rust-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-cork-dust mb-3 font-halyard">
                    {value.title}
                  </h3>
                  <p className="text-aged-stone">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-pitch-darkness border-t border-faded-bark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-cork-dust mb-6 font-halyard">
              Наша команда
            </h2>
            <p className="text-xl text-aged-stone max-w-2xl mx-auto">
              Талантливые дизайнеры и творческие люди, которые трудятся над вашими проектами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-faded-bark border border-deep-mocha rounded-xl p-6 hover:border-rust-accent transition-colors duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-rust-accent to-deep-mocha rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-lg font-bold text-cork-dust mb-1 font-halyard">
                  {member.name}
                </h3>
                <p className="text-sm text-rust-accent font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-aged-stone">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-deep-mocha border-t border-faded-bark">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-rust-accent mb-2">50+</div>
              <p className="text-cork-dust">Проектов завершено</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-rust-accent mb-2">30+</div>
              <p className="text-cork-dust">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-rust-accent mb-2">100%</div>
              <p className="text-cork-dust">Рекомендаций</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-rust-accent mb-2">8+</div>
              <p className="text-cork-dust">Лет опыта</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
