import { ReactNode } from 'react';
import css from './SelectItemWrapper.module.css';

type Props = {
  name: string;
  children: ReactNode;
};

export const SelectItemWrapper = ({ name, children }: Props) => {
  return (
    <div className={css.selectItem}>
      <span>{name}</span>
      {children}
    </div>
  );
};
