import React from 'react'
import InfoCard from './reutilizables/InfoCard'

const Review = () => {
    const info = [
        {
            icon: null,
            title: '30+',
            subtitle: 'Especialistas verificados',
            description: 'Altamente recomendados'
        },
        {
            icon: null,
            title: '10000+',
            subtitle: 'Pacientes felices',
            description: 'Alto rendimiento'
        },
        {
            icon: null,
            title: '99,7%',
            subtitle: 'Retroalimentación positiva',
            description: 'Alta aprobación de los clientes'
        }
    ]
  return (
    <section className='reviewSectionContainer'>
        <span className='subtitle'>Nuestra calificación</span>
        <h3>¡Confiá en nosotros!</h3>
        <div className='reviewGrid'>
            {info.map(info => <InfoCard info={info}/>)}
        </div>
    </section>
  )
}

export default Review