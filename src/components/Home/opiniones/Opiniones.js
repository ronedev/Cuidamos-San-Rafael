import React, { useState } from 'react'
import leftArrow from 'img/Icons/left.png'
import rightArrow from 'img/Icons/right.png'

const Opiniones = ({clientsOpinions}) => {

    const [indexSlide, setIndexSlide] = useState(0)

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