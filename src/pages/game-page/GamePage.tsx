import { useParams } from 'react-router-dom';
import { GameInformation } from '../../features/game-information';
import { useAppDispatch, useAppSelector } from '../../types';
import {
  selectGameDetails,
  selectGameDetailsLoading,
} from '../../entities/gameDetails/model';
import { getGameDetails } from '../../entities';
import { useEffect } from 'react';
import css from './GamePage.module.css';

export const GamePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const details = useAppSelector(selectGameDetails);
  const loading = useAppSelector(selectGameDetailsLoading);

  useEffect(() => {
    if (id) {
      dispatch(getGameDetails(id));
    }
  }, [dispatch, id]);

  return loading ? (
    <div className={css.container}>
      <p style={{ color: "rgb(80, 205, 100)" }}>идёт загрузка</p>
    </div>
  ) : (
    details && <GameInformation details={details} />
  );
};
