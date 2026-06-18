import React from 'react';

/**
 * Badge — a small status / category marker. Restrained, paper-toned.
 * tones: neutral | navy | brass | teal. Brass sparingly.
 */
export function Badge({ children, tone = 'neutral', style = {}, ...rest }) {
  const tones = {
    neutral: { background: 'var(--parchment-100)', color: 'var(--graphite-500)', border: '1px solid var(--rule-strong)' },
    navy:    { background: 'var(--ink-navy-600)', color: 'var(--parchment-50)', border: '1px solid transparent' },
    brass:   { background: 'var(--brass-100)', color: 'var(--brass-600)', border: '1px solid rgba(184,132,62,0.35)' },
    teal:    { background: 'rgba(74,99,96,0.12)', color: 'var(--slate-teal-600)', border: '1px solid rgba(74,99,96,0.3)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-medium)',
        lineHeight: 1,
        padding: '0.3rem 0.6rem',
        borderRadius: 'var(--radius-pill)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
