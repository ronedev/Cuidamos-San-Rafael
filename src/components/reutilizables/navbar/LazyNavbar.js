import { useNearScreen } from 'components/Hooks/useNearScreen'
import React, { Suspense, useRef } from 'react'
import NavbarPlaceholder from './NavbarPlaceholder'

const LazyNavbar = ({ users, auth}) => {
    const elementRef = useRef()
    const isNearScreen = useNearScreen({ elementRef })

    const Navbar = React.lazy(
        () => import('./Navbar')
    )
    return (
        <div ref={elementRef}>
            <Suspense fallback={<div style={{width: "100%"}}><NavbarPlaceholder /></div>}>
                {isNearScreen ? <Navbar users={users} auth={auth} /> : <div style={{width: "100%"}}><NavbarPlaceholder /></div>}
            </Suspense>
        </div>
    )
}

export default LazyNavbar