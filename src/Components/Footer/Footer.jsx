import { dropsRedes, Secciones } from "../../Data/data"
import style from './Footer.module.css'
export default function Footer() {
    // for (const key in Secciones) {
    //     console.log(key);
    //     console.log(Secciones[key]);
    // }
    return <ul className={style.Container}>
            {Object.keys(Secciones)?.map((item) => (
                <div>
                    <h1>{item}</h1>
                    {Secciones[item].map((value) => (
                        Object.entries(value).map(([item, value]) => (
                            <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
                                <h1>{item}: </h1>
                                <p>{value}</p>
                            </div>
                        ))
                    ))}
                </div>
            ))}
        </ul>
}