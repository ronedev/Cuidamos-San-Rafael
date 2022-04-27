import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import HeaderPlaceholder from './HeaderPlaceholder'

const LazyHeader = ({especialistas}) => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })

    const Header = React.lazy(
        () => import('./Header')
    )

    //Se elige un especialista random
    const doctor = []
    if(especialistas.length > 0){
        const randomIndex = Math.floor(Math.random()*especialistas.length)
        doctor.push(especialistas[randomIndex])
    }

    return (
        <div ref={elementRef}>
            <Suspense fallback={<div style={{width: '100%'}}><HeaderPlaceholder /></div>}>
                {isNearScreen ? <Header doctor={doctor}/> : <div style={{width: '100%'}}><HeaderPlaceholder /></div>}
            </Suspense>
        </div>
    )
}

export default LazyHeader