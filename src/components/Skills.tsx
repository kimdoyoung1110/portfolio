import { skillCategories } from '../data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="02"
        title="Tech Stack"
        subtitle="언어부터 프론트엔드, 백엔드, 인프라까지 직접 다뤄온 기술들입니다."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="reveal rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="mb-5 text-lg font-semibold text-ink">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((s) => (
                <span
                  key={s.name}
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-white hover:shadow-sm"
                >
                  <img
                    src={s.logo}
                    alt={`${s.name} 로고`}
                    loading="lazy"
                    className="h-5 w-5 object-contain transition-transform group-hover:scale-110"
                  />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
