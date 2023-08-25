import { dropsRedes } from "../../Data/data"

export default function Footer(){
    return <div style={{width: '100%', padding: '10px'}}>
        <ul>
           {dropsRedes.map((item, key) => ( 
            <li key={key}>{item.nombre}</li>        
               ))}
               </ul>
        </div>
}