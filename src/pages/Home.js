import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Box from '../components/Box'
import Header from '../components/Header'
import Loading from '../components/Loading'

function Home() {

    const [data , setData] = useState([])
    const [query , setQuery] = useState('sports')
    const [loading, setLoading] = useState(false);


    const apikey = `3659cb5495f1448c9304c1c8093fa695`
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`
  
    const getNews = () => {
      setLoading(true)
      fetch(url).then(res => res.json())
      .then(data => 
        {
        console.log(data.articles)
        setLoading(false)
        setData(data.articles)
    }).catch(err => console.log(err))
    }
  
    useEffect(() => {
        
      getNews()
    },[])
  return (
    <>
    
    
    <Header />
    <Banner query={query} setQuery={setQuery} getNews={getNews} />
    {loading ? <Loading />  : 

    <div className='box-container'>
    {data.map((n) => (
    <Box title={n.title} autho={n.author} date={n.publishedAt} img={n.urlToImage} />

  ))}
  </div>
}

    
    </>
  )
}

export default Home