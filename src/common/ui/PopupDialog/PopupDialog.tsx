import React, { MouseEventHandler, useMemo } from 'react';

import { ModalWindow } from 'common/hoc';
import { ModalWindowActionButtonProps } from 'common/interfaces';

interface PopupDialogProps {
  children: React.ReactNode,
  title: string;
  onPrimaryButtonClick: MouseEventHandler<HTMLButtonElement>
  onSecondaryButtonClick: MouseEventHandler<HTMLButtonElement>
  onClose: MouseEventHandler<HTMLButtonElement>
}

export function PopupDialog({
  children,
  title,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  onClose,
}: PopupDialogProps) {
  const primaryButtonAttributes: ModalWindowActionButtonProps = useMemo(() => ({
    show: true,
    text: 'Submit',
    onClick: onPrimaryButtonClick,
  }), [onPrimaryButtonClick]);

  const secondaryButtonAttributes: ModalWindowActionButtonProps = useMemo(() => ({
    show: true,
    text: 'Reset',
    onClick: onSecondaryButtonClick,
  }), [onSecondaryButtonClick]);

  return (
    <ModalWindow
      title={title}
      primaryButton={primaryButtonAttributes}
      secondaryButton={secondaryButtonAttributes}
      onClose={onClose}
    >
      {children}
    </ModalWindow>
  );
}
