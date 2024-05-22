import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png'; 
import info_icon from '../../assets/info_icon.png'; 
import TitleCards from '../../components/TitleCards/TitleCards';
import cards_data from '../../assets/cards/Cards_data';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className='Home'>
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Netflix offers unlimited entertainment at your fingertips. Dive into a world of movies, TV shows, and documentaries, all available on-demand. With an extensive library that includes everything from classic films to the latest blockbusters, you'll always find something to watch.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Popular on Netflix" cards={cards_data} category={"top_rated"} />
        <TitleCards title="Punjabi Movies" cards={cards_data} category={"popular"}/>
        <TitleCards title="Trending Now" cards={cards_data} category={"upcoming"}/>
        <TitleCards title="Blockbuster Movies" cards={cards_data}category={"now_playing"} />
        
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
