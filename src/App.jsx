import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviePage from './pages/MoviePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import HomePage from './pages/HomePage.jsx'
import  DefaultLayout  from './layouts/DefaultLayout.jsx'

function App() {
  // Questo è il componente principale che imposta il routing
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
