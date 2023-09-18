//imagenes
import imgClose from '../../assets/close.png'

//estilos
import './Modal.css'


const HandleCloseOff = (e) => {
    e.stopPropagation();
}

export const Modal = ({ IsopenModal, HandleClose, children, titulo }) => {
    return (
        <div className={`modal ${IsopenModal && 'modalOpen'}`} onClick={HandleClose}>
            <div className="containerModal" onClick={HandleCloseOff}>

                <div className="top">
                    <h1>{titulo}</h1>
                    <img src={imgClose} alt="Close" onClick={HandleClose} />
                </div>
                {children}
            </div>
        </div>
    )
}