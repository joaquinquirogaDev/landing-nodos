import { nivel } from "../../Data/data"
import CardSection from "./CardSection/CardSection"
import style from './GlobalSection.module.css'
export default function Sections(data) {
    // for (let i = 0; i < 0 + number; i++) {
    //     data[i] && repeatedData.push(data[i]);
    // }
    return <div className={style.Container}>
        {nivel.map((item, key) => (
            <CardSection key={key} item={item} id={item?.id} setActiveComponent={data.setActiveComponent}/>
        ))}
    </div>
}