import { useEffect, useState } from 'react'

export function useActiveNav() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    function onScroll() {
      let currentId = 'hero'
      document.querySelectorAll('section[id]').forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140) {
          currentId = section.id
        }
      })
      setActiveId(currentId)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return activeId
}