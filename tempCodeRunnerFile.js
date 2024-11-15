
import './style.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Book from './components/Book';
import Packages from './components/Packages';
import Services from './components/Services';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [notification, setNotification] = useState(''); // For notifications

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setNotification(''); 
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
    setNotification(''); // Clear notification when opening the form
  };

  const handleLoginSuccess = (message) => {
    setShowLoginForm(false);
    setNotification(message); // Set notification message on successful login
  };

  return (
    <div className="App">
      <Header onLoginClick={handleLoginClick} />
      <Home />
      <Book />
      <Packages />
      <Services />
      <Footer />

      {showLoginForm && (
        <LoginForm onLoginSuccess={handleLoginSuccess} onRegisterClick={handleRegisterClick} />
      )}
      {showRegisterForm && <RegisterForm onClose={() => setShowRegisterForm(false)} />}

      {/* Display notification if any */}
      {notification && (
        <div className="notification" style={{ color: 'green', fontWeight: 'bold', margin: '20px' }}>
          {notification}
        </div>
      )}
    </div>
  );
}

export default App;
