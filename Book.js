import React, { useState } from 'react';
import axios from 'axios';
import img from './book.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

const Book = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const queryParams = new URLSearchParams(location.search);
  const destinationParam = queryParams.get('destination');

  const [formData, setFormData] = useState({
    destination: destinationParam || '',
    people: '',
    arrival: '',
    leaving: '',
  });

  const locations = [
    { id: 1, name: 'Jaipur' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Delhi' },
    { id: 4, name: 'Manali' },
    { id: 5, name: 'Assam' },
    { id: 6, name: 'Kerala' },
  ];

  const costPerPerson = 300;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const totalCost = formData.people * costPerPerson;

    try {
      const response = await axios.post('http://localhost:5000/api/book', formData);
      console.log('Booking saved:', response.data);
      alert('Booking successfully submitted!');

  
      navigate(`/payment?destination=${formData.destination}&people=${formData.people}&arrival=${formData.arrival}&leaving=${formData.leaving}&totalCost=${totalCost}`);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Try again.');
    }
  };

  return (
    <section className="book" id="book">
      <h1 className="heading">BOOK NOW</h1>
      <div className="row">
        <div className="image">
          <img src={img} alt="Book a trip" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <h3>WHERE TO</h3>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">Select a destination</option>
              {locations.map((location) => (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className="inputbox">
            <h3>NO. OF PEOPLE</h3>
            <input
              type="number"
              name="people"
              placeholder="Enter no. of people"
              value={formData.people}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputbox">
            <h3>Arrival</h3>
            <input
              type="date"
              name="arrival"
              value={formData.arrival}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputbox">
            <h3>Leaving</h3>
            <input
              type="date"
              name="leaving"
              value={formData.leaving}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Book;
