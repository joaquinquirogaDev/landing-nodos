import { useNavigate } from 'react-router-dom'
import style from './CardSection.module.css'

export default function CardSection(item) {
    const navigate = useNavigate()
    console.log(item);
    return <>
        <div className={style.Container}>
            <h1>{item.nombre}</h1>
            <p>{item.subtitulo}</p>
            <button
            onClick={() => navigate(`/nivel/${item.id}`, {state: item})}
            >
                Detalle
            </button>
        </div>
    </>
}