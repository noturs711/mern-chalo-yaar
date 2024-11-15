import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const destination = queryParams.get('destination');
  const people = queryParams.get('people');
  const arrival = queryParams.get('arrival');
  const leaving = queryParams.get('leaving');
  const totalCost = queryParams.get('totalCost'); // Retrieve total cost

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Booking Summary</h1>
      <div style={styles.details}>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Number of People:</strong> {people}</p>
        <p><strong>Arrival Date:</strong> {arrival}</p>
        <p><strong>Leaving Date:</strong> {leaving}</p>
        <p><strong>Total Cost:</strong> ${totalCost}</p> 
      </div>
    </div>
  );
};

// Add styles as before
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9f9f9', // Light background color
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      marginBottom: '20px',
      fontSize: '4rem',
    },
    details: {
      backgroundColor: '#fff', // White background for details
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
      fontSize:'2.8rem',
    },
  };
  
  export default Payment;

