import React, { useState } from "react";
import Detail from "../Detail/Detail";
import style from './Card.module.css'

const Card = ({coun}) => {
    const [modal, setModal] = useState(false)

    const toggelModal = () => setModal(!modal)
    return(
        <div onClick={toggelModal} className={style.link}>
        <div className={style.card}>
            <img src={coun.flags} alt={coun.flags} className={style.image}/>
            <h1 className={style.h1}>Country: {coun.name}</h1>
            <h2 className={style.h2}>Continent: {coun.continent}</h2>
        </div>
        {modal && <div className={style.detail}>
         <Detail id={coun.id} toggelModal={toggelModal}/>   
        </div>}
        </div>
    )
}

export default Card;