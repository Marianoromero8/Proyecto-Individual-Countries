import React from 'react'
import style from './Landing.module.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Welcome to Countries Web Site</p>
      <button onClick={() => {navigate('/home')}}>ENTER</button>
    </div>
  )
}

export default Landing;