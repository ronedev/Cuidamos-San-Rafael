import React, { useState } from 'react'
import menuIcon from './../img/Icons/hamburger.png'
import cerrarIcon from './../img/Icons/cerrar.png'

const Navbar = () => {
    const [menuResponsiveVisible, setMenuResponsiveVisible] = useState(false)
    const [menuResponsiveDesactive, setMenuResponsiveDesactive] = useState(false)

    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <h1>Cuidamos <span>San Rafael</span></h1>
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
                        <div className='navbarRight'>
                            <button className='btn2'>Ingresar</button>
                            <button className='btn1'>Crear Cuenta</button>
                        </div>
                    </div>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Doctor">Encuentra tu doctor</a></li>
                    <li><a href="#Turno">Pedí tu turno</a></li>
                    <li><a href="#Review">Reviews</a></li>
                </ul>
                <div className='navbarRight'>
                    <button className='btn2'>Ingresar</button>
                    <button className='btn1'>Crear Cuenta</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar