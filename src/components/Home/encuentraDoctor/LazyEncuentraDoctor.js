import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import EncuentraTuDoctorPlaceholder from './EncuentraTuDoctorPlaceholder'

const LazyEncuentraDoctor = ({ especialistas }) => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })

    const doctores = []
    if (especialistas.length > 0) {
        for (let index = 0; index < 2; index++) {
            const randomIndex = Math.floor(Math.random() * especialistas.length)
            doctores.push(especialistas[randomIndex])
        }
    }

    const EncuentraTuDoctor = React.lazy(
        () => import('./EncuentraTuDoctor')
    )
    return (
        <div ref={elementRef}>
            <Suspense fallback={ <div style={{width: '100%'}}> <EncuentraTuDoctorPlaceholder /> </div> }>
                {isNearScreen ? <EncuentraTuDoctor doctores={doctores} /> : <div style={{width: '100%'}}> <EncuentraTuDoctorPlaceholder /> </div>}
            </Suspense>
        </div>
    )
}

export default LazyEncuentraDoctor