import React, { useEffect, useRef } from 'react'
import styles from './InkTrail.module.scss'

const COLORS = [
  '#2c1d11', // Nogalina
  '#5e4a3c', // Sepia
  '#2c1d11', // Nogalina (predominante)
  '#9b3d27', // Cinabrio
  '#b38c4b'  // Oro antiguo
]

export default function InkTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Respetar preferencia de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let lastMousePos = { x: 0, y: 0 }
    let lastSpawnTime = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const spawnParticle = (x, y, vx = 0, vy = 0, sizeMult = 1) => {
      const radius = (Math.random() * 2.5 + 1.2) * sizeMult
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const maxLife = Math.random() * 25 + 20 // ~450ms a 750ms a 60fps

      particles.push({
        x: x + (Math.random() - 0.5) * 4,
        y: y + (Math.random() - 0.5) * 4,
        vx: vx * 0.15 + (Math.random() - 0.5) * 0.8,
        vy: vy * 0.15 + (Math.random() - 0.5) * 0.8 + 0.15, // leve gravedad
        radius,
        color,
        life: 0,
        maxLife,
        scale: 1
      })
    }

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e
      const now = performance.now()

      const dx = x - lastMousePos.x
      const dy = y - lastMousePos.y
      const dist = Math.hypot(dx, dy)

      // Spawnear partículas si el movimiento es suficiente (densidad x3)
      if (dist > 1.5 && now - lastSpawnTime > 5) {
        // 3 partículas principales por pulso
        for (let i = 0; i < 3; i++) {
          spawnParticle(x, y, dx, dy)
        }

        // 2 a 3 micro gotas satélite por movimiento
        const satelliteCount = Math.floor(Math.random() * 2) + 2
        for (let i = 0; i < satelliteCount; i++) {
          spawnParticle(
            x + (Math.random() - 0.5) * 16,
            y + (Math.random() - 0.5) * 16,
            dx * 0.3,
            dy * 0.3,
            0.6
          )
        }

        lastMousePos = { x, y }
        lastSpawnTime = now
      }
    }

    const handleMouseDown = (e) => {
      // Salpicadura intensa al hacer clic (24 partículas)
      for (let i = 0; i < 24; i++) {
        const angle = (Math.PI * 2 * i) / 24 + Math.random() * 0.5
        const speed = Math.random() * 3.5 + 1
        spawnParticle(
          e.clientX,
          e.clientY,
          Math.cos(angle) * speed * 4,
          Math.sin(angle) * speed * 4,
          1.2
        )
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.94 // fricción
        p.vy *= 0.94

        const progress = p.life / p.maxLife
        const alpha = Math.max(0, 1 - progress)
        const currentRadius = Math.max(0.2, p.radius * (1 - progress * 0.4))

        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2)
        ctx.fill()

        // Dibujar pequeñas irregularidades en la gota
        if (p.radius > 2.5 && alpha > 0.4) {
          ctx.beginPath()
          ctx.arc(p.x + currentRadius * 0.4, p.y - currentRadius * 0.3, currentRadius * 0.3, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.inkCanvas} />
}
