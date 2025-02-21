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
        <div className='header'>{header}</div>
        <div className='outlet'>{outlet}</div>
      </div>
    </div>
  );
};
