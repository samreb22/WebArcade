import { Puntuacion } from "../Puntuacion/Puntuacion"

export const ListaPuntuaciones = (props) => {

    return (
        <div>
            {props.puntuaciones.map((puntuacion, index) => {
                return (
                    <Puntuacion key={"Puntuacion_" + index} puntuacion={puntuacion}></Puntuacion>
                );
            })}
        </div>
    )
}
