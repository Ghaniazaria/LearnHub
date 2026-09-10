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
      borderColor: 'border-blue-500/70',
      bgColor: 'bg-blue-50/50',
      iconColor: 'text-blue-600',
      defaultTitle: 'Informasi Penting',
    },
    warning: {
      icon: AlertTriangle,
      borderColor: 'border-amber-500/70',
      bgColor: 'bg-amber-50/50',
      iconColor: 'text-amber-600',
      defaultTitle: 'Perhatian',
    },
    tip: {
      icon: Lightbulb,
      borderColor: 'border-emerald-500/70',
      bgColor: 'bg-emerald-50/50',
      iconColor: 'text-emerald-600',
      defaultTitle: 'Tips Praktis',
    },
    note: {
      icon: Bookmark,
      borderColor: 'border-neutral-500/70',
      bgColor: 'bg-neutral-50',
      iconColor: 'text-neutral-700',
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
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1">
            {title || config.defaultTitle}
          </p>
          <p className="text-sm leading-relaxed text-neutral-700">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
