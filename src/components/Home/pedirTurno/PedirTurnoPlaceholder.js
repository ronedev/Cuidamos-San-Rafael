import React from 'react'
import ContentLoader from 'react-content-loader'

const PedirTurnoPlaceholder = (props) => (
    <ContentLoader 
    speed={2}
    viewBox="0 0 521 359"
    backgroundColor="#ededed"
    foregroundColor="#bdbdbd"
    {...props}
  >
    <rect x="10" y="40" rx="100" ry="100" width="250" height="160" /> 
    <rect x="300" y="55" rx="0" ry="0" width="40" height="5" /> 
    <rect x="300" y="65" rx="0" ry="0" width="250" height="15" /> 
    <rect x="300" y="90" rx="0" ry="0" width="110" height="15" /> 
    <rect x="300" y="110" rx="0" ry="0" width="260" height="5" /> 
    <rect x="300" y="120" rx="0" ry="0" width="50" height="5" /> 
    <rect x="320" y="140" rx="0" ry="0" width="80" height="5" /> 
    <circle cx="306" cy="141" r="6" /> 
    <circle cx="306" cy="161" r="6" /> 
    <rect x="320" y="160" rx="0" ry="0" width="80" height="5" /> 
    <rect x="300" y="170" rx="5" ry="5" width="60" height="15" />
  </ContentLoader>
)

export default PedirTurnoPlaceholder