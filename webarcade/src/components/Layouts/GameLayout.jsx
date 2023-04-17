import React from "react";
import { Titulo } from "../Titulo/Titulo";
import { DefaultImage } from "../DefaultImage/DefaultImage";
import imagenes from "../../config/imagenes.json";
import { Separador } from "../Separador/Separador";

export const GameLayout = (props) => {
  // Estilos en línea
  const style = {
    backgroundColor: "gray",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={style}>
      <div className="game_layout_header">
        <DefaultImage {...imagenes.flecha} reverse></DefaultImage>
        <Titulo posicion="center" texto={props.texto}></Titulo>
      </div>
      <div className="game_layout_body">
        <Separador size={3}></Separador>
        {props.children}
        <Separador size={3}></Separador>
      </div>
      <div className="game_layout_footer">
        <div>Barra inferior</div>
      </div>
    </div>
  );
};
