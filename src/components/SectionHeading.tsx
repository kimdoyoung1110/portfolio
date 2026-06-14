type Props = {
  index: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <div className="reveal mb-12">
      <p className="mb-2 font-mono text-sm font-semibold tracking-widest text-brand-500">
        {index} ——
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-ink-soft">{subtitle}</p>}
    </div>
  )
}
