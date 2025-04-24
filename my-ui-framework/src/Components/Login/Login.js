import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onLogin) {
      onLogin({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-heading">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="login-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="login-input"
      />

      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default Login;
