import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=21e056381e595e8e0c4659d4441ba746").then(response => response.json()).then(json => {
      setLoading(false);
      setMovies(json.results)
    })
  }, [])
  console.log(movies)
  return (
    <div>
      {loading ?
        <h1>Loading...</h1> :
        <ul className="movie-list">
          {
            movies.map((movie) => 
            <li key={movie.id}>
              <div className="movie-thumb"><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /></div>
              <h2 className="movie-title">{movie.title}</h2>
              <div className="movie-desc">
                <span>Released: {movie.release_date}</span>
                <span>★ {movie.vote_average}</span>
              </div>
            </li>)
          }
        </ul>
      }
      
    </div>
  )
}

export default App;
