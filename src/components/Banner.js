import React, { useState } from 'react'
import searchicon from '../images/searchicon.png'
function Banner({query , setQuery , getNews}) {






  
  const handleChange = (e) => {
  
    setQuery(e.target.innerHTML)
    getNews()
  }

  return (
    <div>




        <div className='banner'>
            <div className='banner-line'></div>
            <h2>Today's News</h2>
            <div className='banner-line'></div>
        </div>

        <div className='banner-nav'>
           <div className='search'>
            <img src={searchicon} onClick={() => {getNews()}} />
            <input type='text' placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)}  />
            </div>
            <div className='categories'>
                <p className={query == "Academics" ? 'selected' : ''} onClick={handleChange}>Academics</p>
                <p className={query == "Entertainment" ? 'selected' : ''} onClick={handleChange}>Entertainment</p>
                <p className={query == "Sports" ? 'selected' : ''} onClick={handleChange}>Sports</p>
                <p className={query == "World" ? 'selected' : ''} onClick={handleChange}>World</p>
                <p className={query == "Finance" ? 'selected' : ''} onClick={handleChange}>Finance</p>
                <p className={query == "Politics" ? 'selected' : ''} onClick={handleChange}>Politics</p>
           </div>
        </div>
        <div className='banner-heading'>
        <h1>Popular News</h1>
        </div>
    </div>
  )
}

export default Banner