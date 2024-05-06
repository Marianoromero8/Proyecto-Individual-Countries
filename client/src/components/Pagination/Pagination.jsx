import React, { useState } from 'react';
import Home from '../Home/Home';
import { useSelector } from 'react-redux';
import style from './Pagination.module.css';

const Pagination = ({onSearch}) => {
  const allCountries = useSelector(state => state.countries);

    const[pagina, setPagina] = useState(1);
    const[porPag, setPorPag] = useState(10);
    const [input, setInput] = useState(1);

    const startIndex = (pagina - 1) * porPag;
    const endIndex = Math.min(startIndex + porPag, allCountries.length);
    const showCountries = allCountries.slice(startIndex, endIndex)
    
    const max = Math.ceil(allCountries.length / porPag);
    
    const nextPage = () => {
        setInput(pagina + 1);
        setPagina(pagina + 1);
    }

    const backPage = () => {
        setInput(pagina - 1);
        setPagina(pagina - 1);
    }
    
    const onInput = (e) => {
        const val = (e.target.value)  
        if ( val < 1 || val > Math.ceil(max) || isNaN(val)){
            setPagina(1);
            setInput(1)
        } else{
            setPagina((val))
        }
    }
    
    const onChange = (e) => {
        setInput(e.target.value)
    }

  return (
     <div className={style.pagination}>
      <Home pagina={pagina} porPag={porPag} countries={showCountries} onSearch={onSearch}/>
      <div className={style.div}>
      <button disabled={pagina === 1 || pagina < 1} onClick={backPage} className={style.button}>Back</button>
      <input type='number' min="1" max={max} disabled onChange={event => onChange(event)} onClick={event => onInput(event)}  name='page' value={input} autoComplete='off' readOnly className={style.input}/>
      <button disabled={pagina === Math.ceil(max) || pagina > max} onClick={nextPage} className={style.button}>Next</button>
      <p className={style.p}>de {max}</p>
      </div>
    </div>
  )
}

export default Pagination;