import React, { useEffect, useState, useRef } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title , category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(); // Create a ref for the scrollable container
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjE2YWFhM2ZmOGNmMDIxZmJiMDE5ZmIzZTk2MDliZiIsInN1YiI6IjY2NDllMmUzYTQwOGZhNDhkYWNjNDBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kv7fM2QRKQQSamPGmUKUi8xDZhShFRoyyIlJeF9RRq0'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; // Corrected property name
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
      
    cardsRef.current.addEventListener('wheel', handleWheel); // Corrected method name
  }, []);

  return (
    <div className='TitleCards'>
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to ={`/player/${card.id}`}className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;
