import React from 'react';

/**
 * Monogram — the ML mark. Ink Navy rounded square, brass inset keyline,
 * parchment serif ligature. Works in colour or monochrome.
 */
export function Monogram({ size = 48, mono = null, style = {}, ...rest }) {
  // mono: null = brand colours; 'ink' = ink on transparent; 'parchment' = parchment on transparent
  const bg = mono === 'parchment' ? 'transparent' : mono === 'ink' ? 'transparent' : 'var(--ink-navy-600)';
  const keyline = mono ? 'transparent' : 'var(--brass-500)';
  const letters = mono === 'ink' ? 'var(--ink-navy-600)' : mono === 'parchment' ? 'var(--parchment-50)' : 'var(--parchment-50)';
  const r = size * 0.217;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      role="img"
      aria-label="Martin Lockett monogram"
      style={style}
      {...rest}
    >
      <rect x="0" y="0" width="240" height="240" rx={r * (240 / size)} fill={bg} />
      <rect x="16" y="16" width="208" height="208" rx="40" fill="none" stroke={keyline} strokeWidth="2" opacity="0.85" />
      <text
        x="120"
        y="120"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display)"
        fontSize="118"
        fontWeight="500"
        letterSpacing="2"
        fill={letters}
      >
        ML
      </text>
    </svg>
  );
}

/**
 * Wordmark — "Martin Lockett" in Fraunces, optional monogram and motto.
 */
export function Wordmark({
  showMonogram = true,
  motto = false,
  size = 'md',
  color = 'var(--ink-navy-600)',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { name: '1.25rem', mark: 34 },
    md: { name: '1.85rem', mark: 46 },
    lg: { name: '2.75rem', mark: 64 },
  };
  const s = sizes[size];
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-4)', ...style }} {...rest}>
      {showMonogram && <Monogram size={s.mark} />}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: s.name,
            letterSpacing: 'var(--tracking-wordmark)',
            color,
            lineHeight: 1,
          }}
        >
          Martin Lockett
        </span>
        {motto && (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '0.7em',
              color: 'var(--brass-600)',
              lineHeight: 1.2,
            }}
          >
            Be true · act freely · understand deeply
          </span>
        )}
      </div>
    </div>
  );
}
