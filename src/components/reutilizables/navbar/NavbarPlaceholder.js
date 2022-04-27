import React from 'react'
import ContentLoader from 'react-content-loader'

const NavbarPlaceholder = (props) => (
    <ContentLoader 
      speed={3}
      viewBox="0 0 405 21"
      backgroundColor="#ededed"
      foregroundColor="#bdbdbd"
      {...props}
    >
      <rect x="10" y="5" rx="3" ry="3" width="80" height="10" /> 
      <rect x="100" y="8" rx="3" ry="3" width="35" height="4" /> 
      <rect x="145" y="8" rx="3" ry="3" width="35" height="4" /> 
      <rect x="190" y="8" rx="3" ry="3" width="35" height="4" /> 
      <rect x="235" y="8" rx="3" ry="3" width="35" height="4" /> 
      <rect x="305" y="5" rx="3" ry="3" width="35" height="8" /> 
      <rect x="350" y="5" rx="3" ry="3" width="35" height="8" />
    </ContentLoader>
  )
  
  export default NavbarPlaceholder