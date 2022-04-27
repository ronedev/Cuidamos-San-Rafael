import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import PedirTurnoPlaceholder from './PedirTurnoPlaceholder'

const LazyPedirTurno = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({elementRef})
  
    const PedirTurno = React.lazy(
        ()=> import('./PedirTurno')
    )
    return (
    <div ref={elementRef}>
        <Suspense fallback={ <div style={{width: '100%'}}> <PedirTurnoPlaceholder /> </div> }>
            {isNearScreen ? <PedirTurno /> : <div style={{width: '100%'}}> <PedirTurnoPlaceholder /> </div>}
        </Suspense>
    </div>
  )
}

export default LazyPedirTurno