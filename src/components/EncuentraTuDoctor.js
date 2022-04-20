import React from 'react'
import verificadoIcon from './../img/Icons/verificado.png'
import doctoraImg from './../img/doctoraEncuentraTuDoctor.png'
import DoctorCard from './reutilizables/DoctorCard'
import adindaProfile from './../img/adindaProfile.png'
import jacksonProfile from './../img/jacksonProfile.png'

const EncuentraTuDoctor = () => {
    const doctores = [
        {
            name: 'Adinda',
            specialty: 'Oftamólogo',
            image: adindaProfile
        },
        {
            name: 'Jackson',
            specialty: 'Odontólogo',
            image: jacksonProfile
        }
    ]
  return (
    <section className='encuentraTuDoctorSection'>
        <section className='descriptionSection'>
            <span className='subtitle'>Encuentra tu doctor</span>
            <h2>Encuentra el doctor acorde a su situación</h2>
            <p>Tenemos mas de 30 doctores especialistas que estan a tu disposición. Nos concentramos en brindarte la mejor y mas rápida atención.</p>
            <p><img src={verificadoIcon} alt='verificadoIcon' /> 100% gratis web-app para ayudarte a encontrar al mejor especialista. </p>
            <p><img src={verificadoIcon} alt='verificadoIcon' /> Más de 30 doctores asociados. </p>
            <button className='btn1'>Ver doctores</button>
        </section>
        <div className='headerDecoration'>
            <img src={doctoraImg} alt="doctoraImage"/>
            <DoctorCard doctores={doctores}/>
        </div>
        <div className='circle'>

        </div>
    </section>
  )
}

export default EncuentraTuDoctor