import React from 'react'
import ImageList from '../imageList/ImageList'
import './tabimages.css'

const TabImages = () => {
    return (
        <div className='tabimages-container'>
            <h4 className='tabimages-heading'>Images</h4>
            <ImageList />
        </div>
    )
}

export default TabImages
