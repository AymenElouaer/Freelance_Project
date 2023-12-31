import React from 'react'
import './Navbar.css'
import Facebooklogo from '../../assets/iconmonstr-facebook-6 (1) 1.png'
import Youtubelogo from '../../assets/iconmonstr-youtube-8 1.png'
import Instagramlogo from '../../assets/iconmonstr-instagram-13 1.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-left'>
                <a href='#' className='nav-item'> LISTEN LIVE</a>
                <a href='#' className='nav-item'> CONTACT US</a>
                <a href='#' className='nav-item'> GET THE APP</a>
            </div>
            <div className='nav-right'>
                <a href="" target='_blank'>
                    <img src={Youtubelogo} alt='youtube' className='logo' />
                </a>
                <a href="" target='_blank'>
                    <img src={Instagramlogo} alt='instagram' className='logo' />
                </a>
                <a href="" target='_blank'>
                    <img src={Facebooklogo} alt='facebook' className='logo' />
                </a>
            </div>
        </div>

    )
}

export default Navbar
