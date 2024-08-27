// LoginForm.js
import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegNoContext from '../../Components/RegNoContext'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function LoginForm({ title }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setRegNo, setStallName } = useContext(RegNoContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/MiniProject/login.php', {
        username,
        password,
      });

      if (response.data.status === 'success') {
        if (response.data.type === 'student') {
          setRegNo(response.data.reg_no);
          navigate('/restaurants');
        } else if (response.data.type === 'vendor') {
          setStallName(response.data.stall_name);
          navigate('/Adminhome');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <div className="input-box">
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <div className="input-box">
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="icon">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
