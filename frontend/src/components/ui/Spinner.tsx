import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

const Spinner = () => {
  const[movies, setMovies] = useState<any>(null);
  const[loading, setLoading] = useState<any>(true);


  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get("http://localhost:4500/")
      console.log("Api response", res.data)
      setMovies(res.data.recommendations)
      setLoading(false)
    }
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>

  const videoId = movies.yUrl.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <>
    <div>
      <h1>Movie Recommendation</h1>
      {movies &&(
        <div>
          <h1>{movies.name}</h1>
          <iframe src={embedUrl} width="560" height="315"></iframe>
          <h1 className='font-bold'>Description of the movie</h1>
          <h2 className='font-light'>{movies.description}</h2>
        </div>
      )}
    </div>
    </>
  )
}

export default Spinner