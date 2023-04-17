import "./PaginaPuntos.css";
import { DefaultImage } from "../DefaultImage/DefaultImage";

export const PaginaPuntos = (props) => {
  return (
    <DefaultImage
      reverse={props.reverse}
      src="/img/avance-rapido.png"
      alt="Botón para marcar más puntuaciones"
    ></DefaultImage>
  );
};
