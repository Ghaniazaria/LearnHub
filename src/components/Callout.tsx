import React from 'react';
import { Info, AlertTriangle, Lightbulb, Bookmark } from 'lucide-react';
import { CalloutData } from '../types';

interface CalloutProps {
  data: CalloutData;
}

export const Callout: React.FC<CalloutProps> = ({ data }) => {
  const { type, title, content } = data;

  const config = {
    info: {
      icon: Info,
      borderColor: 'border-blue-500/70 dark:border-blue-400/60',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      defaultTitle: 'Informasi Penting',
    },
    warning: {
      icon: AlertTriangle,
      borderColor: 'border-amber-500/70 dark:border-amber-400/60',
      bgColor: 'bg-amber-50/50 dark:bg-amber-950/20',
      iconColor: 'text-amber-600 dark:text-amber-400',
      defaultTitle: 'Perhatian',
    },
    tip: {
      icon: Lightbulb,
      borderColor: 'border-emerald-500/70 dark:border-emerald-400/60',
      bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      defaultTitle: 'Tips Praktis',
    },
    note: {
      icon: Bookmark,
      borderColor: 'border-neutral-500/70 dark:border-neutral-400/60',
      bgColor: 'bg-neutral-50 dark:bg-neutral-900/40',
      iconColor: 'text-neutral-700 dark:text-neutral-300',
      defaultTitle: 'Catatan Redaksional',
    },
  }[type];

  const Icon = config.icon;

  return (
    <div
      className={`my-6 border-l-2 ${config.borderColor} ${config.bgColor} p-4 sm:p-5 transition-colors`}
      role="note"
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${config.iconColor}`} />
        <div className="flex-1 min-w-0">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-1">
            {title || config.defaultTitle}
          </p>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
