import { ReactNode } from 'react';
import './Header.css';
import Logo from '@assets/logo.svg?react';


interface HeaderProps{
  phone: string,
}

export const Header = ({phone}: HeaderProps) => {
  
  const onBuy = () => console.log('Купить');

  const onEnter = () => console.log('Вошёл');
  
  return (
  <header className='head'>

    <Logo className={'img'} alt={'логотип'}/>

    <div className="block_phone_buttons">
      <span className="phone">{phone}</span>
      <button className="buy" onClick={onBuy}>Купить игру</button>
      <button className="entrance" onClick={onEnter}>Вход</button>
    </div>
  </header>
  );
}