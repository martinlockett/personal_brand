import React from 'react';

/**
 * Input — a calm text field on paper. Hairline border, brass focus ring.
 * Supports label, hint, error, and an optional leading adornment.
 */
export function Input({
  label,
  hint,
  error,
  id,
  leading = null,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error
    ? 'var(--critical)'
    : focus
    ? 'var(--brass-500)'
    : 'var(--rule-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', ...style }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--ink-navy-600)',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--parchment-0)',
          border: `1.5px solid ${borderColor}`,
          borderRadius: 'var(--radius-sm)',
          padding: '0.55rem 0.75rem',
          boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        }}
      >
        {leading && <span style={{ color: 'var(--slate-teal-500)', display: 'flex' }}>{leading}</span>}
        <input
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            border: 0,
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'var(--graphite-700)',
            lineHeight: 1.4,
            minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            color: error ? 'var(--critical)' : 'var(--text-faint)',
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
