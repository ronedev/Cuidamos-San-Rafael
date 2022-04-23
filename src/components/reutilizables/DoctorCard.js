import React from 'react'

const DoctorCard = ({ doctores }) => {
  
  return (
    <article className='doctorCardContainer' >
      {doctores.length < 2 ?
        <>
          {doctores.map(doctor => <>
            <img src={doctor.image} alt="DoctorProfile" />
            <h3>Dr. {doctor.name}</h3>
            <span>{doctor.specialty}</span>
            <button className='btn1' onClick={()=> window.location = '/turno'}>Pedir turno</button>
          </>)}
        </>
        :
        <>
          <h3>Doctores habilitados</h3>
          <span>Encuentre su especialista</span>
          {doctores.map(doctor => <>
            <div className='doctorContainer'>
              <img src={doctor.image} alt="DoctorProfile" />
              <div className='doctorData'>
                <h3>{doctor.name}</h3>
                <span>{doctor.specialty}</span>
              </div>
            </div>
          </>)}
          <button className='btn3' onClick={()=> window.location = '/turno'}>Encuentre su doctor</button>
        </>
      }
    </article>
  )
}

export default DoctorCard