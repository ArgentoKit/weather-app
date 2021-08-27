import React from 'react'
import Home from './components/Home/Home';
import useGeoLocation from './hooks/useGeoLocation';

const App = () => {
  const location = useGeoLocation()

  return (
    <>
      <h1>Проверка связи</h1>
      <Home />
    </>
  )
}

export default App;