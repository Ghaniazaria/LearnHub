import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'text' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="my-6 rounded-none border border-neutral-200 dark:border-neutral-800 bg-[#0d0e11] text-neutral-200 overflow-hidden font-mono-code text-xs sm:text-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-[#14161b] text-neutral-400">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          title="Salin kode"
          aria-label="Salin kode"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Tersalin</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Salin</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="leading-relaxed font-mono whitespace-pre text-[#e4e4e7]">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
