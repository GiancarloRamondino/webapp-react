import { useParams, Link } from "react-router-dom";
import movies from '../assets/movie';
import MovieCard from '../components/MovieCard';

function MoviePage() {
  const { id } = useParams();
  const film = movies.find(m => m.id === Number(id));

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
      <MovieCard {...film} />
      <Link to="/" className="mt-4 underline text-blue-600">Torna alla Home</Link>
    </div>
  );
}

export default MoviePage;