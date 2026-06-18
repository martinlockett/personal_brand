import React from 'react';

export interface EyebrowProps {
  children?: React.ReactNode;
  /** Text colour. @default "var(--slate-teal-500)" */
  color?: string;
  /** Rendered element. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

/** A small, letter-spaced uppercase label — the brand's quiet caps voice. Sits above headings and marks sections. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
