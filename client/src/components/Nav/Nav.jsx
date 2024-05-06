import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'

const Nav = ({onSearch}) => {
  const navigate = useNavigate()
  return (
    <div>
      <span className={style.name}>Countries Api</span>
      <SearchBar onSearch={onSearch}/>
      <button onClick={() => {navigate('/form')}} className={style.button}>Create Activity</button>
      <button onClick={() => {navigate('/home')}} className={style.button}>Refresh</button>
    </div>
  )
}

export default Nav;