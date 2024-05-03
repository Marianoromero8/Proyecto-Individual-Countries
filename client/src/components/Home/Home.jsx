import React from 'react'
import Nav from '../Nav/Nav'
import Filters from '../Filters/Filters'
import Card from '../Card/Card'
import style from './Home.module.css'

const Home = ({countries, onSearch}) => {

    const halfCountries = Math.ceil(countries.length / 2)
    const countriesTop = countries.slice(0, halfCountries)
    const countriesBottom = countries.slice(halfCountries)
    return(
    <div className={style.container}>
        <Nav onSearch={onSearch}/>
        <Filters/>
        <div className={style.divCards}>
        <div className={style.divCardsTop}>
        {countriesTop
        .map((coun) => (
        <Card coun={coun} key={coun.id} />
        ))
        }
        </div>
        <div className={style.divCardsBottom}>
        {countriesBottom
        .map((coun) => (
        <Card coun={coun} key={coun.id} />
        ))
        }
        </div>
        </div>
    </div>
    )
}

export default Home;