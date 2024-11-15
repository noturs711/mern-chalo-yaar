import './style.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Book from './components/Book';
import Packages from './components/Packages';
import Services from './components/Services';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import Itinerary from './components/Itinerary';
import Payment from './components/Payment'; 

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [notification, setNotification] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setNotification('');
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
    setNotification('');
  };

  const handleLoginSuccess = (message) => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setNotification(message); // Show success message
  };

  const handleCloseForms = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  return (
    <Router>
      <div className="App">
        <Header onLoginClick={handleLoginClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} /> {/* Route to Book component */}
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/itinerary/:location" element={<Itinerary />} /> {/* Route for itinerary */}
          <Route path="/payment" element={<Payment />} /> {/* Route to Payment component */}
        </Routes>
        <Footer />

        {/* Login Form Modal */}
        {showLoginForm && (
          <div className="modal">
            <LoginForm
              onLoginSuccess={handleLoginSuccess}
              onRegisterClick={handleRegisterClick} // Ensure this prop is passed
            />
          </div>
        )}

        {/* Register Form Modal */}
        {showRegisterForm && (
          <div className="modal">
            <RegisterForm onClose={handleCloseForms} />
          </div>
        )}

        {/* Success Notification */}
        {notification && (
          <div className="notification" style={{ color: 'green', fontWeight: 'bold', margin: '20px' }}>
            {notification}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
