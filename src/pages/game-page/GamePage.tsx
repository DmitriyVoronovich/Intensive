import { useParams } from 'react-router-dom';
import { GameInformation } from '../../features/game-information';
import { useAppDispatch, useAppSelector } from '../../types';
import {
  selectGameDetails,
  selectGameDetailsLoading,
} from '../../entities/gameDetails';
import { getGameDetails } from '../../entities';
import { useEffect } from 'react';
import css from './GamePage.module.css';
import { getGameScreenshots } from '../../entities/gameDetails';
import { Spin } from 'antd';

export const GamePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const details = useAppSelector(selectGameDetails);
  const loading = useAppSelector(selectGameDetailsLoading);

  useEffect(() => {
    if (id) {
      dispatch(getGameDetails(id));
      dispatch(getGameScreenshots(id));
    }
  }, []);

  return loading ? (
    <div className={css.container}>
      <Spin size="large" />
    </div>
  ) : (
    details && <GameInformation details={details} />
  );
};
