
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import MovieInfo from "../components/MovieInfo"
import Poster from "../components/Poster"
import BackButton from "../components/BackButton"

const Details = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const imageBaseUrl = "https://image.tmdb.org/t/p/" //secure base url
  const backgroundImgSize = "w1280"
  const posterImgSize = "w185"

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [])


  return (
    <section
      style={{
        backgroundImage: `url(${imageBaseUrl + backgroundImgSize + movieDetails.backdrop_path})`,
      }}
      className="bg-auto bg-left-bottom bg-no-repeat h-screen w-screen overflow-hidden px-10"
    >
      <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_35%)]'>
      </div>


      <div className='absolute bottom-0 top-0 z-20 flex flex-col justify-between py-10'>
        <Link to={"/"} >
          <BackButton />
        </Link>
        <div>
          <Poster src={imageBaseUrl + posterImgSize + movieDetails.poster_path} />
          <MovieInfo
            title={movieDetails.title}
            score={(Math.round(movieDetails.vote_average * 10) / 10).toFixed(1)}
            desc={movieDetails.overview} />
        </div>
      </div>

    </section>
  )
}

export default Details
