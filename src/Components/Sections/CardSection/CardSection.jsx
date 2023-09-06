import style from './CardSection.module.css'

export default function CardSection({ item }) {
    // console.log(item);
    return <>
        <div className={style.Container}>
            <h1>{item.nombre}</h1>
            <p>{item.subtitulo}</p>
        </div>
    </>
}