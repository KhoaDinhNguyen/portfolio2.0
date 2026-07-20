import CodeBlock from "./CodeBlock";

interface CodeWindowProps {
  title: string;
  code: string;
  lang?: string;
}

export default function CodeWindow({ title, code, lang }: CodeWindowProps) {
  return (
    <div className="hidden lg:block w-72">
      <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xl shadow-black/40">
        {/** Render's code title */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0d1526] border-b border-border">
          <WindowControls />
          <span className="ml-2 font-['JetBrains_Mono',monospace] text-xs text-muted-foreground">{title}</span>
        </div>

        {/** Render's code body */}
        <CodeBlock code={code} lang={lang} />
      </div>
    </div>
  );
}

function WindowControls() {
  return (
    <>
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
    </>
  );
}
