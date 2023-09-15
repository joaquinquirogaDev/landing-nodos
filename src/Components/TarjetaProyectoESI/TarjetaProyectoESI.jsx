import style from './TarjetaProyectoESI.module.css'
//images
import ProyectoESI from '../../assets/ProyectoESI.png'
export const TarjetaProyectoESI = ({parrafo}) => {
  return (
    <div className={style.TarjetaContainer}>
        <div className={style.imgContainer}>
            <img src={ProyectoESI} alt='' />
        </div>
        <div className={style.TarjetaInfo}>
            <h1 className={style.TestimoniosInfoTtile}>Proyecto E.S.I. - Educación Sexual Integral en el Colegio San Agustín</h1>
            <p className={style.parrafo}>{parrafo}</p>
        </div>
</div>
  )
}
