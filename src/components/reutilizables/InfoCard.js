import React from 'react'

const InfoCard = ({ info }) => {
  return (
    <>
      {
        info.icon !== null ?
          <>
            <article className='infoCard'>
              <img src={info.icon} alt="iconInfo" />
              <h4>{info.subtitle}</h4>
              <p>{info.description}</p>
            </article>
          </> :
          <>
            <article className='infoCard' style={{'alignItems': 'center'}}>
              <h4 style={{'fontSize': '3rem', marginBottom: 0}}>{info.title}</h4>
              <h4 style={{marginBottom: '.4rem'}}>{info.subtitle}</h4>
              <p>{info.description}</p>
            </article>
          </>
      }
    </>
  )
}

export default InfoCard