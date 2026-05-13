'use client'

export default function FloatingElement({ className = '', children, delay = 0 }) {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      {children}
    </div>
  )
}
