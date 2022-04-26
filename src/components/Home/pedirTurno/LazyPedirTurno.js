import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'

const LazyPedirTurno = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({elementRef})
  
    const PedirTurno = React.lazy(
        ()=> import('./PedirTurno')
    )
    return (
    <div ref={elementRef}>
        <Suspense fallback={'cargando...'}>
            {isNearScreen ? <PedirTurno /> : null}
        </Suspense>
    </div>
  )
}

export default LazyPedirTurno