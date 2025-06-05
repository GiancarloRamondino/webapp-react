import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

function Star({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    if (rating >= starValue) {
      // Stella piena
      return <FontAwesomeIcon key={index} icon={solidStar} className="text-yellow-500" />;
    } else if (rating >= starValue - 0.5) {
      // Mezza stella
      return <FontAwesomeIcon key={index} icon={faStarHalfAlt} className="text-yellow-500" />;
    } else {
      // Stella vuota
      return <FontAwesomeIcon key={index} icon={regularStar} className="text-yellow-500" />;
    }
  });

  return (
    <>
      {stars}
    </>
  );
}

export default Star;