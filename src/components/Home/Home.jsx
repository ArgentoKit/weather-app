import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { changeBgColor } from '../../common/changeBgColor'
import style from './Home.module.scss'

const Home = ({ weather }) => {
    const [bgColor, setBgColor] = useState({
        r: 255,
        g: 255,
        b: 255
    })

    useEffect(() => {
        if (weather.temp !== '') {
            changeBgColor(weather.temp, bgColor, setBgColor)
        }
    }, [weather.temp])
    return (
        <div className={style.home} style={{ backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})` }}>
            <NavLink className={style.searchLink} to='/search'>Search City</NavLink>
            {weather.temp !== ''
                ? <div className={style.weatherBox}>
                    {weather.icon !== '' ? <img className={style.logo}
                        src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                        alt={`${weather.description}`} />
                        : ''}
                    <span className={style.temp}>{weather.temp}°c</span>
                </div>
                : <div className={style.warning}>Allow access to your location to display the weather</div>}
        </div>
    )
}

export default Home