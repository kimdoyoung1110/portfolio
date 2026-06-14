import { interests, now, profile, timeline, type TimelineItem } from '../data'
import SectionHeading from './SectionHeading'

const kindStyle: Record<TimelineItem['kind'], { dot: string; chip: string; label: string }> = {
  work: { dot: 'bg-brand-500', chip: 'bg-brand-500/10 text-brand-600', label: '경력' },
  project: { dot: 'bg-sky-accent', chip: 'bg-sky-500/10 text-sky-600', label: '프로젝트' },
  research: { dot: 'bg-violet-500', chip: 'bg-violet-500/10 text-violet-600', label: '연구' },
  community: { dot: 'bg-teal-500', chip: 'bg-teal-500/10 text-teal-600', label: '커뮤니티' },
  education: { dot: 'bg-amber-500', chip: 'bg-amber-500/10 text-amber-600', label: '교육' },
}

function ContactPill({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft/60">
        {label}
      </span>
      <span className="text-sm font-medium text-ink">{value}</span>
    </>
  )
  const cls =
    'flex flex-col gap-0.5 rounded-xl border border-line bg-canvas px-4 py-3 transition-colors hover:border-brand-400/50 hover:bg-white'
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

function TimelineRow({ item }: { item: TimelineItem }) {
  const s = kindStyle[item.kind]
  return (
    <li className="reveal relative pl-8">
      {/* dot */}
      <span
        className={`absolute left-0 top-1.5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full ring-4 ring-canvas ${s.dot}`}
      >
        {item.ongoing && (
          <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-current opacity-40" />
        )}
      </span>

      <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1.5">
          <img
            src={item.logo}
            alt={`${item.org ?? item.title} 로고`}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </span>
        <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-ink-soft">{item.period}</span>
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${s.chip}`}>
            {s.label}
          </span>
          {item.ongoing && (
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
              진행중
            </span>
          )}
        </div>
        <h4 className="text-base font-bold text-ink">
          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="transition-colors hover:text-brand-600"
            >
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h4>
        {item.org && <p className="text-sm text-ink-soft">{item.org}</p>}
        {item.location && (
          <a
            href={item.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-ink-soft transition-colors hover:text-brand-600"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            {item.location}
            <span className="text-brand-500">· 지도 ↗</span>
          </a>
        )}
        <ul className="mt-2.5 space-y-1.5">
          {item.points.map((p) => (
            <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-soft/40" />
              {p}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </li>
  )
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="01"
        title="About Me"
        subtitle="데이터 시각화와 프론트엔드 성능 최적화에 강점을 가진 개발자입니다."
      />

      {/* Summary + contact */}
      <div className="reveal mb-8 rounded-3xl border border-line bg-white p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={profile.photo}
                alt={`${profile.name} 프로필 사진`}
                className="h-14 w-14 rounded-2xl object-cover shadow-lg ring-2 ring-brand-400/30"
              />
              <div>
                <p className="text-lg font-bold text-ink">{profile.name}</p>
                <p className="text-sm font-medium text-brand-600">{profile.role}</p>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-ink-soft">{profile.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-400/30 bg-brand-500/[0.07] px-3 py-1 text-sm font-medium text-brand-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ContactPill label="GitHub" value={profile.githubText} href={profile.github} />
            <ContactPill label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
            <ContactPill label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          </div>
        </div>
      </div>

      {/* Two columns: career timeline + Now */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <h3 className="reveal mb-6 flex items-center gap-2 text-lg font-bold text-ink">
            <span className="text-brand-500">⌁</span> 경력 · 활동
          </h3>
          <ol className="relative space-y-5 before:absolute before:left-2 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-line">
            {timeline.map((item) => (
              <TimelineRow key={item.period + item.title} item={item} />
            ))}
          </ol>
        </div>

        {/* Now panel */}
        <div className="lg:col-span-1">
          <div className="reveal lg:sticky lg:top-24">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              현재 (Now)
            </h3>
            <div className="space-y-3 rounded-3xl border border-line bg-gradient-to-b from-white to-canvas p-5 shadow-sm">
              {now.map((n) => (
                <div
                  key={n.label}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1">
                    <img
                      src={n.logo}
                      alt={`${n.label} 로고`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink">{n.label}</p>
                    <p className="text-xs text-ink-soft">{n.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
