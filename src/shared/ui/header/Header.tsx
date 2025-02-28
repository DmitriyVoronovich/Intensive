import './Header.css';
import Logo from '@assets/logo.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constant';

export const Header = () => {
  const navigate = useNavigate();

  const onBuy = () => console.log('Купить');

  const onEnter = () => navigate(PATHS.SINGNIN);

  return (
    <header className="head">
      <Logo className={'img'} alt={'логотип'} />

      <div className="block_phone_buttons">
        <button className="buy" onClick={onBuy}>
          Купить игру
        </button>
        <button className="exit" onClick={onEnter}>
          Вход
        </button>
      </div>
    </header>
  );
};
