import Headers from '../components/Headers';
import './DefaultLayout.css'
import { Link, Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="flex flex-col vh vw">
      <header> 
        <Headers />
      </header>
      <main className="flex p-4 ">
        <Outlet /> {/* Qui verranno renderizzate le pagine */}         
      </main>
      <footer>
        My Application Footer
        <Link to="/"> Home </Link> 
      </footer>
    </div>
  );
}
export default DefaultLayout;