import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DettailMovies from '../components/DettailMovies';
import axios from "axios";


function MoviePage() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/api/movies/${id}`)
      .then(response => {
        setFilm(response.data);
        setLoading(false);
      })
      .catch(() => {
        setFilm(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Caricamento...</div>;
  }

  if (!film) {
    return (
      <div className="text-center mt-10">
        <h2>Film non trovato</h2>
        <Link to="/">Torna alla Home</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-100">
      <DettailMovies
        title={film.title}
        genre={film.genre}
        image={film.image}
        release_year={film.release_year}
        average_rating={film.average_rating}
      />   
      <Link to="/" className="mt-4 underline text-blue-600 p-6">Torna alla Home</Link>
    </div>
  );
}

export default MoviePage;