import React from 'react';
import { Link } from 'react-router-dom';

/**
 * GSEF mark: four interlocking rounded tiles (blue, purple, gold, forest green)
 * inspired by the official-style geometric “G / knot” lockup.
 */
export function GsefMark({ size = 44, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="20" height="20" rx="6" fill="#1565C0" />
      <rect x="25" y="3" width="20" height="20" rx="6" fill="#6A1B9A" />
      <rect x="3" y="25" width="20" height="20" rx="6" fill="#0B7A58" />
      <rect x="25" y="25" width="20" height="20" rx="6" fill="#F9A825" />
      <rect x="17" y="17" width="14" height="14" rx="4" fill="#ffffff" fillOpacity="0.92" />
      <path
        d="M24 20c2.2 0 4 1.8 4 4v4h-4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2z"
        fill="#0B162C"
        fillOpacity="0.08"
      />
    </svg>
  );
}

/**
 * Full wordmark for headers / footers
 * @param {'light'|'dark'} theme — dark: light text on navy backgrounds
 */
export default function GsefLogo({
  to = '/',
  asLink = true,
  theme = 'light',
  showTagline = true,
  compact = false,
  className = '',
}) {
  const titleClass =
    theme === 'dark'
      ? 'text-white'
      : 'text-gsef-navy';
  const taglineClass =
    theme === 'dark'
      ? 'text-slate-300'
      : 'text-slate-500';
  const iconSize = compact ? 36 : 44;

  const content = (
    <>
      <GsefMark size={iconSize} className="shrink-0 drop-shadow-sm" />
      <div className="leading-tight min-w-0 text-left">
        <span className={`block font-bold tracking-tight ${compact ? 'text-lg' : 'text-xl'} ${titleClass}`}>
          GSEF
        </span>
        {showTagline && (
          <span
            className={`hidden md:block uppercase tracking-[0.14em] font-semibold ${compact ? 'text-[9px]' : 'text-[10px]'} ${taglineClass}`}
          >
            Global Somali Entrepreneurship Forum
          </span>
        )}
      </div>
    </>
  );

  const boxClass = `flex items-center gap-2.5 min-w-0 ${className}`;

  if (asLink && to) {
    return (
      <Link to={to} className={`${boxClass} hover:opacity-95 transition-opacity`}>
        {content}
      </Link>
    );
  }
  return <div className={boxClass}>{content}</div>;
}
