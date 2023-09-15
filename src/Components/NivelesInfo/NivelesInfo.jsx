import style from './NivelesInfo.module.css'

export const NivelesInfo = ({photo, titulo ,titulo2, parrafo ,parrafo2,titulo3 ,parrafo3}) => {
  return (
    <div className={style.NivelesInfoUp}>
        <div className={style.NivelesInfoLeft}>
            <h2>{titulo}</h2>
            <p>{parrafo}</p>
            <h2>{titulo2}</h2>
            <p>{parrafo2}</p>
            <h2>{titulo3}</h2>
            <p>{parrafo3}</p>
        </div>

        <div className={style.imgNivelesInfoUp}>
            <img src={photo} alt="" />
        </div>
    </div>
  )
}
