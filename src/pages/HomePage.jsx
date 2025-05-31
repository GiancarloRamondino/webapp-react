import { Link } from "react-router-dom";
import movie from '../assets/movie';


function HomePage() {
  return (
    <>
      <div className="container d-flex wrap justify-content-center gap-4 p-4">
        {movie.map((movie) => {
          const { id, title, image, review } = movie;
          return (
            <Link key={id} className="flex col-4 column" to={`/movie/${id}`}>
              <div className="bg-white rounded-lg hcard shadow-md p-6 flex flex-col items-center max-w-xs">
                <img
                  src={image}
                  alt={title}
                  className="w-40 h-60 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 text-center">{review}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}


export default HomePage;