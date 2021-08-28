import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { api } from '../../api/currentWeather'
import style from './SearchWeather.module.scss'

const SearchWeather = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')

    const search = e => {
        if (e.key === 'Enter') {
            axios.get(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(res => res.data)
                .then(result => {
                    setWeather(result)
                    setQuery('')
                    console.log(result)
                })
        }
    }

    return (
        <>
            <div className={style.searchBox}>
                <input className={style.search}
                    type='text'
                    placeholder='Search a city..'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search} />
            </div>
            {(typeof weather.main != 'undefined' ? (
                <>
                    <div className={style.weatherBox}>
                        <div className={style.weatherContent}>
                            <div className={style.location}>{weather.name}</div>
                            <div className={style.temp}>{Math.round(weather.main.temp)}°c</div>
                            <div className={style.weather}>{weather.weather[0].main}</div>
                        </div>
                    </div>
                </>
            ) : (''))}
            <div className={style.back}>
                <NavLink className={style.backLink} to='/'>Back to the main</NavLink>
            </div>
        </>
    )
}

export default SearchWeather