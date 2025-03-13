import React, { ReactNode } from 'react';
import classNames from 'classnames';
import css from './BaseButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: 'button' | 'submit';
  buttonCategory?:
    | 'general'
    | 'logout'
    | 'favorite'
    | 'submit'
    | 'table'
    | 'default';
  isActive?: boolean;
}

export const BaseButton = ({
  type = 'button',
  children,
  buttonCategory = 'default',
  isActive,
  ...rest
}: Props) => {
  const buttonClassName = classNames({
    [css.buttonGeneral]: buttonCategory === 'general',
    [css.buttonLogout]: buttonCategory === 'logout',
    [css.buttonFavorite]: buttonCategory === 'favorite',
    [css.buttonSubmit]: buttonCategory === 'submit',
    [css.buttonTable]: buttonCategory === 'table',
    [css.buttonDefault]: buttonCategory === 'default',
    [css.buttonActive]: isActive,
  });
  return (
    <button
      {...rest}
      type={buttonCategory === 'submit' ? 'submit' : type}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};
