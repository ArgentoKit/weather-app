import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Home.module.scss'

const Home = ({weather}) => {
    
    return (
        <div className={style.home}>
            <NavLink className={style.searchLink} to='/search'>Search City</NavLink>
            <div className={style.weatherBox}>
                {weather.icon !== ''    ? <img className={style.logo} src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}/>
                                        : ''}
                <span className={style.temp}>{weather.temp}°c</span>
            </div>
        </div>
    )
}

export default Home