import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice'; // Импортируем экшен login
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для редиректа

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login(email)); // Выполняем логин с введенным email
      navigate('/'); // Редиректим на главную страницу
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

