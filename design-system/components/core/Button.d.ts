import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * The brand's primary action control — quiet, classical, confident.
 * Use `accent` (Brass) for the single most important action on a view; Brass is a spark, never a fill.
 * @startingPoint section="Core" subtitle="Action button — primary, accent, secondary, ghost" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
