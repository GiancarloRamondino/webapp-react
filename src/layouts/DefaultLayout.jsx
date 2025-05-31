import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers';

const headersData = [
  { name: 'App', value: 'My Application' },
  { name: 'Anno', value: '2025' }
];

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <Headers />
      </header>
      <main className="flex-grow p-4">
        <Outlet /> {/* Qui verranno renderizzate le pagine */}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        My Application
      </footer>
    </div>
  );
}
export default DefaultLayout;