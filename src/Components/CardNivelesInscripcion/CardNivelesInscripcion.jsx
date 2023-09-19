//styles
import { Button } from '../Button/Button'
import style from './CardNivelesInscripcion.module.css'
//images
import fondo from '../../assets/fondo/fondoInscripciones.png'
export const CardNivelesInscripcion = ({nivel,parrafo }) => {
  return (
    <div className={style.cardInscripcionesBox}>
            <div className={style.cardInscripcionesContainer}>

                <div style={{backgroundImage:`url(${fondo})`}} className={style.img}></div>


                <div className={style.infoInscripcionesBox}>
                    <div className={style.infoInscripcionesContainer}>
                        <div className={style.textLeft}>
                            <p className={style.textLeftParrafo}>¡INSCRIPCIONES</p>
                            <span className={style.textLeftSpan} >ABIERTAS!</span>
                            <p className={style.textLeftParrafo}>CICLO LECTIVO 2024</p>
                        </div>
                        <div className={style.textMiddle}>
                            <div className={style.textMiddleItem}>
                                <h1 className={style.textMiddleItemTitle}>{nivel}</h1>
                                <p className={style.textMiddleItemParrafo}>{parrafo}</p>
                            </div>
                        </div>
                        
                    </div>

                    <Button widthButton='75%'>Pre-inscríbete  aquí </Button>

                </div>

            </div>

        </div>
  )
}
