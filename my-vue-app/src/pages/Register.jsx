import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Check if user already exists
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      setError('User already exists.');
      return;
    }

    // Save user to localStorage
    localStorage.setItem(username, JSON.stringify({ username, password }));
    setError('');
    alert('Registration successful! You can now log in.');
  };

  return (
    <div>
      <h1  >Register Page</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{color:"white"}}>Register</button>
      </form>
    </div>
  );
};

export default Register;
