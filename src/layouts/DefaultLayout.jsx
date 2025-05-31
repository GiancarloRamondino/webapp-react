import Headers from '../components/Headers';
import './DefaultLayout.css'
import { Link, Outlet } from 'react-router-dom';

const headersData = [
  { name: 'App', value: 'My Application' },
  { name: 'Anno', value: '2025' }
];

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen vh vw">
      <header> 
        <Headers headers={headersData} />
      </header>
      <main className="flex-grow p-4">
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