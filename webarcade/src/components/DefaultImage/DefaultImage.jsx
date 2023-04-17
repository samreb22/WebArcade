import React, { useState } from "react";

export const DefaultImage = (props) => {
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
      onClick={props.onClick}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseOverHandler}
      className={"pagina_puntos_img " + reverse + " " + activeClass}
      src={props.src}
      alt={props.alt}
    />
  );
};
