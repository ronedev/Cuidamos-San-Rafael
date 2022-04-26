import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import { clientsOpinions } from './ClientsOpinions'

const LazyOpiniones = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })
  
    const Opiniones = React.lazy(
        ()=> import('./Opiniones')
    )
    return (
    <div ref={elementRef}>
        <Suspense fallback={'cargando...'}>
            {isNearScreen ? <Opiniones clientsOpinions={clientsOpinions} /> : null}
        </Suspense>
    </div>
  )
}

export default LazyOpiniones