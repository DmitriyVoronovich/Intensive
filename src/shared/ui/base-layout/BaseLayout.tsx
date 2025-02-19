import { ReactNode } from 'react';
import css from './BaseLayout.module.css';

interface Props {
  header?: ReactNode;
  outlet?: ReactNode;
}

export const BaseLayout = ({ header, outlet }: Props) => {
  return (
    <div className={css.container}>
      <div>
        <div>{header}</div>
        <div>{outlet}</div>
      </div>
    </div>
  );
};
