//styles
import style from './CartelNiveles.module.css'
export const CartelNiveles = ({bgColor,subtitulo,titulo,subtitulo2,parrafo}) => {
  return (
    <div style={{backgroundColor:bgColor}} className={style.cartelNiveles}>
        <div className={style.cartelNivelesLeft}>
            <span className={style.cartelNivelesSubtitulo}>{subtitulo}</span>
            <div className="">
                <h1>{titulo}</h1>
                <span>{subtitulo2}</span>
            </div>
        </div>
        <div className={style.cartelNivelesRight}>
            <p>{parrafo}</p>
        </div>
    </div>
  )
}
