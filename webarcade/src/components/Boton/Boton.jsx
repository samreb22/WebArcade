import PropTypes from "prop-types";
import "./Boton.css";

export const Boton = (props) => {
  return (
    <div className="boton" onClick={props.onClick}>
      {props.texto}
    </div>
  );
};

Boton.propTypes = {
  onClick: PropTypes.func,
  texto: PropTypes.string,
};

Boton.defaultProps = {
  onClick: () => {
    console.log("Función no implementada");
  },
  texto: "",
};
