import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import ReviewPlaceholder from './ReviewPlaceholder'

const LazyReview = () => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })

    const Review = React.lazy(
        () => import('./Review')
    )
    return (
        <div ref={elementRef}>
            <Suspense fallback={ <div style={{width: '100%'}}> <ReviewPlaceholder /> </div> }>
                {isNearScreen ? <Review /> : <div style={{width: '100%'}}> <ReviewPlaceholder /> </div>}
            </Suspense>
        </div>
    )
}

export default LazyReview