import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  SearchOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../types';
import { logoutUser, selectUser, setClearSearch } from '../../../entities';
import { STORAGE_KEYS } from '../../constant';
import { BaseButton } from '../base-button';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useAppSelector(selectUser);
  const isActive = (path: string) => location.pathname === path;

  const handleSignUp = () => navigate(PATHS.SIGNUP);
  const handleSignIn = () => navigate(PATHS.SINGNIN);
  const handleHistoryClick = () => navigate(PATHS.HISTORY);
  const handleFavoritesClick = () => navigate(PATHS.FAVORITES);
  const handleSearchClick = () => navigate(PATHS.SEARCH);
  const handleHomeClick = () => dispatch(setClearSearch());

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    dispatch(logoutUser());
    navigate(PATHS.HOME);
  };

  return (
    <header className={css.head}>
      <Link className={css.logo} to={PATHS.HOME} onClick={handleHomeClick}>
        <Logo alt={'логотип'} onClick={handleHomeClick} />
      </Link>
      {user ? (
        <div className={css.userActions}>
          <div className={css.buttons}>
            <BaseButton
              buttonCategory={'general'}
              isActive={isActive(PATHS.SEARCH)}
              onClick={handleSearchClick}
            >
              <SearchOutlined /> Поиск
            </BaseButton>
            <BaseButton
              buttonCategory={'general'}
              isActive={isActive(PATHS.FAVORITES)}
              onClick={handleFavoritesClick}
            >
              <HeartOutlined /> Избранное
            </BaseButton>
            <BaseButton
              buttonCategory={'general'}
              isActive={isActive(PATHS.HISTORY)}
              onClick={handleHistoryClick}
            >
              <ClockCircleOutlined /> История
            </BaseButton>
          </div>
          <div className={css.profile}>
            <div className={css.user}>
              <UserOutlined className={css.avatarIcon} />
              <span className={css.username}>{user.username}</span>
            </div>
            <BaseButton buttonCategory={'logout'} onClick={handleLogout}>
              <LogoutOutlined />
            </BaseButton>
          </div>
        </div>
      ) : (
        <div className={css.guestActions}>
          <BaseButton buttonCategory={'general'} onClick={handleSignUp}>
            <UserAddOutlined />
            Регистрация
          </BaseButton>
          <BaseButton buttonCategory={'general'} onClick={handleSignIn}>
            <LoginOutlined />
            Вход
          </BaseButton>
        </div>
      )}
    </header>
  );
};
