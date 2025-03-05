import './GameInformation.css';

export function GameInformation() {
  return (
    <div className="game-card">
      <h5 className="game-title">Название игры</h5>
      <div className="content">
        <img className="picture" src="./images/b.jpg" alt="картинка с игрой" />
        <div className="block-game-information">
          <ul className="game-information">
            <li className="information">Дата обновления:</li>
            <li className="information">Жанр:</li>
            <li className="information">Издатель:</li>
            <li className="information">Платформа:</li>
            <li className="information">Тип издания:</li>
            <li className="information">Язык интерфейса:</li>
            <li className="information">Язык озвучки:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
