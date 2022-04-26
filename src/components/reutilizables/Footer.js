import React from 'react'
import facebookIcon from 'img/Icons/facebook.png'
import instagramIcon from 'img/Icons/instagram.png'
import twitterIcon from 'img/Icons/twitter.png'

const Footer = () => {
    return (
        <>
            <footer className='footerContainer'>
                <section className='infoSection'>
                    <h2>Cuidamos <span>San Rafael</span></h2>
                    <p>Esta App gratuita da solución a tus necesidades de salud ofreciéndote un acceso único a la información completa sobre varios chequeos médicos Esta aplicación ofrece sugerencias y consejos sencillos para ayudarle a mantener un estilo de vida saludable.</p>
                </section>
                <div className='redirectionContainer'>
                    <section className='accionesSection'>
                        <h2>Acciones</h2>
                        <ul>
                            <li><a href="#Doctor">Encuentra doctor</a></li>
                            <li><a href="#Turno">Pedir turno</a></li>
                        </ul>
                    </section>
                    <section className='nosotrosSection'>
                        <h2>Sobre Nosotros</h2>
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Review">Reviews</a></li>
                            <li><a href="#Uso">Uso</a></li>
                        </ul>

                    </section>
                    <section className='redesSection'>
                        <h2>Redes Sociales</h2>
                        <ul>
                            <li><a href="#"><img src={facebookIcon} alt="facebookIcon" /></a></li>
                            <li><a href="#"><img src={instagramIcon} alt="instagramIcon" /></a></li>
                            <li><a href="#"><img src={twitterIcon} alt="twitterIcon" /></a></li>
                        </ul>
                    </section>
                </div>
            </footer>
            <span id='Copyright'>Proyecto ficticio desarrollado con ❤ por Agustin Vera. Inspiración: <a className='subtitle' href="https://www.instagram.com/mlwdesign_">Akmal Widad Iskandar</a></span>
        </>
    )
}

export default Footer