import React from 'react';

/**
 * Rule — a fine horizontal divider. The brand favours hairlines over
 * heavy blocks. variant: paper (default), brass (the signature
 * hairline), strong. The brass rule is the brand's quiet flourish.
 */
export function Rule({ variant = 'paper', inset = false, style = {}, ...rest }) {
  const colors = {
    paper:  'var(--rule)',
    strong: 'var(--rule-strong)',
    brass:  'var(--brass-500)',
  };
  const opacity = variant === 'brass' ? 0.6 : 1;
  return (
    <hr
      style={{
        border: 0,
        height: '1px',
        background: colors[variant],
        opacity,
        margin: inset ? '0 var(--space-5)' : 0,
        width: 'auto',
        ...style,
      }}
      {...rest}
    />
  );
}
