import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'

const Nav = ({onSearch}) => {
  const navigate = useNavigate()
  return (
    <div>
      <span>Countries Api</span>
      <SearchBar onSearch={onSearch}/>
      <button onClick={() => {navigate('/form')}}>Create Activity</button>
    </div>
  )
}

export default Nav;