//style
import style from './TestimoniosCard.module.css'

export const TestimoniosCard = ({nombre,descripcion,img}) => {
  return (
    <div className={style.testimoniosItem}>
        <img className={style.testimoniosItemImg} src={img} alt={nombre} />
        <div className={style.testimoniosItemContent}>
            <p className={style.testimoniosItemDescripcion}>
                {descripcion}
            </p>
        </div>
        <div className={style.testimoniosItemInfo}>
            <p className={style.testimoniosItemNombre}>{nombre}</p>
            <button className={style.testimoniosItemButton}>Ver mas</button>
        </div>
    </div>
  )
}
