import { ReactNode } from 'react';
import './BaseLayout.css'; 

interface Props {
  header?: ReactNode;
  outlet?: ReactNode;
}

export const BaseLayout = ({ header, outlet }: Props) => {
  return (
    <div>
      <div>
        <div className='header'>{header}</div>
        <div className='outlet'>{outlet}</div>
      </div>
    </div>
  );
};
