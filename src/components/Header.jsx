import { useMemo, useRef, useState } from 'react'
import { useScrollHeader } from '../hooks/useScrollHeader'
import { useActiveNav } from '../hooks/useActiveNav'

const NAV_ITEMS = [
  { href: '#hero', label: 'Главная' },
  { href: '#hero-flagman', label: 'Аппараты' },
  { href: '#products', label: 'Магазин' },
  { href: '#services', label: 'Услуги' },
  { href: '#experience', label: 'Экспириенс' },
  { href: '#brands', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
]

export function Header() {
  const scrolled = useScrollHeader()
  const activeId = useActiveNav()
  const [menuOpen, setMenuOpen] = useState(false)
  const lockRef = useRef(0)

  const isIOS = useMemo(() =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  [])

  function toggleMenu(open) {
    setMenuOpen(open)
    if (isIOS) {
      const html = document.documentElement
      if (open) {
        lockRef.current = window.scrollY
        html.style.position = 'fixed'
        html.style.width = '100%'
        html.style.top = `-${lockRef.current}px`
      } else {
        html.style.position = ''
        html.style.width = ''
        html.style.top = ''
        window.scrollTo(0, lockRef.current)
      }
    }
    document.body.style.overflow = open ? 'hidden' : ''
  }

  function closeMenu() {
    toggleMenu(false)
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__logo">
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="12" stroke="var(--color-accent)" strokeWidth="1.8" />
          <path d="M8 17l6-10 6 10H8z" fill="var(--color-accent)" opacity=".5" />
          <circle cx="14" cy="17" r="2" fill="var(--color-accent-light)" />
        </svg>
        ДРОНО<span>ПОРТ</span>
      </div>

      <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
        {NAV_ITEMS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={
              `header__nav-link${
                activeId === href.slice(1) ? ' header__nav-link--active' : ''
              }`
            }
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
        onClick={() => toggleMenu(!menuOpen)}
        aria-label="Меню"
      >
        <span className="header__burger-line" />
        <span className="header__burger-line" />
        <span className="header__burger-line" />
      </button>
    </header>
  )
}