import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'navy' | 'brass' | 'teal';
  style?: React.CSSProperties;
}

/** A small, restrained status or category marker (pill). Use `brass` sparingly. */
export function Badge(props: BadgeProps): JSX.Element;
