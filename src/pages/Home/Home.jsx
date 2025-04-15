import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navabar/Navbar';
import Footer from '../../components/Footer/Footer';

import image from '../../../public/hero_banner.jpg'
import title from '../../assets/hero_title.png'
import play_icon from './../../assets/play_icon.png';
import info_icon from './../../assets/info_icon.png';
import TitleCard from '../../components/TitleCard/TitleCard'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
        <img src={image} alt='' className='banner-img'/>
        <div className="hero-caption">
            <img src={title} alt=""  className='caption-img'/>
            <p>Discover his ties to a secret ancient order,a young man living in mdern Istanbul embarks on a quest to a city from an immortal enemy</p>
            <div className="hero-btns">
                <button className='btn'>
                     <img src={play_icon} alt=''/>
                     Play
                </button>
                <button className='btn dark-btn'>
                     <img src={info_icon} alt=''/>
                    More Info
                </button>  
            </div>
            <TitleCard/>
        </div>
        </div>
        <div className="more-card">
             <TitleCard title={"New UpComing"}/>
            <TitleCard title={"BlockBuster Movies"} />
            <TitleCard title={"Top Pics for You"} />
            <TitleCard title={"Only on Netflix"} />
        </div>

        <Footer/>
    </div>
  ) 
}

export default Home
