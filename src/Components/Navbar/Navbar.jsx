//images 
import logo from '../../assets/logoSanAgustin.png'
import { useNavigate } from 'react-router-dom'
//styles
import style from './Navbar.module.css'
export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className={style.NavbarContainer}>
            <div className={style.imgNavbar}>
                <img src={logo} alt="" />
            </div>
            <div className={style.NavbarItem}>
                <li
                    onClick={() => navigate('/')}
                >
                    HOME
                </li>
                <li
                    onClick={() => navigate('/nivel')}

                >
                    NIVELES
                </li>
                <li
                    onClick={() => navigate('/news')}
                >
                    NOVEDADES
                </li>
                <li
                    onClick={() => navigate('/contact')}
                >
                    CONTACTO
                </li>
            </div>
        </div>
    )
}

