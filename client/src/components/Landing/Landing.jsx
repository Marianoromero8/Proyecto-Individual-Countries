import React from 'react'
import style from './Landing.module.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={style.divLanding}>
      <div className={style.divImg}>
        <img src="/coffemap.jpeg" alt="" className={style.img}/>
      </div>
      <div className={style.divEnter}>
      <h1>Welcome to Countries Web Site</h1>
      <button onClick={() => {navigate('/home')}} className={style.button}>ENTER</button>
      </div>
    </div>
  )
}

export default Landing;