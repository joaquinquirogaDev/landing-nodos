//images 
import logo from '../../assets/logoSanAgustin.png'
//styles
import style from './Navbar.module.css'
export const Navbar = ({ setActiveComponent }) => {



    return (
        <div className={style.NavbarContainer}>
            <div className={style.imgNavbar}>
                <img src={logo} alt="" />
            </div>
            <div className={style.NavbarItem}>
                <li
                    onClick={() => setActiveComponent({nombre: 'Home'})}
                >
                    HOME
                </li>
                <li
                    onClick={() => setActiveComponent({nombre: 'Niveles'})}

                >
                    NIVELES
                </li>
                <li
                    onClick={() => setActiveComponent({nombre: 'Novedades'})}
                >
                    NOVEDADES
                </li>
                <li
                    onClick={() => setActiveComponent({nombre: 'Contacto'})}
                >
                    CONTACTO
                </li>
            </div>
        </div>
    )
}

