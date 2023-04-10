import { useState } from "react";
import "./PaginaPuntos.css";

export const PaginaPuntos = (props) => {
  const [active, setActive] = useState(false);

  const reverse = props.reverse ? "pagina_puntos_img_rotate" : "";
  const activeClass = active ? "pagina_puntos_activa" : "";

  const onMouseEnterHandler = () => {
    setActive(true);
  };
  const onMouseOverHandler = () => {
    setActive(false);
  };

  return (
    <img
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseOverHandler}
      className={"pagina_puntos_img " + reverse + " " + activeClass}
      src="img/avance-rapido.png"
      alt="Botón para marcar más puntuaciones"
    />
  );
};
