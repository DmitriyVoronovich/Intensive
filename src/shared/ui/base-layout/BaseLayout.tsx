import { ReactNode } from 'react';

interface Props {
  header?: ReactNode;
  outlet?: ReactNode;
}

export const BaseLayout = ({ header, outlet }: Props) => {
  return (
    <div>
      <div>
        <div>{header}</div>
        <div>{outlet}</div>
      </div>
    </div>
  );
};
