//styles
import style from './Galeria.module.css'

export const Galeria = ({bgColor,titulo,parrafo,parrafo1,subtitulo,list,imagenes}) => {
  return (
    <div className={style.galeriaContainer}>
        <div style={{backgroundColor:bgColor}} className={style.cartelContainer}>
            <div className={style.cartel}>
                <h1>{titulo}</h1>
                <p>{parrafo}</p>
                <p>{parrafo1}</p>
            </div>

            <div className={style.cartelInfoRight}>
                <h2>{subtitulo}</h2>
                <div className={style.listInfo}>
                    <ul className={style.listColumns}>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        

        <div className={style.galeria}>
            {imagenes?.map((item,index) => (
                <img key={index} src={item} alt="" />
            ))}
        </div>
    </div>
  )
}
