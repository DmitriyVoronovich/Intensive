import { ReactNode } from 'react';
import css from './InformationWrapper.module.css';

type Props = {
  name: string;
  children: ReactNode;
};

export const InformationWrapper = ({ name, children }: Props) => {
  return (
    <div className={css.descriptionWrapper}>
      <h3 className={css.title}>{name}</h3>
      {children}
    </div>
  );
};
