import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { changeBgColor } from '../../common/changeBgColor'
import style from './Home.module.scss'

const temperatures = [
    { temp: -10, step_r: 0, step_g: 0, step_b: 0 },
    { temp: 0, step_r: 23, step_g: 0, step_b: 0 },
    { temp: 10, step_r: 2.5, step_g: 0.8, step_b: 25.5 },
    { temp: 30, step_r: 0, step_g: 5.35, step_b: 0 },
]

const Home = ({weather}) => {
    const [bgColor, setBgColor] = useState({
        r: 255,
        g: 255,
        b: 255
    })
    
    useEffect(() => {
        if (weather.temp !== '') {
            changeBgColor(weather.temp, temperatures, bgColor, setBgColor)
        }
    }, [weather.temp])
    return (
        <div className={style.home} style={{backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`}}>
            {console.log(bgColor)}
            <NavLink className={style.searchLink} to='/search'>Search City</NavLink>
            <div className={style.weatherBox}>
                {weather.icon !== ''    ? <img  className={style.logo} 
                                                src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} 
                                                alt={`${weather.description}`}/>
                                        : ''}
                <span className={style.temp}>{weather.temp}°c</span>
            </div>
        </div>
    )
}

export default Home