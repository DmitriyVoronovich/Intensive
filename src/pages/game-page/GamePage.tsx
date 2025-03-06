import { useParams } from 'react-router-dom';
import { GameInformation } from '../../features/game-information';
import { useAppDispatch, useAppSelector } from '../../types';
import { gameDetailsState } from '../../entities/gameDetails/model/selectors';
import { getGameDetails } from '../../entities';
import { useEffect } from 'react';
import css from './GamePage.module.css';

export const GamePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const state = useAppSelector(gameDetailsState);

  useEffect(() => {
    if (id) dispatch(getGameDetails(id));
  }, [dispatch, id]);

  return state.loading ? (
    <div className={css.container}>
      <p style={{ color: "rgb(80, 205, 100)" }}>идёт загрузка</p>
    </div>
  ) : (
    state.details && <GameInformation details={state.details} />
  );
};
