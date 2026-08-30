const NAV_LINKS = [
  { href: '#flagman', label: 'Аппараты' },
  { href: '#products', label: 'Магазин' },
  { href: '#services', label: 'Услуги' },
  { href: '#experience', label: 'Экспириенс-центр' },
  { href: '#brands', label: 'О компании' },
]

const SOCIALS = [
  { href: '#', label: 'Telegram' },
  { href: '#', label: 'WhatsApp' },
  { href: '#', label: 'VK' },
  { href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="header__logo" style={{ marginBottom: 10 }}>
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
              <circle cx="12" cy="12" r="10" stroke="var(--color-accent)" strokeWidth="1.5" />
              <path d="M7 15l5-8 5 8H7z" fill="var(--color-accent)" opacity=".5" />
              <circle cx="12" cy="15" r="1.5" fill="var(--color-accent-light)" />
            </svg>
            ДРОНО<span>ПОРТ</span>
          </div>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
            Официальный дистрибьютор персональных eVTOL и дронов ANTG и YIVTOL в России.
          </p>
        </div>

        <div>
          <h4 className="footer__column-title">Навигация</h4>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="footer__link">{label}</a>
          ))}
        </div>

        <div>
          <h4 className="footer__column-title">Соцсети</h4>
          {SOCIALS.map(({ href, label }) => (
            <a key={label} href={href} className="footer__link">{label}</a>
          ))}
        </div>

        <div>
          <h4 className="footer__column-title">Контакты</h4>
          <a href="tel:+70000000000" className="footer__link">+7 (000) 000-00-00</a>
          <a href="mailto:info@dronoport.ru" className="footer__link">info@dronoport.ru</a>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Россия, г. _______</p>
        </div>
      </div>

      <div className="footer__bottom">
        DRONOPORT · Персональный электрический полёт<br />
        © 2026 ДРОНОПОРТ
      </div>
    </footer>
  )
}