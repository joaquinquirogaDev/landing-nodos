//data
import { dropsRedes, Secciones } from "../../Data/data"
//styles
import style from './Footer.module.css'
//images
import logo from '../../assets/logoSanAgustin.png'
import telefono from '../../assets/telefono.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
export default function Footer() {
    
    return (
        <>
            <div className={style.Container}>
                <div className={style.containerFooter}>
                    <img className={style.containerFooterLogo} src={logo} alt="Colegio San Agustin" />
                        {Object.keys(Secciones)?.map((item) => (
                            <div>
                                <h1 className={style.footerTitle}>{item}</h1>
                                {Secciones[item].map((value) => (
                                    Object.entries(value).map(([item, value]) => (
                                        <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px'}}>
                                            <p>{item}: </p>
                                            <p>{value}</p>
                                        </div>
                                    ))
                                ))}
                            </div>
                        ))}

                    </div>
                    <div className={style.footerDown}>
                        <h1 className={style.footerDownTitle}>@ 2024 Nodos Hub</h1>

                        <div className={style.iconFooter}>
                            <a href=""><img src={youtube} alt="youtube" /></a>
                            <a href=""><img src={instagram} alt="instagram" /></a>
                            <a href=""><img src={facebook} alt="facebook" /></a>
                        </div>
                    </div>
                </div>
            </>
    )
   
}