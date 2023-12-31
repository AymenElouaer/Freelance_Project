import React from 'react'
import './PlayList.css'
import Image4 from '../../assets/Rectangle 148.png'
import PlayButton from '../../assets/Play_Circle.svg'

const PlayList = () => {
    return (
        <div className='playlist-container'>
            <img src={Image4} alt='img4' className='playlist-image' />
            <div className='play-button-container'>
                <img src={PlayButton} alt='play button' />
            </div>
        </div>
    )
}

export default PlayList
