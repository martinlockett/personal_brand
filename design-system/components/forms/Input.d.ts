import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message — replaces hint and turns the field critical. */
  error?: React.ReactNode;
  /** Optional leading adornment (icon, prefix). */
  leading?: React.ReactNode;
  style?: React.CSSProperties;
}

/** A calm text field on paper — hairline border, brass focus ring. Supports label, hint, and error states. */
export function Input(props: InputProps): JSX.Element;
