import React from 'react';
import { Link } from 'react-router-dom';

/**
 * GSEF Logo component that uses the uploaded image
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
      : 'text-navy';
  const taglineClass =
    theme === 'dark'
      ? 'text-white/70'
      : 'text-gray-500';
  const iconSize = compact ? 36 : 44;

  const content = (
    <>
      <img 
        src="/images/gsef-logo.png" 
        alt="GSEF Logo" 
        width={iconSize}
        height={iconSize}
        className="shrink-0 object-contain drop-shadow-sm" 
        style={{ width: iconSize, height: iconSize }}
      />
      <div className="leading-tight min-w-0 text-left">
        <span className={`block font-display font-bold tracking-tight ${compact ? 'text-lg' : 'text-xl'} ${titleClass}`}>
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
