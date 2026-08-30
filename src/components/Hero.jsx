import { useEffect, useRef } from 'react'

export function Hero() {
  const skyRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const sky = skyRef.current
    if (!hero || !sky) return

    function onScroll() {
      const rect = hero.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
      const eased = 1 - Math.pow(1 - progress, 3)
      sky.style.opacity = 1 - eased * 0.75
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__sky" ref={skyRef} />

      <div className="hero__geo">
        <div className="hero__geo-orb" />
        <div className="hero__geo-orb" />
        <div className="hero__geo-orb" />
        <div className="hero__geo-line" />
        <div className="hero__geo-line" />
        <div className="hero__geo-line" />
        <div className="hero__geo-ring" />
        <div className="hero__geo-ring" />
      </div>

      <div className="hero__emblem animate-fade">
        <svg viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="34" stroke="var(--color-accent)" strokeWidth="1.5" opacity=".3" />
          <circle cx="36" cy="36" r="22" stroke="var(--color-accent)" strokeWidth="1.5" opacity=".5" />
          <path d="M28 44l8-18 8 18H28z" fill="var(--color-accent)" opacity=".6" />
          <circle cx="36" cy="44" r="5" fill="var(--color-accent-light)" />
          <line x1="36" y1="14" x2="36" y2="8" stroke="var(--color-accent)" strokeWidth="1.5" opacity=".7" />
          <line x1="36" y1="58" x2="36" y2="64" stroke="var(--color-accent)" strokeWidth="1.5" opacity=".7" />
        </svg>
      </div>

      <h1 className="hero__title animate-fade">
        <span className="hero__title--white">Персональный</span>
        <br />
        <span className="hero__title--accent">электрический полёт</span>
      </h1>

      <p className="hero__subtitle animate-fade">
        Официальный дистрибьютор персональных eVTOL и дронов ANTG и YIVTOL в России
      </p>

      <a href="#hero-flagman" className="button button--sky animate-fade">Смотреть флагман</a>
    </section>
  )
}