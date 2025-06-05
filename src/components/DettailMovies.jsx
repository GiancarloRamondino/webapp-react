import Star from "../components/Star.jsx";
import Review from "./Review.jsx";


function DettailMovies ({ title, image, release_year, genre, average_rating }) {
  return (
    <div className="bg-white shadow-md p-6 d-flex vw items-center max-w-xs">
        <div>
            <img
            src={image ? "http://localhost:3001/image/" + image : "https://via.placeholder.com/160x240?text=No+Image"}
            alt={title || "Movie poster"}
            className="w-dettail object-cover rounded mb-4"
            />
        </div>
        <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{genre}</p>
            <p className="text-gray-700">{release_year}</p> 
            <p className="text-gray-700 text-center d-flex">Valutazione: <Star rating={average_rating} /></p>
            <Review onAddReview={(review) => console.log(review)} />
        </div>
    </div>
  ); 
}

export default DettailMovies;