import { profile } from '../data'
import SectionHeading from './SectionHeading'

type Social = { label: string; href: string; img: string }

const socials: Social[] = [
  { label: 'GitHub', href: profile.github, img: '/logos/github.svg' },
  { label: 'LinkedIn', href: profile.links.linkedin, img: '/logos/linkedin.svg' },
  { label: 'Velog', href: profile.links.velog, img: '/logos/velog.svg' },
  { label: 'Naver Blog', href: profile.links.naverBlog, img: '/logos/naver.svg' },
  { label: 'Instagram', href: profile.links.instagram, img: '/logos/instagram.svg' },
  { label: 'Techeer', href: profile.links.techeer, img: '/logos/techeer.png' },
  { label: 'Slunch Factory', href: profile.links.slunch, img: '/logos/slunch.png' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="05" title="Get In Touch" />

      <div className="reveal overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold leading-snug text-ink sm:text-3xl">
              함께 좋은 경험을
              <br />
              <span className="bg-gradient-to-r from-brand-500 to-sky-accent bg-clip-text text-transparent">
                만들어볼까요?
              </span>
            </h3>
            <p className="mt-4 max-w-md text-ink-soft">
              새로운 프로젝트나 협업, 커피챗 모두 환영합니다. 편하게 메일 주세요.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-500 to-sky-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-105"
              >
                <span>✉</span>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 font-semibold text-ink shadow-sm transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                <span>☎</span>
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-canvas px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:bg-white hover:shadow-md"
              >
                <span className="grid h-12 w-full place-items-center">
                  <img
                    src={s.img}
                    alt={`${s.label} 로고`}
                    loading="lazy"
                    className="max-h-7 w-auto max-w-[85%] object-contain transition-transform group-hover:scale-110"
                  />
                </span>
                <span className="text-sm font-medium text-ink-soft group-hover:text-ink">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
