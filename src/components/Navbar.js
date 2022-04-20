import React from 'react'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className='navbarLeft'>
                <h1>Cuidamos <span>San Rafael</span></h1>
                <nav className='navbar'>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Doctor">Encuentra tu doctor</a></li>
                        <li><a href="#Turno">Pedí tu turno</a></li>
                        <li><a href="#Review">Reviews</a></li>
                    </ul>
                </nav>
            </div>
            <div className='navbarRight'>
                <button className='btn2'>Ingresar</button>
                <button className='btn1'>Crear Cuenta</button>
            </div>
        </div>
    )
}

export default Navbar