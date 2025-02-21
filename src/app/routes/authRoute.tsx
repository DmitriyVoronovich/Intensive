import { BaseLayout } from '../../shared';
import { useOutlet } from 'react-router-dom';
import { Header } from '../../shared/ui/header';

export const AuthRoute = () => {
  const outlet = useOutlet();
  return <BaseLayout 
    header={
      <Header 
        phone='+7 495 455 48 15' 
        onBuy={() => console.log('Купить')}
        onEnter={() => console.log('Вошёл')}
        />
    } 
    outlet={outlet} 
    />;
};
