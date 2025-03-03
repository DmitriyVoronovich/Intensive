import './home.css';
import { HomeCards } from './home_cards';
import { HomeContent } from './home_content';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser, logoutUser } from '../../entities';
import { STORAGE_KEYS } from '../../shared';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    } else {
      dispatch(logoutUser());
    }
  }, [dispatch]);

  return (
    <div className="home">
      <HomeContent />
      <HomeCards />
    </div>
  );
};
