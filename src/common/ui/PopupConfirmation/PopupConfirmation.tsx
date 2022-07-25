import React, { MouseEventHandler, useMemo } from 'react';

import { ModalWindow } from 'common/hoc';
import { ModalWindowActionButtonProps } from 'common/interfaces';

interface PopupConfirmationProps {
  title: string;
  message: string;
  onConfirm: MouseEventHandler<HTMLButtonElement>;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export function PopupConfirmation({
  title, message, onConfirm, onClose,
}: PopupConfirmationProps) {
  const primaryButtonAttributes: ModalWindowActionButtonProps = useMemo(() => ({
    show: true,
    text: 'Confirm',
    onClick: onConfirm,
  }), [onConfirm]);

  return (
    <ModalWindow title={title} primaryButton={primaryButtonAttributes} onClose={onClose}>
      <p className="typography-body">{message}</p>
    </ModalWindow>
  );
}
