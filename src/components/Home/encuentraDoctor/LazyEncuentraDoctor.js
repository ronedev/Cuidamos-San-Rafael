import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'

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
            <Suspense fallback={'cargando...'}>
                {isNearScreen ? <EncuentraTuDoctor doctores={doctores} /> : null}
            </Suspense>
        </div>
    )
}

export default LazyEncuentraDoctor