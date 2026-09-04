export const textStyles = {
  fontFamily: 'font-sans',
  sectionTitle: 'text-sm font-semibold uppercase tracking-[0.14em] mb-4 text-mj-muted',
  body: 'text-mj-muted leading-relaxed text-sm md:text-base',
  metricLabel: 'text-xs font-semibold text-mj-faint uppercase tracking-wider mb-2',
};

export function SectionTag({ text, colorClass = 'text-mj-accent' }) {
  return (
    <div className={`text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold mb-3 ${colorClass}`}>
      {text}
    </div>
  );
}
