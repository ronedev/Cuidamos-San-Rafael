import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import { clientsOpinions } from './ClientsOpinions'
import OpinionesPlaceholder from './OpinionesPlaceholder'

const LazyOpiniones = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })
  
    const Opiniones = React.lazy(
        ()=> import('./Opiniones')
    )
    return (
    <div ref={elementRef}>
        <Suspense fallback={ <div style={{width: '100%'}}> <OpinionesPlaceholder /> </div> }>
            {isNearScreen ? <Opiniones clientsOpinions={clientsOpinions} /> : <div style={{width: '100%'}}> <OpinionesPlaceholder /> </div>}
        </Suspense>
    </div>
  )
}

export default LazyOpiniones