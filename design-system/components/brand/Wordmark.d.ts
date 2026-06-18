import React from 'react';

export interface MonogramProps {
  /** Pixel size of the square mark. @default 48 */
  size?: number;
  /** Monochrome mode — null for brand colours. @default null */
  mono?: null | 'ink' | 'parchment';
  style?: React.CSSProperties;
}

/** The ML monogram mark — Ink Navy square, brass keyline, parchment ligature. Use `mono` for single-colour contexts. */
export function Monogram(props: MonogramProps): JSX.Element;

export interface WordmarkProps {
  /** Show the ML monogram before the name. @default true */
  showMonogram?: boolean;
  /** Show the motto beneath the name. @default false */
  motto?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Name colour. @default "var(--ink-navy-600)" */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * The "Martin Lockett" wordmark in Fraunces, with optional monogram and motto.
 * @startingPoint section="Brand" subtitle="Logo lockup — monogram + wordmark" viewport="700x140"
 */
export function Wordmark(props: WordmarkProps): JSX.Element;
