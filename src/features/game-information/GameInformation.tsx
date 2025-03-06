import { GameDetails } from '../../types';
import css from './GameInformation.module.css';

interface GameInformationProps {
  details: GameDetails;
}

export function GameInformation({details}: GameInformationProps) {
  return (
    <div className={css.game_card}>
      <h5 className={css.game_title}>{details.name}</h5>
      <div className={css.content}>
        <img className={css.picture} src={details.background_image} alt={details.name_original} />
        <div className={css.block_game_information}>
          <div className={css.game_information}>
            <div className={css.information}>Дата обновления: <span className={css.style_word}>{details.updated}</span></div>
            <div className={css.information}>Описание:</div>
            <div className={css.style_word}>{details.description_raw}</div>
            <div className={css.information}>Официальный сайт: <a className={css.style_web} href={details.website} target="_blank">{details.website}</a></div>
            <div className={css.information}>Обновление: <span className={css.style_word}>{details.updated}</span></div>
            <div className={css.information}>Релиз: <span className={css.style_word}>{details.released}</span></div>
            <div className={css.information}>Время игры: <span className={css.style_word}>{details.playtime} h</span> </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

