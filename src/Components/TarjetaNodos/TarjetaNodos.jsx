import { Button } from '../Button/Button'
//styles e img
import style from './TarjetasNodos.module.css'
import nodos from '../../assets/DigitaNodos.png'
import imgModal from '../../assets/imgModalNodos.png'
import imgModal1 from '../../assets/nodosModal.png'
//HOOKS
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal/Modal'

export const TarjetaNodos = () => {
    const [IsopenModal, HandleClose, HandleOpen] = useModal()

    const handleOpenModal = () => {
        HandleOpen()
    }
    return (
        <div className={style.TestimonioUp}>
            <div className={style.TestimoniosLeft}>
                <h1 className={style.TestimoniosLeftTtile}>Digitalizando la Educación: Tu Conexión con el Futuro Escolar</h1>
                <p className={style.parrafo}>En el Colegio San Agustín, estamos comprometidos en brindar una experiencia educativa completa y moderna.</p>
                <p className={style.parrafo}>
                    Es por eso que hemos implementado la plataforma digital “NODOS”  diseñada para agilizar y mejorar nuestras comunicaciones con los padres, estudiantes y la comunidad educativa en general.</p>
                <Button handleClick={handleOpenModal} widthButton='100%' >CONOCE MÁS</Button>

            </div>
            <div className={style.imgNodos}>
                <img src={nodos} alt="Nodos" />
            </div>

            <Modal
                titulo='Digitalizando la Educación'
                IsopenModal={IsopenModal}
                HandleClose={HandleClose}
            >
                <div className={style.modalBox}>
                    <div className={style.imgContainerModal}>
                            <img src={imgModal} alt="" />
                        </div>
                    <div className={style.modalContainer}>

                        <div className={style.TestimoniosLeft}>
                            <h1 className={style.TestimoniosLeftTtile}>Digitalizando la Educación: Tu Conexión con el Futuro Escolar</h1>
                            <p className={style.parrafo}>En el Colegio San Agustín, estamos comprometidos en brindar una experiencia educativa completa y moderna.</p>
                            <p className={style.parrafo}>
                                Es por eso que hemos implementado la plataforma digital “NODOS”  diseñada para agilizar y mejorar nuestras comunicaciones con los padres, estudiantes y la comunidad educativa en general.
                            </p>

                            <h2 className={style.TestimoniosLeftTtile}>Simplificando la Comunicación: </h2>
                            <p className={style.parrafo}>Con nuestra plataforma digital, comunicarte con el colegio nunca ha sido tan sencillo. Desde recibir actualizaciones sobre el progreso académico de tu hijo hasta estar informado sobre los eventos escolares, nuestra plataforma te mantiene conectado y bien informado.</p>

                            <h2 className={style.TestimoniosLeftTtile}>Únete a la Revolución Digital: </h2>
                            <p className={style.parrafo}>Te invitamos a unirte a nuestra comunidad digital y aprovechar al máximo las ventajas de la plataforma. Simplifica tu vida escolar y mantén una comunicación fluida con el colegio en todo momento</p>
                        </div>

                        <img className={style.logoModal}  src={imgModal1} alt="" />
                    </div>
                </div>
                
               


            </Modal>
        </div>
    )
}
