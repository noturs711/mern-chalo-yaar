import React, { useState } from 'react';

function RegisterForm({ onClose }) {
  const [fullName, setFullName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const validateForm = () => {
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let isValid = true;

    if (!phonePattern.test(tel)) {
      setPhoneError('Phone number must be 10 digits.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!passwordPattern.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain both letters and numbers.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const formData = { fullName, tel, email, password };

        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Registration successful', data);
          onClose();  // Close the form after successful registration
        } else {
          setRegistrationError(data.error || 'Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setRegistrationError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>

        <input
          type="text"
          className="box"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="tel"
          className="box"
          placeholder="Phone number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          required
        />
        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}

        <input
          type="email"
          className="box"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="box"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        
        {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}

        <input type="submit" value="register now" className="home-btn" />
      </form>
    </div>
  );
}

export default RegisterForm;
