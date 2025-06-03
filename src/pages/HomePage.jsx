import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movies!", error);
      });
  }, []);
  

  return (
    <div className="container d-flex flex-wrap justify-content-center gap-4 p-4">
      {Array.isArray(movies) && movies.map((movie) => (
        <Link key={movie?.id} to={`/movie/${movie?.id}`} className="text-decoration-none">
          <MovieCard
            title={movie?.title || ""}
            genre={movie?.genre || ""}
            image={movie?.image || ""}
            release_year={movie?.release_year || ""}
          />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;