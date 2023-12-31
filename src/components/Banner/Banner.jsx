import React from 'react';
import './Banner.css';
import ArrowSVG from '../../assets/Caret_Up_MD.svg'

const Banner = () => {
    const repeatCount = 8;
    const liveRepeaterItems = [];

    for (let i = 0; i < repeatCount; i++) {
        liveRepeaterItems.push(<span key={i}>WE ARE LIVE!</span>);
    }

    return (
        <header className='banner'>
            <div className='breaking-news-container'>
                <div className='breaking-news'>BREAKING NEWS</div>
            </div>

            <div className='arrow1'>
                <img src={ArrowSVG} alt='Arrow' />
            </div>
            <div className='live-repeater-container'>{liveRepeaterItems}</div>
        </header>
    );
}

export default Banner;
