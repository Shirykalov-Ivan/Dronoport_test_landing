const STEPS = [
  { title: 'Приезжайте', text: 'Знакомство с аппаратом вживую в экспириенс-центре.' },
  { title: 'Попробуйте', text: 'Демонстрация возможностей и разбор под ваши задачи.' },
  { title: 'Обучитесь', text: 'Лётная подготовка и обучение эксплуатации.' },
  { title: 'Получите', text: 'Поставка, монтаж, наладка и запуск.' },
]

export function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section__subtitle">Экспириенс-центр</p>
      <h2 className="section__title animate-fade">Увидеть, попробовать, полететь</h2>
      <p className="section__description" style={{ maxWidth: 480 }}>
        Демонстрационная площадка, где можно вживую познакомиться с eVTOL.
      </p>

      <div className="steps">
        {STEPS.map(({ title, text }) => (
          <div key={title} className="steps__item animate-scale">
            <div className="steps__item-number" />
            <h3 className="steps__item-title">{title}</h3>
            <p className="steps__item-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}