import { SECTIONS } from "@constants/section";
import { SOCIALS } from "@constants/social";
import { ChevronRight } from "lucide-react";
import PageLink from "./PageLink";
import Footer from "./Footer";

interface SideBarProps {
  active: string;
  onNavigate: (id: string) => void;
}
export default function SideBar({ active, onNavigate }: SideBarProps) {
  return (
    <aside className="w-16 lg:w-56 h-full flex flex-col border-r border-border bg-card shrink-0">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center lg:justify-start lg:px-5 border-b border-border shrink-0">
        <span className="font-['JetBrains_Mono',monospace] text-sm font-bold text-primary">
          KN<span className="text-accent hidden lg:inline">.</span>
        </span>
      </div>

      {/* Nav items */}
      <SideBarNavigation active={active} onNavigate={onNavigate} />

      <SideBarSocials />

      <Footer />
    </aside>
  );
}

function SideBarNavigation({ active, onNavigate }: SideBarProps) {
  return (
    <nav className="flex-1 flex flex-col gap-1 py-4 px-2">
      {SECTIONS.map((section) => {
        const { id, label, icon: Icon } = section;
        const isActive = active === id;

        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`group flex items-center gap-3 rounded-md px-2 lg:px-3 py-2.5 text-sm font-medium transition-all duration-150 w-full ${
              isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-[#0F172A] hover:text-foreground"
            }`}>
            <Icon size={17} className="shrink-0" />
            <span className="hidden lg:block truncate">{label}</span>
            {isActive && <ChevronRight size={14} className="hidden lg:block ml-auto text-primary" />}
          </button>
        );
      })}
    </nav>
  );
}

function SideBarSocials() {
  return (
    <div className="border-t border-border p-3 flex flex-col items-center lg:items-start gap-2 pb-5">
      {SOCIALS.map(({ href, icon: Icon, label }) => (
        <PageLink
          key={label}
          to={href}
          className="flex items-center gap-3 px-2 py-1.5 rounded text-muted-foreground hover:text-primary transition-colors text-sm w-full">
          <Icon size={15} className="shrink-0" />
          <span className="hidden lg:block">{label}</span>
        </PageLink>
      ))}
    </div>
  );
}
