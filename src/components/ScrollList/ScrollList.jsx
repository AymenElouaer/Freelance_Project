import React from 'react'
import './ScrollList.css'
import RightArrow from '../../assets/Caret_Circle_Up.svg'
import LeftArrow from '../../assets/Caret_Circle_Up1.svg'
import Image1 from '../../assets/Rectangle 149.png'
const ScrollList = () => {
    return (
        <div className='scroll-list'>
            <div className='arrow left-arrow'>
                <img src={LeftArrow} alt='arrow' />
            </div>
            <div className='image-container'>
                <div className='image first-image'>
                    <img src={Image1} alt='img1' />
                    <div className='first-image-text'>TRACK MATRAK</div>
                    <div className='second-image-text'>20.12.203</div>
                </div>
                <div className='image second-image'>
                </div>
                <div className='image third-image'>
                </div>
            </div>
            <div className='arrow right-arrow'>
                <img src={RightArrow} alt='arrow' />
            </div>
            <div className='autoscroll-bar'>
                <div className='scrolling-text-container'>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                    <div className='scrolling-text'>FOLLOW FOR MORE</div>
                </div>


            </div>

        </div>
    )
}

export default ScrollList;
