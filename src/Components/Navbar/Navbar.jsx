//images 
import logo from '../../assets/logoSanAgustin.png'
import menu from '../../assets/menu.svg'
import close from '../../assets/closeMenu.svg'
//styles
import style from './Navbar.module.css'
//hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    const [showOptions, setShowOptions] = useState(false);
    const [showOptionsContact, setShowOptionsContact] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };
    const handleMouseEnterContact = () => {
        setShowOptionsContact(true)
    };

    const handleMouseLeaveContact = () => {
        setShowOptionsContact(false)
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenu = () => {
        setShowMenu(false);
      };
    const navigateURL = (url) => {
        navigate(url)
        setShowMenu(false)
    }
    return (
        <div className={style.NavbarContainer}>
            <div className={style.imgNavbar}>

                <img className={style.logoSanAgustin} src={logo} alt="" onClick={() => navigate('/')} />
            </div>

            <div className={style.menu}>
                <img onClick={toggleMenu} className={style.imgMenu} src={menu} alt="" />
            </div>


            <div className={style.NavbarItem}>
                <li
                    onClick={() => navigate('/')}
                    className={style.navItem}
                >
                    HOME
                </li>
                <div className={style.nivelContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <li

                        className={style.navItem}

                    >
                        NIVELES
                    </li>
                    {
                        showOptions &&
                        <div className={style.niveles}>
                            <p onClick={() => navigate('/nivelInicial')}>Nivel Inicial</p>
                            <p onClick={() => navigate('/nivelPrimario')}>Nivel Primario</p>
                        </div>
                    }

                </div>

                <li
                    onClick={() => navigate('/news')}
                    className={style.navItem}
                >
                    NOVEDADES
                </li>

                <div className={style.contactoContainer}
                    onMouseEnter={handleMouseEnterContact}
                    onMouseLeave={handleMouseLeaveContact}
                >
                    <li
                        className={style.navItem}
                    >
                        CONTACTO
                    </li>
                    {
                        showOptionsContact &&
                        <div className={style.contacto}>
                            <p onClick={() => navigate('/contact')}>Comunicate</p>
                            <p onClick={() => navigate('/CargarCV')}>Forma parte del equipo</p>
                        </div>
                    }

                </div>

            </div>

            <div className={`${style.NavbarItemContainer} ${showMenu ? style.showMenu : style.menuNone}`}>
                <img className={style.closeButon} src={close} onClick={closeMenu} alt="" />
                <li onClick={() => navigateURL('/')}>HOME</li>
                <div
                    className={style.nivelContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    <li className={style.navItem}>NIVELES</li>
                    {showOptions && (
                        <div className={style.niveles}>
                            <p onClick={() => navigateURL('/nivelInicial')}>Nivel Inicial</p>
                            <p onClick={() => navigateURL('/nivelPrimario')}>Nivel Primario</p>
                        </div>
                    )}
                </div>
                <li onClick={() => navigateURL('/news')}>NOVEDADES</li>
                <div
                    className={style.contactoContainer}
                    onMouseEnter={handleMouseEnterContact}
                    onMouseLeave={handleMouseLeaveContact}
                >
                    <li className={style.navItem}>CONTACTO</li>
                    {showOptionsContact && (
                        <div className={style.contacto}>
                            <p onClick={() => navigateURL('/contact')}>Comunicate</p>
                            <p onClick={() => navigateURL('/CargarCV')}>Forma parte del equipo</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

