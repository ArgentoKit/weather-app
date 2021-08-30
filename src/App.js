import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { api } from './api/api';
import AllowGeoLocation from './components/allowGeoLocation/AllowGeoLocation';
import Home from './components/Home/Home';
import SearchWeather from './components/SearchWeather/SearchWeather';

const App = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [weather, setWeather] = useState({
    icon: '',
    temp: '',
    city: '',
    description: ''
  })
  const [modalActive, setModalActive] = useState(false)

  const fetchWeather = async () => {
    const successCallback = (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log(position)
    }
    const errorCallback = (error) => {
      console.log(error)
      setModalActive(true)
    }
    try {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
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
        <Helmet>
          <title>Weather App | Home</title>
        </Helmet>
        <Switch>
          <Route exact path='/' render={() => <Home weather={weather} setWeather={setWeather}/>} />
          <Route path='/search' component={SearchWeather} />
        </Switch>
        <AllowGeoLocation active={modalActive} 
                          setActive={setModalActive} 
                          fetch={fetchWeather}/>
      </BrowserRouter>
    </>
  )
}

export default App;