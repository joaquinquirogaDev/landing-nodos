//styles
import style from './Tarjetas.module.css'
//images
import logoIngles from '../../assets/logoIngles.png'

export const TarjetaIngles = ({parrafo,titulo}) => {
  return (
    <div className={style.tarjetaIngles}>
        <div className={style.tarjetaInglesLeft}>
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
        </div>

        <div className={style.imgContainer}>
            <img src={logoIngles} alt="" />
        </div>
    </div>
  )
}
