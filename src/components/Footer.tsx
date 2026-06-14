import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-ink-soft">
          © 2026 {profile.name} · {profile.nameEn}
        </p>
        <p className="text-sm italic text-ink-soft/80">
          “오늘보다 내일 더 나은 개발자가 되겠습니다.” ✨
        </p>
        <p className="font-mono text-xs text-ink-soft/60">
          Built with React · TypeScript · Tailwind
        </p>
      </div>
    </footer>
  )
}
