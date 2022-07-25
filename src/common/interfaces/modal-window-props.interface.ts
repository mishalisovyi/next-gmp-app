import { MouseEventHandler } from 'react';

export interface ModalWindowActionButtonProps {
  show: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ModalWindowProps {
  title?: string;
  primaryButton?: ModalWindowActionButtonProps;
  secondaryButton?: ModalWindowActionButtonProps;
  onClose: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode
}
