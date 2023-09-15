import style from './NivelesInfoDown.module.css'

export const NivelesInfoDown = ({photo,titulo,titulo2,titulo3,parrafo,parrafo2,parrafo3,titulo4,parrafo4}) => {
  return (
    <div className={style.NivelesInfoDown}>

        <div className={style.imgNivelesInfoUp}>
            <img src={photo} alt="" />
        </div>
        <div className={style.NivelesInfoLeft}>
            <h2>{titulo}</h2>
            <p>{parrafo}</p>

            <h2>{titulo2}</h2>
            <p>{parrafo2}</p>

            <h2>{titulo3}</h2>
            <p>{parrafo3}</p>
            <h2>{titulo4}</h2>
            <p>{parrafo4}</p>
        </div>

        
    </div>
  )
}
