import React, { useState } from 'react'
import menuIcon from './../../img/Icons/hamburger.png'
import cerrarIcon from './../../img/Icons/cerrar.png'
import { login, logout } from '../../funciones'

const Navbar = ({ users, auth }) => {
    const [menuResponsiveVisible, setMenuResponsiveVisible] = useState(false)
    const [menuResponsiveDesactive, setMenuResponsiveDesactive] = useState(false)
    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <h1 onClick={() => window.location = '/'}>Cuidamos <span>San Rafael</span></h1>
                <img src={menuIcon} alt="menuResponsiveIcon" id='menuIcon' onClick={() => {
                    setMenuResponsiveVisible(true)
                    setMenuResponsiveDesactive(false)
                }
                } />
            </div>
            <nav className={menuResponsiveVisible ? 'navbar active' : menuResponsiveDesactive ? 'navbar desactive' : 'navbar'}>
                <ul>
                    <div className={menuResponsiveVisible ? 'cerrarIconContainer' : 'noVisible'} >
                        <img src={cerrarIcon} alt='cerrarIcon' id='cerrarIcon' onClick={() => {
                            setMenuResponsiveVisible(false)
                            setMenuResponsiveDesactive(true)
                        }
                        } />
                        {auth ?
                            <>
                                <div className='navbarRight'>
                                    <img src={auth.photoURL} alt={auth.dislpayName} />
                                    <button className='btn2' onClick={()=> logout()}>Salir</button>
                                </div>
                            </>
                            :
                            <>
                                <div className='navbarRight'>
                                    <button className='btn2' onClick={() => login(users)}>Ingresar</button>
                                    <button className='btn1' onClick={() => login(users)}>Crear Cuenta</button>
                                </div>
                            </>
                        }
                    </div>
                    <li><a href="#Home" onClick={() => {
                        if (menuResponsiveVisible) {
                            setMenuResponsiveVisible(false)
                            setMenuResponsiveDesactive(true)
                        }
                    }}>Home</a></li>
                    <li><a href="#Doctor" onClick={() => {
                        if (menuResponsiveVisible) {
                            setMenuResponsiveVisible(false)
                            setMenuResponsiveDesactive(true)
                        }
                    }}>Encuentra tu doctor</a></li>
                    <li><a href="#Turno" onClick={() => {
                        if (menuResponsiveVisible) {
                            setMenuResponsiveVisible(false)
                            setMenuResponsiveDesactive(true)
                        }
                    }}>Pedí tu turno</a></li>
                    <li><a href="#Review" onClick={() => {
                        if (menuResponsiveVisible) {
                            setMenuResponsiveVisible(false)
                            setMenuResponsiveDesactive(true)
                        }
                    }}>Reviews</a></li>
                </ul>
                {auth ?
                    <>
                        <div className='navbarRight'>
                            <img src={auth.photoURL} alt={auth.dislpayName} />
                            <button className='btn2' onClick={()=> logout()}>Salir</button>
                        </div>
                    </>
                    :
                    <>
                        <div className='navbarRight'>
                            <button className='btn2' onClick={() => login(users)}>Ingresar</button>
                            <button className='btn1' onClick={() => login(users)}>Crear Cuenta</button>
                        </div>
                    </>
                }
            </nav>
        </div>
    )
}

export default Navbar