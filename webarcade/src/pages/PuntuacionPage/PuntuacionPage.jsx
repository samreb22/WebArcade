import { Boton } from "../../components/Boton/Boton";
import { CajaPuntos } from "../../components/CajaPuntos/CajaPuntos";
import { Separador } from "../../components/Separador/Separador";
import { Titulo } from "../../components/Titulo/Titulo";

import { useHistory } from "react-router-dom";

export const PuntuacionPage = () => {
  let history = useHistory();

  // Estilos en línea
  const style = {
    backgroundColor: "gray",
    height: "100%",
    width: "100%",
  };

  const navigateToJuegoPage = () => {
    console.log("Navegar a juego");
    history.push("/juego");
  };

  return (
    <div style={style} className="puntuacion_page">
      <Titulo posicion="center" texto="React Arcade"></Titulo>
      <Separador size={3}></Separador>
      <CajaPuntos></CajaPuntos>
      <Separador size={3}></Separador>
      <Boton onClick={navigateToJuegoPage} texto="Jugar"></Boton>
    </div>
  );
};
