import { BaseLayout } from '../../shared/ui';
import { useOutlet } from 'react-router-dom';

export const AuthRoute = () => {
  const outlet = useOutlet();

  return <BaseLayout header={<div></div>} outlet={outlet} />;
};
