import React from 'react';

/**
 * Button — the brand's primary action. Quiet, classical, confident.
 * Variants: primary (Ink Navy), accent (Brass — the one thing that matters),
 * secondary (outline), ghost (text). Sizes: sm | md | lg.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: '0.4rem 0.85rem', fontSize: 'var(--text-xs)', gap: '0.4rem' },
    md: { padding: '0.6rem 1.25rem', fontSize: 'var(--text-sm)', gap: '0.5rem' },
    lg: { padding: '0.8rem 1.6rem', fontSize: 'var(--text-base)', gap: '0.6rem' },
  };

  const variants = {
    primary: {
      background: hover ? 'var(--ink-navy-500)' : 'var(--ink-navy-600)',
      color: 'var(--text-on-ink)',
      border: '1.5px solid transparent',
      boxShadow: active ? 'none' : 'var(--shadow-xs)',
    },
    accent: {
      background: hover ? 'var(--brass-600)' : 'var(--brass-500)',
      color: '#fff',
      border: '1.5px solid transparent',
      boxShadow: active ? 'none' : 'var(--shadow-xs)',
    },
    secondary: {
      background: hover ? 'var(--parchment-100)' : 'transparent',
      color: 'var(--ink-navy-600)',
      border: '1.5px solid var(--rule-strong)',
      boxShadow: 'none',
    },
    ghost: {
      background: hover ? 'var(--parchment-100)' : 'transparent',
      color: 'var(--slate-teal-500)',
      border: '1.5px solid transparent',
      boxShadow: 'none',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    fontSize: sizes[size].fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    padding: sizes[size].padding,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transform: active && !disabled ? 'translateY(0.5px)' : 'none',
    transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    outline: 'none',
    ...variants[variant],
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onFocus={(e) => { e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
      onBlur={(e) => { e.currentTarget.style.boxShadow = base.boxShadow || 'none'; }}
      style={base}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
