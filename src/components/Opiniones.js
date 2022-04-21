import React, { useState } from 'react'
import paciente1 from './../img/paciente1.png'
import paciente3 from './../img/paciente3.png'
import paciente2 from './../img/paciente2.png'
import leftArrow from './../img/Icons/left.png'
import rightArrow from './../img/Icons/right.png'

const Opiniones = () => {

    const [indexSlide, setIndexSlide] = useState(0)

    const clientsOpinions = [
        {
            name: 'Martín Rodriguez',
            occupation: 'Estudiante',
            opinion: '“Soy de General Alvear (120km de San Rafael), sin embargo me hago atender en San rafael por la facilidad de Cuidamos San Rafael y la calidad de doctores.”',
            image: paciente1
        },
        {
            name: 'Claudia Perez',
            occupation: 'Docente',
            opinion: '“Cuidamos San Rafael me ha facilitado la vida, estoy muy ocupada todo el dia con mi trabajo y cuando tenia que perder horas en un hospital era muy tedioso.”',
            image: paciente3
        },
        {
            name: 'Romina Delgado',
            occupation: 'Azafata',
            opinion: '“Debido a mi trabajo estoy muy poco tiempo en la ciudad, lo cual imposibilitaba concurrir al hospital a retirar turno y gracias a la página de Cuidamos San Rafael ya ni siquiera necesito estar en ella.”',
            image: paciente2
        }
    ]
    return (
        <section className='opinionesSectionContainer' id='Review'>
            <h2>¿Qué dicen nuestros pacientes de nostros?</h2>
            <span>Su impresión despues de utilizar la app: </span>
            <div className='opinionesSlider'>
                {clientsOpinions.map((opinion, idx) => {
                    return (
                        <div className={indexSlide === idx ? 'opinion' : 'noVisible'}>
                            <div className='clientImageContainer'>
                                <div className='image'>
                                    <img src={opinion.image} alt="clientImage" />
                                    <div className='cuadrado'></div>
                                    <div className='rectangleSolid'></div>
                                </div>
                            </div>
                            <div className='clientOpinion'>
                                <p>{opinion.opinion}</p>
                                <div className='clientDescriptionAndArrows'>
                                    <div className='clientDescription'>
                                        <h4>{opinion.name}</h4>
                                        <span>{opinion.occupation}</span>
                                    </div>
                                    <div className='arrowContainer'>
                                        <img src={leftArrow} style={indexSlide === 0 ? { opacity: .5 } : {}} alt="leftArrow" onClick={() => {
                                            if (indexSlide !== 0) {
                                                setIndexSlide(indexSlide - 1)
                                            }
                                        }} />
                                        <img src={rightArrow} style={indexSlide === clientsOpinions.length - 1 ? { opacity: .5 } : {}} alt="rightArrow" onClick={() => {
                                            if (indexSlide !== clientsOpinions.length - 1) {
                                                setIndexSlide(indexSlide + 1)
                                            }
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Opiniones