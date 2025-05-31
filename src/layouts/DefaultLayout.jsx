import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers';
import './DefaultLayout.css'

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
        My Application Foooter
      </footer>
    </div>
  );
}
export default DefaultLayout;