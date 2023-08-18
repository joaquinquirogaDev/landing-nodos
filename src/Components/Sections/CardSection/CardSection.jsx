import style from './CardSection.module.css'

export default function CardSection() {
    return <>
        <div className={style.Container}>
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo tempore labore.
                Sequi, praesentium eaque voluptatibus repudiandae officiis tempora unde dolorem atque, iure facilis,
                harum vero eius libero quis a.
            </p>
            <h3>Subtitulo</h3>
        </div>
    </>
}