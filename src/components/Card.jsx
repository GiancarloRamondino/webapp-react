function Card({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center max-w-xs">
      <img
        src={imageUrl}
        alt={title}
        className="w-40 h-60 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
}

export default Card;