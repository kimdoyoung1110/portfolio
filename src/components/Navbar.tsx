import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-white/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-sky-accent text-base text-white shadow-md shadow-brand-500/25">
            ✦
          </span>
          <span className="text-ink">
            kim<span className="text-brand-600">doyoung</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.id
                    ? 'text-brand-600'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {active === l.id && (
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-500 align-middle" />
                )}
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/kimdoyoung1110"
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white/95 px-6 py-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-ink-soft hover:bg-canvas hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
