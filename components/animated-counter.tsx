"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  value: string
  label: string
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          // Extract the numeric value and suffix
          const numericMatch = value.match(/(\d+)/)
          const numeric = numericMatch ? Number.parseInt(numericMatch[1], 10) : 0
          const prefix = value.match(/^\$/) ? "$" : ""
          const suffix = value.replace(/^\$?\d+/, "")

          // Animate the counter
          const duration = 2000 // 2 seconds
          const steps = 60
          const stepDuration = duration / steps
          let currentStep = 0

          const interval = setInterval(() => {
            currentStep++
            const progress = currentStep / steps
            const easeOutQuad = 1 - (1 - progress) * (1 - progress)
            const currentValue = Math.floor(numeric * easeOutQuad)

            setDisplayValue(`${prefix}${currentValue}${suffix}`)

            if (currentStep >= steps) {
              setDisplayValue(value)
              clearInterval(interval)
            }
          }, stepDuration)

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{displayValue}</div>
      <div className="text-sm sm:text-base text-muted-foreground">{label}</div>
    </div>
  )
}
