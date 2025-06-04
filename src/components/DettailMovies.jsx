function DettailMovies ({ title, image, release_year, genre }) {
  return (
    <div className="bg-white shadow-md p-6 d-flex vw items-center max-w-xs">
        <div>
            <img
            src={"http://localhost:3001/image/"+image || "https://via.placeholder.com/160x240?text=No+Image"}
            alt={title || "Movie poster"}
            className="w-40 object-cover rounded mb-4"
            />
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 text-center">{genre}</p>
            <p className="text-gray-700 text-center">{release_year}</p>      
        </div>
    </div>
  ); 
}

export default DettailMovies;