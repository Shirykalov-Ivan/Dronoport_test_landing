const SERVICES = [
  { num: '01', title: 'Продажи и поставка', text: 'Официальный ввоз и продажа eVTOL и дронов в РФ, поставка DDP.' },
  { num: '02', title: 'Экспириенс-центр', text: 'Демонстрационная площадка: знакомство, показ и опыт перед покупкой.' },
  { num: '03', title: 'Обучение пилотов', text: 'Лётная подготовка и обучение эксплуатации аппаратов eVTOL.' },
  { num: '04', title: 'Сервис и ремонт', text: 'Техобслуживание, диагностика, ремонт и запчасти.' },
  { num: '05', title: 'Логистика и ввоз', text: 'Таможня, доставка до клиента, монтаж и наладка.' },
  { num: '06', title: 'Гарантия и поддержка', text: 'Гарантийное и послепродажное обслуживание.' },
]

export function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section__title animate-fade">Дронопорт под ключ</h2>
      <p className="section__description">
        Полный цикл — от поставки аппарата до обучения, сервиса и поддержки.
      </p>

      <div className="services">
        {SERVICES.map(({ num, title, text }) => (
          <div key={num} className="services__item animate-fade">
            <div className="services__item-number">{num}</div>
            <h3 className="services__item-title">{title}</h3>
            <p className="services__item-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}