import React from 'react'
import Nav from '../Nav/Nav'
import Filters from '../Filters/Filters'
import Card from '../Card/Card'
import style from './Home.module.css'

const Home = ({countries, onSearch}) => {
    return(
    <div>
        <Nav onSearch={onSearch}/>
        <Filters/>
        <div className={style.divCards}>
        {countries
        .map((coun) => (
        <Card coun={coun} key={coun.id} />
        ))
        }
        </div>
    </div>
    )
}

export default Home;