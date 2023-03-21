import './PaginaPuntos.css'

export const PaginaPuntos = (props) => {
    const reverse = props.reverse ? "pagina_puntos_img_rotate" : "";

    return (
        <img className={'pagina_puntos_img ' + reverse} src="img/avance-rapido.png" alt='flecha' />
    )
}
