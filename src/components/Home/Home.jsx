import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Home.module.scss'

const Home = () => {
    

    return (
        <div className={style.home}>
            <NavLink className={style.searchLink} to='/search'>Search City</NavLink>
        </div>
    )
}

export default Home