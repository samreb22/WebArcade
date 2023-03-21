import './Titulo.css';

export const Titulo = (props) => {
    // Estilos en línea
    const style = {
        textAlign: props.posicion,
    }

  return (
    <h1 style={style} className="titulo">{props.texto}</h1>
  )
}
