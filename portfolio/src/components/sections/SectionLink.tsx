import { twMerge } from "tailwind-merge";

interface SectionLinkProps {
  to: string;
  className?: string;
  children?: React.ReactNode;
}

// Renders link to section
export default function SectionLink({ to, children, className }: SectionLinkProps) {
  return (
    <a
      href="#projects"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(to)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className={twMerge("cursor-pointer", className)}>
      {children}
    </a>
  );
}
