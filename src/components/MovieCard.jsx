function MovieCard({ title, image, release_year, genre }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center max-w-xs">
      <img
        src={"http://localhost:3001/image/"+image || "https://via.placeholder.com/160x240?text=No+Image"}
        alt={title || "Movie poster"}
        className="w-40 h-60 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-center">{genre}</p>
      <p className="text-gray-700 text-center">{release_year}</p>
    </div>
  );
}

export default MovieCard;