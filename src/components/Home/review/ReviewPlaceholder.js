import React from 'react'
import ContentLoader from 'react-content-loader'

const ReviewPlaceholder = (props) => (
    <ContentLoader
        speed={2}
        viewBox="0 0 530 135"
        backgroundColor="#ededed"
        foregroundColor="#bdbdbd"
        {...props}
    >
        <rect x="240" y="25" rx="0" ry="0" width="120" height="9" />
        <rect x="277" y="15" rx="0" ry="0" width="50" height="5" />
        <rect x="250" y="50" rx="10" ry="10" width="103" height="79" />
    </ContentLoader>
)

export default ReviewPlaceholder