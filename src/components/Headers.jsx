// import MoviePage from '../pages/MoviePage';
import { Link } from 'react-router-dom';

function Headers({ headers }) {
  return (
    <div className="d-flex gap-2 justify-content-between">   
      <div className=" items-center gap-2">
        <span className="font-bold">FILM</span>
      </div>
      <div className="d-flex gap-2">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/movie">MoviePage</Link>
        </div>
      </div>     
    </div>
  );
}


export default Headers;