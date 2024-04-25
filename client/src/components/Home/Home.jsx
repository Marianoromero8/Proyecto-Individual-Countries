import React from 'react'
import Nav from '../Nav/Nav'
import Filters from '../Filters/Filters'
import Card from '../Card/Card'

const Home = ({countries, onSearch}) => {
    return(
    <div>
        <Nav onSearch={onSearch}/>
        <Filters/>
        <div>
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