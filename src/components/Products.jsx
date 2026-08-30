const PRODUCTS = [
  {
    category: 'eVTOL',
    title: 'ANTG-X6',
    description: 'Сверхлёгкий персональный аппарат вертикального взлёта. Флагман линейки.',
  },
  {
    category: 'eVTOL',
    title: 'YIVTOL',
    description: 'Электрический аппарат малой высоты для личного полёта и демонстраций.',
  },
  {
    category: 'Дроны',
    title: 'YIVTOL Drones',
    description: 'Линейка беспилотников для съёмки и задач бизнеса.',
  },
]

export function Products() {
  return (
    <section className="section" id="products">
      <p className="section__subtitle">Аппараты и дроны</p>
      <h2 className="section__title animate-fade">Три линейки — одна экосистема</h2>

      <div className="products">
        {PRODUCTS.map(({ category, title, description }) => (
          <div key={title} className="products__card animate-scale">
            <div className="products__card-category">{category}</div>
            <h3 className="products__card-title">{title}</h3>
            <p className="products__card-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}