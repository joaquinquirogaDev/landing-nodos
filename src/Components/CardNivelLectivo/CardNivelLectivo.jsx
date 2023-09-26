//styles
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal/Modal'
import style from './CardNivelLectivo.module.css'
export const CardNivelLectivo = ({ item }) => {

    const [IsopenModal,HandleClose,HandleOpen] = useModal(false);
    console.log(item)
    return (
        <>
            <div className={style.Container}>
                <h1>{item.titulo}</h1>
                <div className={style.imgLectivoCard}>
                <img className={style.imgLectivo} src={item.img} alt="" />
                </div>
               
                    <button onClick={HandleOpen}  className={style.buttonCardNivel}>Ciclo Lectivo</button>

            </div>
            {IsopenModal && (
                <Modal titulo={item.titulo} HandleClose={HandleClose} IsopenModal={IsopenModal}>
                    <div className={style.modalBox}>
                        <div className={style.imgContainerModal}>
                            <img src={item.imgModal} alt="" />
                        </div>
                        <div className={style.infoModal}>
                            <h1>{item.subtituloModal}</h1>
                            <p>{item.descripcionModal}</p>
                            <div className={style.infoSalas}>
                                {item.salas.map((sala,index) => (
                                    <div key={index} className={style.infoSalasItem}>
                                        <h2>{sala.tituloSala}</h2>
                                        {sala.descripcionSala?.split('\n').map((parrafo, index) => (
                                            <p key={index}>{parrafo}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}
