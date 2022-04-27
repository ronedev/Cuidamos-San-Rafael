import React from 'react'
import ContentLoader from 'react-content-loader'

const FooterPlaceholder = (props) => (
    <ContentLoader 
    speed={2}
    viewBox="0 0 600 100"
    backgroundColor="#ededed"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="35" y="40" rx="0" ry="0" width="100" height="10" /> 
    <rect x="300" y="102" rx="0" ry="0" width="250" height="10" /> 
    <rect x="35" y="60" rx="0" ry="0" width="220" height="5" /> 
    <rect x="340" y="186" rx="0" ry="0" width="80" height="7" /> 
    <rect x="507" y="178" rx="0" ry="0" width="20" height="15" /> 
    <rect x="300" y="117" rx="0" ry="0" width="240" height="10" /> 
    <rect x="340" y="196" rx="0" ry="0" width="40" height="5" /> 
    <rect x="483" y="178" rx="0" ry="0" width="20" height="15" /> 
    <rect x="300" y="132" rx="0" ry="0" width="180" height="10" /> 
    <rect x="35" y="70" rx="0" ry="0" width="220" height="5" /> 
    <rect x="35" y="80" rx="0" ry="0" width="220" height="5" /> 
    <rect x="35" y="90" rx="0" ry="0" width="120" height="5" /> 
    <rect x="300" y="45" rx="0" ry="0" width="50" height="7" /> 
    <rect x="300" y="64" rx="0" ry="0" width="55" height="5" /> 
    <rect x="300" y="74" rx="0" ry="0" width="40" height="5" /> 
    <rect x="390" y="45" rx="0" ry="0" width="70" height="7" /> 
    <rect x="390" y="64" rx="0" ry="0" width="30" height="5" /> 
    <rect x="390" y="74" rx="0" ry="0" width="30" height="5" /> 
    <rect x="390" y="84" rx="0" ry="0" width="30" height="5" /> 
    <rect x="480" y="45" rx="0" ry="0" width="70" height="7" /> 
    <circle cx="493" cy="68" r="8" /> 
    <circle cx="518" cy="68" r="8" /> 
    <circle cx="541" cy="68" r="8" />
  </ContentLoader>
)

export default FooterPlaceholder