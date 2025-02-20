import { ReactNode } from 'react';
import './Header.css'


interface HeaderProps{
  phone: string,
  onBuy?: () => void,
  onEnter?: () => void
}

export const Header = ({phone, onBuy, onEnter}: HeaderProps) => {
  return (
  <header className='head'>
    <img className="logo" src='/logo.svg' alt="логотип" />
    <div className="block_phone_buttons">
      <span className="phone">{phone}</span>
      <button className="buy" onClick={() => onBuy && onBuy()}>Купить игру</button>
      <button className="exit" onClick={() => onEnter && onEnter()}>Вход</button>
    </div>
  </header>
  );
}