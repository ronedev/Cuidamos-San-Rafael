import React from 'react'
import ContentLoader from 'react-content-loader'

const EncuentraTuDoctorPlaceholder = (props) => (
    <ContentLoader 
    speed={2}
    viewBox="0 0 500 300"
    backgroundColor="#ededed"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="170" y="90" rx="3" ry="3" width="63" height="15" /> 
    <rect x="20" y="90" rx="3" ry="3" width="140" height="15" /> 
    <rect x="20" y="120" rx="3" ry="3" width="59" height="15" /> 
    <rect x="84" y="120" rx="3" ry="3" width="45" height="15" /> 
    <rect x="138" y="120" rx="3" ry="3" width="56" height="15" /> 
    <rect x="20" y="144" rx="3" ry="3" width="250" height="5" /> 
    <rect x="20" y="154" rx="3" ry="3" width="250" height="5" />
    <circle cx="20" cy="174" r="10" /> 
    <rect x="40" y="174" rx="3" ry="3" width="200" height="5" />
    <circle cx="20" cy="194" r="10" /> 
    <rect x="40" y="194" rx="3" ry="3" width="200" height="5" />
    <rect x="20" y="214" rx="3" ry="3" width="64" height="17" />
    <circle cx="519" cy="351" r="250" /> 
  </ContentLoader>
)

export default EncuentraTuDoctorPlaceholder