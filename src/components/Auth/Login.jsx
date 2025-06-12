import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../../redux/reducers/authReducer';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    setError('');

    try {
      // Simulate API call - In real app, this would be an actual API call
      if (credentials.email && credentials.password) {
        // Mock successful login
        const userData = {
          email: credentials.email,
          token: 'mock-jwt-token',
          role: credentials.email.includes('admin') ? 'admin' : 'user'
        };
        
        dispatch(loginSuccess(userData));
        navigate('/dashboard');
      } else {
        throw new Error('Please enter both email and password');
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>

      {/* Login Credentials Help Section */}
      <div className="login-help">
        <h3>Demo Login Credentials</h3>
        <div className="credentials-box">
          <div className="credential-group">
            <h4>Admin Access:</h4>
            <p>Email: admin@example.com</p>
            <p>Password: admin123</p>
            <p className="note">(Any email containing "admin" will work)</p>
          </div>
          <div className="credential-group">
            <h4>Regular User Access:</h4>
            <p>Email: user@example.com</p>
            <p>Password: password123</p>
            <p className="note">(Any email not containing "admin" will work)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 