import { Puntuacion } from "../Puntuacion/Puntuacion"

export const ListaPuntuaciones = (props) => {

    return (
        <div>
            {props.puntuaciones.map(puntuacion => {
                return (
                    <Puntuacion puntuacion={puntuacion}></Puntuacion>
                );
            })}
        </div>
    )
}
