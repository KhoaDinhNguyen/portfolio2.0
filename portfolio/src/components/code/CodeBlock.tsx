import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

type CodeBlockProps = {
  code: string;
  lang?: string;
};

export default function CodeBlock({ code, lang = "ts" }: CodeBlockProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(code, {
        lang,
        theme: "github-dark-default",
        transformers: [
          {
            pre(node) {
              node.properties.class = "p-5 font-['JetBrains_Mono',monospace] text-xs leading-relaxed overflow-hidden  ";
            },
          },
        ],
      });

      setHtml(html);
    }

    highlight();
  }, [code, lang]);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
