import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div>
      <span>Countries Api</span>
      <SearchBar/>
      <button onClick={() => {navigate('/form')}}>Create Activity</button>
    </div>
  )
}

export default Nav;