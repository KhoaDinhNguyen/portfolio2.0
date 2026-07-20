import { twMerge } from "tailwind-merge";

interface PageLinkProps {
  to: string;
  className?: string;
  children?: React.ReactNode;
}

// Renders link to other page
export default function PageLink({ to, children, className }: PageLinkProps) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className={twMerge("cursor-pointer", className)}>
      {children}
    </a>
  );
}
