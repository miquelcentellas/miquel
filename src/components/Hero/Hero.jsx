import React, { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.scss'

export default function Hero() {
  const [interactionMode, setInteractionMode] = useState('auto') // 'auto' | 'mouse' | 'scroll'
  const [hasInteracted, setHasInteracted] = useState(false)
  const [mouseRatio, setMouseRatio] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled > 0) {
        setInteractionMode('scroll')
        setHasInteracted(true)
      } else if (interactionMode === 'scroll') {
        setInteractionMode('auto')
      }
      const threshold = 400
      const progress = Math.min(scrolled / threshold, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [interactionMode])

  const handleMouseMove = (e) => {
    if (window.scrollY > 0) return

    const wrapper = e.currentTarget.querySelector(`.${styles.svgWrapper}`)
    if (!wrapper) return

    const rect = wrapper.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const ratio = Math.max(0, Math.min(x / width, 1))

    setInteractionMode('mouse')
    setMouseRatio(ratio)
    setHasInteracted(true)
  }

  const handleMouseLeave = () => {
    if (window.scrollY > 0) return
    setInteractionMode('auto')
  }

  // Interpolate color: $color-accent-gold (#b38c4b = 179,140,75) → $color-text-nogalina (#2c1d11 = 44,29,17)
  const p = scrollProgress
  const bgColor = `rgb(${Math.round(179 + (44 - 179) * p)}, ${Math.round(140 + (29 - 140) * p)}, ${Math.round(75 + (17 - 75) * p)})`

  let svgStyle = {
    backgroundColor: bgColor
  }

  if (hasInteracted) {
    if (interactionMode === 'scroll') {
      svgStyle = {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        animation: 'none',
        transition: 'none',
        backgroundColor: bgColor
      }
    } else if (interactionMode === 'mouse') {
      // 15% offset matches the writeLogo animation diagonal (~60º), centered on cursor
      const cursorPct = mouseRatio * 100
      const topX = Math.min(cursorPct + 7.5, 100)
      const bottomX = Math.max(cursorPct - 7.5, 0)
      svgStyle = {
        clipPath: `polygon(0% 0%, ${topX}% 0%, ${bottomX}% 100%, 0% 100%)`,
        animation: 'none',
        transition: 'none',
        backgroundColor: bgColor
      }
    } else {
      // Auto mode: smoothly return to fully revealed
      svgStyle = {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        animation: 'none',
        transition: 'clip-path 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        backgroundColor: bgColor
      }
    }
  }

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.svgWrapper}>
        {/* Background watermark layer (15% opacity, always fully revealed) */}
        <div
          className={`${styles.svgImage} ${styles.svgImageBg}`}
          style={{ backgroundColor: bgColor }}
        />
        {/* Foreground revealed layer (fully opaque, clipped dynamically) */}
        <div
          className={styles.svgImage}
          style={svgStyle}
        />
      </div>
      <div className={styles.scrollIndicator} style={interactionMode === 'scroll' ? { opacity: Math.max(1 - scrollProgress * 2, 0) } : {}}>
        <span>Scroll to explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
