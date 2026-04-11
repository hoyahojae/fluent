import { useState, useEffect } from 'react'

interface FloatingXpProps {
  trigger: number // increment to trigger animation
  amount?: number
}

interface XpParticle {
  id: number
  x: number
}

let particleId = 0

export function FloatingXp({ trigger, amount = 10 }: FloatingXpProps) {
  const [particles, setParticles] = useState<XpParticle[]>([])

  useEffect(() => {
    if (trigger === 0) return
    const id = ++particleId
    const x = 40 + Math.random() * 20 // 40-60% from left
    setParticles((prev) => [...prev, { id, x }])

    const timer = setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id))
    }, 1000)

    return () => clearTimeout(timer)
  }, [trigger])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-up text-fluent-xp font-bold text-lg drop-shadow-lg"
          style={{ left: `${p.x}%`, top: '40%' }}
        >
          +{amount} XP
        </div>
      ))}
    </div>
  )
}
