//styles
import style from './CardInscripciones.module.css'
//images 
import fondo from '../../assets/fondo/fondoInscripciones.png'
import qr from '../../assets/Qrinscripciones.png'
import { Button } from '../Button/Button'
export const CardInscripciones = () => {
    return (
        <div className={style.cardInscripcionesBox}>
            <div className={style.cardInscripcionesContainer}>

                <div style={{backgroundImage:`url(${fondo})`}} className={style.img}></div>
                {/* <img className={style.fondo} src={fondo} alt="" /> */}


                <div className={style.infoInscripcionesBox}>
                    <div className={style.infoInscripcionesContainer}>
                        <div className={style.textLeft}>
                            <p className={style.textLeftParrafo}>¡INSCRIPCIONES</p>
                            <span className={style.textLeftSpan} >ABIERTAS!</span>
                            <p className={style.textLeftParrafo}>CICLO LECTIVO 2024</p>
                        </div>
                        <div className={style.textMiddle}>
                            <div className={style.textMiddleItem}>
                                <h1 className={style.textMiddleItemTitle}>NIVEL INICIAL</h1>
                                <p className={style.textMiddleItemParrafo}>Salas de 3,4,5 turnos mañana y tarde</p>
                            </div>
                            <div className={style.textMiddleItem}>
                                <h1 className={style.textMiddleItemTitle}>NIVEL PRIMARIO</h1>
                                <p className={style.textMiddleItemParrafo}> De primero a sexto grado en los turnos de mañana y tarde</p>
                            </div>
                        </div>
                        <div className={style.textRight}>
                            <img src={qr} alt="QR" />
                        </div>
                    </div>

                    <Button widthButton='85%'>Pre-inscríbete  aquí </Button>

                </div>

            </div>

        </div>
    )
}
