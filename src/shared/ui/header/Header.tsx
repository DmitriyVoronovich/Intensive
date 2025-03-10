import { Link, useNavigate } from 'react-router-dom';
import css from './Header.module.css';
import Logo from '@assets/logo.svg?react';
import { PATHS } from '../../constant';
import {
  LogoutOutlined,
  UserOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  LoginOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../types';
import {logoutUser, selectUser, setClearSearch} from '../../../entities';
import { STORAGE_KEYS } from '../../constant';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);

  const handleSignUp = () => navigate(PATHS.SIGNUP);
  const handleSignIn = () => navigate(PATHS.SINGNIN);
  const handleHistoryClick = () => navigate(PATHS.HISTORY);
  const handleFavoritesClick = () => navigate(PATHS.FAVORITES);
  const handleHomeClick = () => dispatch(setClearSearch());


  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    dispatch(logoutUser());
    navigate(PATHS.HOME);
  };

  return (
    <header className={css.head}>
      <Link to={PATHS.HOME} onClick={handleHomeClick}>
        <Logo alt={'логотип'} onClick={handleHomeClick}/>
      </Link>
      {user ? (
        <div className={css.userActions}>
          <button
            className={css.userActionButton}
            onClick={handleFavoritesClick}
          >
            <HeartOutlined /> Избранное
          </button>
          <button className={css.userActionButton} onClick={handleHistoryClick}>
            <ClockCircleOutlined /> История
          </button>
          <div className={css.profile}>
            <UserOutlined className={css.avatarIcon} />
            <span className={css.username}>{user.username}</span>
          </div>
          <button className={css.logoutButton} onClick={handleLogout}>
            <LogoutOutlined />
          </button>
        </div>
      ) : (
        <div className={css.guestActions}>
          <button className={css.signUpButton} onClick={handleSignUp}>
            <UserAddOutlined />
            Регистрация
          </button>
          <button className={css.signInButton} onClick={handleSignIn}>
            <LoginOutlined />
            Вход
          </button>
        </div>
      )}
    </header>
  );
};
