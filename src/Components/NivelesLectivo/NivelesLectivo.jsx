//styles
import { nivel } from '../../Data/data'
import { CardNivelLectivo } from '../CardNivelLectivo/CardNivelLectivo'
import style from './NivelesLectivo.module.css'
//data

export const NivelesLectivo = () => {
    return (
            <div className={style.NivelesContainer}>
                {nivel.map((item, index) => (
                    <CardNivelLectivo key={index} item={item} />
                ))}
            </div>
    )
}
