import React, { useEffect, useState } from "react";
import style from './Form.module.css'
import validations from './validations'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCountries, postActivity } from "../../redux/action";

const Form = () => {
    const [selectedSeason, setSelectedSeason] = useState("");
    const allCountries = useSelector(state => state.countries)
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getAllCountries())
    },[])
  
    const[errors, setErrors] = useState({
      name: "",
      difficulty: "",
      duration: "", 
      season: "",
      countries: []
    })
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",  
        season: "",
        countries: []
    })
    
    useEffect(() => {
      setErrors(validations(form))
    }, [form.name, form.difficulty, form.duration, form.season, form.countries])
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (form.name && form.difficulty && form.duration && form.season && form.countries.length > 0
      ) {
        dispatch(postActivity(form));
        dispatch(getAllCountries())
        setForm({
            name: "",
            difficulty: "", 
            duration: "", 
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
  
      if(!form.countries.includes(value) && form.countries.length < 7) {
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
  
    const handleChange = (event) => {
      const {name, value} = event.target
  
      setForm({
        ...form,
        [name]: value
      })
    }

    const handleChangeSeason = (event) => {
        setSelectedSeason(event.target.value);
        setForm({
          ...form,
          season: event.target.value 
        });
      }

    return(
        <>
        <div className={style.divForm}>
        <form onSubmit={(event) => handleSubmit(event)} className={style.form}>

        <h1>Create an Activity</h1>

        <div onChange={handleChange} >
            <label htmlFor="name" className={style.label}>Name Activity: </label>
            <input type="text" name="name" placeholder="Activity" value={form.name} onChange={handleChange}  className={style.input}/>
          {errors.name && <p className={style.errors}>{errors.name}</p>}
        </div>

        <div onChange={handleChange}>
            <label htmlFor="difficulty" className={style.label}>Difficulty: </label>
            <input type="number" name="difficulty" value={form.difficulty} className={style.input} onChange={handleChange}/>
            {errors.difficulty && <p className={style.errors}>{errors.difficulty}</p>}
        </div>

        <div onChange={handleChange}>
            <label htmlFor="duration" name="duration" className={style.label}>Duration: </label>
            <input type="number" name="duration" value={form.duration} className={style.input} onChange={handleChange}/>
            <p>hs</p>
            {errors.duration && <p className={style.errors}>{errors.duration}</p>}
        </div>

        <div onChange={handleChange}>
            <label htmlFor="season" name="season" className={style.label}>Season</label>
            <select type="text" name="season" className={style.select} value={form.season} onChange={handleChangeSeason}>
                <option value="none">Select Season</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
            </select>
            {errors.season && <p className={style.errors}>{errors.season}</p>}
        </div>

        <div>
            <label htmlFor="countries" name="countries" className={style.label}>Countries where you can do this activity</label>
            <select onChange={handleAdd} disabled={form.countries.length === 7} name="countries" >
            {allCountries.map((coun) => 
                <option key={coun.id} value={coun.name} className={style.option}>{coun.name}</option>)}
            </select>
            <small>Minimun 1 country</small>
            {Array.isArray(form.countries) && form.countries.map((coun, i) => (
                <div key={i} className={style.tag}>
                    <span className={style.span}>{coun}</span>
                    <button className={style.buttonTag} type="button" onClick={() => handleRemove(i)}>X</button>
                </div>
            ))}
          {errors.countries && <p className={style.errors}>{errors.countries}</p>}
        </div>

        <button type="submit" className={style.submit}>Create Activity</button>
        </form>
        <div>
          <button onClick={() => {navigate("/home")}} className={style.backHome}>Back Home</button>
        </div>

        </div>
        </>
    )
}

export default Form;