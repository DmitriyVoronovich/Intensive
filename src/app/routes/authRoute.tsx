import { BaseLayout, getUserFromLS, PATHS } from '../../shared';
import { Navigate, useOutlet } from 'react-router-dom';
import { Header } from '../../shared';

type Props = {
  isProtected?: boolean;
};

export const AuthRoute = ({ isProtected }: Props) => {
  const outlet = useOutlet();

  const user = getUserFromLS();

  if (!user && isProtected) {
    return <Navigate to={PATHS.SINGNIN} />;
  }

  return <BaseLayout header={<Header />} outlet={outlet} />;
};
