/**
 * Light, airy backdrop: a faint dot grid with soft pastel gradient blobs
 * that drift slowly. Pure CSS — no canvas, keeps the bright minimal feel.
 */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-canvas" />

      {/* faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(99,102,241,0.10) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage:
            'radial-gradient(ellipse at 50% 0%, black 30%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 0%, black 30%, transparent 78%)',
        }}
      />

      {/* soft pastel blobs */}
      <div className="animate-blob absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-400/25 blur-[110px]" />
      <div
        className="animate-blob absolute -top-10 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-sky-300/30 blur-[110px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-blob absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-teal-200/30 blur-[110px]"
        style={{ animationDelay: '-12s' }}
      />
    </div>
  )
}
