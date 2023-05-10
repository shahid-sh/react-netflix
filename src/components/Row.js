import React, { useEffect, useState } from 'react'
import instance from '../instanceConfig'
import './Row.css'

function Row({title,fetchUrl}) {

    const base_url = "https://image.tmdb.org/t/p/original/"
const [movies,setMovies] = useState([])



   const fetchData = async ()=>{
    const response = await instance.get(fetchUrl)
    const {results} = response.data
    // console.log(results);
    setMovies(results)
   }

  //  console.log(movies);

   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div className='row'>
        <h2 className='title'>{title}</h2>
        <div className='movies-row'>
          {
            movies.map((movies)=>(
                <img className='movie' src={`${base_url}/${movies.backdrop_path}`} alt="movie image" />
            ))
          }
        </div>
    </div>
  )
}

export default Row