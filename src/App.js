import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { api } from './api/api';
import Home from './components/Home/Home';
import SearchWeather from './components/SearchWeather/SearchWeather';

const App = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [weather, setWeather] = useState({
    icon: '',
    temp: '',
    city: ''
  })

  const fetchWeather = async () => {
    try {
      window.navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
      if((latitude && longitude) !== 0) {
        const res = await axios.get(
          `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
        )
        setWeather({
          ...weather,
          icon: res.data.weather[0].icon,
          temp: Math.round(res.data.main.temp),
          city: res.data.name,
          description: res.data.weather[0].description
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [latitude, longitude])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Home weather={weather}/>} />
          <Route path='/search' component={SearchWeather} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;