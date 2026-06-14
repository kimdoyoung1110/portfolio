import { projects, type Project } from '../data'
import SectionHeading from './SectionHeading'

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:shadow-xl hover:shadow-brand-500/10 ${
        p.featured ? 'lg:col-span-6' : 'lg:col-span-2'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-sky-accent transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {p.logo ? (
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-sm">
              <img
                src={p.logo}
                alt={`${p.title} 로고`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </span>
          ) : (
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-sky-accent font-mono text-base font-extrabold tracking-tight text-white shadow-md shadow-brand-500/25">
              {p.emoji}
            </span>
          )}
          <div>
            <h3 className="text-xl font-bold text-ink">{p.title}</h3>
            <p className="text-sm font-medium text-brand-600">{p.tagline}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          {p.featured && (
            <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">
              ★ Featured
            </span>
          )}
          {p.period && (
            <span className="font-mono text-xs text-ink-soft">{p.period}</span>
          )}
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-soft">{p.description}</p>

      {p.achievements && (
        <ul className="mt-4 space-y-2 rounded-2xl border border-line bg-canvas p-4">
          {p.achievements.map((a) => (
            <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-ink">
              <span className="mt-1 shrink-0 text-sky-accent">▹</span>
              <span className="text-ink-soft">{a}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-soft/60">
        {p.role}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-canvas px-2.5 py-1 font-mono text-xs text-ink-soft"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-5">
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand-600"
        >
          <span>⌥</span> GitHub ↗
        </a>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-accent transition-colors hover:text-brand-600"
          >
            <span>◎</span> Live Demo ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="03"
        title="Projects"
        subtitle="성능 최적화와 데이터 시각화를 중심으로 한 대표 프로젝트들입니다."
      />

      <div className="grid gap-5 lg:grid-cols-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
