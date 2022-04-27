import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import FooterPlaceholder from './FooterPlaceholder'

const LazyFooter = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })

    const Footer = React.lazy(
        () => import('./Footer')
    )
    return (
        <div ref={elementRef}>
            <Suspense fallback={ <div style={{width: '100%'}}> <FooterPlaceholder /> </div> }>
                {isNearScreen ? <Footer /> : <div style={{width: '100%'}}> <FooterPlaceholder /> </div>}
            </Suspense>
        </div>
    )
}

export default LazyFooter