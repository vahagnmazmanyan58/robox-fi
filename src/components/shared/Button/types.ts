import { ReactNode } from 'react';

export enum ButtonTypeEnum {
  Submit = 'submit',
  Button = 'button',
}

export type ButtonProps = Partial<{
  children: ReactNode;
  className: string;
  onClick: VoidFunction;
  disabled: boolean;
  submit: boolean;
}>;
