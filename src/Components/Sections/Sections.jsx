import data from "../../Data/data"
import CardSection from "./CardSection/CardSection"
import style from './GlobalSection.module.css'
export default function Sections(){
    const number = data.find(e => typeof e === 'number') || 0
    const Objects = (cantidad) => {
        let newArray = []
        Array.from({length: cantidad}).forEach((_, e) => {
            newArray.push({id: e + 1})
        })
        return newArray
    }
    return <div className={style.Container}>
        {Objects(number).map(item => (
        <CardSection item={item}/>
    ))}
    </div>
}