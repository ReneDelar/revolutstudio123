import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Революет — Студия цифрового дизайна',
  description: 'Создаем инновационные дизайн-решения для современного бизнеса',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-pitch-darkness text-cork-dust">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
