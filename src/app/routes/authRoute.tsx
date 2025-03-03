import { BaseLayout } from '../../shared';
import { useOutlet } from 'react-router-dom';
import { Header } from '../../shared';

export const AuthRoute = () => {
  const outlet = useOutlet();
  return <BaseLayout header={<Header/>} outlet={outlet}/>;
};