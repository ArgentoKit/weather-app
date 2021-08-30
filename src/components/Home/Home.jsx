import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { changeBgColor } from '../../common/changeBgColor'
import SliderBar from '../SliderBar/SliderBar'
import style from './Home.module.scss'

const Home = ({ weather, setWeather }) => {
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
            <div className={style.header}>
                <NavLink className={style.searchLink} to='/search'>Search City Page</NavLink>
            </div>
            {weather.temp !== ''
                ? <div className={style.weatherBox}>
                    {weather.icon !== '' ? <img className={style.logo}
                        src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                        alt={`${weather.description}`} />
                        : ''}
                    <span className={style.temp}>{weather.temp}°c</span>
                    <SliderBar weather={weather} setWeather={setWeather}/>
                </div>
                : ''}
        </div>
    )
}

export default Home