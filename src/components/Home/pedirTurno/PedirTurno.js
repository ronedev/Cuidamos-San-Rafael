import React from 'react'
import verificadoIcon from 'img/Icons/verificado.png'
import doctoraPedirTuTurno from 'img/doctoraPedirTuTurno.webp'
const PedirTurno = () => {
    return (
        <section className='pedirTurnoSectionContainer' id='Turno'>
            <div className='pedirTurnoImageContainer'>
                <img src={doctoraPedirTuTurno} alt="doctorsImage" />
                <div className='rectangle1'></div>
                <div className='rectangle2'></div>
            </div>
            <section className='pedirTurnoDescription'>
                <span className='subtitle'>Pedir tu turno</span>
                <h3>Pide tu turno desde tu casa y de manera online</h3>
                <p>Pedir tus turnos al médico nunca fue tan fácil. No importa distancia o problemas de movilidad, Cuidamos San Rafael está para vos.</p>
                <p><img src={verificadoIcon} alt="verificadoIcon" /> Pedir tu turno online es sencillo</p>
                <p><img src={verificadoIcon} alt="verificadoIcon" /> Fácil y rápido contacto con tu doctor</p>
                <button className='btn1' onClick={()=> window.location = '/turno'}>Pide tu turno</button>
            </section>
        </section>
    )
}

export default PedirTurno