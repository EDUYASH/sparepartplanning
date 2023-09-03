import React, { useState } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AuthenticationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume authentication is successful if username and password are not empty
    if (username && password) {
      setAuthenticated(true);
      navigate('/dashboard'); // Redirect to the dashboard page after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};


export default AuthenticationPage;