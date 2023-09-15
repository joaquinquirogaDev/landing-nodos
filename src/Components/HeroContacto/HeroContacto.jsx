//styles
import style from './HeroContacto.module.css'

export const HeroContacto = ({img}) => {
  return (
    <section>
        <div style={{backgroundImage: `url(${img})`}} className={style.img}></div>
    </section>
  )
}
