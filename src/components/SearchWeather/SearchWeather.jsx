import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { api, geocodingApi } from '../../api/api'
import { changeBgColor } from '../../common/changeBgColor'
import { currentDate, week } from '../../common/currentDate'
import style from './SearchWeather.module.scss'

const SearchWeather = () => {
    const [query, setQuery] = useState('')
    const [coord, setCoord] = useState({
        city: '',
        lat: 0,
        long: 0
    })
    const [weather, setWeather] = useState('')
    const [bgColor, setBgColor] = useState({
        r: 255,
        g: 255,
        b: 255
    })
    var today = new Date().getDay()
    const search = async e => {
        if (e.key === 'Enter' || e.type === 'click') {
            await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${geocodingApi.key}`)
                .then(res => res.data)
                .then(result => {
                    setCoord({
                        ...coord,
                        lat: result.results[0].geometry.location.lat,
                        long: result.results[0].geometry.location.lng
                    })
                })
            console.log(e)
        }
    }
    const getWeather = async () => {
        await axios.get(`${api.base}onecall?lat=${coord.lat}&lon=${coord.long}&exclude=minutely,hourly,current&units=metric&appid=${api.key}`)
            .then(res => res.data)
            .then(result => {
                setWeather(result)
                setCoord({
                    ...coord,
                    city: query
                })
                setQuery('')
                changeBgColor(result.daily[0].temp.eve, bgColor, setBgColor)
            })
    }

    useEffect(() => {
        getWeather()
    }, [coord.lat, coord.long])

    return (
        <>
            <Helmet>
                <title>Weather App | Search</title>
            </Helmet>
            <div className={style.searchBox}>
                <input className={style.search}
                    type='text'
                    placeholder='Search a city..'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search} />
                <button className={style.searchButton}
                        onClick={search}>Search</button>
            </div>
            {((coord.lat !== 0 && coord.long !== 0) ? (
                <>
                    <div className={style.weatherBox} style={{ backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})` }}>
                        <div className={style.weatherContent}>
                            <div className={style.today}>
                                <div className={style.todayGroup}>
                                    <div className={style.currentDay}>{currentDate()}</div>
                                    <span className={style.city}>{coord.city}</span>
                                </div>
                                <div className={style.weather}>
                                    {weather.daily[0].weather[0].icon !== '' ? <img className={style.icon}
                                        src={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`}
                                        alt={`${weather.daily[0].weather[0].description}`} />
                                        : ''}
                                    <span>{Math.round(weather.daily[0].temp.eve)}°c</span>
                                </div>
                            </div>

                            {week.map((d, index) => {
                                ++index
                                const nextDay = (new Date((weather.daily[index].dt) * 1000).toLocaleString("en-US", { weekday: "long" })).split('').slice(0, 3).join('')
                                const month = (new Date((weather.daily[index].dt) * 1000).toLocaleString("en-US", { month: "long" })).split('').slice(0, 3).join('')
                                const date = (new Date((weather.daily[index].dt) * 1000).toLocaleString("en-US", { day: "numeric" })).split('').slice(0, 3).join('')
                                return (
                                    <div className={style.future} key={d}>
                                        <div className={style.nextDate}>
                                            {nextDay}, {month} {date}
                                        </div>
                                        {weather.daily[index].weather[0].icon !== '' ? <img className={style.nextIcon}
                                            src={`http://openweathermap.org/img/wn/${weather.daily[index].weather[0].icon}@2x.png`}
                                            alt={`${weather.daily[index].weather[0].description}`} />
                                            : ''}
                                        <div className={style.dayNight}>
                                            {Math.round(weather.daily[index].temp.day)} / {Math.round(weather.daily[index].temp.night)}°c
                                        </div>
                                        <span className={style.nextDescription}>
                                            {weather.daily[index].weather[0].description}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            ) : <div className={style.warning}>Enter the city name in the search</div>)}
            <div className={style.back}>
                <NavLink className={style.backLink} to='/'>Back to the main</NavLink>
            </div>
        </>
    )
}

export default SearchWeather