import React from 'react'
import './Homepage.css'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import ScrollList from '../ScrollList/ScrollList'
import PlayList from '../PlayList/PlayList'

const Homepage = () => {
    return (
        <div>
            <div>
                <Banner />
                <div className='main-content'>
                    <div className='overlay' />
                    <div className='top-image-container' />
                    <div className='text-container'>
                        <p className='text'>We are one people but we live as if </p>
                        <div className='second-text-container'>
                            <p className='second-text'>Divided … everything is connected</p>
                        </div>
                        <div className='right-image-container' />
                    </div>
                    <div className='middle-group'>
                        <Navbar />
                        <ScrollList />
                        <PlayList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
