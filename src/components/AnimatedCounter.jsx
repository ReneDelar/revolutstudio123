'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AnimatedCounter({ end = 100, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollAnimation()
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isVisible || hasStarted.current) return

    hasStarted.current = true
    const steps = 60
    const stepValue = end / steps
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setCount(Math.floor(stepValue * currentStep))

      if (currentStep >= steps) {
        setCount(end)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref}>
      <span>{prefix}{count.toLocaleString()}{suffix}</span>
    </div>
  )
}
