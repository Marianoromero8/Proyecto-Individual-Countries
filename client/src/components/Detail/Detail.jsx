import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/action";
import style from './Detail.module.css'

const Detail = ({id, toggelModal}) => {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.countryDetail)

    useEffect(() => {
        dispatch(getDetail(id))
    }, [])
    
    return detail ? (
        <>
        <div className={style.div}>

        <div className={style.image}>
            <img src={detail.flags} alt={detail.flags} />
        </div>

        <div className={style.content}>
            <h1 className={style.h1}>Country: {detail.name}</h1>
            <h2 className={style.h2}>ID: {detail.id}</h2>
            <h2 className={style.h2}>Continent: {detail.continent}</h2>
            <h2 className={style.h2}>Capital: {detail.capital}</h2>
            <h2 className={style.h2}>Subregion: {detail.subregion}</h2>
            <h2 className={style.h2}>Area: {detail.area}</h2>
            <h2 className={style.h2}>Population: {detail.population}</h2>
        </div>

        <button onClick={toggelModal} className={style.back}>Back</button>

        </div>
        </>
    ) : <h1 className={style.loading}>LOADING...</h1>

    
}

export default Detail;