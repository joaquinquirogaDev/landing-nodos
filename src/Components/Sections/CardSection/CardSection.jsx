import style from './CardSection.module.css'

export default function CardSection({ item, id, setActiveComponent}) {
    return <>
        <div className={style.Container}>
            <h1>{item.nombre}</h1>
            <p>{item.subtitulo}</p>
            <button
            onClick={() => {
                id === item?.id && setActiveComponent({nombre: 'Detalle', item: item})
            }}
            >
                Detalle
            </button>
        </div>
    </>
}