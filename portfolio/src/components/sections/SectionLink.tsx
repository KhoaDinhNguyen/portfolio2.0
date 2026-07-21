import { twMerge } from "tailwind-merge";

interface SectionLinkProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

// Renders link to section
export default function SectionLink({ onClick, children, className }: SectionLinkProps) {
  return (
    <button onClick={onClick} className={twMerge("cursor-pointer", className)}>
      {children}
    </button>
  );
}
