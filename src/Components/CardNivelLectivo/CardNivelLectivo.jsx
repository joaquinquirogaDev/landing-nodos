//styles
import style from './CardNivelLectivo.module.css'
export const CardNivelLectivo = ({ item }) => {
    return (
        <div className={style.Container}>
            <h1>{item.titulo}</h1>
            <img className={style.imgLectivo} src={item.img} alt="" />

            <button className={style.buttonCardNivel}>Ciclo Lectivo</button>
        </div>
    )
}
