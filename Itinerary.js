import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Iternary.css';
import img1 from './j1.jpeg';
import img2 from './j2.jpg';
import img3 from './j3.jpg';
import img4 from './j4.jpeg';
import img5 from './m1.jpeg';
import img6 from './m2.jpg';
import img7 from './m3.png';
import img8 from './m4.jpg';

const itineraryData = {
  Jaipur: {
    description: "Explore the Pink City with its vibrant culture and stunning architecture.",
    stars: 5,
   
    images: [img1, img2, img3, img4],
    details: [
      {
        day: 1,
        activities: [
          { time: "9:00 AM", activity: "Arrival at Jaipur" },
          { time: "11:00 AM", activity: "Check-in at Hotel" },
          { time: "1:00 PM", activity: "Lunch at Chokhi Dhani" },
          { time: "3:00 PM", activity: "Visit City Palace" },
        ],
        cost: 100,
      },
      {
        day: 2,
        activities: [
          { time: "8:00 AM", activity: "Breakfast at the hotel" },
          { time: "10:00 AM", activity: "Explore Amber Fort" },
          { time: "1:00 PM", activity: "Lunch at local restaurant" },
          { time: "3:00 PM", activity: "Shopping in Johari Bazaar" },
        ],
        cost: 150,
      },
      {
        day: 3,
        activities: [
          { time: "9:00 AM", activity: "Breakfast" },
          { time: "11:00 AM", activity: "Visit Hawa Mahal" },
          { time: "1:00 PM", activity: "Departure" },
        ],
        cost: 200,
      },
    ],
  },
  Mumbai: {
    description: "Experience the bustling city of dreams.",
    stars: 4,
   
    images: [img5, img6, img7, img8],
    details: [
      {
        day: 1,
        activities: [
          { time: "9:00 AM", activity: "Breakfast at local cafe" },
          { time: "10:30 AM", activity: "Visit Gateway of India" },
          { time: "12:30 PM", activity: "Boat ride to Elephanta Caves" },
          { time: "4:00 PM", activity: "Return and explore Colaba Market" },
          { time: "7:00 PM", activity: "Dinner at a seaside restaurant" },
        ],
        cost: 200,
      },
      {
        day: 2,
        activities: [
          { time: "8:00 AM", activity: "Breakfast at hotel" },
          { time: "9:30 AM", activity: "Tour of Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (Museum)" },
          { time: "12:30 PM", activity: "Lunch at Kala Ghoda Cafe" },
          { time: "2:30 PM", activity: "Visit Marine Drive and Chowpatty Beach" },
          { time: "6:00 PM", activity: "Watch sunset at Marine Drive" },
          { time: "8:00 PM", activity: "Dinner in Fort area" },
        ],
        cost: 100,
      },
      {
        day: 3,
        activities: [
          { time: "8:30 AM", activity: "Breakfast at Leopold Cafe" },
          { time: "10:00 AM", activity: "Explore Dharavi Slum with guided tour" },
          { time: "1:00 PM", activity: "Lunch at a local eatery" },
          { time: "3:00 PM", activity: "Visit Bandra Bandstand and Bandra Fort" },
          { time: "6:00 PM", activity: "Walk down Linking Road for shopping" },
          { time: "8:00 PM", activity: "Dinner in Bandra" },
        ],
        cost: 100,
      },
      {
        day: 4,
        activities: [
          { time: "9:00 AM", activity: "Breakfast at hotel" },
          { time: "10:30 AM", activity: "Tour of Film City (Bollywood experience)" },
          { time: "1:00 PM", activity: "Lunch at Juhu Beach food stalls" },
          { time: "3:00 PM", activity: "Relax at Juhu Beach" },
          { time: "5:00 PM", activity: "Evening coffee at a cafe in Juhu" },
          { time: "7:00 PM", activity: "Dinner at a popular restaurant in Juhu" },
        ],
        cost: 100,
      },
    ],
  },
};

const Itinerary = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const itinerary = itineraryData[location];

  if (!itinerary) {
    return <h2>Itinerary not found</h2>;
  }

  const handleBookNow = () => {
    navigate('/book', { state: { destination: location } });
  };

  return (
    <div className="itinerary">
      <h1>{location} Itinerary</h1>
      <p>{itinerary.description}</p>
      <div className="itinerary-images">
        {itinerary.images.map((image, index) => (
          <img key={index} src={image} alt={`${location} - ${index + 1}`} />
        ))}
      </div>
      <div className="itinerary-details">
        {itinerary.details.map((day, index) => (
          <div key={index}>
            <h3>Day {day.day}</h3>
            <ul>
              {day.activities.map((activity, i) => (
                <li key={i}>
                  {activity.time} - {activity.activity}
                </li>
              ))}
            </ul>
            <p>Cost for the day: ${day.cost}</p>
          </div>
        ))}
      </div>
      <button className="book-button" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default Itinerary;
