import React from 'react';

/**
 * Card — a raised paper surface. Warm, soft shadow; restrained radius.
 * elevation: flat | raised | floating. Optional brassEdge adds the
 * signature hairline at the top.
 */
export function Card({
  children,
  elevation = 'raised',
  brassEdge = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const shadows = {
    flat:     'none',
    raised:   'var(--shadow-sm)',
    floating: 'var(--shadow-md)',
  };
  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: '1px solid var(--rule)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: shadows[elevation],
        padding,
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {brassEdge && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'var(--brass-500)',
            opacity: 0.85,
          }}
        />
      )}
      {children}
    </div>
  );
}
