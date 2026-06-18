import React from 'react';

export interface PullquoteProps {
  children?: React.ReactNode;
  /** Optional attribution, rendered as a letter-spaced caption. */
  cite?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/** A quote or motto in Fraunces italic — the brand's classical voice. Left variant carries a brass tick. */
export function Pullquote(props: PullquoteProps): JSX.Element;
