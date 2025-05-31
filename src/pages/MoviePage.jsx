import Card from '../components/Card';

function MoviePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Movie Page</h1>
      <p className="text-lg text-gray-700 mb-6">This is the movie page content.</p>
      <Card
        title="Inception"
        description="A mind-bending thriller by Christopher Nolan."
        imageUrl="https://m.media-amazon.com/images/I/51s+8pQbKRL._AC_SY445_.jpg"
      />
    </div>
  );
}

export default MoviePage;