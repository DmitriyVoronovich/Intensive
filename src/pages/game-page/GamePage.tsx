import { useParams } from 'react-router-dom';
import { GameInformation } from '../../features/game-information';
import { useAppDispatch, useAppSelector } from '../../types';
import { gameDetailsState } from '../../entities/gameDetails/model/selectors';
import { getGameDetails } from '../../entities';
import { useEffect } from 'react';

export const GamePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const state = useAppSelector(gameDetailsState);

  useEffect(() => {
    if(id) dispatch(getGameDetails(id));
  }, [dispatch, id]);

  return state.loading ? <p style={{ color: "rgb(80, 205, 100)" }}>идёт загрузка</p> : state.details && <GameInformation details={state.details} />;
};
