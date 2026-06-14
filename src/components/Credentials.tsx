import { awards, certifications, education } from '../data'
import SectionHeading from './SectionHeading'

function CardHeading({ accent, label }: { accent: string; label: string }) {
  return (
    <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-ink">
      <span className={`h-5 w-1.5 rounded-full ${accent}`} />
      {label}
    </h3>
  )
}

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1">
      <img src={src} alt={alt} loading="lazy" className="max-h-full max-w-full object-contain" />
    </span>
  )
}

export default function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="04" title="Awards · Certs · Education" />

      <div className="grid gap-5 md:grid-cols-3">
        {/* Awards */}
        <div className="reveal rounded-2xl border border-line bg-white p-6 shadow-sm">
          <CardHeading accent="bg-amber-400" label="수상" />
          <div className="space-y-4">
            {awards.map((a) => (
              <div key={a.title} className="flex gap-3">
                <LogoTile src={a.logo} alt={`${a.title} 로고`} />
                <div className="min-w-0">
                  <p className="font-mono text-xs text-ink-soft">{a.date}</p>
                  <p className="mt-0.5 font-bold text-ink">{a.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal rounded-2xl border border-line bg-white p-6 shadow-sm">
          <CardHeading accent="bg-sky-400" label="자격증" />
          <div className="space-y-4">
            {certifications.map((c) => (
              <div key={c.title} className="flex gap-3">
                <LogoTile src={c.logo} alt={`${c.title} 로고`} />
                <div className="min-w-0">
                  <p className="font-mono text-xs text-ink-soft">{c.date}</p>
                  <p className="mt-0.5 font-bold text-ink">{c.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal rounded-2xl border border-line bg-white p-6 shadow-sm">
          <CardHeading accent="bg-brand-500" label="학력" />
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.title} className="flex gap-3">
                <LogoTile src={e.logo} alt={`${e.title} 로고`} />
                <div className="min-w-0">
                  <p className="font-mono text-xs text-ink-soft">{e.period}</p>
                  <p className="mt-0.5 font-bold text-ink">{e.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
