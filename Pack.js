import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pack = ({ imgSrc, location, description, stars, price }) => {
  const navigate = useNavigate(); // Use the navigate hook

  const handleBookClick = () => {
    navigate(`/itinerary/${location}`); // Navigate to the itinerary page for the selected location
  };

  return (
    <div className="pak-box">
      <img src={imgSrc} alt={location} />
      <div className="content">
        <h3>
          <i className='bx bx-location-plus'></i>{location}
        </h3>
        <p>{description}</p>
        <div className="stars">
          {Array(stars).fill().map((_, i) => (
            <i className='bx bxs-star' key={i}></i>
          ))}
          {Array(5 - stars).fill().map((_, i) => (
            <i className='bx bx-star' key={i}></i>
          ))}
        </div>
      

        {/* Replace <a> with <button> */}
        <button className="home-btn" onClick={handleBookClick}>Book</button> {/* Handle click */}
      </div>
    </div>
  );
};

export default Pack;
