import { TGameDetails } from '../../types';
import css from './GameInformation.module.css';

interface GameInformationProps {
  details: TGameDetails;
}

export function GameInformation({details}: GameInformationProps) {
  return (
    <div className={css.game_card}>
      <h5 className={css.game_title}>{details.name}</h5>
      <div className={css.content}>
        <img className={css.picture} src={details.background_image} alt="картинка с игрой" />
        <div className={css.block_game_information}>
          <ul className={css.game_information}>
            <li className={css.information}>Дата обновления: <span className={css.style_word}>{details.updated}</span></li>
            <li className={css.information}>Описание:</li>
            <li className={css.style_word} dangerouslySetInnerHTML={{ __html: details.description }}></li>
            <li className={css.information}>Официальный сайт: <a className={css.style_web} href={details.website} target="_blank">{details.website}</a></li>
            <li className={css.information}>Обновление: <span className={css.style_word}>{details.updated}</span></li>
            <li className={css.information}>Релиз: <span className={css.style_word}>{details.released}</span></li>
            <li className={css.information}>Время игры: <span className={css.style_word}>{details.playtime} h</span> </li>
          </ul>
        </div>  
      </div>
    </div>
  );
}

