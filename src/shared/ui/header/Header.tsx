import './Header.css';
import Logo from '@assets/logo.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constant';

interface HeaderProps {
  phone: string;
}

export const Header = ({ phone }: HeaderProps) => {
  const navigate = useNavigate();

  const onBuy = () => console.log('Купить');

  const onEnter = () => navigate(PATHS.SINGNIN);

  return (
    <header className="head">
      <Logo className={'img'} alt={'логотип'} />

      <div className="block_phone_buttons">
        <span className="phone">{phone}</span>
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
