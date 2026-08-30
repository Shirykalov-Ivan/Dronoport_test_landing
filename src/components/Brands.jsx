const BRANDS = [
  { name: 'ANTG', desc: 'Shenzhen ANTG Aerospace' },
  { name: 'YIVTOL', desc: 'FLYGO International' },
]

export function Brands() {
  return (
    <section className="section" id="brands">
      <h2 className="section__title animate-fade">Официальный дистрибьютор в России</h2>
      <p className="section__description" style={{ marginBottom: 36, fontSize: 15 }}>
        Представляем ведущих производителей малой авиации.
      </p>

      <div className="brands">
        {BRANDS.map(({ name, desc }) => (
          <div key={name} className="brands__item animate-scale">
            <div className="brands__item-name">{name}</div>
            <div className="brands__item-description">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}