import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '') {
      setPasswordError('Please enter your password.');
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
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();

        if (response.ok) {
          onLoginSuccess('Login successful!');
        } else {
          setLoginError(data.error || 'Login failed');
        }
      } catch (error) {
        setLoginError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="email"
          className="box"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <input
          type="password"
          className="box"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <input type="submit" value="Login Now" className="home-btn" />
        
        <p>
          New user?{" "}
          <button type="button" className="link-btn" onClick={onRegisterClick}>
            Register now
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
