//style
import style from './Deporte.module.css'
//images
import fondoDeporte from '../../assets/fondo/fondoDeporte.jpg'

export const Deporte = () => {
  return (
    <section className={style.boxDeporte}>
        <div className={style.containerDeporte}>
            <img className={style.imgFondoDeporte} src={fondoDeporte} alt="deporte" />

            <div className={style.infoDeporte}>
                <h1>Deportes San Agustín </h1>
                <div className="">
                    <p>Súmate a hacer deporte en nuestro cole</p>
                    <p>Para chicas y chicos de 6 a 12 años </p>
                    <p>de 18:15 hs a 19:45 hs - Todas las disciplinas </p>
                </div>
                <h1>COMIENZA LUNES 1 DE AGOSTO</h1>
            </div>
        </div>
    </section>
  )
}
