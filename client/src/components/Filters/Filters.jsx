import React, { useEffect } from "react";
import style from './Filters.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { activityFilter, filterContinent, getAllActivities, orderAZ, orderAscendente, orderDescendente, orderZA } from "../../redux/action";

const Filters = () => {
    const dispatch = useDispatch()
    const allActivities = useSelector(state => state.activities)
    const allCountries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getAllActivities())
    }, [])
    
    const handleFilterCont = (event) => {
        dispatch(filterContinent(event.target.value));
    }

    const handleActivities = (event) => {
        dispatch(activityFilter(event.target.value))
        console.log(event.target.value)
    }

    const handlePopulation = (event) => {
        if(event.target.value === "ASCENDENTE"){
            dispatch(orderAscendente(allCountries))
        } else{
            dispatch(orderDescendente(allCountries))
        }
    }

    const handleOrderAlphabetic = (event) => {
        if(event.target.value === "AZ"){
            dispatch(orderAZ(allCountries))
        }else{
            dispatch(orderZA(allCountries))
        }
    }
    return(
        <div className={style.div}>
            <section>
                <select name="" id="" className={style.select} onChange={handleFilterCont}>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
                <select name="" id="" className={style.select} onChange={handleActivities}>
                    <option value="All" className={style.option}>All</option>
                    {allActivities.map((act, i) => (
                        <option value={act.name} className={style.option} key={i}>{act.name}</option>
                    ))}
                </select>
                <select name="" id="" className={style.select} onChange={handleOrderAlphabetic}>
                    <option value="AZ">A-Z</option>
                    <option value="ZA">Z-A</option>
                </select>
                <select name="" id="" className={style.select} onChange={handlePopulation}>
                    <option value="ASCENDENTE">Population Ascendente</option>
                    <option value="DESCENDENTE">Population Descendente</option>
                </select>
            </section>
        </div>
    )
}

export default Filters;