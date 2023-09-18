//style
import style from './Deporte.module.css'
//images
import fondoDeporte from '../../assets/fondo/fondoDeporte.jpg'
import deporte from '../../assets/deporte.png'
//componentes
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import { useModal } from '../../hooks/useModal'
//data
import { deporte as deporteModal } from '../../Data/data'

export const Deporte = () => {
    const [IsopenModal,HandleClose,HandleOpen] =useModal(false)

    const handleOpenModal =() => {
        console.log('hola')
        HandleOpen()
    }
  return (
    <section className={style.boxDeporte}>
        <div className={style.containerDeporte}>
            <div style={{backgroundImage:`url(${fondoDeporte})`}} className={style.img}></div>

            <div  className={style.infoDeporte}>
                <div className={style.textDeporte}>
                    <h1>Deportes San Agustín </h1>
                        <p>Súmate a hacer deporte en nuestro cole</p>
                        <p>Para chicas y chicos de 6 a 12 años </p>
                        <p>de 18:15 hs a 19:45 hs - Todas las disciplinas </p>
                    <h1>COMIENZA LUNES 1 DE AGOSTO</h1>

                    <Button
                        handleClick={handleOpenModal}
                    >
                        CONOCE MÁS
                    </Button>
                </div>
                <div className={style.imgDeporte}>
                    <img src={deporte} alt="" />
                </div>
            </div>
        </div>
        <Modal 
            titulo='Deportes San Agustín'
            IsopenModal={IsopenModal}
            HandleClose={HandleClose}        
        >
          <div className={style.containerModal}>
                <div className={style.infoModal}>
                    <h1>Deportes San Agustín : Más Allá del Aula</h1>
                    <p>Nuestra propuesta educativa va más allá de las aulas y se extiende al campo deportivo. A través de nuestro programa de formación deportiva integral, ofrecemos a los estudiantes la oportunidad de desarrollar habilidades deportivas, aprender valores esenciales y cultivar su pasión por el juego en instalaciones especializadas externas al colegio.</p>
                    <p>Contamos con entrenadores altamente calificados que no solo enseñan técnicas deportivas, sino que también inculcan valores fundamentales como el trabajo en equipo, la disciplina y el respeto.</p>
                </div>

                <div className={style.DeporteNovedadesCard}>
                    {
                        deporteModal.map((item,index)=> (
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
        </Modal>
    </section>
  )
}
