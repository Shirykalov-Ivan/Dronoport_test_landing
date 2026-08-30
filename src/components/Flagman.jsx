export function FlagmanBanner() {
  return (
    <div className="flagman" id="hero-flagman" style={{ scrollMarginTop: 80 }}>
      <div className="flagman__bg" />
      <div className="flagman__grid-overlay" />
      <div className="flagman__beam">
        <div className="flagman__beam-line" />
      </div>

      <div className="flagman__content">
        <div className="animate-scale">
          <div className="flagman__badge">Новинка 2026</div>
          <div className="flagman__label">Флагман</div>
          <h2 className="flagman__title">ANTG-X6</h2>
          <p className="flagman__text">
            Одноместный сверхлёгкий eVTOL — электрический аппарат вертикального взлёта и посадки.
          </p>
          <div className="flagman__actions">
            <a href="#flagman" className="button button--sky">Подробнее</a>
            <a href="#contacts" className="button button--outline">Записаться на демо</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FlagmanSection() {
  return (
    <section className="section" id="flagman">
      <div className="details">
        <div className="animate-slide-left">
          <div className="details__image-placeholder" style={{
            background: 'var(--color-bg-card)',
            borderRadius: 16,
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 300,
            fontSize: 48,
            color: 'var(--color-accent)',
            opacity: 0.7,
          }}>
            ⟐
          </div>
        </div>

        <div className="animate-slide-right">
          <h3 style={{ fontSize: 22, marginBottom: 4 }}>Одноместный сверхлёгкий eVTOL</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 14, fontSize: 15 }}>
            Электрический аппарат вертикального взлёта и посадки для персонального полёта.
          </p>

          <div className="details__specs">
            <div className="details__spec">
              <div className="details__spec-label">Мест</div>
              <div className="details__spec-value">1</div>
            </div>
            <div className="details__spec">
              <div className="details__spec-label">Тип</div>
              <div className="details__spec-value">eVTOL</div>
            </div>
            <div className="details__spec">
              <div className="details__spec-label">Взлёт</div>
              <div className="details__spec-value">Вертикальный</div>
            </div>
            <div className="details__spec">
              <div className="details__spec-label">Силовая установка</div>
              <div className="details__spec-value">Электрическая</div>
            </div>
          </div>
        </div>
      </div>

      <div className="details__features">
        <div className="details__feature animate-fade">
          <div className="details__feature-icon">⇧</div>
          <h3 className="details__feature-title">Вертикальный взлёт</h3>
          <p className="details__feature-text">Взлетает и садится вертикально — без взлётной полосы.</p>
        </div>
        <div className="details__feature animate-fade">
          <div className="details__feature-icon">⚡</div>
          <h3 className="details__feature-title">Электрическая тяга</h3>
          <p className="details__feature-text">Ноль выбросов, тихий полёт и низкая стоимость эксплуатации.</p>
        </div>
        <div className="details__feature animate-fade">
          <div className="details__feature-icon">◉</div>
          <h3 className="details__feature-title">Просто освоить</h3>
          <p className="details__feature-text">Лётная подготовка и полная поддержка на базе дронопорта.</p>
        </div>
      </div>
    </section>
  )
}