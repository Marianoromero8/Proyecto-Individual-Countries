import './App.css';
import {Form, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Pagination from './components/Pagination/Pagination';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCountries, getByName } from './redux/action';


function App() {
  const dispatch = useDispatch();

  const onSearch = async (name) => {
    dispatch(getByName(name))
  }

  useEffect(() => {
    dispatch(getAllCountries())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Pagination onSearch={onSearch}/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
