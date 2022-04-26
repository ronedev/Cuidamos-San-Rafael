import React from 'react'
import doctoraImg from 'img/doctoraHome.webp'
import DoctorCard from '../reutilizables/DoctorCard'
const Header = ({especialistas}) => {
    //Se elige un especialista random
    const doctor = []
    if(especialistas.length > 0){
        const randomIndex = Math.floor(Math.random()*especialistas.length)
        doctor.push(especialistas[randomIndex])
    }
    return (
        <header className='header' id='Home'>
            <section className='descriptionSection'>
                <h2>Cuidamos San Rafael<br /> Ahora para todos</h2>
                <p>Màs de 10 años cuidando a los sanrafaelinos. Ahora con servicio web donde se podrán agilizar todos los trámites que normalmente se hacen en la sucursal.</p>
                <button className='btn1'>Contactanos</button>
            </section>
            <div className='headerDecoration'>
                <img src={doctoraImg} alt="DoctorImage" id='doctorHeader' />
                <DoctorCard doctores={doctor} />
            </div>
            <div className='circle'></div>
        </header>
    )
}

export default Header