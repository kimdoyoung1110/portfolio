import { profile, stats } from '../data'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="reveal is-visible mb-7 flex justify-center">
          <div className="relative">
            <span
              className="animate-spin-slow absolute -inset-2 rounded-full opacity-80"
              style={{
                background:
                  'conic-gradient(from 0deg, #2563eb, #0ea5e9, #93c5fd, #38bdf8, #2563eb)',
                filter: 'blur(6px)',
              }}
            />
            <span className="absolute -inset-1.5 animate-pulse-glow rounded-full bg-gradient-to-tr from-brand-500 to-sky-accent blur-md" />
            <img
              src={profile.photo}
              alt={`${profile.name} 프로필 사진`}
              className="relative h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl sm:h-32 sm:w-32"
            />
          </div>
        </div>

        <div className="reveal is-visible mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-soft shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Frontend Intern @ Slunch Factory · Techeer
        </div>

        <h1 className="mt-2 text-5xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-7xl">
          안녕하세요,
          <br />
          <span className="animate-gradient bg-gradient-to-r from-brand-500 via-sky-accent to-brand-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
          입니다
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          {profile.tagline}입니다.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-brand-500 to-sky-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-105"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line bg-white px-7 py-3.5 font-semibold text-ink shadow-sm transition-colors hover:border-brand-400 hover:text-brand-600"
          >
            연락하기
          </a>
        </div>

        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-line bg-white px-3 py-5 text-center shadow-sm"
            >
              <dd className="bg-gradient-to-r from-brand-500 to-sky-accent bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                {s.value}
              </dd>
              <dt className="mt-1.5 text-xs leading-snug text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* waving gradient banner (echoes the GitHub README header) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-44 overflow-hidden" aria-hidden="true">
        <svg
          className="animate-wave-slow absolute bottom-0 left-0 h-full w-[200%]"
          viewBox="0 0 1600 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWaveBack" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
          <path
            d="M0 90 Q 100 40 200 90 T 400 90 T 600 90 T 800 90 T 1000 90 T 1200 90 T 1400 90 T 1600 90 V160 H0 Z"
            fill="url(#heroWaveBack)"
            opacity="0.3"
          />
        </svg>
        <svg
          className="animate-wave absolute bottom-0 left-0 h-full w-[200%]"
          viewBox="0 0 1600 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWaveFront" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path
            d="M0 110 Q 100 60 200 110 T 400 110 T 600 110 T 800 110 T 1000 110 T 1200 110 T 1400 110 T 1600 110 V160 H0 Z"
            fill="url(#heroWaveFront)"
            opacity="0.45"
          />
        </svg>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-soft/60 transition-colors hover:text-brand-600"
        aria-label="아래로 스크롤"
      >
        <span className="block animate-float text-2xl">↓</span>
      </a>
    </section>
  )
}
