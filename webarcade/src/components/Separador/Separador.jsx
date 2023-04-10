import PropTypes from "prop-types";

export const Separador = (props) => {
  const height = props.size * 10 + "px";

  const style = {
    height,
  };

  return <div style={style}></div>;
};

Separador.propTypes = {
  size: PropTypes.number
};

Separador.defaultProps = {
  size: 3
};
