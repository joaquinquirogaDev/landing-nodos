//images 
import logo from '../../assets/logoSanAgustin.png'
//styles
import style from './Navbar.module.css'
export const Navbar = () => {
    return (
        <div className={style.NavbarContainer}>
            <div className={style.imgNavbar}>
                <img src={logo} alt="" />
            </div>

            <div className={style.NavbarItem}>
                <li>HOME</li>
                <li>NIVELES</li>
                <li>NOVEDADES</li>
                <li>CONTACTO</li>
            </div>
        </div>
    )
}
