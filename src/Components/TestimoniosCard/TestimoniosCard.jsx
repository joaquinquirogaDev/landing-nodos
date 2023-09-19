//style
import style from './TestimoniosCard.module.css'


export const TestimoniosCard = ({nombre,descripcion,img,testimonio,handleClick}) => {
  return (
    <>
      <div className={style.testimoniosItem}>
          <img className={style.testimoniosItemImg} src={img} alt={nombre} />
          <div className={style.testimoniosItemContent}>
              <p className={style.testimoniosItemDescripcion}>
                  {descripcion}
              </p>
          </div>
          <div className={style.testimoniosItemInfo}>
              <p className={style.testimoniosItemNombre}>{nombre}</p>
              <button onClick={() => handleClick({nombre,descripcion,img,testimonio})} className={style.testimoniosItemButton}>Ver mas</button>
          </div>
      </div>
      
    </>
  )
}
