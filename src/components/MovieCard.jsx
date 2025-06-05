function MovieCard({ title, image, release_year, genre }) {
  return (
    <div className="bg-black rounded-lg shadow-md p-6 flex flex-col items-center max-w-xs card mt-10">
      <img
        src={"http://localhost:3001/image/"+image || "https://via.placeholder.com/160x240?text=No+Image"}
        alt={title || "Movie poster"}
        className="w-card object-cover rounded mb-4"
      />
      <h2 className="text-xl text-white font-bold mb-2 text-center">{title}</h2>
      <p className="text-gray-700 text-center">{genre}</p>
      <p className="text-gray-700 text-center">{release_year}</p>
    </div>
  );
}

export default MovieCard;