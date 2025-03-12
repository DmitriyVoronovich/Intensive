import { useParams } from 'react-router-dom';
import { GameInformation } from '../../features/game-information';
import { useAppDispatch, useAppSelector } from '../../types';
import {
  selectGameDetalis,
  selectGameDetalisLoading
} from '../../entities/gameDetails/model/selectors';
import { getGameDetails } from '../../entities';
import { useEffect } from 'react';
import css from './GamePage.module.css';
import {getGameScreenshots} from "../../entities/gameDetails";

export const GamePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const details = useAppSelector(selectGameDetalis);
  const loading = useAppSelector(selectGameDetalisLoading);

  useEffect(() => {
    if (id) {
      dispatch(getGameDetails(id));
      dispatch(getGameScreenshots(id));
    }
  }, []);

  return loading ? (
    <div className={css.container}>
      <p style={{ color: "rgb(80, 205, 100)" }}>идёт загрузка</p>
    </div>
  ) : (
    details && <GameInformation details={details} />
  );
};
