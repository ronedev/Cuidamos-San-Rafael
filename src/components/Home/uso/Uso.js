import React from 'react'
import searchIcon from 'img/Icons/search.png'
import profileIcon from 'img/Icons/profile.png'
import calendarIcon from 'img/Icons/calendar.png'
import starIcon from 'img/Icons/star.png'
import InfoCard from '../../reutilizables/InfoCard'

const Uso = () => {
    const usoInfo = [
        {
            icon: searchIcon,
            title: ' ',
            subtitle: 'Ten bien en claro tus molestias',
            description: 'En base a tus molestias y/o dolores será la mejor forma de filtrar entre todos los especialistas que tenemos.'
        },
        {
            icon: profileIcon,
            title: ' ',
            subtitle: 'Elige el médico especialista',
            description: 'Elige un médico especialista en base a lo que estas necesitando.'
        },
        {
            icon: calendarIcon,
            title: ' ',
            subtitle: 'Pedir turno',
            description: 'Pide un turno con el médico escogido.'
        },
        {
            icon: starIcon,
            title: ' ',
            subtitle: '¡Obten tu turno!',
            description: 'Luego de pedir tu turno te llegará via mail o via telefónica la confirmación. ¡Y ya está!'
        }
    ]
    return (
        <section className='usoSectionContainer' id='Uso'>
            <span className='subtitle'>Soluciones rápidas</span>
            <h3>¿Cómo utilizo la página?</h3>
            <div className='usoGrid'>
                {usoInfo.map(info => <InfoCard info={info} />)}
            </div>
        </section>
    )
}
export default Uso