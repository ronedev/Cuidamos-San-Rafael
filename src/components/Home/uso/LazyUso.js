import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import UsoPlaceholder from './UsoPlaceholder'

const LazyUso = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })
    
    const Uso = React.lazy(
        ()=> import('./Uso')
    )
    return (
        <div ref={elementRef}>
            <Suspense fallback={ <div style={{width: '100%'}}><UsoPlaceholder /></div> }>
                {isNearScreen ? <Uso /> : <div style={{width: '100%'}}><UsoPlaceholder /></div>}
            </Suspense>
        </div>
    )
}

export default LazyUso