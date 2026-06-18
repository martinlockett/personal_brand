import React from 'react';

/**
 * Pullquote — a quote or motto set in Fraunces italic, the brand's
 * classical voice. Optional cite and a leading brass tick.
 */
export function Pullquote({ children, cite = null, align = 'left', style = {}, ...rest }) {
  return (
    <figure
      style={{
        margin: 0,
        maxWidth: 'var(--measure-narrow, 48ch)',
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      <blockquote
        style={{
          margin: 0,
          paddingLeft: align === 'left' ? 'var(--space-5)' : 0,
          borderLeft: align === 'left' ? '2px solid var(--brass-500)' : 'none',
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 'var(--weight-regular)',
          fontSize: 'var(--text-h3)',
          lineHeight: 'var(--leading-snug)',
          color: 'var(--ink-navy-600)',
        }}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption
          style={{
            marginTop: 'var(--space-3)',
            paddingLeft: align === 'left' ? 'var(--space-5)' : 0,
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--slate-teal-500)',
          }}
        >
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
