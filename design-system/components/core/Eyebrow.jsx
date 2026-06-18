import React from 'react';

/**
 * Eyebrow — a small letter-spaced label in Slate Teal, used above
 * headings and as a section marker. The brand's quiet caps voice.
 */
export function Eyebrow({ children, color = 'var(--slate-teal-500)', as = 'div', style = {}, ...rest }) {
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-eyebrow)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color,
        lineHeight: 1.2,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
