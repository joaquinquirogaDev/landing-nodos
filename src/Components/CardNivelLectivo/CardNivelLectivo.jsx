//styles
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal/Modal'
import style from './CardNivelLectivo.module.css'
export const CardNivelLectivo = ({ item }) => {

    const [IsopenModal,HandleClose,HandleOpen] = useModal(false);
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
                            <h1>Ciclo Lectivo  2024</h1>
                            
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}
