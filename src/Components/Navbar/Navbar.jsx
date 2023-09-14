//images 
import logo from '../../assets/logoSanAgustin.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'
//styles
import style from './Navbar.module.css'
import { useState } from 'react'
export const Navbar = () => {
    const navigate = useNavigate()
    const [showOptions, setShowOptions] = useState(false);
    const [showOptionsContact, setShowOptionsContact] = useState(false);
    
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
    return (
        <div className={style.NavbarContainer}>
            <div className={style.imgNavbar}>

                <img src={logo} alt=""  onClick={() => navigate('/')}/>
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
                         onClick={() => navigate('/nivel')}
                        className={style.navItem}

                    >
                        NIVELES
                    </li>
                    {
                        showOptions &&
                        <div  className={style.niveles}>
                                <span  onClick={() => navigate('/nivelInicial')}>Nivel inicial</span>
                                <span  onClick={() => navigate('/nivelPrimario')}>Nivel primario</span>
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
                    onClick={() => navigate('/contact')}
                    className={style.navItem}
                    >
                        CONTACTO
                    </li>
                    {
                        showOptionsContact &&
                        <div  className={style.contacto}>
                                <span  onClick={() => navigate('/CargarCV')}>Cargar CV</span>
                        </div>
                    }
                        
                </div>
              
            </div>
        </div>
    )
}

