export default function Footer() {
  return (
    <footer className="px-3 pb-4 pt-3 border-t border-border mt-2">
      <p className="hidden lg:block font-['JetBrains_Mono',monospace] text-[10px] text-muted-foreground/50 leading-relaxed">
        © 2026 <span className="text-primary/70">Khoa Nguyen</span>
      </p>
      {/* Collapsed: just a dot */}
      <span className="lg:hidden block w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mx-auto" />
    </footer>
  );
}
