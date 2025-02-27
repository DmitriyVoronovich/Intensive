import { ReactNode } from 'react';
import css from './BaseLayout.module.css';

interface Props {
  header?: ReactNode;
  outlet?: ReactNode;
}

export const BaseLayout = ({ header, outlet }: Props) => {
  return (
    <div className={css.page}>
      <div className={css.container}>
        <div className={css.header}>{header}</div>
        <div className={css.outlet}>{outlet}</div>
      </div>
    </div>
  );
};
