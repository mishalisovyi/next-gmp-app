import React, { memo, MouseEventHandler, useMemo } from 'react';

import { ButtonType } from 'common/enums';

interface ButtonProps {
  type: ButtonType;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const getCssClassesByButtonType = (type: ButtonType): string => {
  return {
    [ButtonType.Primary]: 'button--primary',
    [ButtonType.Secondary]: 'button--secondary',
    [ButtonType.Tertiary]: 'button--small button--tertiary',
    [ButtonType.Menu]: 'button--menu',
    [ButtonType.Transparent]: 'button--transparent',
    [ButtonType.Search]: 'button--search',
  }[type];
};

function ButtonComponent({ onClick, type, text }: ButtonProps) {
  const buttonClasses = useMemo(() => getCssClassesByButtonType(type), [type]);

  return <button type="button" className={`button ${buttonClasses}`} onClick={onClick}>{text}</button>;
}

ButtonComponent.defaultProps = {
  onClick: () => { },
};

export const Button = memo(ButtonComponent);
