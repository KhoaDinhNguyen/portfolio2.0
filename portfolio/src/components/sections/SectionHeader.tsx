export default function SectionHeader({ title, label }: { title: string; label: string }) {
  return (
    <div className="flex items-end gap-6">
      <div>
        <p className="font-['JetBrains_Mono',monospace] text-sm text-primary mb-2">{label}</p>
        <h2 className="font-['Outfit',sans-serif] font-black text-3xl sm:text-4xl text-foreground leading-none">
          {title}
        </h2>
      </div>
      <div className="flex-1 h-px bg-border mb-1.5 hidden sm:block" />
    </div>
  );
}
