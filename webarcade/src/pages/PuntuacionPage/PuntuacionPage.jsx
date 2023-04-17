import { Boton } from "../../components/Boton/Boton";
import { CajaPuntos } from "../../components/CajaPuntos/CajaPuntos";
import { GameLayout } from "../../components/Layouts/GameLayout";
import { Separador } from "../../components/Separador/Separador";

import { useNavigate } from "react-router-dom";

export const PuntuacionPage = () => {
  const navigate = useNavigate();

  const navigateToJuegoPage = () => {
    navigate("/juego");
  };

  return (
    <GameLayout texto="Puntuación">
      <CajaPuntos></CajaPuntos>
      <Separador size={3}></Separador>
      <Boton onClick={navigateToJuegoPage} texto="Jugar"></Boton>
    </GameLayout>
  );
};
