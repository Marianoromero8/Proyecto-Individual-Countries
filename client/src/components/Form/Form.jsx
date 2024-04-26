import React, { useEffect, useState } from "react";
import style from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCountries, postActivity } from "../../redux/action";
import validations from './validations'


const Form = () => {
    const [selectedSeason, setSelectedSeason] = useState("");
    const allCountries = useSelector(state => state.countries)
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getAllCountries(allCountries))
    },[])
  
    const[errors, setErrors] = useState({
      name: "",
      difficulty: "", 
      season: "",
      countries: []
    })
    const [form, setForm] = useState({
        name: "",
        difficulty: "", 
        season: "",
        countries: []
    })
    
    useEffect(() => {
      setErrors(validations(form))
    }, [form.name, form.difficulty, form.season, form.countries])
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (form.name && form.difficulty && form.season && form.countries > 0
      ) {
        dispatch(postActivity(form));
        setForm({
            name: "",
            difficulty: "", 
            season: "",
            countries: []
        });
        alert("Activity created");
      } else {
        alert("All Necessary fields must be filled");
      }
    }
  
    const handleAdd = (event) => {
      const {name, value} = event.target;
  
      if(!form.countries.includes(value) && form.countries.length < 5) {
        setForm({
          ...form,
          countries: [...form.countries, value]
        })
      } 
    }
  
    const handleRemove = (i) => {
      const freshCount = [...form.countries];
  
      freshCount.splice(i, 1);
  
      setForm({
        ...form,
        countries: [...freshCount]
      })
    }
  
    const handleChange = (e) => {
      const {name, value} = e.target
  
      setForm({
        ...form,
        [name]: value
      })
    }

    const handleChangeSeason = (e) => {
        setSelectedSeason(e.target.value);
        setForm({
          ...form,
          season: e.target.value 
        });
      }


    return(
        <>
        <div className={style.divForm}>
        <form onSubmit={(event) => handleSubmit(event)} className={style.form}>

        <h1>Create an Activity</h1>

        <div onChange={handleChange}>
            <label htmlFor="name" className={style.label}>Name Activity</label>
            <input type="text" name="name" placeholder="Activity" value={form.name} onChange={handleChange} className={style.input}/>
        </div>

        <div onChange={handleChange}>
            <label htmlFor="difficulty" name="difficulty" className={style.label}>Difficulty</label>
            <input type="range" min={1} max={5} className={style.range}/>
        </div>

        <div>
            <label htmlFor="season" name="season" className={style.label}>Season</label>
            <select type="text" className={style.select} value={selectedSeason} onChange={handleChangeSeason}>
                <option value="summer">Select Season</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
            </select>
        </div>

        <div onChange={handleChange}>
            <label htmlFor="countries" name="countries" className={style.label}>Countries where you can do this activity</label>
            <select onChange={handleAdd} disabled={form.countries.length === 7} name="countries" id="countries">
            {allCountries.map((coun) => 
                <option key={coun.id} value={coun.name} className={style.option}>{coun.name}</option>)}
            </select>
            <small>Minimun 1 country</small>
            {form.countries.map((coun, i) => (
                <div>
                    <span className={style.span}>{coun}</span>
                    <button className={style.buttonTag} type="button" onClick={() => handleRemove(i)}>X</button>
                </div>
            ))}
        </div>

        <button type="submit" className={style.submit}>Create Activity</button>
        </form>
        </div>
        </>
    )
}

export default Form;