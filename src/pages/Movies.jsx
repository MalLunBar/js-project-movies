import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  //fetch api data
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies: ', error))
  }, [])

  return (
    <section>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.title} title={movie.title} releaseDate={movie.release_date} image={movie.poster_path} />
        )
        )}
      </div>
    </section>
  )
}

export default Movies