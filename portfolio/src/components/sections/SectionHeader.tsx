export default function SectionHeader({ title, label }: { title: string; label: string }) {
  return (
    <div className="shrink-0">
      <p className="font-['JetBrains_Mono',monospace] text-xs text-primary uppercase tracking-widest mb-1">{label}</p>
      <h2 className="font-['Outfit',sans-serif] font-black text-3xl text-foreground leading-none">{title}</h2>
    </div>
  );
}
