import React from 'react';

export interface RuleProps {
  /** @default "paper" */
  variant?: 'paper' | 'strong' | 'brass';
  /** Inset the rule horizontally. @default false */
  inset?: boolean;
  style?: React.CSSProperties;
}

/** A fine horizontal divider. The brand favours hairlines over heavy blocks; `brass` is the signature flourish — use it once per layout. */
export function Rule(props: RuleProps): JSX.Element;
