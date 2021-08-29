import React from 'react'
import style from './SliderBar.module.scss'

const SliderBar = ({ weather, setWeather }) => {
    return (
        <div className={style.slideContainer}>
            <input type="range" min="-10" max="30" value={weather.temp} className={style.slider} onInput={(e) => {
                setWeather({
                    ...weather,
                    temp: e.target.value
                })
                console.log(e.target.value)
            }} />
        </div>
    )
}

export default SliderBar