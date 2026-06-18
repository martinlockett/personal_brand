import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** @default "raised" */
  elevation?: 'flat' | 'raised' | 'floating';
  /** Adds the signature brass hairline along the top edge. @default false */
  brassEdge?: boolean;
  /** CSS padding. @default "var(--space-6)" */
  padding?: string;
  style?: React.CSSProperties;
}

/**
 * A raised paper surface — warm soft shadow, restrained radius, hairline border.
 * @startingPoint section="Core" subtitle="Paper surface container" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
