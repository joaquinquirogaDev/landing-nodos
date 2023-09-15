import style from './DeporteNovedades.module.css'
//images
import fondoDeporte from '../../assets/fondo/fondoDeporte.jpg'
import { deporte } from '../../Data/data'
export const DeporteNovedades = () => {
  return (
    <section className={style.boxDeportNovedades}>
        <div className={style.containerDeporteNovedades}>
            <div style={{backgroundImage:`url(${fondoDeporte})`}} className={style.img}></div>
            {/* <img  className={style.imgNovedades} src={fondoDeporte} alt="deporte" /> */}

            <div className={style.infoDeporte}>
                <div className={style.textDeporte}>
                    <h1>Deportes San Agustín </h1>
                        <p>Nuestra propuesta educativa va más allá de las aulas y se extiende al campo deportivo. A través de nuestro programa de formación deportiva integral, ofrecemos a los estudiantes la oportunidad de desarrollar habilidades deportivas, aprender valores esenciales y cultivar su pasión por el juego en instalaciones especializadas externas al colegio.</p>
                        <p>Contamos con entrenadores altamente calificados que no solo enseñan técnicas deportivas, sino que también inculcan valores fundamentales como el trabajo en equipo, la disciplina y el respeto.</p>
                </div>
                <div className={style.DeporteNovedadesCard}>
                    {
                        deporte.map((item,index)=> (
                            <div key={index} className={style.cardItemNovedades}>
                                <img src={item.img} alt={item.titulo} />
                                <div className={style.cardItemInfo}>
                                    <h1>{item.titulo}</h1>
                                    <p>Categorias:</p>
                                    <span>{item.categorias}</span>
                                    <p>Dias:{item.dias}</p>
                                </div>
                                <button className={style.ButtonNovedades}>Inscribirte aquí</button>
                            </div>
                        ))
                    }
                </div>
                <button className={style.ButtonDiciplinas}>TODAS LAS DICIPLINAS de 18:15hs a 19:45hs</button>


            </div>
        </div>
    </section>
  )
}
