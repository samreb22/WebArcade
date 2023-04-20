import { GameLayout } from "../../components/Layouts/GameLayout";
import { useNavigate } from "react-router-dom";
import { useFetchGames } from "../../services/useFetchGames";

const GameSelectionPage = () => {
  const navigate = useNavigate();
  const { listaJuegos } = useFetchGames();

  const onClickHandler = (target) => {
    navigate("/levels/" + target);
  };

  return (
    <GameLayout texto="Selección de juegos">
      {listaJuegos.map((juego, index) => {
        return (
          <div key={index} onClick={() => onClickHandler(juego.name)}>
            {juego.name}
          </div>
        );
      })}
    </GameLayout>
  );
};

export default GameSelectionPage;
