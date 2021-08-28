import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchWeather from './components/SearchWeather/SearchWeather';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchWeather} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;