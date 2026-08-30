import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FlagmanBanner } from './components/Flagman'
import { FlagmanSection } from './components/Flagman'
import { Products } from './components/Products'
import { Services } from './components/Services'
import { Experience } from './components/Experience'
import { Brands } from './components/Brands'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import './styles.css'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.animate-fade, .animate-scale, .animate-slide-left, .animate-slide-right'
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          if (el.classList.contains('animate-fade'))
            el.classList.add('animate-fade--visible')
          else if (el.classList.contains('animate-scale'))
            el.classList.add('animate-scale--visible')
          else if (el.classList.contains('animate-slide-left'))
            el.classList.add('animate-slide-left--visible')
          else if (el.classList.contains('animate-slide-right'))
            el.classList.add('animate-slide-right--visible')
          observer.unobserve(el)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <section style={{ padding: '0 40px', maxWidth: 1200, margin: '0 auto' }}>
        <FlagmanBanner />
      </section>
      <FlagmanSection />
      <Products />
      <Services />
      <Experience />
      <Brands />
      <Contacts />
      <Footer />
    </>
  )
}