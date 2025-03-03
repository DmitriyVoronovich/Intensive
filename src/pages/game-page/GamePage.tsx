import { useParams } from "react-router-dom";

export const GamePage = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Страница игры {id}</h1>
      <p>Информация об игре {id}</p>
    </div>
  )
}
